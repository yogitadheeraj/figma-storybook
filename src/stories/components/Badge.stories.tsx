import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../components/ui/Badge";

const meta: Meta<typeof Badge> = {
  title: "UI Components/Badge",
  component: Badge,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default","success","warning","error","info","outline"] },
    size:    { control: "select", options: ["sm","md"] },
    dot:     { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default:     Story = { args: { label: "Default" } };
export const Success:     Story = { args: { label: "Active",   variant: "success", dot: true } };
export const Warning:     Story = { args: { label: "Pending",  variant: "warning", dot: true } };
export const Error:       Story = { args: { label: "Failed",   variant: "error",   dot: true } };
export const Info:        Story = { args: { label: "New",      variant: "info" } };
export const Outline:     Story = { args: { label: "Outline",  variant: "outline" } };
export const Small:       Story = { args: { label: "Small",    size: "sm" } };
