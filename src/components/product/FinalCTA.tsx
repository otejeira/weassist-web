"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Localized } from "@/lib/i18n/locale";
import { HexBadge } from "@/components/brand/HexWe";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

/**
 * FinalCTA — cierre navy donde la RouteLine termina en un hexágono We verde.
 * Reutilizado en producto, home y otras páginas.
 */
export function FinalCTA({
  title,
  subtitle,
  ctaLabel,
  ctaHref = ROUTES.comprarPlanes,
}: {
  title?: Localized<string>;
  subtitle?: Localized<string>;
  ctaLabel?: Localized<string>;
  ctaHref?: string;
}) {
  const { t } = useLocale();
  return (
    <section className="relative overflow-hidden bg-hero-navy text-white section-y">
      {/* La ruta llega y termina en el hexágono verde */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full"
      >
        <path
          d="M-20 40 C 300 120, 700 -20, 1000 90"
          fill="none"
          stroke="#7cc249"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="2 10"
          strokeOpacity={0.5}
          className="animate-dashMove"
        />
      </svg>
      <div className="container-max relative flex flex-col items-center gap-5 text-center">
        <HexBadge variant="brand" fill="#7cc249" size={64} />
        <h2 className="h2 max-w-2xl text-white">
          {title ? t(title) : t({ es: "Tu próximo viaje, protegido.", en: "Your next trip, protected." })}
        </h2>
        {subtitle && <p className="lead max-w-xl text-white/70">{t(subtitle)}</p>}
        <CTAButton href={ctaHref}>
          {ctaLabel ? t(ctaLabel) : t({ es: "Cotiza tu plan →", en: "Get a quote →" })}
        </CTAButton>
      </div>
    </section>
  );
}
