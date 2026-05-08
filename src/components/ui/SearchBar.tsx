import React, { useId } from "react";

export interface SearchBarProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  onClear?: () => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "py-1.5 text-[12px] rounded-md",
  md: "py-2 text-[13px] rounded-lg",
  lg: "py-3 text-[14px] rounded-xl",
};

export function SearchBar({
  value,
  defaultValue,
  onChange,
  placeholder = "Search…",
  onClear,
  size = "md",
  disabled = false,
  className = "",
}: SearchBarProps) {
  const id = useId();
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternal(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    if (!isControlled) setInternal("");
    onChange?.("");
    onClear?.();
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Search icon */}
      <svg
        className="absolute left-3 h-4 w-4 text-[#555] pointer-events-none"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
      >
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>

      <input
        id={id}
        type="search"
        disabled={disabled}
        value={current}
        onChange={handleChange}
        placeholder={placeholder}
        className={[
          "w-full bg-[#2c2c2c] text-[#e0e0e0] placeholder-[#555]",
          "border border-[#444] focus:border-[#18a0fb] focus:ring-2 focus:ring-[#18a0fb]/30",
          "pl-9 pr-8 outline-none transition",
          sizeMap[size],
          disabled ? "opacity-40 cursor-not-allowed" : "",
        ].join(" ")}
      />

      {current && !disabled && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 text-[#555] hover:text-[#e0e0e0] transition"
          aria-label="Clear search"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
