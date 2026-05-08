import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/more-horizontal (1) 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "more-horizontal (1) 1",
    nodeId: "2226:328",
    nodeType: "FRAME",
    width: 24,
    height: 24,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2226%3A328"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};