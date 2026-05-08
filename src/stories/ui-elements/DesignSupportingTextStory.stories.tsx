import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Supporting text",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Supporting text",
    nodeId: "I2265:10664;51954:18647;52798:24681",
    nodeType: "FRAME",
    width: 312,
    height: 20,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=I2265%3A10664%3B51954%3A18647%3B52798%3A24681"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};