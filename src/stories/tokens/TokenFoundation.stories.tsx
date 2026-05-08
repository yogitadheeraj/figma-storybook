import type { Meta, StoryObj } from "@storybook/react";

function TokenFoundationPanel() {
  const colors = ["#ffffff","#1a1a1a","#000000","#fff9e8","#f1f1f1","#b0b0b0","#787878","#f9f9f9","#4f4f4f","#d8d8d8","#f0f0f0","#878787","#696969","#343434","#f7f9fc","#edf0f5","#d4d8e0","#a7b1bd","#7a8999","#6c7a8a","#5d6b7a","#47505a","#30353a","#eef1f7","#d5dcf0","#9faecc","#607598","#355077","#1c3660","#132848","#0d1d36","#091428","#0b1f41","#ebf0fa","#ccdaf5","#99b8ec","#5589de","#2563d4","#025fea","#014ec0","#005baa","#003675","#e8f7fd","#caf0fb","#8addf5","#3dc5f0","#00aeef","#0090cc","#006f9e","#00527a","#003554","#001a2b","#e5f5ed","#c8edd9","#96e8be","#5cf4a2","#2fdb7f","#10cd65","#06c655","#059944","#046b30","#023d1c","#fff0eb","#ffdbcc","#ffb899","#ff9066","#f76833","#f35218","#ef4100","#c23500","#8a2600","#521700","#fbe5e6","#f9cdd0","#f5a4a8","#f07a7f","#ea5058","#e22530","#d60008","#a8000a","#780008","#480005","#fff3cc","#ffe999","#ffdc66","#ffcf33","#ffca1a","#ffc61a","#cc9e00","#997600","#664f00"];
  const foundationRows = ["Colors: 19 ramps x 10 stops (234 tokens)","Typography: 137 tokens (102 scale, 1 family)","Spacing: 24 tokens","Radius: 13 tokens","Shadows: 2 tokens","Iconography: 0 tokens"];
  const components = ["Chassis Logo","Page Footer","Page Header","Type=logo","Type=logo With Text"];
  const patterns = ["Hero","Stat Card"];
  const source = "variables/local";

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
        <h3>Token Colors (91)</h3>
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