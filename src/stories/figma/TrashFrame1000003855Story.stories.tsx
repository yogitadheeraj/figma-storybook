import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Frame 1000003855",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 1000003855",
    nodeId: "2191:3423",
    nodeType: "FRAME",
    width: 290,
    height: 126,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3423"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};