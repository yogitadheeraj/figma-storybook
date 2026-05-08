import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/└ 🎨 Color Usage/Hero",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └ 🎨 Color Usage",
    nodeName: "Hero",
    nodeId: "295:3",
    nodeType: "FRAME",
    width: 1440,
    height: 582,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=295%3A3"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};