import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Nav item 13",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Nav item 13",
    nodeId: "2226:414",
    nodeType: "INSTANCE",
    width: 336,
    height: 56,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2226%3A414"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};