import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Horizontal-Middle-inset",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Horizontal/Middle-inset",
    nodeId: "2191:442",
    nodeType: "INSTANCE",
    width: 119.33332833449526,
    height: 1.0000355856109309,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A442"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};