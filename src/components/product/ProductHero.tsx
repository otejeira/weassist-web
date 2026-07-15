"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Localized } from "@/lib/i18n/locale";
import { CTAButton } from "@/components/ui/CTAButton";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
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
      <div className="container-max relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="eyebrow text-cyan-500">{t(eyebrow)}</p>
          <h1 className="h1-hero mt-3 max-w-2xl">{t(title)}</h1>
          <p className="lead mt-4 max-w-xl text-white/70">{t(subtitle)}</p>
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
        <PhotoSlot
          tone="dark"
          ratio="4/3"
          className="hidden lg:flex"
          subject={t({ es: "Viajero real en su destino", en: "Real traveler at their destination" })}
          direction={t({
            es: "Primer plano cálido de una persona asistida durante su viaje. El cian entra como luz sobre el navy. Rostro genuino, nada de stock corporativo.",
            en: "Warm close-up of a person being assisted on their trip. Cyan as light over navy. Genuine face, no corporate stock.",
          })}
        />
      </div>
    </section>
  );
}
