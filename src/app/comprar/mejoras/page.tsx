"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { UpgradeAccordion } from "@/components/quote/UpgradeAccordion";
import { PriceSummaryCard } from "@/components/quote/PriceSummaryCard";
import { TripSummaryPill } from "@/components/quote/TripSummaryPill";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

export default function MejorasPage() {
  const { t } = useLocale();
  const router = useRouter();
  const { quote } = useQuote();

  return (
    <div className="container-max py-8">
      <h1 className="h2">{t({ es: "Personaliza tu cobertura", en: "Customize your coverage" })}</h1>
      <p className="lead mt-2">
        {t({ es: "Añade mejoras opcionales a cada viajero.", en: "Add optional upgrades to each traveler." })}
      </p>
      <div className="mt-4">
        <TripSummaryPill />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          {quote.travelers.length ? (
            <UpgradeAccordion />
          ) : (
            <p className="text-ink-600">{t({ es: "No hay viajeros.", en: "No travelers." })}</p>
          )}
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <PriceSummaryCard>
            <div className="flex flex-col gap-2">
              <CTAButton type="button" onClick={() => router.push(ROUTES.comprarDatos)} className="w-full">
                {t({ es: "Continuar →", en: "Continue →" })}
              </CTAButton>
              <CTAButton href={ROUTES.comprarPlanes} variant="ghost" size="sm" className="w-full">
                {t({ es: "← Cambiar de plan", en: "← Change plan" })}
              </CTAButton>
            </div>
          </PriceSummaryCard>
        </div>
      </div>
    </div>
  );
}
