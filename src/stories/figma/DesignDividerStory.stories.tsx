import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Divider",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Divider",
    nodeId: "I2242:666;2242:547;54061:37032",
    nodeType: "INSTANCE",
    width: 200.00000148618983,
    height: 17.00004609478492,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=I2242%3A666%3B2242%3A547%3B54061%3A37032"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};