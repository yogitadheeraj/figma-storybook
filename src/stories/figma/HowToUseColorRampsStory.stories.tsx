import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/Color ramps",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Color ramps",
    nodeId: "265:10",
    nodeType: "FRAME",
    width: 1248,
    height: 1571,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=265%3A10"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};