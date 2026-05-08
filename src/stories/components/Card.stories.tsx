import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";

const meta: Meta<typeof Card> = {
  title: "UI Components/Card",
  component: Card,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default","outlined","elevated"] },
  },
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Dashboard Overview",
    description: "Monitor all your key metrics in one place. Updated every 5 minutes.",
  }
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    title: "Elevated Card",
    description: "This card has a stronger shadow.",
  }
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    title: "Outlined Card",
    description: "Transparent background with a border.",
  }
};

export const WithFooter: Story = {
  args: {
    title: "Pro Plan",
    description: "Unlimited projects, priority support, and advanced analytics.",
    footer: <Button label="Upgrade now" size="sm" variant="primary" />,
  }
};

export const WithBadge: Story = {
  render: () => (
    <Card title="New Feature" variant="default">
      <div className="flex items-center gap-2 mt-2">
        <Badge label="Beta" variant="info" />
        <span className="text-[12px] text-[#888]">Now available to all users.</span>
      </div>
    </Card>
  )
};
