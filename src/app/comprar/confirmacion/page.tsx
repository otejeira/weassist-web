"use client";

import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { useToast } from "@/components/ui/Toast";
import { getPlan } from "@/lib/plans";
import { computePrice, formatUSD } from "@/lib/pricing";
import { HexBadge } from "@/components/brand/HexWe";
import { BrandSeal } from "@/components/brand/BrandSeal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

export default function ConfirmacionPage() {
  const { t } = useLocale();
  const { quote, reset } = useQuote();
  const { toast } = useToast();
  const plan = quote.planId ? getPlan(quote.planId) : undefined;
  const { total } = computePrice(quote);
  const voucher = "WA-2026-0001"; // TODO PLACEHOLDER: número real desde el sistema.

  return (
    <div className="container-max flex flex-col items-center py-16 text-center">
      <HexBadge variant="complete" size={64} />
      <h1 className="h1 mt-5">{t({ es: "¡Listo! Estás protegido.", en: "Done! You're protected." })}</h1>
      <p className="lead mt-3 max-w-xl">
        {t({
          es: "Enviamos tu voucher y los detalles de tu asistencia al correo registrado.",
          en: "We sent your voucher and assistance details to your registered email.",
        })}
      </p>

      <div className="mt-10 w-full max-w-md rounded-panel border border-black/[.06] bg-white p-6 text-left shadow-elevated">
        <div className="flex items-center justify-between">
          <span className="eyebrow">{t({ es: "Voucher", en: "Voucher" })}</span>
          <span className="font-mono text-[13px] font-semibold text-blue-700">{voucher}</span>
        </div>
        <dl className="mt-4 flex flex-col gap-2.5 text-[14px]">
          <div className="flex justify-between">
            <dt className="text-ink-500">{t({ es: "Plan", en: "Plan" })}</dt>
            <dd className="font-semibold text-ink-900">{plan?.name ?? "—"}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink-500">{t({ es: "Ruta", en: "Route" })}</dt>
            <dd className="text-ink-900">{quote.origin} → {quote.destination}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink-500">{t({ es: "Viajeros", en: "Travelers" })}</dt>
            <dd className="text-ink-900">{quote.travelers.length}</dd>
          </div>
          <div className="flex justify-between border-t border-line-300 pt-2.5">
            <dt className="font-semibold text-ink-900">{t({ es: "Total pagado", en: "Total paid" })}</dt>
            <dd className="font-display text-[16px] font-bold text-blue-700">{formatUSD(total)}</dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <CTAButton
            type="button"
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => toast(t({ es: "Descarga simulada.", en: "Simulated download." }))}
          >
            <Download className="h-4 w-4" /> {t({ es: "Descargar", en: "Download" })}
          </CTAButton>
          <CTAButton
            type="button"
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => toast(t({ es: "Reenviado por correo.", en: "Re-sent by email." }))}
          >
            <Mail className="h-4 w-4" /> {t({ es: "Reenviar", en: "Resend" })}
          </CTAButton>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <Link
          href={ROUTES.home}
          onClick={reset}
          className="text-[14px] font-semibold text-blue-700 hover:underline"
        >
          {t({ es: "Volver al inicio", en: "Back to home" })}
        </Link>
        <BrandSeal tone="light" />
      </div>
    </div>
  );
}
