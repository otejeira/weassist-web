"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { useToast } from "@/components/ui/Toast";
import { PLANS } from "@/lib/plans";
import { PlanCard } from "@/components/quote/PlanCard";
import { PlanCompareBar } from "@/components/quote/PlanCompareBar";
import { PriceSummaryCard } from "@/components/quote/PriceSummaryCard";
import { TripSummaryPill } from "@/components/quote/TripSummaryPill";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

const MAX_COMPARE = 3;

export default function PlanesPage() {
  const { t } = useLocale();
  const router = useRouter();
  const { toast } = useToast();
  const { quote, setPlan, toggleCompare } = useQuote();

  function saveForLater() {
    toast(t({ es: "Guardado. Te enviamos un enlace para continuar.", en: "Saved. We sent you a link to continue." }));
  }

  return (
    <div className="container-max py-8 pb-28">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="h2">{t({ es: "Elige tu plan", en: "Choose your plan" })}</h1>
        <button onClick={saveForLater} className="text-[13px] font-semibold text-blue-700 hover:underline">
          {t({ es: "Guardar y terminar después", en: "Save and finish later" })}
        </button>
      </div>
      <div className="mt-4">
        <TripSummaryPill />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={quote.planId === plan.id}
              onSelect={() => setPlan(plan.id)}
              inCompare={quote.compare.includes(plan.id)}
              onToggleCompare={() => toggleCompare(plan.id)}
              compareDisabled={quote.compare.length >= MAX_COMPARE}
            />
          ))}
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <PriceSummaryCard>
            <CTAButton
              type="button"
              onClick={() => router.push(ROUTES.comprarMejoras)}
              disabled={!quote.planId}
              className="w-full"
            >
              {quote.planId
                ? t({ es: "Continuar →", en: "Continue →" })
                : t({ es: "Elige un plan", en: "Choose a plan" })}
            </CTAButton>
          </PriceSummaryCard>
        </div>
      </div>

      <PlanCompareBar />
    </div>
  );
}
