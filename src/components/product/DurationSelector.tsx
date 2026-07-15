"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Localized } from "@/lib/i18n/locale";
import type { DurationOption } from "@/lib/content/products";
import { formatPrice } from "@/lib/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";
import { cn } from "@/lib/cn";

/**
 * DurationSelector — selector de duración para las líneas anuales / larga estadía.
 * El usuario elige un rango de días; el CTA lleva al checkout.
 */
export function DurationSelector({
  title,
  subtitle,
  durations,
}: {
  title: Localized<string>;
  subtitle: Localized<string>;
  durations: DurationOption[];
}) {
  const { t } = useLocale();
  const defaultIndex = Math.max(
    0,
    durations.findIndex((d) => d.featured),
  );
  const [selected, setSelected] = useState(defaultIndex);

  return (
    <section className="section-y">
      <div className="container-max">
        <SectionHeading
          align="center"
          eyebrow={t({ es: "Duración", en: "Duration" })}
          title={t(title)}
          description={t(subtitle)}
        />
        <div
          role="radiogroup"
          aria-label={t({ es: "Duración del plan", en: "Plan duration" })}
          className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          {durations.map((option, i) => {
            const isSelected = i === selected;
            return (
              <button
                key={option.label.es}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelected(i)}
                className={cn(
                  "flex flex-col rounded-card border bg-white p-5 text-left shadow-card transition-shadow hover:shadow-glow",
                  isSelected ? "border-2 border-cyan-500 shadow-glow" : "border-black/[.06]",
                )}
              >
                <span className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-ink-900">{t(option.label)}</span>
                  {isSelected && <Check className="h-4 w-4 text-cyan-500" aria-hidden="true" />}
                </span>
                <span className="mt-3 font-display text-[26px] font-bold text-ink-900">
                  {formatPrice(option.price)}
                </span>
                <span className="text-[12px] text-ink-500">{t({ es: "/ viajero", en: "/ traveler" })}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <CTAButton href={ROUTES.comprarPlanes} size="lg">
            {t({ es: "Cotizar este plan →", en: "Quote this plan →" })}
          </CTAButton>
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
