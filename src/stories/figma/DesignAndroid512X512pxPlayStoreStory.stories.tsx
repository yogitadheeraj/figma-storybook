import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Android: 512 x 512px (Play Store)",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Android: 512 x 512px (Play Store)",
    nodeId: "2215:3581",
    nodeType: "FRAME",
    width: 512,
    height: 512,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2215%3A3581"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};