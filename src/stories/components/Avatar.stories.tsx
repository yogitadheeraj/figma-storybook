import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../../components/ui/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI Components/Avatar",
  component: Avatar,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
  argTypes: {
    size:   { control: "select", options: ["xs","sm","md","lg","xl"] },
    status: { control: "select", options: [undefined,"online","offline","busy","away"] },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials:      Story = { args: { name: "Dheeraj Varshney", size: "md" } };
export const Online:        Story = { args: { name: "Alice B",         size: "lg", status: "online" } };
export const Busy:          Story = { args: { name: "Carlos M",        size: "lg", status: "busy" } };
export const Away:          Story = { args: { name: "Sam K",           size: "lg", status: "away" } };
export const Offline:       Story = { args: { name: "Jo P",            size: "lg", status: "offline" } };
export const ExtraSmall:    Story = { args: { name: "XS",              size: "xs" } };
export const ExtraLarge:    Story = { args: { name: "Extra Large",     size: "xl", status: "online" } };
