import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Target",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Target",
    nodeId: "2265:10652",
    nodeType: "FRAME",
    width: 48,
    height: 48,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2265%3A10652"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};