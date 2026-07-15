"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { computePrice, formatUSD } from "@/lib/pricing";
import { getPlan } from "@/lib/plans";

/**
 * PriceSummaryCard — resumen de precio en vivo (columna lateral del checkout).
 * Recalcula desde el estado de cotización cada render.
 */
export function PriceSummaryCard({ children }: { children?: React.ReactNode }) {
  const { t } = useLocale();
  const { quote } = useQuote();
  const price = computePrice(quote);
  const plan = quote.planId ? getPlan(quote.planId) : undefined;
  const travelerCount = Math.max(quote.travelers.length, 1);

  return (
    <aside
      aria-label={t({ es: "Resumen de precio", en: "Price summary" })}
      className="rounded-panel border border-black/[.06] bg-white p-5 shadow-card"
    >
      <h2 className="h3">{t({ es: "Resumen", en: "Summary" })}</h2>

      <dl className="mt-4 flex flex-col gap-2.5 text-[13px]">
        <div className="flex items-center justify-between">
          <dt className="text-ink-600">
            {plan ? plan.name : t({ es: "Plan sin elegir", en: "No plan selected" })}
            {plan && <span className="text-ink-500"> × {travelerCount}</span>}
          </dt>
          <dd className="font-semibold tabular-nums text-ink-900">{formatUSD(price.planTotal)}</dd>
        </div>

        {price.upgradeItems.map((item) => (
          <div key={item.key} className="flex items-center justify-between">
            <dt className="text-ink-600">{item.label}</dt>
            <dd className="tabular-nums text-ink-900">{formatUSD(item.amount)}</dd>
          </div>
        ))}

        <div className="mt-1 flex items-center justify-between border-t border-line-300 pt-2.5">
          <dt className="text-ink-600">{t({ es: "Subtotal", en: "Subtotal" })}</dt>
          <dd className="tabular-nums text-ink-900">{formatUSD(price.subtotal)}</dd>
        </div>

        {price.discount > 0 && (
          <div className="flex items-center justify-between text-green-700">
            <dt>{t({ es: "Descuento", en: "Discount" })}</dt>
            <dd className="tabular-nums">−{formatUSD(price.discount)}</dd>
          </div>
        )}

        <div className="mt-1 flex items-center justify-between border-t border-line-300 pt-3">
          <dt className="font-display text-[15px] font-bold text-ink-900">
            {t({ es: "Total", en: "Total" })}
          </dt>
          <dd className="font-display text-[20px] font-bold tabular-nums text-blue-700">
            {formatUSD(price.total)}
          </dd>
        </div>
      </dl>

      {children && <div className="mt-5">{children}</div>}

      <p className="mt-4 fine-print">
        {t({
          es: "Precios de referencia (placeholder). El total definitivo lo calcula el sistema de cotización.",
          en: "Reference prices (placeholder). The final total is calculated by the quoting system.",
        })}
      </p>
    </aside>
  );
}
