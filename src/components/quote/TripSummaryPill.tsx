"use client";

import { MapPin, Calendar, Users } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { totalTravelers } from "@/lib/quote/types";

/** TripSummaryPill — resumen compacto del viaje (origen→destino, fechas, viajeros). */
export function TripSummaryPill() {
  const { t } = useLocale();
  const { quote } = useQuote();
  const travelers = totalTravelers(quote.counts);
  const dates =
    quote.dates.from && quote.dates.to
      ? `${quote.dates.from} → ${quote.dates.to}`
      : t({ es: "Fechas por definir", en: "Dates TBD" });

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-control border border-line-300 bg-white px-4 py-3 text-[13px] text-ink-600">
      <span className="flex items-center gap-1.5">
        <MapPin className="h-4 w-4 text-blue-700" aria-hidden="true" />
        {quote.origin} → {quote.destination}
      </span>
      <span className="flex items-center gap-1.5">
        <Calendar className="h-4 w-4 text-blue-700" aria-hidden="true" />
        {dates}
      </span>
      <span className="flex items-center gap-1.5">
        <Users className="h-4 w-4 text-blue-700" aria-hidden="true" />
        {travelers} {travelers === 1 ? t({ es: "viajero", en: "traveler" }) : t({ es: "viajeros", en: "travelers" })}
      </span>
    </div>
  );
}
