import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└🏠Cover/Frame 8",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Frame 8",
    nodeId: "115:205",
    nodeType: "FRAME",
    width: 490,
    height: 88,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=115%3A205"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};