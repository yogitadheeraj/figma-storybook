import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Frame 10",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Frame 10",
    nodeId: "2226:358",
    nodeType: "FRAME",
    width: 63,
    height: 33,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2226%3A358"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};