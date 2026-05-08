import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└ 🎨 Color Usage/Brand.",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └ 🎨 Color Usage",
    nodeName: "Brand.",
    nodeId: "300:2",
    nodeType: "FRAME",
    width: 1440,
    height: 3084,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=300%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};