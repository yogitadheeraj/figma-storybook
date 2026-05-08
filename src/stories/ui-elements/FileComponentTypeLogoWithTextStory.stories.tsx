import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/COMPONENT/File component/Type=logo with text",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "File component",
    nodeName: "Type=logo with text",
    nodeId: "21:9",
    nodeType: "COMPONENT",
    width: 272,
    height: 46,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=21%3A9"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};