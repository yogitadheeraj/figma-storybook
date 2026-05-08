import React, { useId } from "react";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Radio({ label, disabled, className = "", ...rest }: RadioProps) {
  const id = useId();
  return (
    <label
      htmlFor={id}
      className={[
        "inline-flex items-center gap-2 select-none cursor-pointer",
        "text-[13px] text-[#e0e0e0]",
        disabled ? "opacity-40 cursor-not-allowed" : "",
        className,
      ].join(" ")}
    >
      <input
        id={id}
        type="radio"
        disabled={disabled}
        className="h-4 w-4 accent-[#18a0fb] outline-none focus-visible:ring-2 focus-visible:ring-[#18a0fb]/50"
        {...rest}
      />
      {label && <span>{label}</span>}
    </label>
  );
}

export interface RadioGroupProps {
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function RadioGroup({ name, options, value, onChange, className = "" }: RadioGroupProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {options.map((opt) => (
        <Radio
          key={opt.value}
          name={name}
          value={opt.value}
          label={opt.label}
          disabled={opt.disabled}
          checked={value === opt.value}
          onChange={() => onChange?.(opt.value)}
        />
      ))}
    </div>
  );
}
