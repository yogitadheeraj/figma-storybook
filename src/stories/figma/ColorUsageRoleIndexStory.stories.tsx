import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└ 🎨 Color Usage/Role index",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └ 🎨 Color Usage",
    nodeName: "Role index",
    nodeId: "296:2",
    nodeType: "FRAME",
    width: 1440,
    height: 742,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=296%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};