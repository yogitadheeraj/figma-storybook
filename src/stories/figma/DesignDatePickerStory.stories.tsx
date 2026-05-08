import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Date Picker",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Date Picker",
    nodeId: "I2265:10664;51954:18569",
    nodeType: "FRAME",
    width: 360,
    height: 460,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=I2265%3A10664%3B51954%3A18569"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};