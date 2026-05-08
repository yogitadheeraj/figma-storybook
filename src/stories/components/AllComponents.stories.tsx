import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button }    from "../../components/ui/Button";
import { TextInput } from "../../components/ui/TextInput";
import { Checkbox }  from "../../components/ui/Checkbox";
import { RadioGroup } from "../../components/ui/Radio";
import { Toggle }    from "../../components/ui/Toggle";
import { Badge }     from "../../components/ui/Badge";
import { Avatar }    from "../../components/ui/Avatar";
import { Card }      from "../../components/ui/Card";
import { Divider }   from "../../components/ui/Divider";
import { SearchBar } from "../../components/ui/SearchBar";
import { Select }    from "../../components/ui/Select";

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#555]">{title}</p>
      <div className="rounded-xl border border-[#2a2a2a] bg-[#252525] p-5">
        {children}
      </div>
    </section>
  );
}

// ─── Row helper ───────────────────────────────────────────────────────────────

function Row({ gap = "gap-3", className = "", children }: { gap?: string; className?: string; children: React.ReactNode }) {
  return <div className={`flex flex-wrap items-center ${gap} ${className}`}>{children}</div>;
}

// ─── All Components canvas ────────────────────────────────────────────────────

function AllComponentsCanvas() {
  const [checked, setChecked] = useState(false);
  const [toggled, setToggled] = useState(true);
  const [radio,   setRadio]   = useState("pro");
  const [search,  setSearch]  = useState("");

  return (
    <div className="min-h-screen w-full bg-[#1e1e1e] p-8 font-sans">
      {/* Page title */}
      <div className="mb-10">
        <h1 className="text-[22px] font-bold text-white">Component Library</h1>
        <p className="mt-1 text-[12px] text-[#555]">All UI building blocks — interactive, dark-themed, Figma-aligned.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

        {/* ── Buttons ─────────────────────────────────────────────────────── */}
        <Section title="Buttons">
          <Row className="mb-3">
            <Button label="Primary"     variant="primary" />
            <Button label="Secondary"   variant="secondary" />
            <Button label="Destructive" variant="destructive" />
            <Button label="Ghost"       variant="ghost" />
            <Button label="Outline"     variant="outline" />
          </Row>
          <Row className="mb-3">
            <Button label="Small"  size="sm" />
            <Button label="Medium" size="md" />
            <Button label="Large"  size="lg" />
          </Row>
          <Row>
            <Button label="Loading…"  loading />
            <Button label="Disabled"  disabled />
          </Row>
        </Section>

        {/* ── Text Inputs ──────────────────────────────────────────────────── */}
        <Section title="Text Inputs">
          <div className="flex flex-col gap-3">
            <TextInput label="Email"    placeholder="you@example.com" />
            <TextInput label="Password" placeholder="••••••••" type="password" />
            <TextInput label="Username" placeholder="johndoe" helper="Must be unique." />
            <TextInput label="Error"    placeholder="oops" error="This field is required." />
            <TextInput disabled value="Read-only value" />
          </div>
        </Section>

        {/* ── Search ──────────────────────────────────────────────────────── */}
        <Section title="Search Bar">
          <div className="flex flex-col gap-3">
            <SearchBar placeholder="Search components…" value={search} onChange={setSearch} />
            <SearchBar placeholder="Small search" size="sm" />
            <SearchBar placeholder="Large search" size="lg" />
            <SearchBar placeholder="Disabled" disabled />
          </div>
        </Section>

        {/* ── Select ──────────────────────────────────────────────────────── */}
        <Section title="Select / Dropdown">
          <div className="flex flex-col gap-3">
            <Select label="Framework" placeholder="Choose one…" options={[
              { value: "react", label: "React" },
              { value: "vue",   label: "Vue" },
              { value: "angular", label: "Angular" },
              { value: "svelte",  label: "Svelte", disabled: true },
            ]} />
            <Select label="With error" placeholder="Pick…" options={[
              { value: "a", label: "Option A" },
              { value: "b", label: "Option B" },
            ]} error="Please make a selection." />
            <Select label="Disabled" disabled options={[{ value: "x", label: "Locked" }]} />
          </div>
        </Section>

        {/* ── Checkboxes ──────────────────────────────────────────────────── */}
        <Section title="Checkboxes">
          <div className="flex flex-col gap-2">
            <Checkbox label="Unchecked" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <Checkbox label="Checked by default" defaultChecked />
            <Checkbox label="Indeterminate"      indeterminate />
            <Checkbox label="Disabled (off)"     disabled />
            <Checkbox label="Disabled (on)"      disabled defaultChecked />
          </div>
        </Section>

        {/* ── Radio ───────────────────────────────────────────────────────── */}
        <Section title="Radio Group">
          <RadioGroup
            name="plan"
            value={radio}
            onChange={setRadio}
            options={[
              { value: "free",       label: "Free — $0/month" },
              { value: "pro",        label: "Pro — $12/month" },
              { value: "enterprise", label: "Enterprise — Contact us" },
              { value: "legacy",     label: "Legacy (deprecated)", disabled: true },
            ]}
          />
        </Section>

        {/* ── Toggles ─────────────────────────────────────────────────────── */}
        <Section title="Toggles">
          <div className="flex flex-col gap-3">
            <Toggle label="Notifications"   checked={toggled}  onChange={setToggled} />
            <Toggle label="Dark mode"       defaultChecked />
            <Toggle label="Compact view"    size="sm" defaultChecked />
            <Toggle label="Disabled (off)"  disabled />
            <Toggle label="Disabled (on)"   disabled defaultChecked />
          </div>
        </Section>

        {/* ── Badges ──────────────────────────────────────────────────────── */}
        <Section title="Badges">
          <Row gap="gap-2">
            <Badge label="Default" />
            <Badge label="Active"  variant="success" dot />
            <Badge label="Pending" variant="warning" dot />
            <Badge label="Failed"  variant="error"   dot />
            <Badge label="New"     variant="info" />
            <Badge label="Outline" variant="outline" />
            <Badge label="Sm"      size="sm" variant="info" />
          </Row>
        </Section>

        {/* ── Avatars ─────────────────────────────────────────────────────── */}
        <Section title="Avatars">
          <Row gap="gap-4">
            <div className="flex flex-col items-center gap-1">
              <Avatar name="Dheeraj Varshney" size="xl" status="online" />
              <span className="text-[10px] text-[#555]">XL / online</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Avatar name="Alice B" size="lg" status="busy" />
              <span className="text-[10px] text-[#555]">LG / busy</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Avatar name="Carlos M" size="md" status="away" />
              <span className="text-[10px] text-[#555]">MD / away</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Avatar name="Sam K" size="sm" status="offline" />
              <span className="text-[10px] text-[#555]">SM / offline</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Avatar name="Jo" size="xs" />
              <span className="text-[10px] text-[#555]">XS</span>
            </div>
          </Row>
        </Section>

        {/* ── Cards ───────────────────────────────────────────────────────── */}
        <Section title="Cards">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Card
              title="Default Card"
              description="Standard surface with a subtle border and dark background."
            />
            <Card
              variant="elevated"
              title="Elevated Card"
              description="Stronger shadow for hierarchy."
            />
            <Card
              variant="outlined"
              title="Outlined Card"
              description="Transparent, border-only treatment."
            />
            <Card
              title="Card with Footer"
              description="Has an action in the footer area."
              footer={<Button label="Learn more" size="sm" variant="ghost" />}
            />
          </div>
        </Section>

        {/* ── Dividers ────────────────────────────────────────────────────── */}
        <Section title="Dividers">
          <div className="flex flex-col gap-4">
            <Divider />
            <Divider label="OR" />
            <div className="flex h-8 items-center gap-4 text-[12px] text-[#888]">
              <span>Left</span>
              <Divider orientation="vertical" />
              <span>Right</span>
              <Divider orientation="vertical" />
              <span>More</span>
            </div>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <p className="mt-12 text-center text-[10px] text-[#333]">
        Figma Storybook Autosync — Component Library
      </p>
    </div>
  );
}

// ─── Story meta ───────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "UI Components/🎨 All Components",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const Canvas: Story = {
  name: "All Components Canvas",
  render: () => <AllComponentsCanvas />,
};
