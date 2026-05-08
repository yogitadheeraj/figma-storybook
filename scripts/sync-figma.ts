import "dotenv/config";
import axios from "axios";
import { writeJson, ensureDir } from "./utils";

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;
const ALLOWED_PAGE_REGEX = new RegExp(process.env.FIGMA_ALLOWED_PAGE_REGEX || ".*");
console.log(`🔍 Starting Figma sync for file ID: ${FIGMA_FILE_ID} with page filter: ${ALLOWED_PAGE_REGEX}`);
if (!FIGMA_TOKEN || !FIGMA_FILE_ID) {
  throw new Error("Missing FIGMA_TOKEN or FIGMA_FILE_ID in .env");
}

type FigmaNode = {
  id: string;
  name: string;
  type: string;
  absoluteBoundingBox?: { width: number; height: number };
  children?: FigmaNode[];
  fills?: Array<{ type?: string; color?: { r: number; g: number; b: number; a?: number } }>;
  style?: Record<string, unknown>;
};

type FigmaVariableAlias = {
  type: "VARIABLE_ALIAS";
  id: string;
};

type FigmaVariableValue =
  | string
  | number
  | boolean
  | null
  | { r: number; g: number; b: number; a?: number }
  | FigmaVariableAlias;

type FigmaVariable = {
  id: string;
  name: string;
  variableCollectionId?: string;
  resolvedType?: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR";
  valuesByMode?: Record<string, FigmaVariableValue>;
};

type FigmaVariableMode = {
  modeId: string;
  name: string;
};

type FigmaVariableCollection = {
  id: string;
  name: string;
  defaultModeId: string;
  modes: FigmaVariableMode[];
  variableIds?: string[];
};

type VariablesApiResponse = {
  meta?: {
    variableCollections?: Record<string, FigmaVariableCollection> | FigmaVariableCollection[];
    variables?: Record<string, FigmaVariable> | FigmaVariable[];
  };
};

type FundamentalModeTokens = {
  modeId: string;
  modeName: string;
  tokens: Record<string, string | number | boolean>;
};

type FundamentalCollection = {
  collectionId: string;
  collectionName: string;
  defaultModeId: string;
  modes: FundamentalModeTokens[];
};

type VariablesAllJson = {
  fileId: string;
  generatedAt: string;
  collectionCount: number;
  variableCount: number;
  collections: Array<{
    id: string;
    name: string;
    defaultModeId: string;
    modes: FigmaVariableMode[];
    variables: Array<{
      id: string;
      name: string;
      resolvedType: FigmaVariable["resolvedType"];
      valuesByMode: Record<string, string | number | boolean | null>;
    }>;
  }>;
};

type FoundationCatalog = {
  source: string;
  colors: {
    rampCount: number;
    stopsPerRamp: number;
    tokenCount: number;
  };
  typography: {
    tokenCount: number;
    scaleTokenCount: number;
    familyTokenCount: number;
  };
  spacing: {
    tokenCount: number;
  };
  radius: {
    tokenCount: number;
  };
  shadows: {
    tokenCount: number;
  };
  iconography: {
    tokenCount: number;
  };
};

type TokensCatalog = {
  components: string[];
  patterns: string[];
};

function flattenNodes(node: FigmaNode, pageName: string, output: any[] = []) {
  if (["FRAME", "COMPONENT", "INSTANCE", "COMPONENT_SET", "SECTION"].includes(node.type)) {
    output.push({
      pageName,
      nodeId: node.id,
      nodeName: node.name,
      nodeType: node.type,
      width: node.absoluteBoundingBox?.width,
      height: node.absoluteBoundingBox?.height
    });
  }

  node.children?.forEach((child) => flattenNodes(child, pageName, output));
  return output;
}

