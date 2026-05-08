import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Frame 1000003820",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 1000003820",
    nodeId: "2191:3013",
    nodeType: "FRAME",
    width: 430,
    height: 1452.0001220703125,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3013"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};