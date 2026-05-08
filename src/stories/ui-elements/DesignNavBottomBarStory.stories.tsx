import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Nav Bottom Bar",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Nav Bottom Bar",
    nodeId: "2245:1355",
    nodeType: "FRAME",
    width: 430,
    height: 77,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2245%3A1355"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};