function extractTokens(document: FigmaNode, foundations?: FoundationCatalog | null, catalog?: TokensCatalog | null) {
  const colors = new Map<string, string>();

  function walk(node: FigmaNode) {
    node.fills?.forEach((fill) => {
      if (fill.type === "SOLID" && fill.color) {
        const r = Math.round(fill.color.r * 255);
        const g = Math.round(fill.color.g * 255);
        const b = Math.round(fill.color.b * 255);
        const hex = `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
        colors.set(hex, hex);
      }
    });

    node.children?.forEach(walk);
  }

  walk(document);

  return {
    colors: Array.from(colors.values()),
    foundations: foundations || undefined,
    catalog: catalog || undefined,
    generatedAt: new Date().toISOString()
  };
}

function cleanName(name: string) {
  return name
    .replace(/\s+/g, " ")
    .replace(/[|:]+/g, " ")
    .trim();
}

function toTitleCase(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function buildTokensCatalogFromPages(pages: Array<{ pageName: string; nodes: Array<{ nodeName: string; nodeType: string }> }>): TokensCatalog {
  const components = new Set<string>();
  const patterns = new Set<string>();

  const patternKeywords: Array<{ re: RegExp; label: string }> = [
    { re: /form/i, label: "Form" },
    { re: /empty/i, label: "Empty State" },
    { re: /stat/i, label: "Stat Card" },
    { re: /pricing/i, label: "Pricing" },
    { re: /checkout|payment/i, label: "Checkout" },
    { re: /hero/i, label: "Hero" },
    { re: /dashboard/i, label: "Dashboard" },
    { re: /onboarding/i, label: "Onboarding" }
  ];

  pages.forEach((page) => {
    const pageText = `${page.pageName} ${page.nodes.map((node) => node.nodeName).join(" ")}`;

    patternKeywords.forEach(({ re, label }) => {
      if (re.test(pageText)) patterns.add(label);
    });

    page.nodes.forEach((node) => {
      if (["COMPONENT", "COMPONENT_SET", "INSTANCE"].includes(node.nodeType)) {
        const normalized = cleanName(node.nodeName.split("/")[0]);
        if (normalized) components.add(toTitleCase(normalized));
      }
    });
  });

  return {
    components: Array.from(components).sort((a, b) => a.localeCompare(b)),
    patterns: Array.from(patterns).sort((a, b) => a.localeCompare(b))
  };
}

function median(values: number[]) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return Math.round((sorted[middle - 1] + sorted[middle]) / 2);
  }
  return sorted[middle];
}

function buildFoundationCatalog(variablesData: VariablesApiResponse): FoundationCatalog {
  const variablesById = normalizeMap<FigmaVariable>(variablesData.meta?.variables);
  const variables = Object.values(variablesById);

  const twoLevelColorRamps = new Map<string, Set<string>>();
  variables.forEach((variable) => {
    const segments = variable.name.split("/");
    if (segments[0]?.toLowerCase() === "color" && segments.length === 3) {
      const ramp = segments[1].toLowerCase();
      const stop = segments[2].toLowerCase();
      if (!twoLevelColorRamps.has(ramp)) twoLevelColorRamps.set(ramp, new Set());
      twoLevelColorRamps.get(ramp)?.add(stop);
    }
  });

  const colorVariables = variables.filter(
    (variable) => variable.resolvedType === "COLOR" || /^color\//i.test(variable.name)
  );
  const typographyVariables = variables.filter((variable) => /^typography\//i.test(variable.name));
  const spacingVariables = variables.filter((variable) => /^spacing\//i.test(variable.name));
  const radiusVariables = variables.filter((variable) => /^radius\//i.test(variable.name));
  const shadowVariables = variables.filter((variable) => /^(shadow|shadows|elevation)\//i.test(variable.name));
  const iconographyVariables = variables.filter((variable) => /^(icon|iconography)\//i.test(variable.name));

  const rampStopCounts = Array.from(twoLevelColorRamps.values()).map((stops) => stops.size);

  return {
    source: "variables/local",
    colors: {
      rampCount: twoLevelColorRamps.size,
      stopsPerRamp: median(rampStopCounts),
      tokenCount: colorVariables.length
    },
    typography: {
      tokenCount: typographyVariables.length,
      scaleTokenCount: typographyVariables.filter((variable) => /\/(size|lineheight|letterspacing)$/i.test(variable.name)).length,
      familyTokenCount: typographyVariables.filter((variable) => /\/family$/i.test(variable.name)).length
    },
    spacing: {
      tokenCount: spacingVariables.length
    },
    radius: {
      tokenCount: radiusVariables.length
    },
    shadows: {
      tokenCount: shadowVariables.length
    },
    iconography: {
      tokenCount: iconographyVariables.length
    }
  };
}

function normalizeMap<T extends { id: string }>(source: Record<string, T> | T[] | undefined): Record<string, T> {
  if (!source) return {};
  if (Array.isArray(source)) {
    return source.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {} as Record<string, T>);
  }
  return source;
}

function toCssColor(value: { r: number; g: number; b: number; a?: number }) {
  const r = Math.round(value.r * 255);
  const g = Math.round(value.g * 255);
  const b = Math.round(value.b * 255);
  const a = value.a ?? 1;
  if (a >= 1) {
    return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`.toLowerCase();
  }
  return `rgba(${r}, ${g}, ${b}, ${Number(a.toFixed(3))})`;
}

function isAlias(value: unknown): value is FigmaVariableAlias {
  return !!value && typeof value === "object" && (value as FigmaVariableAlias).type === "VARIABLE_ALIAS";
}

function isColorValue(value: unknown): value is { r: number; g: number; b: number; a?: number } {
  if (!value || typeof value !== "object") return false;
  const c = value as { r?: number; g?: number; b?: number; a?: number };
  return typeof c.r === "number" && typeof c.g === "number" && typeof c.b === "number";
}

function resolveVariableValue(
  variableId: string,
  modeId: string,
  variablesById: Record<string, FigmaVariable>,
  seen: Set<string> = new Set()
): string | number | boolean | null {
  const visitedKey = `${variableId}:${modeId}`;
  if (seen.has(visitedKey)) return null;
  seen.add(visitedKey);

  const variable = variablesById[variableId];
  if (!variable) return null;

  const raw = variable.valuesByMode?.[modeId] ?? Object.values(variable.valuesByMode || {})[0] ?? null;

  if (isAlias(raw)) {
    return resolveVariableValue(raw.id, modeId, variablesById, seen);
  }
  if (isColorValue(raw)) {
    return toCssColor(raw);
  }
  if (typeof raw === "string" || typeof raw === "number" || typeof raw === "boolean") {
    return raw;
  }

  return null;
}

function buildFundamentalTokens(variablesData: VariablesApiResponse) {
  const collectionsById = normalizeMap<FigmaVariableCollection>(variablesData.meta?.variableCollections);
  const variablesById = normalizeMap<FigmaVariable>(variablesData.meta?.variables);

  const collections: FundamentalCollection[] = Object.values(collectionsById).map((collection) => {
    const variableIds = collection.variableIds?.length
      ? collection.variableIds
      : Object.values(variablesById)
          .filter((variable) => variable.variableCollectionId === collection.id)
          .map((variable) => variable.id);

    const modes: FundamentalModeTokens[] = collection.modes.map((mode) => {
      const tokens: Record<string, string | number | boolean> = {};

      variableIds.forEach((variableId) => {
        const variable = variablesById[variableId];
        if (!variable?.name) return;
        const resolved = resolveVariableValue(variableId, mode.modeId, variablesById);
        if (resolved !== null) {
          tokens[variable.name] = resolved;
        }
      });

      return {
        modeId: mode.modeId,
        modeName: mode.name,
        tokens
      };
    });

    return {
      collectionId: collection.id,
      collectionName: collection.name,
      defaultModeId: collection.defaultModeId,
      modes
    };
  });

  const toBrandKey = (name: string) =>
    name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "default";

  const brands: Record<string, { collectionName: string; modeName: string; tokens: Record<string, string | number | boolean> }> = {};
  const semanticCollection =
    collections.find((collection) => collection.collectionName.toLowerCase() === "semantic") ||
    collections.find((collection) => collection.collectionName.toLowerCase().includes("semantic"));

  const sourceCollection = semanticCollection || collections[0];

  if (sourceCollection) {
    sourceCollection.modes.forEach((mode) => {
      const brandKey = toBrandKey(mode.modeName);
      brands[brandKey] = {
        collectionName: sourceCollection.collectionName,
        modeName: mode.modeName,
        tokens: mode.tokens
      };
    });
  }

  return {
    collections,
    brands,
    collectionCount: collections.length
  };
}

function buildAllVariablesJson(fileId: string, variablesData: VariablesApiResponse): VariablesAllJson {
  const collectionsById = normalizeMap<FigmaVariableCollection>(variablesData.meta?.variableCollections);
  const variablesById = normalizeMap<FigmaVariable>(variablesData.meta?.variables);

  const collections = Object.values(collectionsById).map((collection) => {
    const variableIds = collection.variableIds?.length
      ? collection.variableIds
      : Object.values(variablesById)
          .filter((variable) => variable.variableCollectionId === collection.id)
          .map((variable) => variable.id);

    const variables = variableIds
      .map((variableId) => variablesById[variableId])
      .filter((variable): variable is FigmaVariable => Boolean(variable))
      .map((variable) => {
        const valuesByMode: Record<string, string | number | boolean | null> = {};

        collection.modes.forEach((mode) => {
          valuesByMode[mode.modeId] = resolveVariableValue(variable.id, mode.modeId, variablesById);
        });

        return {
          id: variable.id,
          name: variable.name,
          resolvedType: variable.resolvedType,
          valuesByMode
        };
      });

    return {
      id: collection.id,
      name: collection.name,
      defaultModeId: collection.defaultModeId,
      modes: collection.modes,
      variables
    };
  });

  return {
    fileId,
    generatedAt: new Date().toISOString(),
    collectionCount: collections.length,
    variableCount: collections.reduce((sum, collection) => sum + collection.variables.length, 0),
    collections
  };
}

async function fetchWithRetry(url: string, headers: Record<string, string>, maxRetries = 5) {
  let delay = 2000;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await axios.get(url, { headers });
    } catch (err: any) {
      const status = err?.response?.status;
      const retryAfter = err?.response?.headers?.["retry-after"];
      if (status === 429 && attempt < maxRetries) {
        const waitMs = retryAfter ? parseInt(retryAfter, 10) * 1000 : delay;
        console.warn(`⚠️  Rate limited (429). Waiting ${waitMs / 1000}s before retry ${attempt}/${maxRetries - 1}…`);
        await new Promise((res) => setTimeout(res, waitMs));
        delay = Math.min(delay * 2, 60000);
      } else {
        throw err;
      }
    }
  }
  throw new Error("Max retries exceeded");
}

async function main() {
  ensureDir("figma-cache");
  ensureDir("audit");

  const response = await fetchWithRetry(
    `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`,
    { "X-Figma-Token": FIGMA_TOKEN! }
  );

  const file = response.data;
  writeJson("figma-cache/file.json", file);

  let fundamentalTokens: ReturnType<typeof buildFundamentalTokens> = {
    collections: [],
    brands: {},
    collectionCount: 0
  };
  let foundations: FoundationCatalog | null = null;

  try {
    const variablesResponse = await fetchWithRetry(
      `https://api.figma.com/v1/files/${FIGMA_FILE_ID}/variables/local`,
      { "X-Figma-Token": FIGMA_TOKEN! }
    );
    const variablesData = variablesResponse.data as VariablesApiResponse;
    fundamentalTokens = buildFundamentalTokens(variablesData);
    foundations = buildFoundationCatalog(variablesData);
    writeJson("figma-cache/variables-local.json", {
      fileId: FIGMA_FILE_ID,
      generatedAt: new Date().toISOString(),
      ...variablesData
    });
    writeJson("figma-cache/variables-all.json", buildAllVariablesJson(FIGMA_FILE_ID!, variablesData));
    writeJson("figma-cache/fundamental-tokens.json", {
      fileId: FIGMA_FILE_ID,
      generatedAt: new Date().toISOString(),
      ...fundamentalTokens
    });
    writeJson("figma-cache/brand-tokens.json", {
      fileId: FIGMA_FILE_ID,
      generatedAt: new Date().toISOString(),
      brands: fundamentalTokens.brands
    });
  } catch (error: any) {
    console.warn("⚠️  Could not fetch variables/local from Figma API. Continuing with color extraction only.");
    if (error?.message) {
      console.warn(`⚠️  variables/local error: ${error.message}`);
    }
  }

  const pages = file.document.children
    .filter((page: FigmaNode) => ALLOWED_PAGE_REGEX.test(page.name))
    .map((page: FigmaNode) => ({
      pageName: page.name,
      nodes: page.children?.flatMap((node) => flattenNodes(node, page.name)) || []
    }));

  const catalog = buildTokensCatalogFromPages(pages);

  writeJson("figma-cache/pages.json", pages);
  writeJson("figma-cache/tokens.json", extractTokens(file.document, foundations, catalog));

  writeJson(`audit/sync-${Date.now()}.json`, {
    fileId: FIGMA_FILE_ID,
    pageCount: pages.length,
    nodeCount: pages.reduce((sum: number, page: { nodes: unknown[] }) => sum + page.nodes.length, 0),
    tokenCollectionCount: fundamentalTokens.collectionCount,
    generatedAt: new Date().toISOString()
  });

  console.log(`✅ Synced ${pages.length} pages from Figma (${fundamentalTokens.collectionCount} token collections)`);
}

main().catch((error) => {
  console.error("❌ Figma sync failed:", error.message);
  process.exit(1);
});
