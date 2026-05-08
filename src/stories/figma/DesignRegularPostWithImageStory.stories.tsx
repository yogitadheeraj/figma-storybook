import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Regular Post with Image",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Regular Post with Image",
    nodeId: "2245:1144",
    nodeType: "COMPONENT",
    width: 398,
    height: 751,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2245%3A1144"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};