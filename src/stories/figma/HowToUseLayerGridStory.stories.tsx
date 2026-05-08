import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/Layer grid",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Layer grid",
    nodeId: "324:28",
    nodeType: "FRAME",
    width: 1248,
    height: 512,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=324%3A28"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};