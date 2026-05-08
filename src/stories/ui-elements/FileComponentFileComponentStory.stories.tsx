import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/SECTION/File component/File component",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "File component",
    nodeName: "File component",
    nodeId: "115:172",
    nodeType: "SECTION",
    width: 3516,
    height: 1626,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=115%3A172"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};