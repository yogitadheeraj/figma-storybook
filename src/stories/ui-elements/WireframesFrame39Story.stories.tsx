import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/Frame 39",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 39",
    nodeId: "2141:277",
    nodeType: "FRAME",
    width: 270,
    height: 301,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A277"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};