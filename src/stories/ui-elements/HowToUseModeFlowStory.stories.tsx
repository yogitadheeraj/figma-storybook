import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└📐 How to Use/Mode flow",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Mode flow",
    nodeId: "273:7",
    nodeType: "FRAME",
    width: 1248,
    height: 433,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=273%3A7"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};