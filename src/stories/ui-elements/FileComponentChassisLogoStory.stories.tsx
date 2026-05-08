import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/COMPONENT_SET/File component/Chassis Logo",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "File component",
    nodeName: "Chassis Logo",
    nodeId: "109:3",
    nodeType: "COMPONENT_SET",
    width: 304,
    height: 140,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=109%3A3"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};