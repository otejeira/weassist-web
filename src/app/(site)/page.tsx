"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { QuoteBox } from "@/components/quote/QuoteBox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCTA } from "@/components/product/FinalCTA";
import { CTAButton } from "@/components/ui/CTAButton";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal";
import { AlliancesMarquee } from "@/components/layout/AlliancesMarquee";
import { ContrastBlock } from "@/components/brand/ContrastBlock";
import {
  DIFFERENTIATORS,
  HOME_BENEFITS,
  HOME_STATS,
  HOME_CASES,
  HOME_PLANS,
  HOME_STEPS,
  ECOSYSTEM_CARDS,
  ECOSYSTEM_STATS,
  HOME_FAQ,
} from "@/lib/content/home";
import { ROUTES } from "@/lib/nav";

export default function HomePage() {
  const { t } = useLocale();
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <>
      {/* HERO + cotizador */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M-20 80 C 260 40, 420 300, 760 200 S 1200 140, 1240 360"
            fill="none"
            stroke="#10ade4"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="2 10"
            strokeOpacity={0.4}
            className="animate-dashMove"
          />
        </svg>
        <div className="container-max relative grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="eyebrow text-cyan-500">The Assistance Company</p>
            <h1 className="h1-hero mt-3">
              {t({ es: "Aquí cuando ", en: "Here when it " })}
              <span className="text-green-500">{t({ es: "importa", en: "matters" })}</span>.
            </h1>
            <p className="lead mt-4 max-w-xl text-white/70">
              {t({
                es: "Un seguro te reembolsa semanas después — si lo aprueban. Una asistencia te resuelve en el momento. Nosotros pagamos directo al proveedor, sin deducibles, con humanos que contestan 24/7/365.",
                en: "Insurance reimburses you weeks later — if it's approved. Assistance solves it on the spot. We pay the provider directly, no deductibles, with humans who answer 24/7/365.",
              })}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href={ROUTES.comprarPlanes}>
                {t({ es: "Cotiza tu plan →", en: "Get your quote →" })}
              </CTAButton>
              <CTAButton href={ROUTES.beneficios} variant="outlineWhite">
                {t({ es: "Ver beneficios", en: "View benefits" })}
              </CTAButton>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-white/70">
              {DIFFERENTIATORS.map((item) => (
                <li key={item.title.es} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
                  {t(item.title)}
                </li>
              ))}
            </ul>
          </div>
          <QuoteBox />
        </div>
      </section>

      {/* Respaldo y alianzas — cinta animada */}
      <AlliancesMarquee />

      {/* Diferenciadores — banda de estadísticas */}
      <section className="border-b border-line-300 bg-surface-100">
        <div className="container-max grid grid-cols-2 gap-8 py-11 lg:grid-cols-4">
          {HOME_STATS.map((stat) => (
            <div key={stat.value}>
              <p className="font-display text-[32px] font-extrabold text-navy-900">{stat.value}</p>
              <p className="mt-1 text-[13px] leading-snug text-ink-600">{t(stat.label)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Asistencia, no seguro — bloque de contraste (nombra al villano) */}
      <ContrastBlock />

      {/* Casos reales — prueba antes de la oferta */}
      <section className="bg-hero-navy text-white section-y">
        <div className="container-max">
          <SectionHeading
            tone="dark"
            eyebrow={t({ es: "Casos reales", en: "Real cases" })}
            title={t({ es: "Aquí cuando importó", en: "Here when it mattered" })}
            description={t({
              es: "No prometemos confianza. La demostramos. Tres historias reales de clientes — anonimizadas — que definen cómo trabajamos.",
              en: "We don't promise trust. We prove it. Three real, anonymized client stories that define how we work.",
            })}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {HOME_CASES.map((item, i) => (
              <Reveal
                key={item.badge.es}
                delay={i * 90}
                className="flex flex-col rounded-card border border-white/10 bg-white/[.05] p-5 transition-all hover:-translate-y-1 hover:bg-white/[.09]"
              >
                <PhotoSlot
                  tone="dark"
                  ratio="16/9"
                  className="mb-5"
                  subject={t({ es: "Rostro del cliente asistido", en: "Portrait of the assisted client" })}
                  direction={t(item.badge)}
                />
                <p className="px-2 text-[11px] font-bold uppercase tracking-wide" style={{ color: item.accent }}>
                  {t(item.badge)}
                </p>
                <h3 className="mt-3.5 px-2 font-display text-[19px] font-bold leading-snug text-white">
                  {t(item.title)}
                </h3>
                <p className="mt-3.5 flex-1 px-2 text-[13.5px] leading-relaxed text-white/70">{t(item.description)}</p>
                <div className="mx-2 mt-3.5 flex items-baseline gap-2 border-t border-white/10 pt-3.5">
                  <span className="font-display text-[24px] font-extrabold" style={{ color: item.accent }}>
                    {t(item.outcomeStrong)}
                  </span>
                  <span className="text-[12.5px] text-white/65">{t(item.outcomeText)}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-white/60">
            {t({ es: "Buscamos razones para ayudarte, no para negarte.", en: "We look for reasons to help you, not to deny you." })}{" "}
            <Link href={ROUTES.asistencia} className="font-semibold text-cyan-400 hover:underline">
              {t({ es: "Conoce más casos →", en: "See more cases →" })}
            </Link>
          </p>
        </div>
      </section>

      {/* Planes */}
      <section className="section-y">
        <div className="container-max">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">{t({ es: "Nuestros planes", en: "Our plans" })}</p>
              <h2 className="h2 mt-3">
                {t({ es: "Una asistencia para cada forma de viajar", en: "Assistance for every way to travel" })}
              </h2>
              <p className="lead mt-3">
                {t({
                  es: "Elige la línea que se ajusta a tu viaje. Todos los planes incluyen soporte humano 24/7/365, sin deducibles.",
                  en: "Choose the line that fits your trip. Every plan includes human support 24/7/365, with no deductibles.",
                })}
              </p>
            </div>
            <Link href={ROUTES.beneficios} className="pb-1.5 text-[14px] font-semibold text-blue-700 hover:underline">
              {t({ es: "Ver todos los planes →", en: "See all plans →" })}
            </Link>
          </div>
          <Reveal className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_PLANS.map((plan, i) => {
              const isBlue = hoveredPlan === null ? plan.featured : hoveredPlan === i;
              return (
                <Link
                  key={plan.href}
                  href={plan.href}
                  onMouseEnter={() => setHoveredPlan(i)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={cn(
                    "relative flex flex-col gap-2.5 overflow-hidden rounded-card p-7 shadow-card transition-[background-color,box-shadow,border-color] duration-300",
                    isBlue
                      ? "border border-transparent bg-hero-navy text-white shadow-glow"
                      : "border border-black/[.07] bg-white",
                  )}
                >
                  {plan.badge ? (
                    <span className="absolute right-3.5 top-3.5 rounded-full bg-green-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      {t(plan.badge)}
                    </span>
                  ) : null}
                  <Icon
                    name={plan.icon}
                    className={cn("h-7 w-7 transition-colors duration-300", isBlue ? "text-green-500" : "text-cyan-500")}
                    strokeWidth={1.8}
                  />
                  <h3 className={cn("font-display text-[16px] font-bold transition-colors duration-300", isBlue ? "text-white" : "text-navy-900")}>
                    {t(plan.title)}
                  </h3>
                  <p className={cn("flex-1 text-[13px] leading-relaxed transition-colors duration-300", isBlue ? "text-white/70" : "text-ink-600")}>
                    {t(plan.description)}
                  </p>
                  <p className={cn("text-[11px] uppercase tracking-wide transition-colors duration-300", isBlue ? "text-white/60" : "text-ink-500")}>
                    {t({ es: "Desde", en: "From" })}
                    <span className={cn("mt-0.5 block font-display text-[26px] font-extrabold transition-colors duration-300", isBlue ? "text-white" : "text-navy-900")}>
                      {plan.price}
                      <span className={cn("text-[12px] font-semibold transition-colors duration-300", isBlue ? "text-white/60" : "text-ink-500")}>
                        {t(plan.priceUnit)}
                      </span>
                    </span>
                  </p>
                </Link>
              );
            })}
          </Reveal>
          <p className="mt-4 text-[11.5px] text-ink-500">
            {t({
              es: 'Precios mostrados "desde", de carácter ilustrativo. Beneficios y límites sujetos a las condiciones generales de cada plan.',
              en: 'Prices shown "from" are illustrative. Benefits and limits are subject to each plan\'s general conditions.',
            })}
          </p>
        </div>
      </section>

      {/* Cómo funciona — 3 pasos */}
      <section className="relative overflow-hidden bg-surface-100 section-y">
        <div className="container-max relative">
          <p className="eyebrow">{t({ es: "Cómo funciona", en: "How it works" })}</p>
          <h2 className="h2 mt-3">{t({ es: "Compra tu asistencia en 3 pasos", en: "Buy your assistance in 3 steps" })}</h2>
          <div className="relative mt-12">
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
              className="pointer-events-none absolute left-[8%] right-[8%] top-4 hidden h-14 md:block"
              style={{ width: "84%" }}
            >
              <path
                d="M0 30 Q250 -10 500 30 T1000 30"
                fill="none"
                stroke="#10ade4"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="2 9"
                strokeOpacity={0.5}
                className="animate-dashMove"
              />
            </svg>
            <ol className="relative grid gap-10 md:grid-cols-3">
              {HOME_STEPS.map((step) => (
                <li key={step.number}>
                  <span
                    className="inline-grid h-11 w-11 place-items-center rounded-full font-display text-[15px] font-bold text-white ring-[6px] ring-surface-100"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-[19px] font-bold text-navy-900">{t(step.title)}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{t(step.description)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-y">
        <div className="container-max">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-green-700">{t({ es: "Beneficios", en: "Benefits" })}</p>
              <h2 className="h2 mt-3">{t({ es: "Lo que recibes con We Assist", en: "What you get with We Assist" })}</h2>
              <p className="lead mt-3">
                {t({
                  es: "Acompañamiento real, no solo una póliza. Nosotros llamamos al hospital; tú solo te recuperas.",
                  en: "Real support, not just a policy. We call the hospital; you just recover.",
                })}
              </p>
            </div>
            <Link href={ROUTES.beneficios} className="pb-1.5 text-[14px] font-semibold text-blue-700 hover:underline">
              {t({ es: "Ver todos los beneficios →", en: "See all benefits →" })}
            </Link>
          </div>
          <Reveal className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_BENEFITS.map((item) => (
              <div
                key={item.title.es}
                className="flex flex-col gap-2.5 rounded-card border border-black/[.07] bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <Icon name={item.icon} className="h-6 w-6 text-green-700" strokeWidth={1.8} />
                <h3 className="font-display text-[15.5px] font-bold text-navy-900">{t(item.title)}</h3>
                <p className="text-[13px] leading-relaxed text-ink-600">{t(item.description)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Ecosistema */}
      <section className="bg-surface-100 section-y">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "Ecosistema We Assist", en: "We Assist ecosystem" })}</p>
          <h2 className="h2 mt-3 max-w-2xl">
            {t({
              es: "El viaje es la puerta de entrada. El cuidado es la razón de quedarse.",
              en: "Travel is the entry point. Care is the reason to stay.",
            })}
          </h2>
          <p className="lead mt-3 max-w-2xl">
            {t({
              es: "Una plataforma de asistencia y bienestar global: viajes, salud y soluciones para empresas y aliados.",
              en: "A global assistance and wellbeing platform: travel, health and solutions for companies and partners.",
            })}
          </p>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {ECOSYSTEM_CARDS.map((card) => (
              <Link
                key={card.title.es}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-2.5 rounded-card border border-black/[.07] border-t-[3px] bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
                style={{ borderTopColor: card.accent }}
              >
                <h3 className="font-display text-[17px] font-bold" style={{ color: card.textAccent }}>
                  {t(card.title)}
                </h3>
                <p className="flex-1 text-[13.5px] leading-relaxed text-ink-600">{t(card.description)}</p>
                <span className="text-[13.5px] font-semibold" style={{ color: card.textAccent }}>
                  {t({ es: "Explorar →", en: "Explore →" })}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 border-t border-black/[.08] pt-10">
            <p className="font-display text-[17px] font-semibold text-navy-900">
              {t({ es: "El poder de nuestro ecosistema", en: "The power of our ecosystem" })}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {ECOSYSTEM_STATS.map((stat) => (
                <div key={stat.value}>
                  <p className="font-display text-[30px] font-extrabold text-navy-900">{stat.value}</p>
                  <p className="mt-1 text-[12.5px] leading-snug text-ink-600">{t(stat.label)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section-y">
        <div className="container-max grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">{t({ es: "Preguntas frecuentes", en: "FAQ" })}</p>
            <h2 className="h2 mt-3">{t({ es: "Resolvemos tus dudas", en: "We answer your questions" })}</h2>
            <p className="lead mt-3">
              {t({
                es: "Sin jerga técnica. Sin letra chica. Lo que ves es lo que tienes.",
                en: "No technical jargon. No fine print. What you see is what you get.",
              })}
            </p>
            <Link href={ROUTES.preguntas} className="mt-5 inline-block text-[14px] font-semibold text-blue-700 hover:underline">
              {t({ es: "Ver todas las preguntas →", en: "See all questions →" })}
            </Link>
          </div>
          <Accordion
            defaultOpen={[HOME_FAQ[0].q.es]}
            items={HOME_FAQ.map((item) => ({
              id: item.q.es,
              title: t(item.q),
              content: t(item.a),
            }))}
          />
        </div>
      </section>

      <FinalCTA
        title={{
          es: "Somos la Asistencia que Sí responde.",
          en: "We're the assistance that answers.",
        }}
        subtitle={{
          es: "Cotiza en un minuto y viaja con alguien que aparece cuando importa.",
          en: "Get a quote in a minute and travel with someone who shows up when it matters.",
        }}
      />
    </>
  );
}
