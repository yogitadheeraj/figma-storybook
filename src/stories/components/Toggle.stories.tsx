import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../components/ui/Toggle";

const meta: Meta<typeof Toggle> = {
  title: "UI Components/Toggle",
  component: Toggle,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm","md"] },
  },
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Off:          Story = { args: { label: "Notifications",       defaultChecked: false } };
export const On:           Story = { args: { label: "Dark mode",           defaultChecked: true  } };
export const Small:        Story = { args: { label: "Compact view",        size: "sm", defaultChecked: true } };
export const Disabled:     Story = { args: { label: "Disabled (off)",      disabled: true } };
export const DisabledOn:   Story = { args: { label: "Disabled (on)",       disabled: true, defaultChecked: true } };
