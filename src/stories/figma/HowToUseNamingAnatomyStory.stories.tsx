import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/Naming anatomy",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Naming anatomy",
    nodeId: "264:7",
    nodeType: "FRAME",
    width: 1248,
    height: 659,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=264%3A7"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};