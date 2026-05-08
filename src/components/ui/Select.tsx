import React, { useId } from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  helper?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "py-1.5 text-[12px] rounded-md",
  md: "py-2 text-[13px] rounded-lg",
  lg: "py-3 text-[14px] rounded-xl",
};

export function Select({
  options,
  value,
  defaultValue,
  onChange,
  label,
  placeholder = "Select…",
  error,
  helper,
  disabled = false,
  size = "md",
  className = "",
}: SelectProps) {
  const id = useId();
  const borderColor = error ? "border-[#f24822]" : "border-[#444] focus:border-[#18a0fb] focus:ring-[#18a0fb]/30";

  return (
    <div className={`flex flex-col gap-1 text-[12px] ${className}`}>
      {label && (
        <label htmlFor={id} className="font-medium text-[#e0e0e0]">{label}</label>
      )}
      <div className="relative">
        <select
          id={id}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => onChange?.(e.target.value)}
          className={[
            "w-full appearance-none bg-[#2c2c2c] text-[#e0e0e0] border outline-none",
            "pl-3 pr-8 transition focus:ring-2",
            borderColor,
            sizeMap[size],
            disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
          ].join(" ")}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#555]"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {(helper || error) && (
        <p className={error ? "text-[#f24822]" : "text-[#888]"}>{error ?? helper}</p>
      )}
    </div>
  );
}
