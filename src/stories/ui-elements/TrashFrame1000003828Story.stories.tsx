import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Trash/Frame 1000003828",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 1000003828",
    nodeId: "2191:3427",
    nodeType: "FRAME",
    width: 382,
    height: 61,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3427"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};