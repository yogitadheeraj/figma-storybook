import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Footer: 120 x 40px",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Footer: 120 x 40px",
    nodeId: "2215:3566",
    nodeType: "FRAME",
    width: 120,
    height: 40,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2215%3A3566"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};