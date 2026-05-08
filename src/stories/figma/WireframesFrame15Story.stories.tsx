import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/Frame 15",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 15",
    nodeId: "2141:214",
    nodeType: "FRAME",
    width: 254,
    height: 38,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A214"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};