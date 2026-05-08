import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Frame 1000003806",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Frame 1000003806",
    nodeId: "2191:3223",
    nodeType: "FRAME",
    width: 430,
    height: 77,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3223"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};