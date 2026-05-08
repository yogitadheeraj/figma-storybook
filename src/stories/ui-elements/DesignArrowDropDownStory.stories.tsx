import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/INSTANCE/🖌️ 🍥 Design/arrow_drop_down",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "arrow_drop_down",
    nodeId: "2225:3056",
    nodeType: "INSTANCE",
    width: 16,
    height: 16,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2225%3A3056"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};