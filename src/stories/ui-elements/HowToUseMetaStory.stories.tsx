import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└📐 How to Use/Meta",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Meta",
    nodeId: "262:7",
    nodeType: "FRAME",
    width: 326,
    height: 82,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=262%3A7"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};