import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/3D Avatars - 13",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "3D Avatars / 13",
    nodeId: "2242:452",
    nodeType: "INSTANCE",
    width: 36,
    height: 36,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2242%3A452"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};