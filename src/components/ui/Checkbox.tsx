"use client";

import { Check } from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/cn";

/** Checkbox accesible con label. */
export function Checkbox({
  checked,
  onChange,
  label,
  id,
  className,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <label
      htmlFor={fieldId}
      className={cn("flex cursor-pointer items-start gap-2.5 text-[13px] text-ink-600", className)}
    >
      <span className="relative mt-0.5 inline-flex">
        <input
          id={fieldId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className={cn(
            "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border transition-colors",
            checked ? "border-green-500 bg-green-500 text-white" : "border-line-300 bg-white",
          )}
        >
          {checked && <Check className="h-3 w-3" strokeWidth={3} />}
        </span>
      </span>
      <span>{label}</span>
    </label>
  );
}
