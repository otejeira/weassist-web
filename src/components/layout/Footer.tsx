"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { FOOTER_DESCRIPTION, getFooterColumns, type FooterColumn } from "@/lib/content/footer";
import { CERTS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { BrandSeal } from "@/components/brand/BrandSeal";
import { LanguageToggle } from "./LanguageToggle";

/**
 * Footer global (fondo navy-950). Bloque de marca + 4 columnas + certificaciones + disclaimer.
 * Sustituye la columna Productos por soluciones en Corporate/Business (según la ruta).
 */
export function Footer({ columns }: { columns?: FooterColumn[] }) {
  const { t } = useLocale();
  const pathname = usePathname();
  const cols = columns ?? getFooterColumns(pathname);

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-max py-14">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.05fr]">
          {/* Bloque de marca */}
          <div className="flex flex-col gap-3">
            <Logo variant="white" width={132} />
            <BrandSeal />
            <p className="max-w-xs text-[13px] leading-relaxed">{t(FOOTER_DESCRIPTION)}</p>
            <div className="mt-1">
              <LanguageToggle tone="dark" />
            </div>
          </div>

          {cols.map((col) => (
            <nav key={t(col.title)} aria-label={t(col.title)} className="flex flex-col gap-2.5">
              <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.08em] text-white">
                {t(col.title)}
              </h3>
              {col.links.map((link) => {
                const cls = cn(
                  "text-[13px] transition-colors hover:text-white",
                  link.tone === "cyan" && "text-cyan-500 hover:text-cyan-500",
                  link.tone === "green" && "text-green-500 hover:text-green-500",
                );
                return link.external ? (
                  <a key={t(link.label)} href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {t(link.label)}
                  </a>
                ) : (
                  <Link key={t(link.label)} href={link.href} className={cls}>
                    {t(link.label)}
                  </Link>
                );
              })}
            </nav>
          ))}
        </div>

        {/* Divisor + certificaciones */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-2">
            {CERTS.map((cert) => (
              <span key={cert} className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-white/60">
                {cert}
              </span>
            ))}
          </div>
          <p className="mt-5 fine-print max-w-3xl text-white/40">
            {COMPANY.legalName} · {COMPANY.ruc} · {COMPANY.address}. Texto legal de referencia —
            reemplazar por el contenido vigente.
          </p>
          <p className="mt-2 text-[11px] text-white/40">© {COMPANY.year} We Assist. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
