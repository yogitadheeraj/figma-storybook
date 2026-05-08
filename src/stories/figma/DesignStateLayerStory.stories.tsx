import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/State-layer",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "State-layer",
    nodeId: "2265:10710",
    nodeType: "FRAME",
    width: 95,
    height: 48,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2265%3A10710"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};