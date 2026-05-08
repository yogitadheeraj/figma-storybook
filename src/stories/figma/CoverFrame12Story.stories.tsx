import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└🏠Cover/Frame 12",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Frame 12",
    nodeId: "116:246",
    nodeType: "FRAME",
    width: 1027,
    height: 76,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=116%3A246"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};