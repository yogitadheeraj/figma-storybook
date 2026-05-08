import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/File component/Page Footer",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "File component",
    nodeName: "Page Footer",
    nodeId: "115:237",
    nodeType: "COMPONENT",
    width: 1376,
    height: 71,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=115%3A237"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};