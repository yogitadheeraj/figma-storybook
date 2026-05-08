import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└ 🎨 Color Usage/Pairing quick reference",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └ 🎨 Color Usage",
    nodeName: "Pairing quick reference",
    nodeId: "307:2",
    nodeType: "FRAME",
    width: 1440,
    height: 1282,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=307%3A2"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};