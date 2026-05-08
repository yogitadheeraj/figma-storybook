import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/ui/Button";

const meta: Meta<typeof Button> = {
  title: "UI Components/Button",
  component: Button,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary","secondary","destructive","ghost","outline"] },
    size:    { control: "select", options: ["sm","md","lg"] },
    loading: { control: "boolean" },
    disabled:{ control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary:     Story = { args: { label: "Primary",     variant: "primary" } };
export const Secondary:   Story = { args: { label: "Secondary",   variant: "secondary" } };
export const Destructive: Story = { args: { label: "Delete",      variant: "destructive" } };
export const Ghost:       Story = { args: { label: "Ghost",       variant: "ghost" } };
export const Outline:     Story = { args: { label: "Outline",     variant: "outline" } };
export const Small:       Story = { args: { label: "Small",       size: "sm" } };
export const Large:       Story = { args: { label: "Large",       size: "lg" } };
export const Loading:     Story = { args: { label: "Saving…",     loading: true } };
export const Disabled:    Story = { args: { label: "Disabled",    disabled: true } };
