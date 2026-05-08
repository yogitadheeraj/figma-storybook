import React from "react";

export function EnterpriseButton({ label = "Enterprise Button" }: { label?: string }) {
  return (
    <button className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">
      {label}
    </button>
  );
}
