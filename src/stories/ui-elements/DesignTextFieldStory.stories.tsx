import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/FRAME/🖌️ 🍥 Design/Text field",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "🖌️ 🍥 Design",
    nodeName: "Text field",
    nodeId: "I2265:10664;51954:18647;52798:24672",
    nodeType: "FRAME",
    width: 312,
    height: 56,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=I2265%3A10664%3B51954%3A18647%3B52798%3A24672"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};