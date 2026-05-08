import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└🏠Cover/Frame 11",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Frame 11",
    nodeId: "115:218",
    nodeType: "FRAME",
    width: 1027,
    height: 148,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=115%3A218"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};