"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

/**
 * Acordeón accesible (FAQ, viajero 2, etc.). Botón con aria-expanded + region.
 * Transición suave de altura vía grid-rows.
 */
export function Accordion({
  items,
  defaultOpen,
  allowMultiple = false,
  className,
}: {
  items: AccordionItem[];
  defaultOpen?: string[];
  allowMultiple?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState<string[]>(defaultOpen ?? []);
  const baseId = useId();

  function toggle(id: string) {
    setOpen((prev) => {
      const has = prev.includes(id);
      if (has) return prev.filter((i) => i !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => {
        const isOpen = open.includes(item.id);
        const btnId = `${baseId}-${item.id}-btn`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-card border border-black/[.08] bg-white"
          >
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-[15px] font-semibold text-ink-900 hover:bg-surface-100"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-blue-700 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="grid transition-all duration-200"
            >
              <div className="px-5 pb-5 text-[14px] leading-relaxed text-ink-600">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
