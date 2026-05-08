import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/edit (1) 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "edit (1) 1",
    nodeId: "2141:24",
    nodeType: "FRAME",
    width: 20,
    height: 20,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A24"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};