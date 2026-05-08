import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/Frame 71",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 71",
    nodeId: "2141:115",
    nodeType: "FRAME",
    width: 508,
    height: 76.00004577636719,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A115"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};