import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Login Page",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Login Page",
    nodeId: "2191:3402",
    nodeType: "FRAME",
    width: 430,
    height: 932,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A3402"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};