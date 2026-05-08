import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/search (1) 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "search (1) 1",
    nodeId: "2141:164",
    nodeType: "FRAME",
    width: 18.37156105041504,
    height: 18,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A164"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};