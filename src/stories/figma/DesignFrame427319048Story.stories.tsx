import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Frame 427319048",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Frame 427319048",
    nodeId: "2226:391",
    nodeType: "FRAME",
    width: 75.42865753173828,
    height: 55,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2226%3A391"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};