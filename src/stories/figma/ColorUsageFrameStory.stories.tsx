import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└ 🎨 Color Usage/Frame",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └ 🎨 Color Usage",
    nodeName: "Frame",
    nodeId: "323:6",
    nodeType: "FRAME",
    width: 719,
    height: 40,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=323%3A6"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};