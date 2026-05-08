import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/Wireframes/chevron-up 1",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "Wireframes",
    nodeName: "chevron-up 1",
    nodeId: "2141:32",
    nodeType: "FRAME",
    width: 20.000003655803994,
    height: 19.999999841107183,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=2141%3A32"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};