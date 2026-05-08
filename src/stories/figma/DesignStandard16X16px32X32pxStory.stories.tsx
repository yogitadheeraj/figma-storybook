import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Standard: 16 x 16px, 32 x 32px",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Standard: 16 x 16px, 32 x 32px",
    nodeId: "2215:3590",
    nodeType: "FRAME",
    width: 32,
    height: 32,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2215%3A3590"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};