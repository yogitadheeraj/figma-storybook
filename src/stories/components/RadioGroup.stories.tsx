import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "../../components/ui/Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "UI Components/RadioGroup",
  component: RadioGroup,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

const options = [
  { value: "free",    label: "Free" },
  { value: "pro",     label: "Pro" },
  { value: "enterprise", label: "Enterprise", disabled: false },
];

export const Default: Story = {
  args: { name: "plan", options, value: "pro" }
};

export const WithDisabled: Story = {
  args: {
    name: "plan2",
    options: [
      { value: "a", label: "Option A" },
      { value: "b", label: "Option B (disabled)", disabled: true },
      { value: "c", label: "Option C" },
    ],
    value: "a",
  }
};
