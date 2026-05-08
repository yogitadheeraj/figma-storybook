import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/Documentation — Design Tokens",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Documentation — Design Tokens",
    nodeId: "262:2",
    nodeType: "FRAME",
    width: 1440,
    height: 29308,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=262%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};