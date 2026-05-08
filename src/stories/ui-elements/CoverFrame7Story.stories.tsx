import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└🏠Cover/Frame 7",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Frame 7",
    nodeId: "115:164",
    nodeType: "FRAME",
    width: 422,
    height: 80,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=115%3A164"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};