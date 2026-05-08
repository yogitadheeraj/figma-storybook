import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Nav item 12",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Nav item 12",
    nodeId: "2226:411",
    nodeType: "INSTANCE",
    width: 336,
    height: 56,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2226%3A411"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};