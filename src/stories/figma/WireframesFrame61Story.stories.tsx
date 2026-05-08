import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/Frame 61",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 61",
    nodeId: "2141:155",
    nodeType: "FRAME",
    width: 32,
    height: 32,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A155"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};