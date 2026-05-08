import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/heart (3) 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "heart (3) 1",
    nodeId: "2141:118",
    nodeType: "FRAME",
    width: 16,
    height: 16,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A118"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};