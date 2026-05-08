import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└📐 How to Use/06 Relationships",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "06 Relationships",
    nodeId: "274:2",
    nodeType: "FRAME",
    width: 1440,
    height: 2089,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=274%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};