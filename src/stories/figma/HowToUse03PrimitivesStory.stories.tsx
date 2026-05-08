import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/03 Primitives",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "03 Primitives",
    nodeId: "265:2",
    nodeType: "FRAME",
    width: 1440,
    height: 5049,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=265%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};