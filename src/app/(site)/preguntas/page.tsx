"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";
import { FAQ_ITEMS, FAQ_CATEGORIES, type FaqCategory } from "@/lib/content/faq";
import { cn } from "@/lib/cn";

export default function PreguntasPage() {
  const { t } = useLocale();
  const [category, setCategory] = useState<FaqCategory | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_ITEMS.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (!q) return true;
      return t(item.q).toLowerCase().includes(q) || t(item.a).toLowerCase().includes(q);
    });
  }, [category, query, t]);

  const items: AccordionItem[] = filtered.map((item, i) => ({
    id: `faq-${item.category}-${i}`,
    title: t(item.q),
    content: <p>{t(item.a)}</p>,
  }));

  return (
    <>
      {/* Hero centrado con buscador */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 1280 220"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M 75 -10 C 95 100 340 150 640 120 C 880 96 1110 120 1080 230"
            fill="none"
            stroke="#10ade4"
            strokeWidth={2}
            strokeDasharray="2 10"
            strokeLinecap="round"
            strokeOpacity={0.4}
            className="animate-dashMove"
          />
        </svg>
        <div className="container-max relative py-16 text-center lg:py-20">
          <p className="eyebrow text-cyan-500">{t({ es: "Centro de ayuda", en: "Help center" })}</p>
          <h1 className="h1-hero mx-auto mt-3 max-w-2xl">{t({ es: "Preguntas frecuentes", en: "Frequently asked questions" })}</h1>
          <p className="lead mx-auto mt-4 max-w-xl text-white/70">
            {t({
              es: "Resolvemos las dudas más comunes sobre planes, beneficios y asistencia.",
              en: "We answer the most common questions about plans, benefits and assistance.",
            })}
          </p>
          <div className="mx-auto mt-7 flex max-w-lg items-center gap-2 rounded-xl bg-white p-1.5 pl-4 shadow-card">
            <Search className="h-[18px] w-[18px] shrink-0 text-ink-300" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t({ es: "Busca tu pregunta…", en: "Search your question…" })}
              aria-label={t({ es: "Buscar pregunta", en: "Search question" })}
              className="flex-1 bg-transparent text-[15px] text-ink-900 outline-none placeholder:text-ink-300"
            />
            <CTAButton size="sm" onClick={() => undefined}>
              {t({ es: "Buscar", en: "Search" })}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Lista de FAQ con filtros */}
      <section className="section-y bg-surface-100">
        <div className="container-max max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2">
            <FilterPill active={category === "all"} onClick={() => setCategory("all")}>
              {t({ es: "Todas", en: "All" })}
            </FilterPill>
            {FAQ_CATEGORIES.map((c) => (
              <FilterPill key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
                {t(c.label)}
              </FilterPill>
            ))}
          </div>

          {items.length > 0 ? (
            <Accordion
              className="mt-7"
              items={items}
              defaultOpen={items.length ? [items[0].id] : undefined}
            />
          ) : (
            <p className="mt-8 text-center text-[15px] text-ink-500">
              {t({ es: "No encontramos preguntas para tu búsqueda.", en: "No questions found for your search." })}
            </p>
          )}

          {/* Contact card */}
          <div className="mt-9 flex flex-col items-start justify-between gap-6 rounded-card border border-black/[.07] bg-white p-7 lg:flex-row lg:items-center">
            <div>
              <p className="font-display text-[19px] font-bold text-navy-900">
                {t({ es: "¿No encuentras tu respuesta?", en: "Can't find your answer?" })}
              </p>
              <p className="mt-1.5 text-[14px] text-ink-600">
                {t({
                  es: "Nuestro equipo de asistencia está disponible 24/7/365 para ayudarte.",
                  en: "Our assistance team is available 24/7/365 to help you.",
                })}
              </p>
            </div>
            <CTAButton href={ROUTES.asistencia} className="flex-none">
              {t({ es: "Contáctanos →", en: "Contact us →" })}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-2 text-[13px] font-semibold transition-colors",
        active
          ? "bg-navy-900 text-white"
          : "border border-black/[.09] bg-white text-ink-500 hover:border-cyan-500 hover:text-blue-700",
      )}
    >
      {children}
    </button>
  );
}
