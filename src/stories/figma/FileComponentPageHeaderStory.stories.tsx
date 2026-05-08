import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/File component/Page Header",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "File component",
    nodeName: "Page Header",
    nodeId: "115:182",
    nodeType: "COMPONENT",
    width: 1376,
    height: 97,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=115%3A182"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};