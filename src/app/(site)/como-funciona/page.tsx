"use client";

import { Cpu, Video, Globe, Users, Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { ProductHero } from "@/components/product/ProductHero";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { ROUTES } from "@/lib/nav";

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

const MEDICAL_JOURNEY = [
  {
    number: "01",
    accent: "#7cc249",
    title: { es: "Nos contactas", en: "You contact us" },
    description: {
      es: "Escríbenos por WhatsApp o llámanos a cobro revertido, 24/7/365, desde cualquier país.",
      en: "Message us on WhatsApp or call us collect, 24/7/365, from any country.",
    },
  },
  {
    number: "02",
    accent: "#7cc249",
    title: { es: "Orientación y triage", en: "Guidance and triage" },
    description: {
      es: "Un especialista evalúa la urgencia y te orienta al recurso adecuado según tu caso.",
      en: "A specialist assesses the urgency and guides you to the right resource for your case.",
    },
  },
  {
    number: "03",
    accent: "#10ade4",
    title: { es: "Telemedicina o valoración", en: "Telemedicine or assessment" },
    description: {
      es: "Cuando aplica, te conectamos con un médico por telemedicina para una primera valoración.",
      en: "When it applies, we connect you with a doctor via telemedicine for an initial assessment.",
    },
  },
  {
    number: "04",
    accent: "#7cc249",
    title: { es: "Coordinamos al proveedor", en: "We coordinate the provider" },
    description: {
      es: "Activamos la red: receta electrónica, médico a domicilio, clínica u hospital, según lo que necesites.",
      en: "We activate the network: e-prescription, doctor at home, clinic or hospital, as needed.",
    },
  },
  {
    number: "05",
    accent: "#7cc249",
    title: { es: "Pagamos directo", en: "We pay directly" },
    description: {
      es: "Coordinamos y pagamos directo al proveedor. En la gran mayoría de casos coordinados, no adelantas dinero.",
      en: "We coordinate and pay the provider directly. In the vast majority of coordinated cases, you don't pay upfront.",
    },
  },
  {
    number: "06",
    accent: "#10ade4",
    title: { es: "Cierre y seguimiento", en: "Resolution and follow-up" },
    description: {
      es: "Acompañamos el caso hasta su resolución y gestionamos lo que aplique a tu plan.",
      en: "We stay with the case until it's resolved and manage what applies to your plan.",
    },
  },
] as const;

const MODEL = {
  asistencia: {
    tag: { es: "Nuestra forma de operar", en: "How we operate" },
    title: { es: "Asistencia", en: "Assistance" },
    points: [
      { es: "Coordinamos y pagamos directo al proveedor.", en: "We coordinate and pay the provider directly." },
      { es: "En la gran mayoría de casos coordinados, no adelantas dinero.", en: "In the vast majority of coordinated cases, you don't pay upfront." },
      { es: "Una sola llamada: nosotros nos encargamos del resto.", en: "One call: we handle the rest." },
    ],
  },
  reembolso: {
    tag: { es: "Cuando aplica", en: "When it applies" },
    title: { es: "Reembolso", en: "Reimbursement" },
    points: [
      { es: "Algunos gastos se gestionan por reembolso, p. ej. si pagaste directo por tu cuenta.", en: "Some expenses are handled by reimbursement, e.g. if you paid directly yourself." },
      { es: "Presentas tu solicitud con los soportes del evento.", en: "You submit your request with the event's supporting documents." },
      { es: "Te devolvemos según tu plan, normalmente en 5 a 7 días hábiles.", en: "We refund you per your plan, typically in 5 to 7 business days." },
    ],
  },
} as const;

const REEMBOLSO_STEPS = [
  {
    number: "01",
    title: { es: "Guarda tus soportes", en: "Keep your documents" },
    description: { es: "Facturas, recibos y el reporte del evento (aerolínea, clínica, policía si aplica).", en: "Invoices, receipts and the event report (airline, clinic, police if applicable)." },
  },
  {
    number: "02",
    title: { es: "Reúne tu documentación", en: "Gather your paperwork" },
    description: { es: "Tu voucher, tu identificación y los comprobantes del gasto.", en: "Your voucher, your ID and the expense receipts." },
  },
  {
    number: "03",
    title: { es: "Envía tu solicitud", en: "Submit your request" },
    description: { es: "Por los canales de asistencia. Te confirmamos que la recibimos.", en: "Through the assistance channels. We confirm we received it." },
  },
  {
    number: "04",
    title: { es: "Revisamos tu caso", en: "We review your case" },
    description: { es: "Validamos los soportes contra los beneficios de tu plan.", en: "We validate the documents against your plan's benefits." },
  },
  {
    number: "05",
    title: { es: "Te confirmamos", en: "We confirm" },
    description: { es: "Te informamos el resultado y el monto aplicable.", en: "We inform you of the outcome and the applicable amount." },
  },
  {
    number: "06",
    title: { es: "Recibes tu reembolso", en: "You receive your refund" },
    description: { es: "Normalmente en 5 a 7 días hábiles una vez aprobado.", en: "Typically in 5 to 7 business days once approved." },
  },
] as const;

const TECH_HUMANS = [
  {
    icon: Cpu,
    title: { es: "IA de pre-triage", en: "Pre-triage AI" },
    description: { es: "Tecnología (Binah.ai) que analiza una amplia gama de indicadores de salud para apoyar la orientación inicial.", en: "Technology (Binah.ai) that analyzes a wide range of health indicators to support initial guidance." },
  },
  {
    icon: Video,
    title: { es: "Telemedicina", en: "Telemedicine" },
    description: { es: "Médicos disponibles para una primera valoración a distancia, cuando el caso lo permite.", en: "Doctors available for an initial remote assessment, when the case allows." },
  },
  {
    icon: Globe,
    title: { es: "Red global de proveedores", en: "Global provider network" },
    description: { es: "Clínicas, hospitales y médicos coordinados alrededor del mundo, en tu idioma.", en: "Clinics, hospitals and doctors coordinated around the world, in your language." },
  },
  {
    icon: Users,
    title: { es: "Especialistas humanos 24/7", en: "Human specialists 24/7" },
    description: { es: "Personas reales que coordinan tu caso a cualquier hora, de principio a fin.", en: "Real people who coordinate your case any time, from start to finish." },
  },
] as const;

const SPLIT = {
  you: [
    { es: "Te pones a salvo y buscas atención si es urgente.", en: "Get to safety and seek care if it's urgent." },
    { es: "Nos contactas por los canales de tu voucher.", en: "Contact us through your voucher channels." },
    { es: "Nos cuentas qué pasó y dónde estás.", en: "Tell us what happened and where you are." },
  ],
  us: [
    { es: "Orientamos y coordinamos al proveedor adecuado.", en: "We guide you and coordinate the right provider." },
    { es: "Pagamos directo, sin que adelantes dinero en la gran mayoría de casos coordinados.", en: "We pay directly, no upfront payment in the vast majority of coordinated cases." },
    { es: "Damos seguimiento hasta cerrar el caso.", en: "We follow up until the case is closed." },
  ],
} as const;

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

      {/* Journey médico — la maquinaria de la asistencia */}
      <section className="section-y bg-surface-100">
        <div className="container-max">
          <p className="eyebrow text-green-700">{t({ es: "Durante el viaje", en: "During the trip" })}</p>
          <h2 className="h2 mt-3 text-ink-900">
            {t({ es: "Qué pasa cuando necesitas atención médica", en: "What happens when you need medical care" })}
          </h2>
          <p className="lead mt-3 max-w-2xl">
            {t({
              es: "Detrás de una sola llamada hay una maquinaria coordinada. Así se mueve, paso a paso.",
              en: "Behind a single call there's a coordinated machine. Here's how it moves, step by step.",
            })}
          </p>
          <Reveal className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {MEDICAL_JOURNEY.map((step) => (
              <div key={step.number} className="relative rounded-[16px] border border-black/[.06] bg-white p-6">
                <span
                  className="inline-grid h-[42px] w-[42px] place-items-center rounded-full font-display text-[14px] font-bold text-white"
                  style={{ backgroundColor: step.accent }}
                >
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-[16.5px] font-bold text-navy-900">
                  {t(step.title)
                    .split(/(triage)/i)
                    .map((part, i) => (/^triage$/i.test(part) ? <em key={i}>{part}</em> : part))}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{t(step.description)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Asistencia vs. reembolso */}
      <section className="section-y bg-white">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "El modelo", en: "The model" })}</p>
          <h2 className="h2 mt-3 text-ink-900">
            {t({ es: "Asistencia primero, reembolso cuando aplica", en: "Assistance first, reimbursement when it applies" })}
          </h2>
          <p className="lead mt-3 max-w-2xl">
            {t({
              es: "Nuestra prioridad es coordinar y pagar directo para que no adelantes dinero. El reembolso existe para los casos que lo requieren.",
              en: "Our priority is to coordinate and pay directly so you don't pay upfront. Reimbursement exists for the cases that require it.",
            })}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border-2 border-green-500 bg-surface-green/40 p-7">
              <p className="text-[12px] font-semibold uppercase tracking-wide text-green-700">{t(MODEL.asistencia.tag)}</p>
              <h3 className="mt-1.5 font-display text-[20px] font-bold text-navy-900">{t(MODEL.asistencia.title)}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {MODEL.asistencia.points.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink-600">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-green-700" aria-hidden="true" />
                    {t(p)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[18px] border border-black/[.08] bg-white p-7">
              <p className="text-[12px] font-semibold uppercase tracking-wide text-blue-700">{t(MODEL.reembolso.tag)}</p>
              <h3 className="mt-1.5 font-display text-[20px] font-bold text-navy-900">{t(MODEL.reembolso.title)}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {MODEL.reembolso.points.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink-600">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-blue-700" aria-hidden="true" />
                    {t(p)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reembolso paso a paso */}
      <section className="section-y bg-surface-100">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "Reembolso", en: "Reimbursement" })}</p>
          <h2 className="h2 mt-3 text-ink-900">
            {t({ es: "Cómo funciona un reembolso", en: "How a reimbursement works" })}
          </h2>
          <Reveal className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {REEMBOLSO_STEPS.map((step) => (
              <div key={step.number} className="flex gap-4">
                <span className="font-display text-[22px] font-extrabold text-cyan-500">{step.number}</span>
                <div>
                  <h3 className="font-display text-[15.5px] font-bold text-navy-900">{t(step.title)}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-600">{t(step.description)}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Tecnología + humanos */}
      <section className="section-y bg-white">
        <div className="container-max">
          <p className="eyebrow text-green-700">{t({ es: "Tecnología con personas", en: "Technology with people" })}</p>
          <h2 className="h2 mt-3 text-ink-900">
            {t({ es: "Lo que hace que respondamos rápido", en: "What makes us respond fast" })}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_HUMANS.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title.es} className="rounded-[16px] border border-black/[.06] bg-surface-100 p-6">
                  <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-white">
                    <ItemIcon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3.5 font-display text-[15.5px] font-bold text-navy-900">{t(item.title)}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-600">{t(item.description)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tú haces / Nosotros hacemos */}
      <section className="section-y bg-surface-100">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "Roles claros", en: "Clear roles" })}</p>
          <h2 className="h2 mt-3 text-ink-900">{t({ es: "Tú haces / nosotros hacemos", en: "You do / we do" })}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border border-black/[.08] bg-white p-7">
              <h3 className="font-display text-[17px] font-bold text-navy-900">{t({ es: "Tú haces", en: "You do" })}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {SPLIT.you.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-ink-300" />
                    {t(p)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[18px] bg-navy-950 p-7 text-white">
              <h3 className="font-display text-[17px] font-bold text-white">{t({ es: "Nosotros hacemos", en: "We do" })}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {SPLIT.us.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-white/85">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-green-500" aria-hidden="true" />
                    {t(p)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Escenarios / Casos reales */}
      <section className="section-y bg-white">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "Casos reales", en: "Real cases" })}</p>
          <h3 className="mt-3 font-display text-[24px] font-bold text-ink-900">{t({ es: "¿Qué pasa si…?", en: "What if…?" })}</h3>
          <Reveal className="mt-6 grid gap-3 md:grid-cols-3">
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
