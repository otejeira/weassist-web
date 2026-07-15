"use client";

import { Check, Minus } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { COMPARE_FEATURES, PLANS, type Plan } from "@/lib/plans";
import { formatPrice } from "@/lib/pricing";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/cn";

/**
 * CompareTable — tabla comparativa lado a lado.
 * Recibe los planes a comparar; si no se pasan, muestra los 5.
 */
export function CompareTable({
  plans = PLANS,
  onSelect,
  selectedId,
}: {
  plans?: Plan[];
  onSelect?: (id: Plan["id"]) => void;
  selectedId?: Plan["id"] | null;
}) {
  const { t } = useLocale();

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-[13px]">
        <caption className="sr-only">
          {t({ es: "Comparación de planes", en: "Plan comparison" })}
        </caption>
        <thead>
          <tr>
            <th scope="col" className="w-48 p-3 text-left align-bottom">
              <span className="eyebrow">{t({ es: "Beneficio", en: "Benefit" })}</span>
            </th>
            {plans.map((plan) => (
              <th key={plan.id} scope="col" className="p-3 text-center align-bottom">
                <span className="block font-display text-[16px] font-bold text-ink-900">
                  {plan.name}
                </span>
                <span className="block text-[12px] text-ink-500">
                  {formatPrice(plan.basePrice)} {t({ es: "/ viajero", en: "/ traveler" })}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARE_FEATURES.map((feature) => (
            <tr key={feature.label.es} className="border-t border-line-300">
              <th scope="row" className="p-3 text-left font-medium text-ink-600">
                {t(feature.label)}
              </th>
              {plans.map((plan) => {
                const value = feature.values[plan.id];
                return (
                  <td key={plan.id} className="p-3 text-center">
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className="mx-auto h-4 w-4 text-green-500" aria-label={t({ es: "Incluido", en: "Included" })} />
                      ) : (
                        <Minus className="mx-auto h-4 w-4 text-ink-300" aria-label={t({ es: "No incluido", en: "Not included" })} />
                      )
                    ) : (
                      <span className="font-medium text-ink-900">{t(value)}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          {onSelect && (
            <tr className="border-t border-line-300">
              <td className="p-3" />
              {plans.map((plan) => (
                <td key={plan.id} className="p-3 text-center">
                  <CTAButton
                    type="button"
                    onClick={() => onSelect(plan.id)}
                    variant={selectedId === plan.id ? "primary" : "outline"}
                    size="sm"
                    className={cn("w-full")}
                  >
                    {selectedId === plan.id
                      ? t({ es: "Elegido ✓", en: "Chosen ✓" })
                      : t({ es: "Elegir", en: "Choose" })}
                  </CTAButton>
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
