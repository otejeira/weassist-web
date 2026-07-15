"use client";

import { useRouter } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { totalTravelers, type AgeBracket } from "@/lib/quote/types";
import { ROUTES } from "@/lib/nav";
import { Field, Select } from "@/components/ui/Field";
import { CTAButton } from "@/components/ui/CTAButton";

const DESTINATIONS = [
  "Estados Unidos",
  "Europa (Schengen)",
  "Suramérica",
  "Centroamérica y Caribe",
  "Asia",
  "Cobertura mundial",
];

const ORIGINS = ["Panamá", "Colombia", "Costa Rica", "México", "Otro"];

const BRACKETS: { key: AgeBracket; label: string; hint: string }[] = [
  { key: "adults", label: "Adultos", hint: "18–64" },
  { key: "children", label: "Niños", hint: "0–17" },
  { key: "seniors", label: "Adultos mayores", hint: "65+" },
];

function Stepper({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-control border border-line-300 px-3 py-2">
      <span className="flex flex-col">
        <span className="text-[13px] font-semibold text-ink-900">{label}</span>
        <span className="text-[11px] text-ink-500">{hint}</span>
      </span>
      <span className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`Menos ${label}`}
          onClick={() => onChange(Math.max(0, value - 1))}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-line-300 text-ink-600 hover:border-blue-700 hover:text-blue-700"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-5 text-center text-[15px] font-semibold tabular-nums">{value}</span>
        <button
          type="button"
          aria-label={`Más ${label}`}
          onClick={() => onChange(value + 1)}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-line-300 text-ink-600 hover:border-blue-700 hover:text-blue-700"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </span>
    </div>
  );
}

/**
 * QuoteBox — cotizador del home. Origen/destino, fechas, contadores por edad,
 * correo y teléfono integrados (reemplaza el pop-up del sitio actual).
 * Guarda en el estado de cotización y navega a /comprar/planes.
 */
export function QuoteBox() {
  const { t } = useLocale();
  const router = useRouter();
  const { quote, update, setCount } = useQuote();
  const travelers = totalTravelers(quote.counts);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    router.push(ROUTES.comprarPlanes);
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-panel bg-white p-5 shadow-elevated sm:p-6"
      aria-label={t({ es: "Cotizador de asistencia", en: "Assistance quote" })}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Select
          label={t({ es: "Origen", en: "Origin" })}
          value={quote.origin}
          onChange={(e) => update({ origin: e.target.value })}
          options={ORIGINS.map((o) => ({ value: o, label: o }))}
        />
        <Select
          label={t({ es: "Destino", en: "Destination" })}
          value={quote.destination}
          onChange={(e) => update({ destination: e.target.value })}
          options={DESTINATIONS.map((d) => ({ value: d, label: d }))}
        />
        <Field
          type="date"
          label={t({ es: "Salida", en: "Departure" })}
          value={quote.dates.from}
          onChange={(e) => update({ dates: { ...quote.dates, from: e.target.value } })}
        />
        <Field
          type="date"
          label={t({ es: "Regreso", en: "Return" })}
          value={quote.dates.to}
          onChange={(e) => update({ dates: { ...quote.dates, to: e.target.value } })}
        />
      </div>

      <fieldset className="mt-3">
        <legend className="field-label mb-2">{t({ es: "Viajeros", en: "Travelers" })}</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {BRACKETS.map((b) => (
            <Stepper
              key={b.key}
              label={b.label}
              hint={b.hint}
              value={quote.counts[b.key]}
              onChange={(v) => setCount(b.key, v)}
            />
          ))}
        </div>
        <p className="mt-2 text-[12px] text-ink-500" aria-live="polite">
          {travelers} {travelers === 1 ? "viajero" : "viajeros"}
        </p>
      </fieldset>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Field
          type="email"
          label={t({ es: "Correo", en: "Email" })}
          placeholder="tucorreo@email.com"
          value={quote.contact.email}
          onChange={(e) => update({ contact: { ...quote.contact, email: e.target.value } })}
        />
        <Field
          type="tel"
          label={t({ es: "Teléfono", en: "Phone" })}
          placeholder="+507 6XXX-XXXX"
          value={quote.contact.phone}
          onChange={(e) => update({ contact: { ...quote.contact, phone: e.target.value } })}
        />
      </div>

      <CTAButton type="submit" className="mt-4 w-full">
        {t({ es: "Ver planes y precios →", en: "See plans and prices →" })}
      </CTAButton>
    </form>
  );
}
