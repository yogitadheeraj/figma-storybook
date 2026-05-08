import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Trash/Option 2 - Montserrat",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Trash",
    nodeName: "Option 2 - Montserrat",
    nodeId: "2191:1685",
    nodeType: "FRAME",
    width: 430,
    height: 932,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2191%3A1685"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};