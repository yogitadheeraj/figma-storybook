import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../../components/ui/TextInput";

const meta: Meta<typeof TextInput> = {
  title: "UI Components/TextInput",
  component: TextInput,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm","md","lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default:      Story = { args: { label: "Email",    placeholder: "you@example.com" } };
export const WithHelper:   Story = { args: { label: "Username", placeholder: "johndoe", helper: "Must be unique." } };
export const WithError:    Story = { args: { label: "Password", placeholder: "••••••••", error: "Password is too short." } };
export const Small:        Story = { args: { label: "Search",   placeholder: "Type here…", size: "sm" } };
export const Large:        Story = { args: { label: "Bio",      placeholder: "Tell us about you…", size: "lg" } };
export const Disabled:     Story = { args: { label: "Read-only", value: "Read-only value", disabled: true } };
