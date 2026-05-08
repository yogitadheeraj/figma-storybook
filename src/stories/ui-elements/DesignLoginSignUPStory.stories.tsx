import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/SECTION/🖌️ 🍥 Design/Login SignUP",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Login SignUP",
    nodeId: "2225:1897",
    nodeType: "SECTION",
    width: 10244,
    height: 3546,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2225%3A1897"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};