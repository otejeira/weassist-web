"use client";

import { Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Localized } from "@/lib/i18n/locale";
import { PLANS } from "@/lib/plans";
import { formatPrice } from "@/lib/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { ROUTES } from "@/lib/nav";
import { cn } from "@/lib/cn";

/**
 * TierCards — franja de los 5 niveles Travel en la página de producto.
 * Cada card lleva al checkout (/comprar/planes). La destacada (Black) muestra
 * borde cian + glow + pill "MÁS VENDIDO".
 */
export function TierCards({
  title,
  subtitle,
}: {
  title: Localized<string>;
  subtitle: Localized<string>;
}) {
  const { t } = useLocale();
  return (
    <section className="section-y">
      <div className="container-max">
        <SectionHeading
          align="center"
          eyebrow={t({ es: "Planes", en: "Plans" })}
          title={t(title)}
          description={t(subtitle)}
        />
        <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-card border bg-white p-5 shadow-card",
                plan.featured
                  ? "border-2 border-cyan-500 shadow-glow"
                  : "border-black/[.06]",
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
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
                <span className="font-display text-[26px] font-bold text-ink-900">
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
                href={ROUTES.comprarPlanes}
                variant={plan.featured ? "primary" : "outline"}
                size="sm"
                className="mt-5 w-full"
              >
                {t({ es: "Elegir plan", en: "Choose plan" })}
              </CTAButton>
            </div>
          ))}
        </Reveal>
        <p className="mt-6 text-center text-[12px] text-ink-500">
          {t({
            es: "Precios de referencia por viajero para 5 días. El total real se calcula al cotizar.",
            en: "Reference prices per traveler for 5 days. The real total is calculated when you quote.",
          })}
        </p>
      </div>
    </section>
  );
}
