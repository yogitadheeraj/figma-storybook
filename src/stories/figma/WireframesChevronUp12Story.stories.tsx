import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/chevron-up (1) 2",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "chevron-up (1) 2",
    nodeId: "2141:201",
    nodeType: "FRAME",
    width: 16.00000330611283,
    height: 16.000000445090336,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A201"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};