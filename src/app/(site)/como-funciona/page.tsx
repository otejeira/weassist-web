"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { ProductHero } from "@/components/product/ProductHero";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { ROUTES } from "@/lib/nav";
import { cn } from "@/lib/cn";

const BUY_STEPS = [
  {
    number: "01",
    accent: "#003366",
    title: { es: "Cotiza", en: "Get a quote" },
    description: {
      es: "Cuéntanos tu viaje, fechas y viajeros. Ves planes y precios al instante, sin registro.",
      en: "Tell us your trip, dates and travelers. See plans and prices instantly, no sign-up.",
    },
  },
  {
    number: "02",
    accent: "#003366",
    title: { es: "Elige tu plan", en: "Choose your plan" },
    description: {
      es: "Compara beneficios y agrega upgrades (preexistencias, deportes, cancelación) a tu medida.",
      en: "Compare benefits and add upgrades (pre-existing, sports, cancellation) to fit you.",
    },
  },
  {
    number: "03",
    accent: "#3e7d1c",
    title: { es: "Compra en minutos", en: "Buy in minutes" },
    description: {
      es: "Paga en línea y recibe tu voucher digital con los canales de asistencia listos para viajar.",
      en: "Pay online and get your digital voucher with assistance channels ready to travel.",
    },
  },
] as const;

const REQUEST_STEPS = [
  {
    accent: "#7cc249",
    title: { es: "Contáctanos 24/7", en: "Contact us 24/7" },
    description: {
      es: "Escríbenos o llámanos por los canales de tu voucher, a cualquier hora y desde cualquier país.",
      en: "Message or call us through your voucher channels, any time and from any country.",
    },
  },
  {
    accent: "#7cc249",
    title: { es: "Coordinamos", en: "We coordinate" },
    description: {
      es: "Un especialista te orienta al proveedor adecuado y coordina el servicio según tu plan.",
      en: "A specialist guides you to the right provider and coordinates the service per your plan.",
    },
  },
  {
    accent: "#10ade4",
    title: { es: "Damos seguimiento", en: "We follow up" },
    description: {
      es: "Acompañamos el caso hasta su resolución y gestionamos lo que aplique a tu plan.",
      en: "We stay with the case until it's resolved and manage what applies to your plan.",
    },
  },
] as const;

const CASES = [
  {
    title: { es: "Te enfermas en el extranjero y no sabes a dónde ir.", en: "You get sick abroad and don't know where to go." },
    answer: {
      es: "Te orientamos al proveedor adecuado y coordinamos la atención según tu plan.",
      en: "We guide you to the right provider and coordinate care according to your plan.",
    },
  },
  {
    title: { es: "Tu equipaje no llega con tu vuelo.", en: "Your baggage doesn't arrive with your flight." },
    answer: {
      es: "Te guiamos en el reporte y aplicamos los beneficios de equipaje contratados.",
      en: "We guide you through the report and apply the baggage benefits you purchased.",
    },
  },
  {
    title: { es: "Tu vuelo se cancela y pierdes una conexión.", en: "Your flight is cancelled and you miss a connection." },
    answer: {
      es: "Activamos los beneficios de demora o cancelación disponibles en tu plan.",
      en: "We activate the delay or cancellation benefits available in your plan.",
    },
  },
] as const;

