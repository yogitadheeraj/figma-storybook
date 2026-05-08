import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../../components/ui/Divider";

const meta: Meta<typeof Divider> = {
  title: "UI Components/Divider",
  component: Divider,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {};
export const WithLabel: Story = { args: { label: "OR" } };
export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [
    (S) => (
      <div className="flex items-center gap-4 h-10 text-[#e0e0e0] text-[13px]">
        <span>Left</span>
        <S />
        <span>Right</span>
      </div>
    ),
  ],
};
