import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/Frame 63",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 63",
    nodeId: "2141:101",
    nodeType: "FRAME",
    width: 160,
    height: 50,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A101"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};