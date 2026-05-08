import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/INSTANCE/🖌️ 🍥 Design/check_small",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "check_small",
    nodeId: "2265:10693",
    nodeType: "INSTANCE",
    width: 24,
    height: 24,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2265%3A10693"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};