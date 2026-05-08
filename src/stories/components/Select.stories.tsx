import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../../components/ui/Select";

const options = [
  { value: "react",   label: "React" },
  { value: "vue",     label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte",  label: "Svelte", disabled: true },
];

const meta: Meta<typeof Select> = {
  title: "UI Components/Select",
  component: Select,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm","md","lg"] },
  },
  decorators: [(S: any) => <div style={{ width: 280 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default:   Story = { args: { label: "Framework", options, placeholder: "Choose one…" } };
export const WithError: Story = { args: { label: "Framework", options, error: "Please select a framework." } };
export const Small:     Story = { args: { options, size: "sm", placeholder: "Pick…" } };
export const Large:     Story = { args: { label: "Framework", options, size: "lg" } };
export const Disabled:  Story = { args: { label: "Framework", options, disabled: true, placeholder: "Disabled" } };
