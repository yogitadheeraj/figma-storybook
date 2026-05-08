import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/State-layer",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "State-layer",
    nodeId: "2191:3473",
    nodeType: "FRAME",
    width: 77,
    height: 40,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3473"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};