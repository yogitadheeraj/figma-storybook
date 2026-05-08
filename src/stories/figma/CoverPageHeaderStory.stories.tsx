import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/└🏠Cover/Page Header",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Page Header",
    nodeId: "115:188",
    nodeType: "INSTANCE",
    width: 1027,
    height: 97,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=115%3A188"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};