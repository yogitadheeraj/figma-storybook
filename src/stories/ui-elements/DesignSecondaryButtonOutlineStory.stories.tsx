import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Secondary Button - outline",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Secondary Button - outline",
    nodeId: "2265:10703",
    nodeType: "FRAME",
    width: 95,
    height: 48,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2265%3A10703"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};