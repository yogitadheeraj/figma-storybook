import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/COMPONENT/File component/Type=Logo",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "File component",
    nodeName: "Type=Logo",
    nodeId: "109:4",
    nodeType: "COMPONENT",
    width: 47,
    height: 46,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=109%3A4"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};