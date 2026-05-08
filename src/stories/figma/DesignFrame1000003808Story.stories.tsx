import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Frame 1000003808",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Frame 1000003808",
    nodeId: "2226:189",
    nodeType: "FRAME",
    width: 430,
    height: 64,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2226%3A189"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};