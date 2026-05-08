import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Flag",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Flag",
    nodeId: "I2242:666;2242:526",
    nodeType: "INSTANCE",
    width: 24,
    height: 24,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=I2242%3A666%3B2242%3A526"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};