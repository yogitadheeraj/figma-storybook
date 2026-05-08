import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Frame 18569",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 18569",
    nodeId: "2191:3044",
    nodeType: "FRAME",
    width: 32,
    height: 32,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3044"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};