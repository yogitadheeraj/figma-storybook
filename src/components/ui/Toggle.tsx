import React from "react";

export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export function Toggle({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  size = "md",
  className = "",
}: ToggleProps) {
  const [internal, setInternal] = React.useState(defaultChecked ?? false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal((p) => !p);
    onChange?.(!on);
  };

  const track = size === "sm" ? "w-8 h-4" : "w-11 h-6";
  const thumb = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  const translate = on ? (size === "sm" ? "translate-x-4" : "translate-x-5") : "translate-x-1";

  return (
    <label
      className={[
        "inline-flex items-center gap-2 select-none cursor-pointer text-[13px] text-[#e0e0e0]",
        disabled ? "opacity-40 cursor-not-allowed" : "",
        className,
      ].join(" ")}
      onClick={toggle}
    >
      <span
        className={[
          "relative inline-flex items-center rounded-full transition-colors duration-200",
          track,
          on ? "bg-[#18a0fb]" : "bg-[#444]",
        ].join(" ")}
        role="switch"
        aria-checked={on}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } }}
      >
        <span
          className={[
            "absolute top-1 bg-white rounded-full shadow transition-transform duration-200",
            thumb,
            translate,
          ].join(" ")}
        />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
