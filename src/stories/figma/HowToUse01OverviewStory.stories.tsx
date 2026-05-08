import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/01 Overview",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "01 Overview",
    nodeId: "324:23",
    nodeType: "FRAME",
    width: 1440,
    height: 999,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=324%3A23"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};