"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { PLANS, getPlan } from "@/lib/plans";
import { CompareTable } from "@/components/quote/CompareTable";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

export default function CompararPage() {
  const { t } = useLocale();
  const router = useRouter();
  const { quote, setPlan } = useQuote();

  const plans =
    quote.compare.length >= 2
      ? quote.compare.map((id) => getPlan(id)).filter((p): p is NonNullable<typeof p> => Boolean(p))
      : PLANS;

  return (
    <div className="container-max py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="h2">{t({ es: "Comparar planes", en: "Compare plans" })}</h1>
        <CTAButton href={ROUTES.comprarPlanes} variant="ghost" size="sm">
          {t({ es: "← Volver a planes", en: "← Back to plans" })}
        </CTAButton>
      </div>

      <div className="mt-8 rounded-panel border border-black/[.06] bg-white p-5 shadow-card">
        <CompareTable
          plans={plans}
          selectedId={quote.planId}
          onSelect={(id) => {
            setPlan(id);
            router.push(ROUTES.comprarMejoras);
          }}
        />
      </div>
    </div>
  );
}
