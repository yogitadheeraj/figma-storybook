import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└ 🎨 Color Usage/On-surface.",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └ 🎨 Color Usage",
    nodeName: "On-surface.",
    nodeId: "299:2",
    nodeType: "FRAME",
    width: 1440,
    height: 1284,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=299%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};