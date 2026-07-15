"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

export interface TabItem {
  id: string;
  label: string;
}

/**
 * Tabs accesibles (Centro legal). role=tablist con navegación por flechas.
 * Controlado por el padre (`active` + `onChange`) para sincronizar con la ruta.
 */
export function Tabs({
  tabs,
  active,
  onChange,
  className,
}: {
  tabs: TabItem[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  const baseId = useId();

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (index + dir + tabs.length) % tabs.length;
    onChange(tabs[next].id);
    document.getElementById(`${baseId}-${tabs[next].id}`)?.focus();
  }

  return (
    <div role="tablist" className={cn("flex flex-wrap gap-1 border-b border-black/[.08]", className)}>
      {tabs.map((tab, i) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            id={`${baseId}-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "border-b-[2.5px] px-4 py-3 font-display text-[14px] font-semibold transition-colors",
              isActive
                ? "border-cyan-500 text-blue-700"
                : "border-transparent text-ink-500 hover:text-ink-900",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
