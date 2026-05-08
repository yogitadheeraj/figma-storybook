import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Frame 1000003903",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Frame 1000003903",
    nodeId: "2242:428",
    nodeType: "FRAME",
    width: 37,
    height: 44,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2242%3A428"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};