"use client";

import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Field } from "@/components/ui/Field";
import { PriceSummaryCard } from "@/components/quote/PriceSummaryCard";
import { PromoCodeInput } from "@/components/quote/PromoCodeInput";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

export default function PagoPage() {
  const { t } = useLocale();
  const router = useRouter();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    router.push(ROUTES.comprarConfirmacion);
  }

  return (
    <form onSubmit={submit} className="container-max py-8">
      <h1 className="h2">{t({ es: "Pago seguro", en: "Secure payment" })}</h1>
      <p className="lead mt-2 flex items-center gap-2">
        <Lock className="h-4 w-4 text-green-500" aria-hidden="true" />
        {t({ es: "Tus datos viajan cifrados.", en: "Your data travels encrypted." })}
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-6">
          <fieldset className="rounded-panel border border-black/[.06] bg-white p-5 shadow-card">
            <legend className="px-1 font-display text-[15px] font-semibold text-ink-900">
              {t({ es: "Tarjeta", en: "Card" })}
            </legend>
            <div className="mt-4 grid gap-4">
              <Field label={t({ es: "Número de tarjeta", en: "Card number" })} placeholder="4242 4242 4242 4242" inputMode="numeric" required />
              <Field label={t({ es: "Nombre en la tarjeta", en: "Name on card" })} required />
              <div className="grid grid-cols-2 gap-4">
                <Field label={t({ es: "Vencimiento", en: "Expiry" })} placeholder="MM/AA" required />
                <Field label="CVV" placeholder="123" inputMode="numeric" required />
              </div>
            </div>
          </fieldset>

          <div className="rounded-panel border border-black/[.06] bg-white p-5 shadow-card">
            <PromoCodeInput />
          </div>

          <p className="fine-print">
            {t({
              es: "Pasarela de pago simulada (sin cargos reales). El equipo técnico conecta el gateway definitivo.",
              en: "Simulated payment gateway (no real charges). The tech team wires the final gateway.",
            })}
          </p>
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <PriceSummaryCard>
            <div className="flex flex-col gap-2">
              <CTAButton type="submit" className="w-full">
                {t({ es: "Pagar y confirmar →", en: "Pay and confirm →" })}
              </CTAButton>
              <CTAButton href={ROUTES.comprarDatos} variant="ghost" size="sm" className="w-full">
                {t({ es: "← Volver a datos", en: "← Back to details" })}
              </CTAButton>
            </div>
          </PriceSummaryCard>
        </div>
      </div>
    </form>
  );
}
