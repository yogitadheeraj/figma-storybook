import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/plus (1) 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "plus (1) 1",
    nodeId: "2141:273",
    nodeType: "FRAME",
    width: 12,
    height: 12,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A273"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};