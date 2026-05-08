import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└📐 How to Use/Semantic color table",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Semantic color table",
    nodeId: "269:22",
    nodeType: "FRAME",
    width: 1248,
    height: 5464,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=269%3A22"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};