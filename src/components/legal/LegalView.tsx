"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { LEGAL_SECTIONS, LEGAL_SLUGS, type LegalSlug } from "@/lib/content/legal";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/cn";

/** Vista de un documento legal con navegación entre secciones. */
export function LegalView({ slug }: { slug: LegalSlug }) {
  const { t } = useLocale();
  const section = LEGAL_SECTIONS[slug];

  return (
    <section className="section-y">
      <div className="container-max grid gap-10 lg:grid-cols-[220px_1fr]">
        <nav aria-label={t({ es: "Secciones legales", en: "Legal sections" })} className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow mb-3">{t({ es: "Legal", en: "Legal" })}</p>
          <ul className="flex flex-col gap-1">
            {LEGAL_SLUGS.map((s) => (
              <li key={s}>
                <Link
                  href={`/legal/${s}`}
                  aria-current={s === slug ? "page" : undefined}
                  className={cn(
                    "block rounded-control px-3 py-2 text-[14px]",
                    s === slug
                      ? "bg-surface-blue font-semibold text-blue-700"
                      : "text-ink-600 hover:bg-surface-100",
                  )}
                >
                  {t(LEGAL_SECTIONS[s].title)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <article className="max-w-2xl">
          <h1 className="h1">{t(section.title)}</h1>
          <p className="lead mt-3">{t(section.intro)}</p>
          <div className="mt-8 flex flex-col gap-8">
            {section.blocks.map((block) => (
              <div key={block.heading.es}>
                <h2 className="h3">{t(block.heading)}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{t(block.body)}</p>
              </div>
            ))}
          </div>
          <p className="fine-print mt-10">
            © {COMPANY.year} {COMPANY.legalName} · {COMPANY.ruc}.{" "}
            {t({
              es: "Texto ilustrativo — pendiente de revisión por el equipo legal del cliente.",
              en: "Illustrative text — pending review by the client's legal team.",
            })}
          </p>
        </article>
      </div>
    </section>
  );
}
