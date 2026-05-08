import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Docked input date picker [desktop]",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Docked input date picker [desktop]",
    nodeId: "2265:10664",
    nodeType: "INSTANCE",
    width: 360,
    height: 551,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2265%3A10664"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};