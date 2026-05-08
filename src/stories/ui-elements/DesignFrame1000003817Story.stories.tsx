import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Frame 1000003817",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Frame 1000003817",
    nodeId: "2226:303",
    nodeType: "FRAME",
    width: 29,
    height: 15,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2226%3A303"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};