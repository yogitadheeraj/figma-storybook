import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/Frame 2",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "Frame 2",
    nodeId: "2141:163",
    nodeType: "FRAME",
    width: 312,
    height: 32,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A163"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};