import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/Frame",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Frame",
    nodeId: "276:119",
    nodeType: "FRAME",
    width: 1248,
    height: 47,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=276%3A119"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};