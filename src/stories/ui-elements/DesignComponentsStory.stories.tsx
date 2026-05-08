import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/SECTION/🖌️ 🍥 Design/Components",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Components",
    nodeId: "2265:10639",
    nodeType: "SECTION",
    width: 3460,
    height: 2897,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2265%3A10639"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};