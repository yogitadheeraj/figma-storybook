import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Menu list",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Menu list",
    nodeId: "I2242:666;2242:507",
    nodeType: "FRAME",
    width: 234,
    height: 56,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=I2242%3A666%3B2242%3A507"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};