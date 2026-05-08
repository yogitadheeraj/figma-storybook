import type { Meta, StoryObj } from "@storybook/react";
import { FigmaNodePreview } from "../../components/FigmaNodePreview";

const meta: Meta<typeof FigmaNodePreview> = {
  title: "UI Components/Figma Elements/INSTANCE/└🏠Cover/Chassis Logo",
  component: FigmaNodePreview,
  tags: ["autodocs"],
  args: {
    pageName: "      └🏠Cover ",
    nodeName: "Chassis Logo",
    nodeId: "45:73",
    nodeType: "INSTANCE",
    width: 1425.04345703125,
    height: 241,
    figmaUrl: "https://www.figma.com/file/FILE_ID?node-id=45%3A73"
  }
};

export default meta;
type Story = StoryObj<typeof FigmaNodePreview>;

export const Review: Story = {};