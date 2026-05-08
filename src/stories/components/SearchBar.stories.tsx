import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "../../components/ui/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "UI Components/SearchBar",
  component: SearchBar,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm","md","lg"] },
  },
  decorators: [(S: any) => <div style={{ width: 320 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Empty:    Story = { args: { placeholder: "Search components…" } };
export const WithValue: Story = { args: { defaultValue: "Button" } };
export const Small:    Story = { args: { size: "sm", placeholder: "Quick find…" } };
export const Large:    Story = { args: { size: "lg", placeholder: "Search docs…" } };
export const Disabled: Story = { args: { disabled: true, placeholder: "Disabled" } };
