"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { Field } from "@/components/ui/Field";
import { Checkbox } from "@/components/ui/Checkbox";
import { PriceSummaryCard } from "@/components/quote/PriceSummaryCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

const BRACKET_LABEL = {
  adults: { es: "Adulto", en: "Adult" },
  children: { es: "Niño", en: "Child" },
  seniors: { es: "Adulto mayor", en: "Senior" },
} as const;

export default function DatosPage() {
  const { t } = useLocale();
  const router = useRouter();
  const { quote, update } = useQuote();
  const [invoice, setInvoice] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    router.push(ROUTES.comprarPago);
  }

  return (
    <form onSubmit={submit} className="container-max py-8">
      <h1 className="h2">{t({ es: "Datos de los viajeros", en: "Traveler details" })}</h1>
      <p className="lead mt-2">
        {t({ es: "Completa la información de cada viajero.", en: "Complete each traveler's information." })}
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-6">
          {quote.travelers.map((traveler, i) => (
            <fieldset
              key={traveler.id}
              className="rounded-panel border border-black/[.06] bg-white p-5 shadow-card"
            >
              <legend className="px-1 font-display text-[15px] font-semibold text-ink-900">
                {t({ es: `Viajero ${i + 1}`, en: `Traveler ${i + 1}` })}{" "}
                <span className="text-[12px] font-normal text-ink-500">· {t(BRACKET_LABEL[traveler.bracket])}</span>
              </legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label={t({ es: "Nombre", en: "First name" })} required />
                <Field label={t({ es: "Apellido", en: "Last name" })} required />
                <Field label={t({ es: "Documento / Pasaporte", en: "ID / Passport" })} required />
                <Field type="date" label={t({ es: "Fecha de nacimiento", en: "Date of birth" })} required />
              </div>
            </fieldset>
          ))}

          <fieldset className="rounded-panel border border-black/[.06] bg-white p-5 shadow-card">
            <legend className="px-1 font-display text-[15px] font-semibold text-ink-900">
              {t({ es: "Contacto", en: "Contact" })}
            </legend>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field
                type="email"
                label={t({ es: "Correo", en: "Email" })}
                value={quote.contact.email}
                onChange={(e) => update({ contact: { ...quote.contact, email: e.target.value } })}
                required
              />
              <Field
                type="tel"
                label={t({ es: "Teléfono", en: "Phone" })}
                value={quote.contact.phone}
                onChange={(e) => update({ contact: { ...quote.contact, phone: e.target.value } })}
                required
              />
            </div>
          </fieldset>

          <fieldset className="rounded-panel border border-black/[.06] bg-white p-5 shadow-card">
            <legend className="px-1 font-display text-[15px] font-semibold text-ink-900">
              {t({ es: "Contacto de emergencia", en: "Emergency contact" })}
            </legend>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label={t({ es: "Nombre", en: "Name" })} />
              <Field type="tel" label={t({ es: "Teléfono", en: "Phone" })} />
            </div>
          </fieldset>

          <div className="rounded-panel border border-black/[.06] bg-white p-5 shadow-card">
            <Checkbox
              checked={invoice}
              onChange={setInvoice}
              label={t({ es: "Necesito factura fiscal", en: "I need a tax invoice" })}
            />
            {invoice && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label={t({ es: "Razón social / Nombre", en: "Company / Name" })} />
                <Field label={t({ es: "RUC / Identificación fiscal", en: "Tax ID" })} />
              </div>
            )}
          </div>
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <PriceSummaryCard>
            <div className="flex flex-col gap-2">
              <CTAButton type="submit" className="w-full">
                {t({ es: "Ir al pago →", en: "Go to payment →" })}
              </CTAButton>
              <CTAButton href={ROUTES.comprarMejoras} variant="ghost" size="sm" className="w-full">
                {t({ es: "← Volver a mejoras", en: "← Back to upgrades" })}
              </CTAButton>
            </div>
          </PriceSummaryCard>
        </div>
      </div>
    </form>
  );
}
