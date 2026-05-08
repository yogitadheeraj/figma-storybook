import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Profile Navigation Drawer",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Profile Navigation Drawer",
    nodeId: "2226:396",
    nodeType: "FRAME",
    width: 360,
    height: 933,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2226%3A396"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};