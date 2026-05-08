import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Frame 1000003818",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 1000003818",
    nodeId: "2191:3143",
    nodeType: "FRAME",
    width: 398,
    height: 240.00003051757812,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3143"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};