import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/message-square (2) 2",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "message-square (2) 2",
    nodeId: "2141:135",
    nodeType: "FRAME",
    width: 20,
    height: 20,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A135"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};