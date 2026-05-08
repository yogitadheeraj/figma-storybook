import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└🏠Cover/Frame 3",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Frame 3",
    nodeId: "48:82",
    nodeType: "FRAME",
    width: 1920,
    height: 529,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=48%3A82"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};