export default function ComoFuncionaPage() {
  const { t } = useLocale();
  return (
    <>
      <ProductHero
        eyebrow={{ es: "Cómo funciona", en: "How it works" }}
        title={{ es: "Tu asistencia, de la compra al viaje", en: "Your assistance, from purchase to trip" }}
        subtitle={{
          es: "Comprar y usar We Assist es simple. Así funciona, de principio a fin.",
          en: "Buying and using We Assist is simple. Here's how it works, start to finish.",
        }}
      />

      {/* Antes de viajar — 3 pasos */}
      <section className="section-y bg-white">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "Antes de viajar", en: "Before you travel" })}</p>
          <h2 className="h2 mt-3 text-ink-900">
            {t({ es: "Compra tu asistencia en 3 pasos", en: "Buy your assistance in 3 steps" })}
          </h2>
          <Reveal className="relative mt-12">
            <svg
              aria-hidden="true"
              viewBox="0 0 1120 60"
              preserveAspectRatio="none"
              className="pointer-events-none absolute left-0 top-4 hidden h-14 w-full lg:block"
            >
              <path
                d="M 40 30 Q 300 -10 560 30 T 1080 30"
                fill="none"
                stroke="#10ade4"
                strokeWidth={2}
                strokeDasharray="2 9"
                strokeLinecap="round"
                strokeOpacity={0.5}
                className="animate-dashMove"
              />
            </svg>
            <div className="relative grid gap-12 lg:grid-cols-3">
              {BUY_STEPS.map((step) => (
                <div key={step.number}>
                  <span
                    className="inline-grid h-[46px] w-[46px] place-items-center rounded-full font-display text-[15px] font-bold text-white ring-[6px] ring-white"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-[19px] font-bold text-navy-900">{t(step.title)}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{t(step.description)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Durante el viaje + Casos reales */}
      <section className="section-y bg-surface-100">
        <div className="container-max grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="eyebrow text-green-700">{t({ es: "Durante el viaje", en: "During the trip" })}</p>
            <h2 className="h2 mt-3 text-ink-900">
              {t({ es: "Cuando necesitas asistencia", en: "When you need assistance" })}
            </h2>
            <p className="lead mt-3">
              {t({ es: "Si algo pasa, no estás solo. Así respondemos en el momento.", en: "If something happens, you're not alone. Here's how we respond in the moment." })}
            </p>
            <div className="mt-6 flex flex-col">
              {REQUEST_STEPS.map((step, i) => (
                <div key={step.title.es} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className="mt-1 h-3 w-3 flex-none rounded-full"
                      style={{ backgroundColor: step.accent }}
                    />
                    {i < REQUEST_STEPS.length - 1 && <span className="w-px flex-1 bg-navy-900/15" />}
                  </div>
                  <div className={cn(i < REQUEST_STEPS.length - 1 && "pb-5")}>
                    <p className="font-display text-[15.5px] font-bold text-navy-900">{t(step.title)}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink-600">{t(step.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">{t({ es: "Casos reales", en: "Real cases" })}</p>
            <h3 className="mt-3 font-display text-[24px] font-bold text-ink-900">{t({ es: "¿Qué pasa si…?", en: "What if…?" })}</h3>
            <Reveal className="mt-5 flex flex-col gap-3">
              {CASES.map((c) => (
                <div
                  key={c.title.es}
                  className="rounded-[16px] border border-black/[.07] bg-white px-6 py-5 transition-transform duration-300 ease-brand hover:-translate-y-1"
                >
                  <p className="font-display text-[15px] font-semibold text-navy-900">{t(c.title)}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                    <span className="font-bold text-green-700">→</span> {t(c.answer)}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-surface-100 pb-16">
        <div className="container-max flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[24px] bg-hero-navy p-10 text-white lg:flex-row lg:items-center">
          <div>
            <h2 className="h2 text-white">{t({ es: "Empieza tu cotización", en: "Start your quote" })}</h2>
            <p className="mt-3 text-[15px] text-white/70">
              {t({
                es: "En pocos minutos tendrás tu plan, tu precio y tu voucher digital.",
                en: "In a few minutes you'll have your plan, your price and your digital voucher.",
              })}
            </p>
          </div>
          <div className="flex flex-none flex-wrap gap-3">
            <CTAButton href={ROUTES.comprarPlanes} variant="white">
              {t({ es: "Cotizar ahora →", en: "Get a quote →" })}
            </CTAButton>
            <CTAButton href={ROUTES.asistencia} variant="outlineWhite">
              {t({ es: "Hablar con asistencia", en: "Talk to assistance" })}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
