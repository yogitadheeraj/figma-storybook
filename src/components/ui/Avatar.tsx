import React from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  status?: "online" | "offline" | "busy" | "away";
  className?: string;
}

const sizeMap: Record<AvatarSize, { outer: string; font: string; status: string }> = {
  xs: { outer: "h-6 w-6",  font: "text-[10px]", status: "h-1.5 w-1.5" },
  sm: { outer: "h-8 w-8",  font: "text-[11px]", status: "h-2 w-2" },
  md: { outer: "h-10 w-10", font: "text-[13px]", status: "h-2.5 w-2.5" },
  lg: { outer: "h-12 w-12", font: "text-[15px]", status: "h-3 w-3" },
  xl: { outer: "h-16 w-16", font: "text-[18px]", status: "h-3.5 w-3.5" },
};

const statusColor = {
  online:  "bg-[#0acf97]",
  offline: "bg-[#555]",
  busy:    "bg-[#f24822]",
  away:    "bg-[#ff9900]",
};

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function colorFrom(name: string) {
  const colors = ["#a259ff","#18a0fb","#0acf97","#ff9900","#f24822","#ff7262"];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return colors[h % colors.length];
}

export function Avatar({ src, alt, name = "?", size = "md", status, className = "" }: AvatarProps) {
  const s = sizeMap[size];
  return (
    <span className={`relative inline-flex shrink-0 ${s.outer} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt ?? name}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <span
          className={`flex h-full w-full items-center justify-center rounded-full font-semibold text-white ${s.font}`}
          style={{ background: colorFrom(name) }}
        >
          {initials(name)}
        </span>
      )}
      {status && (
        <span
          className={`absolute bottom-0 right-0 rounded-full border-2 border-[#1e1e1e] ${s.status} ${statusColor[status]}`}
        />
      )}
    </span>
  );
}
