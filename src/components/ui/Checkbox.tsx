import React, { useId } from "react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  indeterminate?: boolean;
}

export function Checkbox({ label, indeterminate = false, disabled, className = "", ...rest }: CheckboxProps) {
  const id = useId();
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

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
        ref={ref}
        id={id}
        type="checkbox"
        disabled={disabled}
        className={[
          "h-4 w-4 rounded border-[#555] bg-[#2c2c2c] text-[#18a0fb]",
          "checked:bg-[#18a0fb] checked:border-[#18a0fb]",
          "focus-visible:ring-2 focus-visible:ring-[#18a0fb]/50 outline-none",
          "transition accent-[#18a0fb]",
        ].join(" ")}
        {...rest}
      />
      {label && <span>{label}</span>}
    </label>
  );
}
