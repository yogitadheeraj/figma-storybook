import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Frame 12",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 12",
    nodeId: "2191:3200",
    nodeType: "FRAME",
    width: 382,
    height: 16,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3200"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};