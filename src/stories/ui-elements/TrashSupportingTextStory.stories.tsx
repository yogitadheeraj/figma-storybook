import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Trash/Supporting text",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Supporting text",
    nodeId: "2191:3445",
    nodeType: "FRAME",
    width: 57,
    height: 20,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3445"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};