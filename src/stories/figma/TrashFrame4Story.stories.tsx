import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Frame 4",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 4",
    nodeId: "2191:3056",
    nodeType: "FRAME",
    width: 124.66667175292969,
    height: 40,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3056"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};