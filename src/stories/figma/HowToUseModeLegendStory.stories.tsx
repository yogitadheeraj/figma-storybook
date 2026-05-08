import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/Mode legend",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Mode legend",
    nodeId: "269:7",
    nodeType: "FRAME",
    width: 1248,
    height: 89,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=269%3A7"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};