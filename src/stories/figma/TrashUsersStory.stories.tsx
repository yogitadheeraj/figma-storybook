import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/users",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "users",
    nodeId: "2191:2464",
    nodeType: "FRAME",
    width: 20,
    height: 20,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A2464"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};