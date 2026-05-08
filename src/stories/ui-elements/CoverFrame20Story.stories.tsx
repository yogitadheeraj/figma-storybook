import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└🏠Cover/Frame 20",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Frame 20",
    nodeId: "116:257",
    nodeType: "FRAME",
    width: 1027,
    height: 304,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=116%3A257"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};