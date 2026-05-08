import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🧑‍💻 For designer/Frame",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🧑‍💻 For designer",
    nodeName: "Frame",
    nodeId: "290:89",
    nodeType: "FRAME",
    width: 1076,
    height: 77,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=290%3A89"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};