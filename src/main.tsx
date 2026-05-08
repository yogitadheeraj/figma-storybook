
import ReactDOM from "react-dom/client";
import "./styles.css";
import React, { useEffect, useMemo, useState } from "react";
import {
  Figma,
  Palette,
  Type,
  Layers,
  MonitorSmartphone,
  CheckCircle2,
  RefreshCw,
  BookOpen,
  Building2,
  KeyRound,
  FileCode2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

type FigmaPreviewNode = {
  pageName: string;
  nodeId: string;
  nodeName: string;
  nodeType: string;
  width?: number;
  height?: number;
};

type FigmaPage = {
  id: string;
  name: string;
  type: string;
  status: string;
  updated: string;
  nodes: FigmaPreviewNode[];
};

type FigmaPagesApiResponse = {
  ok: boolean;
  message?: string;
  pages?: Array<{
    id: string;
    name: string;
    type: string;
    nodes?: FigmaPreviewNode[];
  }>;
};

const API_BASE_URL = "http://localhost:5050";

type FigmaApiNode = {
  id: string;
  name: string;
  type: string;
  absoluteBoundingBox?: { width: number; height: number };
  fills?: Array<{ type?: string; color?: { r: number; g: number; b: number; a?: number } }>;
  children?: FigmaApiNode[];
};

type FigmaApiFileResponse = {
  document?: {
    children?: FigmaApiNode[];
  };
};

function flattenNodes(node: FigmaApiNode, pageName: string, output: FigmaPreviewNode[] = []) {
  if (["FRAME", "COMPONENT", "INSTANCE", "COMPONENT_SET", "SECTION", "TEXT"].includes(node.type)) {
    output.push({
      pageName,
      nodeId: node.id,
      nodeName: node.name,
      nodeType: node.type,
      width: node.absoluteBoundingBox?.width,
      height: node.absoluteBoundingBox?.height,
    });
  }

  node.children?.forEach((child) => flattenNodes(child, pageName, output));
  return output;
}

function toHex(r: number, g: number, b: number) {
  return `#${[r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;
}

function extractColorsFromDocument(document?: { children?: FigmaApiNode[] }) {
  if (!document?.children?.length) return [] as string[];
  const colors = new Set<string>();

  const walk = (node: FigmaApiNode) => {
    node.fills?.forEach((fill) => {
      if (fill.type === "SOLID" && fill.color) {
        const hex = toHex(fill.color.r * 255, fill.color.g * 255, fill.color.b * 255).toLowerCase();
        colors.add(hex);
      }
    });
    node.children?.forEach(walk);
  };

  document.children.forEach(walk);
  return Array.from(colors.values());
}

function luminance(hex: string) {
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!match) return 0;
  const v = parseInt(match[1], 16);
  const r = ((v >> 16) & 255) / 255;
  const g = ((v >> 8) & 255) / 255;
  const b = (v & 255) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

type SemanticTokens = {
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  surfaceSubtle: string;
  onSurface: string;
  onSurfaceMuted: string;
  border: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  focus: string;
  onPrimary: string;
};

type FundamentalTokenFile = {
  brands?: Record<
    string,
    {
      collectionName: string;
      modeName: string;
      tokens: Record<string, string | number | boolean>;
    }
  >;
};

type TokenCacheFile = {
  colors?: string[];
  catalog?: {
    components?: string[];
    patterns?: string[];
  };
};

function pickOrFallback(colors: string[], preferred: string[], fallback: string) {
  const found = preferred.find((token) => colors.includes(token));
  return found || fallback;
}

function buildSemanticTokens(colors: string[], fallback: { primary: string; secondary: string; accent: string }): SemanticTokens {
  const normalized = colors.map((c) => c.toLowerCase());
  const sortedByLight = [...normalized].sort((a, b) => luminance(a) - luminance(b));

  const primary = pickOrFallback(normalized, ["#005baa", "#025fea", "#111827", "#003057", "#d71920"], fallback.primary);
  const secondary = pickOrFallback(normalized, ["#edf0f5", "#e0f2fe", "#fee2e2", "#e5e7eb", "#f7f9fc"], fallback.secondary);
  const accent = pickOrFallback(normalized, ["#ef4100", "#6b7280", "#7f1d1d", "#0369a1"], fallback.accent);
  const info = pickOrFallback(normalized, ["#00aeef", "#025fea", "#005baa"], primary);

  return {
    primary,
    secondary,
    accent,
    surface: sortedByLight[Math.max(0, Math.floor(sortedByLight.length * 0.94))] || "#ffffff",
    surfaceSubtle: sortedByLight[Math.max(0, Math.floor(sortedByLight.length * 0.86))] || secondary,
    onSurface: sortedByLight[Math.min(sortedByLight.length - 1, 1)] || "#1a1a1a",
    onSurfaceMuted: sortedByLight[Math.max(0, Math.floor(sortedByLight.length * 0.35))] || accent,
    border: sortedByLight[Math.max(0, Math.floor(sortedByLight.length * 0.5))] || "#d8d8d8",
    success: pickOrFallback(normalized, ["#06c655", "#10cd65", "#059944"], "#06c655"),
    warning: pickOrFallback(normalized, ["#ffc61a", "#ffca1a", "#ffcf33"], "#ffc61a"),
    error: pickOrFallback(normalized, ["#d60008", "#e22530", "#a8000a"], "#d60008"),
    info,
    focus: info,
    onPrimary: luminance(primary) < 0.5 ? "#ffffff" : "#1a1a1a"
  };
}

function buildSemanticTokensFromFundamental(
  tokenMap: Record<string, string | number | boolean>,
  fallback: SemanticTokens
): SemanticTokens {
  const entries = Object.entries(tokenMap).filter(([, value]) => typeof value === "string");

  const pick = (patterns: RegExp[], defaultValue: string) => {
    const found = entries.find(([name, value]) =>
      patterns.some((pattern) => pattern.test(name.toLowerCase())) && /^#([0-9a-f]{6})$/i.test(String(value))
    );
    return (found?.[1] as string | undefined) || defaultValue;
  };

  const primary = pick([/brand\/primary\/base/, /primary\/base/, /primary/], fallback.primary);
  const secondary = pick([/brand\/secondary\/base/, /secondary/], fallback.secondary);
  const accent = pick([/brand\/accent\/base/, /accent/, /tertiary/], fallback.accent);
  const surface = pick([/surface\/default/, /surface\/base/, /surface/], fallback.surface);
  const surfaceSubtle = pick([/surface\/subtle/, /subtle/], fallback.surfaceSubtle);
  const onSurface = pick([/on-surface\/default/, /on_surface/, /text\/default/], fallback.onSurface);
  const onSurfaceMuted = pick([/on-surface\/subtle/, /muted/, /text\/subtle/], fallback.onSurfaceMuted);
  const border = pick([/border\/default/, /border/], fallback.border);
  const success = pick([/feedback\/positive\/graphic/, /success/], fallback.success);
  const warning = pick([/feedback\/warning\/graphic/, /warning/], fallback.warning);
  const error = pick([/feedback\/negative\/graphic/, /error/, /negative/], fallback.error);
  const info = pick([/feedback\/info\/graphic/, /info/], fallback.info);
  const focus = pick([/focus/, /outline/], fallback.focus);
  const onPrimary = pick([/on-brand\/primary/, /on_primary/], luminance(primary) < 0.5 ? "#ffffff" : "#1a1a1a");

  return {
    primary,
    secondary,
    accent,
    surface,
    surfaceSubtle,
    onSurface,
    onSurfaceMuted,
    border,
    success,
    warning,
    error,
    info,
    focus,
    onPrimary
  };
}

const brands = {
  polestar: {
    name: "Polestar",
    primary: "#111827",
    secondary: "#E5E7EB",
    accent: "#6B7280",
    font: "Inter",
    radius: "rounded-xl",
  },
  byd: {
    name: "BYD",
    primary: "#D71920",
    secondary: "#FEE2E2",
    accent: "#7F1D1D",
    font: "Arial",
    radius: "rounded-2xl",
  },
  volvo: {
    name: "Volvo",
    primary: "#003057",
    secondary: "#E0F2FE",
    accent: "#0369A1",
    font: "Georgia",
    radius: "rounded-lg",
  },
};

type BrandTheme = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  font: string;
  radius: string;
};

const fallbackBrands: Record<string, BrandTheme> = brands;

function humanizeBrandKey(key: string) {
  if (!key) return "Default";
  return key
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildBrandTheme(key: string, tokenMap?: Record<string, string | number | boolean>): BrandTheme {
  const base =
    fallbackBrands[key] ||
    fallbackBrands.polestar || {
      name: humanizeBrandKey(key),
      primary: "#111827",
      secondary: "#e5e7eb",
      accent: "#6b7280",
      font: "Inter",
      radius: "rounded-xl"
    };

  const tokenFont = Object.entries(tokenMap || {}).find(
    ([name, value]) => /typography\/family/i.test(name) && typeof value === "string"
  )?.[1] as string | undefined;

  return {
    ...base,
    name: base.name || humanizeBrandKey(key),
    font: tokenFont || base.font
  };
}

const demoFigmaPages = [
  {
    id: "0:1",
    name: "Home Page",
    type: "PAGE",
    status: "Synced",
    updated: "Live demo data",
    nodes: [
      { pageName: "Home Page", nodeId: "0:1:1", nodeName: "Hero Banner", nodeType: "FRAME" },
      { pageName: "Home Page", nodeId: "0:1:2", nodeName: "Primary CTA", nodeType: "INSTANCE" },
      { pageName: "Home Page", nodeId: "0:1:3", nodeName: "Vehicle Card", nodeType: "COMPONENT" },
    ],
  },
  {
    id: "0:2",
    name: "Vehicle Listing",
    type: "PAGE",
    status: "Review",
    updated: "Live demo data",
    nodes: [
      { pageName: "Vehicle Listing", nodeId: "0:2:1", nodeName: "Filter Panel", nodeType: "FRAME" },
      { pageName: "Vehicle Listing", nodeId: "0:2:2", nodeName: "Vehicle Grid", nodeType: "FRAME" },
      { pageName: "Vehicle Listing", nodeId: "0:2:3", nodeName: "Dealer Card", nodeType: "COMPONENT" },
    ],
  },
  {
    id: "0:3",
    name: "Discover Model",
    type: "PAGE",
    status: "Synced",
    updated: "Live demo data",
    nodes: [
      { pageName: "Discover Model", nodeId: "0:3:1", nodeName: "Model Hero", nodeType: "FRAME" },
      { pageName: "Discover Model", nodeId: "0:3:2", nodeName: "Specification Tabs", nodeType: "COMPONENT_SET" },
      { pageName: "Discover Model", nodeId: "0:3:3", nodeName: "Lead Form", nodeType: "FRAME" },
    ],
  },
  {
    id: "0:4",
    name: "Thank You Page",
    type: "PAGE",
    status: "Pending",
    updated: "Live demo data",
    nodes: [
      { pageName: "Thank You Page", nodeId: "0:4:1", nodeName: "Confirmation Card", nodeType: "FRAME" },
      { pageName: "Thank You Page", nodeId: "0:4:2", nodeName: "Next Steps", nodeType: "FRAME" },
      { pageName: "Thank You Page", nodeId: "0:4:3", nodeName: "Back CTA", nodeType: "INSTANCE" },
    ],
  },
] as FigmaPage[];

function deriveCatalogFromPages(pages: FigmaPage[]) {
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
    { re: /onboarding/i, label: "Onboarding" },
  ];

  pages.forEach((page) => {
    const text = `${page.name} ${page.nodes.map((node) => node.nodeName).join(" ")}`;
    patternKeywords.forEach(({ re, label }) => {
      if (re.test(text)) patterns.add(label);
    });

    page.nodes.forEach((node) => {
      if (["COMPONENT", "COMPONENT_SET", "INSTANCE"].includes(node.nodeType)) {
        const base = node.nodeName.split("/")[0].trim();
        if (base) components.add(base);
      }
    });
  });

  return {
    components: Array.from(components).sort((a, b) => a.localeCompare(b)),
    patterns: Array.from(patterns).sort((a, b) => a.localeCompare(b)),
  };
}

function StorybookFigmaBrandPortal() {
  const initialCatalog = deriveCatalogFromPages(demoFigmaPages);
  const [brandKey, setBrandKey] = useState<string>("polestar");
  const [mode, setMode] = useState("light");
  const [viewport, setViewport] = useState("desktop");
  const [figmaFileKey, setFigmaFileKey] = useState("abc123-demo-file-key");
  const [figmaToken, setFigmaToken] = useState("figd_xxxxxxxxx_demo");
  const [syncState, setSyncState] = useState("idle");
  const [syncMessage, setSyncMessage] = useState("");
  const [runSyncState, setRunSyncState] = useState("idle");
  const [runSyncMessage, setRunSyncMessage] = useState("");
  const [figmaPages, setFigmaPages] = useState<FigmaPage[]>(demoFigmaPages);
  const [selectedPage, setSelectedPage] = useState<FigmaPage | undefined>(demoFigmaPages[0]);
  const [tokenColors, setTokenColors] = useState<string[]>([]);
  const [catalogComponents, setCatalogComponents] = useState<string[]>(initialCatalog.components);
  const [catalogPatterns, setCatalogPatterns] = useState<string[]>(initialCatalog.patterns);
  const [fundamentalByBrand, setFundamentalByBrand] = useState<FundamentalTokenFile["brands"]>({});

  const availableBrandKeys = useMemo(() => {
    const dynamicKeys = Object.keys(fundamentalByBrand || {});
    return dynamicKeys.length > 0 ? dynamicKeys : Object.keys(fallbackBrands);
  }, [fundamentalByBrand]);

  useEffect(() => {
    if (availableBrandKeys.length === 0) return;
    if (!availableBrandKeys.includes(brandKey)) {
      setBrandKey(availableBrandKeys[0]);
    }
  }, [availableBrandKeys, brandKey]);

  const brandTokenMap = fundamentalByBrand?.[brandKey]?.tokens;
  const brand = useMemo(() => buildBrandTheme(brandKey, brandTokenMap), [brandKey, brandTokenMap]);

  const containerClass = useMemo(() => {
    return mode === "dark" ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900";
  }, [mode]);

  const colorFallbackTokens = useMemo(() => buildSemanticTokens(tokenColors, brand), [tokenColors, brand]);

  const semanticTokens = useMemo(() => {
    const tokenMap = brandTokenMap;
    if (tokenMap && Object.keys(tokenMap).length > 0) {
      return buildSemanticTokensFromFundamental(tokenMap, colorFallbackTokens);
    }
    return colorFallbackTokens;
  }, [brandTokenMap, colorFallbackTokens]);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      import("../figma-cache/tokens.json").catch(() => null),
      fetch("/figma-cache/fundamental-tokens.json").then((res) => (res.ok ? res.json() : null)).catch(() => null),
      fetch("/figma-cache/brand-tokens.json").then((res) => (res.ok ? res.json() : null)).catch(() => null),
    ])
      .then((m) => {
        if (!mounted) return;
        const tokenFile = m[0] ? (((m[0] as any).default ?? m[0]) as TokenCacheFile) : null;
        const fundamentalFile = (m[1] as FundamentalTokenFile | null) ?? null;
        const brandTokenFile = (m[2] as { brands?: FundamentalTokenFile["brands"] } | null) ?? null;

        setFundamentalByBrand(fundamentalFile?.brands || brandTokenFile?.brands || {});
        setTokenColors(tokenFile?.colors || []);
        setCatalogComponents(tokenFile?.catalog?.components || []);
        setCatalogPatterns(tokenFile?.catalog?.patterns || []);
      })
      .catch(() => {
        if (!mounted) return;
        setTokenColors([]);
        setCatalogComponents([]);
        setCatalogPatterns([]);
        setFundamentalByBrand({});
      });

    return () => {
      mounted = false;
    };
  }, []);

  const viewportClass = {
    desktop: "max-w-full",
    tablet: "max-w-3xl",
    mobile: "max-w-sm",
  }[viewport];

  const handleFigmaSync = async () => {
    setSyncState("syncing");
    setSyncMessage("");

    try {
      const fileKey = figmaFileKey?.trim();
      const token = figmaToken?.trim();

      if (!fileKey || !token) {
        throw new Error("Missing Figma file key or token");
      }

      const response = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
        method: "GET",
        headers: {
          "X-Figma-Token": token,
        },
      });

      const data = (await response.json()) as FigmaApiFileResponse;
      if (!response.ok) {
        throw new Error("Failed to fetch Figma pages directly from API");
      }

      const pages: FigmaPage[] = (data.document?.children || []).map((page) => ({
        id: page.id,
        name: page.name,
        type: page.type,
        status: "Synced",
        updated: "Live Figma API (client)",
        nodes: page.children?.flatMap((node) => flattenNodes(node, page.name)) || [],
      }));

      const colors = extractColorsFromDocument(data.document);

      setFigmaPages(pages);
      setSelectedPage(pages[0]);
      setTokenColors(colors);
      const derivedCatalog = deriveCatalogFromPages(pages);
      setCatalogComponents(derivedCatalog.components);
      setCatalogPatterns(derivedCatalog.patterns);
      setSyncState("synced");
      setSyncMessage(`Fetched ${pages.length} page(s) and ${colors.length} token colors from Figma API`);
    } catch (error: any) {
      setSyncState("error");
      setSyncMessage(error?.message || "Figma sync failed");
      setFigmaPages(demoFigmaPages);
      setSelectedPage(demoFigmaPages[0]);
      const derivedCatalog = deriveCatalogFromPages(demoFigmaPages);
      setCatalogComponents(derivedCatalog.components);
      setCatalogPatterns(derivedCatalog.patterns);
    }
  };

  const handleEnterpriseSync = async () => {
    setRunSyncState("running");
    setRunSyncMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/figma/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = (await response.json()) as { ok: boolean; message?: string; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || data.message || "Enterprise sync failed");
      }

      setRunSyncState("done");
      setRunSyncMessage("Enterprise sync completed. Stories regenerated.");

      // Refresh live page list after sync.
      await handleFigmaSync();
    } catch (error: any) {
      setRunSyncState("error");
      setRunSyncMessage(error?.message || "Enterprise sync failed");
    }
  };

  return (
    <div className={`min-h-screen ${containerClass}`} style={{ fontFamily: brand.font }}>
      <header className="sticky top-0 z-20 border-b border-slate-200/20 bg-white/80 backdrop-blur dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg" style={{ backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary }}>
              <BookOpen size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold">Brand Storybook Portal</h1>
              <p className="text-sm text-slate-500">Live Figma sync + multi-brand React design system</p>
            </div>
          </div>

          <button
            onClick={handleFigmaSync}
            className="hidden items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-md md:flex"
            style={{ backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary }}
          >
            <RefreshCw size={16} className={syncState === "syncing" ? "animate-spin" : ""} />
            {syncState === "syncing" ? "Syncing..." : "Sync Figma"}
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-5 py-6 lg:grid-cols-[300px_1fr]">
        <aside className="space-y-5">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <Figma size={18} /> Figma Connection
            </div>

            <label className="mb-2 block text-xs font-semibold text-slate-500">Figma File Key</label>
            <div className="mb-3 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700">
              <FileCode2 size={16} className="text-slate-400" />
              <input
                value={figmaFileKey}
                onChange={(e) => setFigmaFileKey(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Paste Figma file key"
              />
            </div>

            <label className="mb-2 block text-xs font-semibold text-slate-500">Figma Token</label>
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700">
              <KeyRound size={16} className="text-slate-400" />
              <input
                value={figmaToken}
                onChange={(e) => setFigmaToken(e.target.value)}
                type="password"
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Use backend in production"
              />
            </div>

            <button
              onClick={handleFigmaSync}
              className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-md"
              style={{ backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary }}
            >
              <RefreshCw size={16} className={syncState === "syncing" ? "animate-spin" : ""} />
              {syncState === "syncing" ? "Syncing..." : "Fetch Figma Pages"}
            </button>

            <button
              onClick={handleEnterpriseSync}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            >
              <RefreshCw size={16} className={runSyncState === "running" ? "animate-spin" : ""} />
              {runSyncState === "running" ? "Running enterprise:sync..." : "Run Enterprise Sync"}
            </button>

            {runSyncMessage && (
              <p className={`mt-2 text-xs ${runSyncState === "error" ? "text-rose-500" : "text-emerald-600"}`}>
                {runSyncMessage}
              </p>
            )}

            <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck size={15} /> Recommended
              </div>
              Keep Figma token on Node.js backend, not inside React browser code.
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <Building2 size={18} /> Brand
            </div>
            <select
              value={brandKey}
              onChange={(e) => setBrandKey(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm outline-none dark:border-slate-700"
            >
              {availableBrandKeys.map((key) => (
                <option key={key} value={key}>
                  {fundamentalByBrand?.[key]?.modeName || fallbackBrands[key]?.name || humanizeBrandKey(key)}
                </option>
              ))}
            </select>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <Palette size={18} /> Theme Mode
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["light", "dark"].map((item) => (
                <button
                  key={item}
                  onClick={() => setMode(item)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium capitalize ${
                    mode === item ? "text-white" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                  style={mode === item ? { backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary } : {}}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <MonitorSmartphone size={18} /> Preview
            </div>
            <div className="space-y-2">
              {["desktop", "tablet", "mobile"].map((item) => (
                <button
                  key={item}
                  onClick={() => setViewport(item)}
                  className={`w-full rounded-xl px-3 py-2 text-left text-sm font-medium capitalize ${
                    viewport === item ? "text-white" : "bg-slate-100 dark:bg-slate-800"
                  }`}
                  style={viewport === item ? { backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary } : {}}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>
        </aside>

        <section className="space-y-6">
          <div className="grid gap-5 md:grid-cols-4">
            {[
              { label: "Figma Pages", value: figmaPages.length, icon: Figma },
              { label: "Components", value: catalogComponents.length, icon: Layers },
              { label: "Brands", value: availableBrandKeys.length, icon: Palette },
              { label: "Patterns", value: catalogPatterns.length, icon: Type },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary }}>
                    <Icon size={18} />
                  </div>
                  <p className="text-2xl font-bold">{card.value}</p>
                  <p className="text-sm text-slate-500">{card.label}</p>
                </div>
              );
            })}
          </div>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold">Live Figma Pages</h2>
                <p className="text-sm text-slate-500">Fetch page-wise nodes and convert them into Storybook review items.</p>
              </div>
              <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary }}>
                {syncState === "synced" ? "Synced from Figma" : syncState === "error" ? "Sync Error" : "Demo Preview"}
              </span>
            </div>

            {syncMessage && (
              <p className={`mb-4 text-sm ${syncState === "error" ? "text-rose-500" : "text-emerald-600"}`}>
                {syncMessage}
              </p>
            )}

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {figmaPages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setSelectedPage(page)}
                  className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
                    selectedPage?.id === page.id
                      ? "border-transparent text-white"
                      : "border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
                  }`}
                  style={selectedPage?.id === page.id ? { backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary } : {}}
                >
                  <p className="text-xs opacity-70">{page.type} / {page.id}</p>
                  <p className="mt-1 font-bold">{page.name}</p>
                  <p className="mt-2 text-xs opacity-70">{page.updated}</p>
                </button>
              ))}
            </div>
          </section>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold">Storybook Page Preview</h2>
                  <p className="text-sm text-slate-500">Selected Figma page rendered as business review preview.</p>
                </div>
                <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary }}>
                  {brand.name} / {viewport}
                </span>
              </div>

              <div className="flex justify-center rounded-3xl bg-slate-100 p-5 dark:bg-slate-950">
                <div className={`${viewportClass} w-full rounded-3xl bg-white p-5 shadow-xl dark:bg-slate-900`}>
                  <div className={`${brand.radius} p-6`} style={{ backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary }}>
                    <p className="text-sm opacity-80">Figma Page</p>
                    <h3 className="mt-1 text-2xl font-bold">{selectedPage?.name}</h3>
                    <p className="mt-2 max-w-xl text-sm opacity-80">
                      This section represents a live Storybook preview generated from Figma page metadata and mapped React components.
                    </p>
                    <button className="mt-5 rounded-xl bg-white px-4 py-2 text-sm font-bold" style={{ color: semanticTokens.primary }}>
                      Business Review
                    </button>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {selectedPage?.nodes.map((node) => (
                      <div key={node.nodeId} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                        <p className="font-semibold">{node.nodeName}</p>
                        <p className="mt-1 text-xs text-slate-500">Mapped Figma node</p>
                        <p className="mt-1 text-[11px] text-slate-400">{node.nodeType}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-1 text-lg font-bold">Design Tokens</h2>
              <p className="mb-5 text-sm text-slate-500">Synced from Figma variables and applied to Tailwind UI.</p>

              <div className="space-y-4">
                <Token label="Semantic / Primary" value={semanticTokens.primary} color={semanticTokens.primary} />
                <Token label="Semantic / Secondary" value={semanticTokens.secondary} color={semanticTokens.secondary} />
                <Token label="Semantic / Accent" value={semanticTokens.accent} color={semanticTokens.accent} />
                <Token label="Semantic / Surface" value={semanticTokens.surface} color={semanticTokens.surface} />
                <Token label="Semantic / Border" value={semanticTokens.border} color={semanticTokens.border} />
                <Token label="Semantic / Success" value={semanticTokens.success} color={semanticTokens.success} />
                <Token label="Semantic / Warning" value={semanticTokens.warning} color={semanticTokens.warning} />
                <Token label="Semantic / Error" value={semanticTokens.error} color={semanticTokens.error} />
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
                  <p className="text-xs text-slate-500">Font Family</p>
                  <p className="text-lg font-bold">{brand.font}</p>
                </div>
              </div>
            </section>
          </div>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">All Tokens</h2>
                <p className="text-sm text-slate-500">Loaded token colors from Figma cache / API and displayed as swatches.</p>
              </div>
              <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: semanticTokens.surfaceSubtle, color: semanticTokens.onSurface }}>
                {tokenColors.length} tokens
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              {tokenColors.map((token) => (
                <div key={token} className="rounded-xl border p-2" style={{ borderColor: semanticTokens.border }}>
                  <div className="h-10 rounded-md border" style={{ backgroundColor: token, borderColor: semanticTokens.border }} />
                  <p className="mt-1 truncate text-[10px] font-mono" style={{ color: semanticTokens.onSurfaceMuted }}>{token}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Component Library</h2>
                <p className="text-sm text-slate-500">Reusable React components mapped with Figma node IDs.</p>
              </div>
              <CheckCircle2 className="text-emerald-500" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {catalogComponents.map((component, index) => (
                <div key={component} className={`${brand.radius} border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950`}>
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-semibold">{component}</p>
                    <span className="rounded-full bg-slate-200 px-2 py-1 text-[10px] font-bold dark:bg-slate-800">{index + 1}:{catalogComponents.length}</span>
                  </div>
                  <p className="text-sm text-slate-500">React + Tailwind + Figma mapped</p>
                  <div className="mt-4 flex gap-2">
                    <button className="rounded-lg px-3 py-2 text-xs font-semibold" style={{ backgroundColor: semanticTokens.primary, color: semanticTokens.onPrimary }}>
                      View Story
                    </button>
                    <button className="flex items-center gap-1 rounded-lg bg-slate-200 px-3 py-2 text-xs font-semibold dark:bg-slate-800">
                      Figma <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}



function Token({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
      <div className="h-10 w-10 rounded-xl border border-slate-300" style={{ backgroundColor: color }} />
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root")!).render(<StorybookFigmaBrandPortal />);
