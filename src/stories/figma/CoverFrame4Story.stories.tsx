import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└🏠Cover/Frame 4",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Frame 4",
    nodeId: "113:106",
    nodeType: "FRAME",
    width: 1824,
    height: 144,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=113%3A106"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};