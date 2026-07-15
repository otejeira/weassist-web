"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTRAST, type HomeCase } from "@/lib/content/home";

/**
 * ContrastBlock — "Asistencia, no seguro": nombra al villano (el reembolso) y
 * contrasta seguro tradicional vs We Assist. La tarjeta We Assist es navy y
 * dominante, así el bloque funciona sobre fondo blanco (home) o surface-100
 * (producto). Con `featuredCase` añade un caso real como prueba.
 */
export function ContrastBlock({
  featuredCase,
  className,
}: {
  featuredCase?: HomeCase;
  className?: string;
}) {
  const { t } = useLocale();

  return (
    <section className={cn("section-y", className)}>
      <div className="container-max">
        <SectionHeading
          align="center"
          eyebrow={t(CONTRAST.eyebrow)}
          title={t(CONTRAST.title)}
          description={t(CONTRAST.lead)}
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* Seguro tradicional — apagado, secundario */}
          <div className="rounded-card border border-line-200 bg-white p-6">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-ink-500">
              {t(CONTRAST.insuranceLabel)}
            </p>
            <ul className="space-y-4">
              {CONTRAST.rows.map((row, i) => (
                <li key={i} className="flex gap-3 text-ink-500">
                  <XCircle aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-ink-300" />
                  <span className="text-sm leading-relaxed">{t(row.insurance)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* We Assist — navy, dominante */}
          <div className="rounded-card bg-hero-navy p-6 text-white shadow-glow">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-cyan-500">
              {t(CONTRAST.weassistLabel)}
            </p>
            <ul className="space-y-4">
              {CONTRAST.rows.map((row, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-sm leading-relaxed text-white/90">{t(row.weassist)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-base font-medium text-ink-600">
          {t(CONTRAST.closing)}
        </p>

        {featuredCase && (
          <article className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-card bg-hero-navy p-8 text-white shadow-glow">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${featuredCase.accent}22`, color: featuredCase.accent }}
            >
              {t(featuredCase.badge)}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-white">
              {t(featuredCase.title)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {t(featuredCase.description)}
            </p>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm">
              <strong className="font-semibold" style={{ color: featuredCase.accent }}>
                {t(featuredCase.outcomeStrong)}
              </strong>{" "}
              <span className="text-white/70">{t(featuredCase.outcomeText)}</span>
            </p>
          </article>
        )}
      </div>
    </section>
  );
}
