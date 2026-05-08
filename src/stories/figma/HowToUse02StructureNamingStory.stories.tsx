import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/02 Structure & Naming",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "02 Structure & Naming",
    nodeId: "264:2",
    nodeType: "FRAME",
    width: 1440,
    height: 2154,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=264%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};