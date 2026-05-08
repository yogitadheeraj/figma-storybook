import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Apple Touch Icon: 180 x 180px",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Apple Touch Icon: 180 x 180px",
    nodeId: "2215:3599",
    nodeType: "FRAME",
    width: 180,
    height: 180,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2215%3A3599"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};