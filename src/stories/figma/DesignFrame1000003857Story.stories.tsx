import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Frame 1000003857",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Frame 1000003857",
    nodeId: "2245:956",
    nodeType: "FRAME",
    width: 230,
    height: 27,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2245%3A956"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};