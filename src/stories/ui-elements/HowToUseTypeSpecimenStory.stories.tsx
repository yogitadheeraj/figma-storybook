import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└📐 How to Use/Type specimen",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Type specimen",
    nodeId: "270:8",
    nodeType: "FRAME",
    width: 1248,
    height: 1860,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=270%3A8"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};