import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Desktop Header: 250 x 100px (or 200-300px wide, maintaining aspect ratio)",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Desktop Header: 250 x 100px (or 200-300px wide, maintaining aspect ratio)",
    nodeId: "2215:3564",
    nodeType: "FRAME",
    width: 250,
    height: 100,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2215%3A3564"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};