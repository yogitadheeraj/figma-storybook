import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/Frame 36",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 36",
    nodeId: "2141:280",
    nodeType: "FRAME",
    width: 239,
    height: 45,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A280"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};