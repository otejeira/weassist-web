"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Localized } from "@/lib/i18n/locale";
import type { AnnualPlansData } from "@/lib/content/products";
import { formatPrice } from "@/lib/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";
import { cn } from "@/lib/cn";

/**
 * AnnualPlans — bloque de precios de All-Ways (anual multiviaje).
 * Toggle de días máximos por salida (30/60/90) + niveles Gold/Black/Diamond
 * cuyo precio se recalcula al instante según la duración elegida.
 */
export function AnnualPlans({
  title,
  subtitle,
  data,
}: {
  title: Localized<string>;
  subtitle: Localized<string>;
  data: AnnualPlansData;
}) {
  const { t } = useLocale();
  const defaultDuration =
    data.durations.find((d) => d.featured)?.id ?? data.durations[0]?.id ?? "";
  const [duration, setDuration] = useState(defaultDuration);
  const activeDays = data.durations.find((d) => d.id === duration)?.label;

  return (
    <section className="section-y">
      <div className="container-max">
        <SectionHeading
          align="center"
          eyebrow={t({ es: "Duración", en: "Duration" })}
          title={t(title)}
          description={t(subtitle)}
        />

        {/* Toggle segmentado de días máximos por salida */}
        <div className="mt-10 flex justify-center">
          <div
            role="radiogroup"
            aria-label={t({ es: "Días máximos por salida", en: "Max days per trip" })}
            className="inline-flex items-center gap-1 rounded-full border border-black/[.08] bg-white p-1 shadow-card"
          >
            {data.durations.map((d) => {
              const isActive = d.id === duration;
              return (
                <button
                  key={d.id}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => setDuration(d.id)}
                  className={cn(
                    "whitespace-nowrap rounded-full px-6 py-2.5 text-[14px] font-semibold transition-colors",
                    isActive
                      ? "bg-cyan-500 text-white shadow-glow"
                      : "text-ink-600 hover:bg-surface-blue",
                  )}
                >
                  {t(d.label)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tarjetas de nivel — precio dinámico según la duración */}
        <div className="mt-10 grid items-start gap-5 lg:grid-cols-3">
          {data.tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-panel bg-white shadow-card",
                tier.featured
                  ? "border-2 border-cyan-500 shadow-glow"
                  : "border border-black/[.06]",
              )}
            >
              {tier.badge && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-green-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {t(tier.badge)}
                </span>
              )}

              {/* Header navy */}
              <div className="bg-navy-900 px-6 py-6 text-center text-white">
                <span
                  className="mx-auto block h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: tier.accent }}
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-display text-[20px] font-bold uppercase tracking-wide">
                  {tier.name}
                </h3>
                <p className="mt-3">
                  <span className="text-[13px] text-white/70">
                    {t({ es: "desde ", en: "from " })}
                  </span>
                  <span className="font-display text-[30px] font-bold">
                    {formatPrice(tier.prices[duration] ?? 0)}
                  </span>
                </p>
                <p className="mt-2 text-[12px] leading-snug text-white/70">
                  {t({
                    es: `Viajes ilimitados anualmente, ${activeDays ? t(activeDays) : ""} consecutivos de asistencia por viaje.`,
                    en: `Unlimited trips per year, ${activeDays ? t(activeDays) : ""} of assistance per trip.`,
                  })}
                </p>
              </div>

              {/* Body: beneficios por persona */}
              <div className="flex flex-1 flex-col px-6 py-6">
                <p className="text-[13px] font-bold italic text-blue-700">
                  {t({ es: "Beneficios por persona", en: "Benefits per person" })}
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit.es} className="flex gap-2 text-[13px] text-ink-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                      {t(benefit)}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href={ROUTES.comprarPlanes}
                  variant={tier.featured ? "primary" : "outline"}
                  size="sm"
                  className="mt-6 w-full"
                >
                  {t({ es: "Cotizar este plan →", en: "Quote this plan →" })}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[12px] text-ink-500">
          {t({
            es: "Precios de referencia por viajero. El total real se calcula al cotizar.",
            en: "Reference prices per traveler. The real total is calculated when you quote.",
          })}
        </p>
      </div>
    </section>
  );
}
