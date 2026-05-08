import React from "react";

export type BadgeVariant = "default" | "success" | "warning" | "error" | "info" | "outline";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  className?: string;
}

const variantMap: Record<BadgeVariant, string> = {
  default: "bg-[#333] text-[#e0e0e0]",
  success: "bg-[#0acf97]/20 text-[#0acf97] border border-[#0acf97]/30",
  warning: "bg-[#ff9900]/20 text-[#ff9900] border border-[#ff9900]/30",
  error:   "bg-[#f24822]/20 text-[#f24822] border border-[#f24822]/30",
  info:    "bg-[#18a0fb]/20 text-[#18a0fb] border border-[#18a0fb]/30",
  outline: "bg-transparent text-[#e0e0e0] border border-[#555]",
};

const dotColor: Record<BadgeVariant, string> = {
  default: "bg-[#888]",
  success: "bg-[#0acf97]",
  warning: "bg-[#ff9900]",
  error:   "bg-[#f24822]",
  info:    "bg-[#18a0fb]",
  outline: "bg-[#888]",
};

export function Badge({ label, variant = "default", size = "md", dot = false, className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 font-semibold rounded-full",
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]",
        variantMap[variant],
        className,
      ].join(" ")}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotColor[variant]}`} />}
      {label}
    </span>
  );
}
