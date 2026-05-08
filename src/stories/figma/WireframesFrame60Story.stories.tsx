import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/Frame 60",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 60",
    nodeId: "2141:153",
    nodeType: "FRAME",
    width: 464,
    height: 48,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A153"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};