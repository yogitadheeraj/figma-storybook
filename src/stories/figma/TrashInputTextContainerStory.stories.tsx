import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Input text container",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Input text container",
    nodeId: "I2191:3435;52798:24401",
    nodeType: "FRAME",
    width: 366,
    height: 24,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=I2191%3A3435%3B52798%3A24401"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};