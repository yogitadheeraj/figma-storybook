import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "Figma/Trash/Mobile Design",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Mobile Design",
    nodeId: "2191:1684",
    nodeType: "SECTION",
    width: 2231,
    height: 1243,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A1684"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};