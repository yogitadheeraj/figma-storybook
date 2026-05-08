import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/Frame 51",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 51",
    nodeId: "2141:7",
    nodeType: "FRAME",
    width: 540,
    height: 1466.0001220703125,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A7"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};