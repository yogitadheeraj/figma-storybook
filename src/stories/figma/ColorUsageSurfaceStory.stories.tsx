import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└ 🎨 Color Usage/Surface.",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └ 🎨 Color Usage",
    nodeName: "Surface.",
    nodeId: "298:2",
    nodeType: "FRAME",
    width: 1440,
    height: 2468,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=298%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};