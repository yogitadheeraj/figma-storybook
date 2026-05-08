import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└📐 How to Use/Footer",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └📐 How to Use",
    nodeName: "Footer",
    nodeId: "276:104",
    nodeType: "FRAME",
    width: 1440,
    height: 460,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=276%3A104"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};