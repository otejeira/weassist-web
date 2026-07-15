"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Localized } from "@/lib/i18n/locale";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

/**
 * ProductHero — hero navy compartido por las 4 páginas de producto.
 * eyebrow "Travel · <línea>", H1, subtítulo, CTA primario + secundario outline blanco.
 * La RouteLine nace del logo del header y entra a la sección.
 */
export function ProductHero({
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow: Localized<string>;
  title: Localized<string>;
  subtitle: Localized<string>;
  primaryLabel?: Localized<string>;
  secondaryLabel?: Localized<string>;
  secondaryHref?: string;
}) {
  const { t } = useLocale();
  return (
    <section className="relative overflow-hidden bg-hero-navy text-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          d="M-20 60 C 260 40, 360 260, 700 180 S 1200 120, 1240 300"
          fill="none"
          stroke="#10ade4"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="2 10"
          strokeOpacity={0.4}
          className="animate-dashMove"
        />
      </svg>
      <div className="container-max relative py-16 lg:py-20">
        <p className="eyebrow">{t(eyebrow)}</p>
        <h1 className="h1-hero mt-3 max-w-3xl">{t(title)}</h1>
        <p className="lead mt-4 max-w-2xl text-white/70">{t(subtitle)}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <CTAButton href={ROUTES.comprarPlanes}>
            {primaryLabel ? t(primaryLabel) : t({ es: "Cotizar ahora →", en: "Get a quote →" })}
          </CTAButton>
          {secondaryLabel && (
            <CTAButton href={secondaryHref ?? ROUTES.beneficios} variant="outlineWhite">
              {t(secondaryLabel)}
            </CTAButton>
          )}
        </div>
      </div>
    </section>
  );
}
