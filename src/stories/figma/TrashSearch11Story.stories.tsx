import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/search (1) 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "search (1) 1",
    nodeId: "2191:3264",
    nodeType: "FRAME",
    width: 18,
    height: 18,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3264"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};