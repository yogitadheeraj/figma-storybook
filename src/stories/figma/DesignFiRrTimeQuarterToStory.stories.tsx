import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/fi-rr-time-quarter-to",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "fi-rr-time-quarter-to",
    nodeId: "2187:4095",
    nodeType: "INSTANCE",
    width: 18,
    height: 18,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2187%3A4095"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};