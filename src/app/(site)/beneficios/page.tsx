"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { ProductHero } from "@/components/product/ProductHero";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { ROUTES } from "@/lib/nav";
import { BENEFITS, BENEFITS_FOOTNOTE, BENEFIT_DIFFERENCE } from "@/lib/content/benefits";
import { cn } from "@/lib/cn";

export default function BeneficiosPage() {
  const { t } = useLocale();
  return (
    <>
      <ProductHero
        eyebrow={{ es: "Beneficios", en: "Benefits" }}
        title={{ es: "Todo lo que We Assist hace por ti", en: "Everything We Assist does for you" }}
        subtitle={{
          es: "Más que una cobertura: acompañamiento real antes y durante tu viaje. Estos son los beneficios que puedes activar.",
          en: "More than coverage: real support before and during your trip. These are the benefits you can activate.",
        }}
      />

      {/* Grid de 9 beneficios numerados */}
      <section className="section-y bg-white">
        <div className="container-max">
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => {
              const featured = benefit.number === "09";
              return (
                <div
                  key={benefit.number}
                  className={cn(
                    "rounded-card p-6 transition-transform duration-300 ease-brand hover:-translate-y-1",
                    featured ? "bg-surface-green" : "border border-black/[.08]",
                  )}
                >
                  <span
                    className={cn(
                      "inline-grid h-10 w-10 place-items-center rounded-xl font-display text-[14px] font-bold text-green-700",
                      featured ? "bg-white" : "bg-surface-green",
                    )}
                  >
                    {benefit.number}
                  </span>
                  <h3 className="mt-4 font-display text-[15.5px] font-bold text-navy-900">
                    {t(benefit.title)}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                    {t(benefit.description)}
                  </p>
                </div>
              );
            })}
          </Reveal>
          <p className="mt-4 text-[11.5px] text-ink-500">{t(BENEFITS_FOOTNOTE)}</p>
        </div>
      </section>

      {/* Nuestra diferencia */}
      <section className="section-y bg-surface-100">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "Nuestra diferencia", en: "Our difference" })}</p>
          <h2 className="h2 mt-3 text-ink-900">
            {t({ es: "Por qué se siente distinto", en: "Why it feels different" })}
          </h2>
          <p className="lead mt-3 max-w-2xl">
            {t({
              es: "La asistencia de We Assist se centra en resolver, no en dejarte solo con un formulario de reembolso.",
              en: "We Assist focuses on solving, not leaving you alone with a reimbursement form.",
            })}
          </p>
          <Reveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFIT_DIFFERENCE.map((item) => (
              <div key={item.title.es} className="rounded-card border border-black/[.07] bg-white p-6">
                <h3 className="font-display text-[15.5px] font-bold text-navy-900">{t(item.title)}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">{t(item.description)}</p>
              </div>
            ))}
          </Reveal>

          {/* CTA card */}
          <div className="mt-11 flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[24px] bg-hero-navy p-10 text-white lg:flex-row lg:items-center">
            <div>
              <h2 className="h2 text-white">
                {t({ es: "Activa estos beneficios en tu próximo viaje", en: "Activate these benefits on your next trip" })}
              </h2>
              <p className="mt-3 text-[15px] text-white/70">
                {t({
                  es: "Elige tu plan y lleva contigo el respaldo de We Assist.",
                  en: "Choose your plan and travel with We Assist's backing.",
                })}
              </p>
            </div>
            <div className="flex flex-none flex-wrap gap-3">
              <CTAButton href={ROUTES.comprarPlanes} variant="white">
                {t({ es: "Cotizar ahora →", en: "Get a quote →" })}
              </CTAButton>
              <CTAButton href={ROUTES.asistencia} variant="outlineWhite">
                {t({ es: "Hablar con asistencia", en: "Talk to assistance" })}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
