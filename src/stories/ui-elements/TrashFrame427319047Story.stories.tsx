import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Trash/Frame 427319047",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 427319047",
    nodeId: "2191:3240",
    nodeType: "FRAME",
    width: 75.42865753173828,
    height: 55,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3240"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};