import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Trash/Frame 1000003816",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 1000003816",
    nodeId: "2191:3182",
    nodeType: "FRAME",
    width: 398,
    height: 262.0000305175781,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3182"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};