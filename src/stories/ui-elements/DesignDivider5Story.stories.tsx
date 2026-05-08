import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/INSTANCE/🖌️ 🍥 Design/Divider 5",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Divider 5",
    nodeId: "2242:434",
    nodeType: "INSTANCE",
    width: 398.00000008742495,
    height: 1.0000599474260525,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2242%3A434"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};