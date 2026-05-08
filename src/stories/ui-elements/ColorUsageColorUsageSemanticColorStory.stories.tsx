import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└ 🎨 Color Usage/Color Usage — Semantic color",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └ 🎨 Color Usage",
    nodeName: "Color Usage — Semantic color",
    nodeId: "295:2",
    nodeType: "FRAME",
    width: 1440,
    height: 15344,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=295%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};