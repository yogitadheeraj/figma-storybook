import React from "react";

export type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:     "bg-[#18a0fb] text-white hover:bg-[#0d8ee5] active:bg-[#0b7ac9]",
  secondary:   "bg-[#2c2c2c] text-[#e0e0e0] hover:bg-[#383838] border border-[#444]",
  destructive: "bg-[#f24822] text-white hover:bg-[#d93d1c]",
  ghost:       "bg-transparent text-[#18a0fb] hover:bg-[#18a0fb]/10",
  outline:     "bg-transparent border border-[#18a0fb] text-[#18a0fb] hover:bg-[#18a0fb]/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-[12px] rounded-md gap-1",
  md: "px-4 py-2 text-[13px] rounded-lg gap-2",
  lg: "px-6 py-3 text-[14px] rounded-xl gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  label,
  children,
  disabled,
  className = "",
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;
  return (
    <button
      {...rest}
      disabled={isDisabled}
      className={[
        "inline-flex items-center justify-center font-semibold transition-colors select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18a0fb]/60",
        variantClasses[variant],
        sizeClasses[size],
        isDisabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "cursor-pointer",
        className,
      ].join(" ")}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{label ?? children}</span>
      {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
