import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🧑‍💻 For designer/Note for v1.0",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🧑‍💻 For designer",
    nodeName: "Note for v1.0",
    nodeId: "290:54",
    nodeType: "FRAME",
    width: 1440,
    height: 997,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=290%3A54"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};