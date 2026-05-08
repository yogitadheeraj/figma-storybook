import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Trash/Frame 1000003811",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 1000003811",
    nodeId: "2191:3015",
    nodeType: "FRAME",
    width: 430,
    height: 246,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3015"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};