import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Wireframes/Card profile",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Card profile",
    nodeId: "2141:205",
    nodeType: "FRAME",
    width: 270,
    height: 198.00001525878906,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A205"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};