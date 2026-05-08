import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└🏠Cover/Overview",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Overview",
    nodeId: "21:4",
    nodeType: "FRAME",
    width: 1091,
    height: 1320,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=21%3A4"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};