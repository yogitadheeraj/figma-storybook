import fs from "fs";
import { ensureDir, safeName, storyPathName } from "./utils";

const pagesFile = "figma-cache/pages.json";
const tokensFile = "figma-cache/tokens.json";

type StoryNode = {
  pageName: string;
  nodeName: string;
  nodeId: string;
  nodeType: string;
  width?: number;
  height?: number;
};

type StoryPage = {
  pageName: string;
  nodes: StoryNode[];
};

type TokenFoundations = {
  source?: string;
  colors?: { rampCount?: number; stopsPerRamp?: number; tokenCount?: number };
  typography?: { tokenCount?: number; scaleTokenCount?: number; familyTokenCount?: number };
  spacing?: { tokenCount?: number };
  radius?: { tokenCount?: number };
  shadows?: { tokenCount?: number };
  iconography?: { tokenCount?: number };
};

type TokenFile = {
  colors?: string[];
  foundations?: TokenFoundations;
  catalog?: {
    components?: string[];
    patterns?: string[];
  };
};

if (!fs.existsSync(pagesFile)) {
  throw new Error("Missing figma-cache/pages.json. Run npm run sync:figma first.");
}

const pages = JSON.parse(fs.readFileSync(pagesFile, "utf-8")) as StoryPage[];
const tokenData = fs.existsSync(tokensFile)
  ? (JSON.parse(fs.readFileSync(tokensFile, "utf-8")) as TokenFile)
  : null;

ensureDir("src/stories/figma");
ensureDir("src/stories/ui-elements");
ensureDir("src/stories/tokens");

for (const page of pages) {
  for (const node of page.nodes) {
    const componentName = `${safeName(page.pageName)}${safeName(node.nodeName)}Story`;
    const figmaFileName = `src/stories/figma/${componentName}.stories.tsx`;
    const uiFileName = `src/stories/ui-elements/${componentName}.stories.tsx`;
    const figmaUrl = `https://www.figma.com/file/${process.env.FIGMA_FILE_ID || "FILE_ID"}?node-id=${encodeURIComponent(node.nodeId)}`;

    const figmaContent = `
import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/${storyPathName(page.pageName)}/${storyPathName(node.nodeName)}",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: ${JSON.stringify(node.pageName)},
    nodeName: ${JSON.stringify(node.nodeName)},
    nodeId: ${JSON.stringify(node.nodeId)},
    nodeType: ${JSON.stringify(node.nodeType)},
    width: ${JSON.stringify(node.width || null)},
    height: ${JSON.stringify(node.height || null)},
    figmaUrl: ${JSON.stringify(figmaUrl)}
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};
`;

    const uiContent = `
import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/${storyPathName(node.nodeType)}/${storyPathName(page.pageName)}/${storyPathName(node.nodeName)}",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: ${JSON.stringify(node.pageName)},
    nodeName: ${JSON.stringify(node.nodeName)},
    nodeId: ${JSON.stringify(node.nodeId)},
    nodeType: ${JSON.stringify(node.nodeType)},
    width: ${JSON.stringify(node.width || null)},
    height: ${JSON.stringify(node.height || null)},
    figmaUrl: ${JSON.stringify(figmaUrl)}
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};
`;

    fs.writeFileSync(figmaFileName, figmaContent.trim());
    fs.writeFileSync(uiFileName, uiContent.trim());
  }
}

if (tokenData?.foundations) {
  const foundations = tokenData.foundations;
  const foundationRows = [
    `Colors: ${(foundations.colors?.rampCount ?? 0)} ramps x ${(foundations.colors?.stopsPerRamp ?? 0)} stops (${foundations.colors?.tokenCount ?? 0} tokens)`,
    `Typography: ${foundations.typography?.tokenCount ?? 0} tokens (${foundations.typography?.scaleTokenCount ?? 0} scale, ${foundations.typography?.familyTokenCount ?? 0} family)`,
    `Spacing: ${foundations.spacing?.tokenCount ?? 0} tokens`,
    `Radius: ${foundations.radius?.tokenCount ?? 0} tokens`,
    `Shadows: ${foundations.shadows?.tokenCount ?? 0} tokens`,
    `Iconography: ${foundations.iconography?.tokenCount ?? 0} tokens`,
  ];

  const tokenFoundationStory = `
import type { Meta, StoryObj } from "@storybook/react";

function TokenFoundationPanel() {
  const colors = ${JSON.stringify(tokenData.colors || [])};
  const foundationRows = ${JSON.stringify(foundationRows)};
  const components = ${JSON.stringify(tokenData.catalog?.components || [])};
  const patterns = ${JSON.stringify(tokenData.catalog?.patterns || [])};
  const source = ${JSON.stringify(foundations.source || "variables/local")};

  return (
    <div style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui", display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0 }}>Token Foundation</h2>
      <p style={{ margin: 0, color: "#64748b" }}>Loaded from figma-cache/tokens.json ({source})</p>

      <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Foundations</h3>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {foundationRows.map((row) => (
            <li key={row}>{row}</li>
          ))}
        </ul>
      </div>

      <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Components ({components.length})</h3>
        <p style={{ margin: 0 }}>{components.join(", ") || "n/a"}</p>
      </div>

      <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Patterns ({patterns.length})</h3>
        <p style={{ margin: 0 }}>{patterns.join(", ") || "n/a"}</p>
      </div>

      <div>
        <h3>Token Colors (${(tokenData.colors || []).length})</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: 8 }}>
          {colors.map((color) => (
            <div key={color} style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: 8 }}>
              <div style={{ height: 32, borderRadius: 6, backgroundColor: color }} />
              <div style={{ marginTop: 6, fontSize: 11, fontFamily: "ui-monospace, SFMono-Regular" }}>{color}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const meta: Meta<typeof TokenFoundationPanel> = {
  title: "Tokens/Foundations/Token Foundation",
  component: TokenFoundationPanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TokenFoundationPanel>;

export const Overview: Story = {};
`;

  fs.writeFileSync("src/stories/tokens/TokenFoundation.stories.tsx", tokenFoundationStory.trim());
}

console.log("✅ Storybook stories generated for Figma, UI Components, and Token Foundations");
