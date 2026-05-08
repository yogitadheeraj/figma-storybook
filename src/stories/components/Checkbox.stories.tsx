import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/ui/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked:     Story = { args: { label: "Accept terms" } };
export const Checked:       Story = { args: { label: "Remember me", defaultChecked: true } };
export const Indeterminate: Story = { args: { label: "Select all",  indeterminate: true } };
export const Disabled:      Story = { args: { label: "Disabled",    disabled: true } };
export const DisabledChecked: Story = { args: { label: "Checked disabled", defaultChecked: true, disabled: true } };
