import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/INSTANCE/🖌️ 🍥 Design/Post Menu",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Post Menu",
    nodeId: "2245:983",
    nodeType: "INSTANCE",
    width: 32,
    height: 32,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2245%3A983"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};