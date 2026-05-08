import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/🖌️ 🍥 Design/Divider 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Divider 1",
    nodeId: "2226:404",
    nodeType: "INSTANCE",
    width: 336.00000008742495,
    height: 1.0000545272123418,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2226%3A404"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};