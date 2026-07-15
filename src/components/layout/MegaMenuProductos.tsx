"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { PRODUCT_MENU, ROUTES } from "@/lib/nav";
import { HEALTHIER_URL } from "@/lib/constants";
import { HexBadge } from "@/components/brand/HexWe";

/**
 * Mega-menú "Productos": panel blanco full-width bajo el header.
 * Grid de 4 líneas + celda CTA navy + fila inferior (comparar / Healthier↗).
 * Controlado por Header (visibilidad + cierre con Esc/click fuera).
 */
export function MegaMenuProductos({ onNavigate }: { onNavigate: () => void }) {
  const { t } = useLocale();
  return (
    <div className="rounded-b-panel border-t border-black/[.06] bg-white p-6 shadow-elevated">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCT_MENU.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="group flex gap-3 rounded-card p-3 transition-colors hover:bg-surface-blue"
          >
            <HexBadge variant="brand" fill={item.accent} size={46} />
            <span className="flex flex-col">
              <span
                className="text-[9.5px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "#10ade4" }}
              >
                {t(item.eyebrow)}
              </span>
              <span className="font-display text-[15px] font-bold text-ink-900">
                {t(item.title)}
              </span>
              <span className="text-[12px] text-ink-500">{t(item.description)}</span>
            </span>
          </Link>
        ))}

        {/* 5ª celda: CTA navy */}
        <Link
          href={ROUTES.comprarPlanes}
          onClick={onNavigate}
          className="flex flex-col justify-between rounded-card bg-navy-950 p-4 text-white transition-transform hover:-translate-y-0.5"
        >
          <span className="font-display text-[15px] font-bold">
            {t({ es: "¿No sabes cuál elegir?", en: "Not sure which one?" })}
          </span>
          <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-cyan-500">
            {t({ es: "Cotizar", en: "Get a quote" })} <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/[.06] pt-4 text-[13px]">
        <Link
          href={ROUTES.comprarComparar}
          onClick={onNavigate}
          className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-cyan-500"
        >
          {t({ es: "Comparar todos los planes", en: "Compare all plans" })}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={HEALTHIER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#004AAD]"
        >
          {t({ es: "¿Salud fuera del viaje? Assist Healthier ↗", en: "Health beyond travel? Assist Healthier ↗" })}
        </a>
      </div>
    </div>
  );
}
