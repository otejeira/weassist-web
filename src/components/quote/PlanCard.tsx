"use client";

import { Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Plan } from "@/lib/plans";
import { formatPrice } from "@/lib/pricing";
import { Checkbox } from "@/components/ui/Checkbox";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";

/**
 * PlanCard — tarjeta de plan en el checkout (/comprar/planes).
 * Botón "Seleccionar" fija el plan; checkbox añade a comparación.
 */
export function PlanCard({
  plan,
  selected,
  onSelect,
  inCompare,
  onToggleCompare,
  compareDisabled,
}: {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
  inCompare: boolean;
  onToggleCompare: () => void;
  compareDisabled: boolean;
}) {
  const { t } = useLocale();
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-card border bg-white p-5 shadow-card transition-shadow",
        selected
          ? "border-2 border-blue-700 shadow-glow"
          : plan.featured
            ? "border-2 border-cyan-500 shadow-glow"
            : "border-black/[.06] hover:shadow-glow",
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {t(plan.badge)}
        </span>
      )}
      <span
        className="h-1.5 w-10 rounded-full"
        style={{ backgroundColor: plan.accent }}
        aria-hidden="true"
      />
      <h3 className="h3 mt-3">{plan.name}</h3>
      <p className="mt-1 text-[12px] text-ink-500">{t(plan.medicalCap)}</p>
      <p className="mt-3">
        <span className="font-display text-[28px] font-bold text-ink-900">
          {formatPrice(plan.basePrice)}
        </span>
        <span className="text-[12px] text-ink-500"> {t({ es: "/ viajero", en: "/ traveler" })}</span>
      </p>
      <ul className="mt-4 flex flex-1 flex-col gap-2">
        {plan.keyBenefits.map((benefit) => (
          <li key={benefit.es} className="flex gap-2 text-[13px] text-ink-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
            {t(benefit)}
          </li>
        ))}
      </ul>
      <CTAButton
        type="button"
        onClick={onSelect}
        variant={selected ? "primary" : "outline"}
        size="sm"
        className="mt-5 w-full"
      >
        {selected
          ? t({ es: "Seleccionado ✓", en: "Selected ✓" })
          : t({ es: "Seleccionar", en: "Select" })}
      </CTAButton>
      <div className="mt-3">
        <Checkbox
          checked={inCompare}
          onChange={onToggleCompare}
          label={t({ es: "Comparar", en: "Compare" })}
          className={cn(!inCompare && compareDisabled && "pointer-events-none opacity-40")}
        />
      </div>
    </div>
  );
}
