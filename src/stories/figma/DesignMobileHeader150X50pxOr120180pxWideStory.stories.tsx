import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Mobile Header: 150 x 50px (or 120-180px wide)",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Mobile Header: 150 x 50px (or 120-180px wide)",
    nodeId: "2215:3565",
    nodeType: "FRAME",
    width: 150,
    height: 50,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2215%3A3565"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};