import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Trash/Text field",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Text field",
    nodeId: "2191:3466",
    nodeType: "FRAME",
    width: 57,
    height: 48,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3466"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};