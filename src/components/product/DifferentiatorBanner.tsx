"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { ProductDifferentiator } from "@/lib/content/products";

/**
 * DifferentiatorBanner — el argumento de venta incopiable del producto, contado
 * en lenguaje humano con contraste explícito ("a diferencia de otras asistencias…").
 * Banda navy a todo el ancho para que golpee temprano, distinta del ContrastBlock
 * genérico (asistencia vs seguro).
 */
export function DifferentiatorBanner({ data }: { data: ProductDifferentiator }) {
  const { t } = useLocale();

  return (
    <section className="section-y bg-hero-navy text-white">
      <div className="container-max">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-500">
            <Sparkles aria-hidden className="h-3.5 w-3.5" />
            {t(data.eyebrow)}
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            {t(data.title)}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-card border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                {t({ es: "El resto del mercado", en: "The rest of the market" })}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{t(data.others)}</p>
            </div>
            <div className="rounded-card border-2 border-green-500 bg-white/[0.07] p-6 shadow-glow">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-green-500">
                <ArrowRight aria-hidden className="h-3.5 w-3.5" />
                {t({ es: "Con We Assist", en: "With We Assist" })}
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">
                {t(data.weassist)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
