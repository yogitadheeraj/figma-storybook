import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/Frame 31",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 31",
    nodeId: "2141:236",
    nodeType: "FRAME",
    width: 240,
    height: 218.00001525878906,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A236"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};