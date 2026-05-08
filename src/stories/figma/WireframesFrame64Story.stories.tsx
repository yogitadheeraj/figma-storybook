import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/Frame 64",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 64",
    nodeId: "2141:99",
    nodeType: "FRAME",
    width: 208,
    height: 50,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A99"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};