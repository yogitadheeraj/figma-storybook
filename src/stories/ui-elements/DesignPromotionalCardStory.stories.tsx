import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/COMPONENT/🖌️ 🍥 Design/Promotional Card",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Promotional Card",
    nodeId: "2245:1143",
    nodeType: "COMPONENT",
    width: 398,
    height: 653.0203247070312,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2245%3A1143"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};