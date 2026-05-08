import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Trash/heart (3) 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "heart (3) 1",
    nodeId: "2191:3203",
    nodeType: "FRAME",
    width: 16,
    height: 16,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3203"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};