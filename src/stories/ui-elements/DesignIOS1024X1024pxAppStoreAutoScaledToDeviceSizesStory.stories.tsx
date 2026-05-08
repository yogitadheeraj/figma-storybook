import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/iOS: 1024 x 1024px (App Store), auto-scaled to device sizes",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "iOS: 1024 x 1024px (App Store), auto-scaled to device sizes",
    nodeId: "2215:3578",
    nodeType: "FRAME",
    width: 1024,
    height: 1024,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2215%3A3578"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};