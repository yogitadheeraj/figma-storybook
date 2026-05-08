import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Modern-High-res: 64 x 64px, 128 x 128px",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Modern/High-res: 64 x 64px, 128 x 128px",
    nodeId: "2215:3596",
    nodeType: "FRAME",
    width: 64,
    height: 64,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2215%3A3596"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};