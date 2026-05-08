import React, { useId } from "react";

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helper?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeMap = {
  sm: { wrap: "text-[11px]", input: "py-1.5 px-3 text-[12px] rounded-md" },
  md: { wrap: "text-[12px]", input: "py-2 px-3 text-[13px] rounded-lg" },
  lg: { wrap: "text-[13px]", input: "py-3 px-4 text-[14px] rounded-xl" },
};

export function TextInput({
  label,
  helper,
  error,
  size = "md",
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  ...rest
}: TextInputProps) {
  const id = useId();
  const s = sizeMap[size];
  const borderColor = error
    ? "border-[#f24822] focus:ring-[#f24822]/40"
    : "border-[#444] focus:border-[#18a0fb] focus:ring-[#18a0fb]/30";

  return (
    <div className={`flex flex-col gap-1 ${s.wrap} ${className}`}>
      {label && (
        <label htmlFor={id} className="font-medium text-[#e0e0e0]">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3 text-[#888] pointer-events-none">{leftIcon}</span>
        )}
        <input
          id={id}
          disabled={disabled}
          className={[
            "w-full bg-[#2c2c2c] text-[#e0e0e0] placeholder-[#555] border outline-none",
            "transition focus:ring-2",
            borderColor,
            s.input,
            leftIcon  ? "pl-9" : "",
            rightIcon ? "pr-9" : "",
            disabled  ? "opacity-40 cursor-not-allowed" : "",
          ].join(" ")}
          {...rest}
        />
        {rightIcon && (
          <span className="absolute right-3 text-[#888] pointer-events-none">{rightIcon}</span>
        )}
      </div>
      {(helper || error) && (
        <p className={error ? "text-[#f24822]" : "text-[#888]"}>{error ?? helper}</p>
      )}
    </div>
  );
}
