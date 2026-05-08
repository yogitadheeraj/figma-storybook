import React from "react";

export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  className?: string;
}

const variantMap = {
  default:  "bg-[#252525] border border-[#333]",
  outlined: "bg-transparent border border-[#444]",
  elevated: "bg-[#252525] shadow-xl shadow-black/40",
};

export function Card({ title, description, image, footer, children, variant = "default", className = "" }: CardProps) {
  return (
    <div className={`rounded-xl overflow-hidden ${variantMap[variant]} ${className}`}>
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}

      <div className="p-4">
        {title && <h3 className="text-[14px] font-semibold text-white mb-1">{title}</h3>}
        {description && <p className="text-[12px] text-[#888] leading-relaxed">{description}</p>}
        {children}
      </div>

      {footer && (
        <div className="px-4 pb-4 pt-0 border-t border-[#333] mt-2 pt-3">
          {footer}
        </div>
      )}
    </div>
  );
}
