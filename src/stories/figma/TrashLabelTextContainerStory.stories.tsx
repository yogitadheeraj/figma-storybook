import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Label text container",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Label text container",
    nodeId: "2191:3469",
    nodeType: "FRAME",
    width: 49,
    height: 24,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3469"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};