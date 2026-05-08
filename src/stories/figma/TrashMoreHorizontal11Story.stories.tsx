import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/more-horizontal (1) 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "more-horizontal (1) 1",
    nodeId: "2191:3190",
    nodeType: "FRAME",
    width: 24,
    height: 24,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3190"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};