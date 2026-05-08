import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/more-horizontal (1) 2",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "more-horizontal (1) 2",
    nodeId: "I2242:666;2242:502",
    nodeType: "FRAME",
    width: 20,
    height: 20,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=I2242%3A666%3B2242%3A502"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};