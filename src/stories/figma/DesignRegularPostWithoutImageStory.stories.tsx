import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Regular Post without Image",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Regular Post without Image",
    nodeId: "2245:1145",
    nodeType: "COMPONENT",
    width: 398,
    height: 240.00003051757812,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2245%3A1145"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};