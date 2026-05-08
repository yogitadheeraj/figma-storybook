import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/Frame 69",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 69",
    nodeId: "2141:34",
    nodeType: "FRAME",
    width: 540,
    height: 623.0000610351562,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A34"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};