"use client";

import { X } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { getPlan } from "@/lib/plans";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

/**
 * PlanCompareBar — barra flotante inferior con los planes marcados para comparar.
 * Aparece solo cuando hay ≥2 seleccionados.
 */
export function PlanCompareBar() {
  const { t } = useLocale();
  const { quote, toggleCompare, clearCompare } = useQuote();

  if (quote.compare.length < 2) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-300 bg-white/95 backdrop-blur">
      <div className="container-max flex flex-wrap items-center justify-between gap-3 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[13px] font-semibold text-ink-900">
            {t({ es: "Comparar:", en: "Compare:" })}
          </span>
          {quote.compare.map((id) => {
            const plan = getPlan(id);
            if (!plan) return null;
            return (
              <span
                key={id}
                className="flex items-center gap-1.5 rounded-full bg-surface-blue px-3 py-1 text-[12px] font-medium text-blue-700"
              >
                {plan.name}
                <button
                  type="button"
                  aria-label={t({ es: `Quitar ${plan.name}`, en: `Remove ${plan.name}` })}
                  onClick={() => toggleCompare(id)}
                  className="hover:text-navy-950"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={clearCompare}
            className="text-[13px] text-ink-500 hover:text-ink-900"
          >
            {t({ es: "Limpiar", en: "Clear" })}
          </button>
          <CTAButton href={ROUTES.comprarComparar} size="sm">
            {t({ es: "Comparar planes →", en: "Compare plans →" })}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
