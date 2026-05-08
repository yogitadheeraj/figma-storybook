import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Days of the week",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Days of the week",
    nodeId: "I2265:10664;51954:18580",
    nodeType: "FRAME",
    width: 336,
    height: 48,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=I2265%3A10664%3B51954%3A18580"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};