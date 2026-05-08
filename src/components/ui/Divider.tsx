import React from "react";

export interface DividerProps {
  label?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Divider({ label, orientation = "horizontal", className = "" }: DividerProps) {
  if (orientation === "vertical") {
    return <span className={`inline-block w-px self-stretch bg-[#333] ${className}`} />;
  }

  if (label) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="flex-1 h-px bg-[#333]" />
        <span className="text-[11px] text-[#555] whitespace-nowrap">{label}</span>
        <span className="flex-1 h-px bg-[#333]" />
      </div>
    );
  }

  return <hr className={`border-0 h-px bg-[#333] ${className}`} />;
}
