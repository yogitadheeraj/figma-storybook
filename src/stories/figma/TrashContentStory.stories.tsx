import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Content",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Content",
    nodeId: "2191:3472",
    nodeType: "FRAME",
    width: 382,
    height: 48,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3472"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};