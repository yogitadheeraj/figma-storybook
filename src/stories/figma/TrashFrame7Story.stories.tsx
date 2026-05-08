import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Frame 7",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 7",
    nodeId: "2191:3217",
    nodeType: "FRAME",
    width: 103,
    height: 33,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3217"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};