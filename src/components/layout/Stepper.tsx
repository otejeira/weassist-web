"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { type Localized, l } from "@/lib/i18n/locale";
import { HexBadge } from "@/components/brand/HexWe";
import { cn } from "@/lib/cn";

export const CHECKOUT_STEPS: { key: string; label: Localized<string> }[] = [
  { key: "cotizacion", label: l("Cotización", "Quote") },
  { key: "plan", label: l("Plan", "Plan") },
  { key: "mejoras", label: l("Mejoras", "Upgrades") },
  { key: "datos", label: l("Datos", "Details") },
  { key: "pago", label: l("Pago seguro", "Secure payment") },
];

/**
 * Stepper de checkout: 5 pasos conectados por una RouteLine horizontal.
 * `current` = índice del paso activo. Pasos previos = completados (hex verde+check),
 * activo = hex azul+número, siguientes = outline gris.
 */
export function Stepper({ current }: { current: number }) {
  const { t } = useLocale();
  return (
    <div className="relative">
      {/* RouteLine horizontal que conecta los pasos */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 4"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 right-0 top-[18px] h-1 w-full px-[10%]"
      >
        <path
          d="M0 2 L1000 2"
          fill="none"
          stroke="#10ade4"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="2 10"
          strokeOpacity={0.5}
          className="animate-dashMove"
        />
      </svg>

      <ol className="relative flex items-start justify-between gap-1">
        {CHECKOUT_STEPS.map((step, i) => {
          const state = i < current ? "complete" : i === current ? "active" : "pending";
          return (
            <li key={step.key} className="flex flex-1 flex-col items-center gap-1.5 text-center">
              <span className="rounded-full bg-white p-0.5">
                <HexBadge
                  variant={state}
                  number={i + 1}
                  size={36}
                  fill={state === "complete" ? "#7cc249" : "#0a4a86"}
                />
              </span>
              <span
                className={cn(
                  "text-[11px] font-semibold",
                  state === "pending" ? "text-ink-300" : "text-ink-900",
                )}
              >
                {t(step.label)}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
