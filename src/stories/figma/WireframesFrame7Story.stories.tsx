import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/Frame 7",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 7",
    nodeId: "2141:211",
    nodeType: "FRAME",
    width: 129,
    height: 37,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A211"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};