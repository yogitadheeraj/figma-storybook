import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/SECTION/🖌️ 🍥 Design/Logo's",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Logo's",
    nodeId: "2215:3602",
    nodeType: "SECTION",
    width: 3460,
    height: 2375,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2215%3A3602"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};