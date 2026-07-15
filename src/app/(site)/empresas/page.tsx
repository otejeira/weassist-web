"use client";

import {
  ShieldCheck,
  Globe2,
  Gift,
  Puzzle,
  Landmark,
  Check,
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT, HEALTHIER_URL } from "@/lib/constants";
import { ROUTES } from "@/lib/nav";

const LEAD_MAILTO =
  `mailto:${CONTACT.salesEmail}` +
  "?subject=" +
  encodeURIComponent("Soluciones corporativas We Assist") +
  "&body=" +
  encodeURIComponent(
    "Hola, me interesa desarrollar un programa de asistencia para mi organización.\n\nEmpresa:\nSector:\nNº aproximado de personas a proteger:\nQué buscamos:\n",
  );

const CAPABILITIES = [
  {
    icon: ShieldCheck,
    title: { es: "Gestión de riesgo a la medida", en: "Tailored risk management" },
    description: {
      es: "Somos expertos en gestión de riesgo. Diseñamos programas de asistencia según la operación real de tu empresa: destinos, frecuencia de viaje y perfil de tu gente.",
      en: "We are risk-management experts. We design assistance programs around your company's real operation: destinations, travel frequency and your people's profile.",
    },
  },
  {
    icon: Globe2,
    title: { es: "Asistencia integral y global para tu equipo", en: "Integral, global assistance for your team" },
    description: {
      es: "Protege a tus colaboradores en cualquier parte del mundo, con coordinación y pago directo 24/7/365 — sin que adelanten dinero en la gran mayoría de casos coordinados.",
      en: "Protect your collaborators anywhere in the world, with 24/7/365 coordination and direct payment — no upfront money in the vast majority of coordinated cases.",
    },
  },
  {
    icon: Gift,
    title: { es: "Programas de lealtad y beneficios", en: "Loyalty and benefit programs" },
    description: {
      es: "Convierte la asistencia en un beneficio de marca: programas de lealtad, membresía y beneficios para los clientes de tu corporación.",
      en: "Turn assistance into a brand benefit: loyalty, membership and benefit programs for your corporation's customers.",
    },
  },
  {
    icon: Puzzle,
    title: { es: "Programas a la medida", en: "Custom-built programs" },
    description: {
      es: "¿Necesitas un producto especial para tus colaboradores, tus clientes — o, si eres broker o agencia de viajes, para los tuyos? Lo desarrollamos contigo.",
      en: "Need a special product for your collaborators, your clients — or, if you're a broker or travel agency, for yours? We build it with you.",
    },
  },
] as const;

/** El ecosistema de servicios que se combinan para armar un programa a la medida. */
const ECOSYSTEM_SERVICES = [
  { es: "Telemedicina", en: "Telemedicine" },
  { es: "Face scan con IA", en: "AI face scan" },
  { es: "Telesalud completa", en: "Full telehealth" },
  { es: "Salud mental", en: "Mental health" },
  { es: "Coaching y bienestar", en: "Coaching and wellbeing" },
  { es: "Segunda opinión médica", en: "Second medical opinion" },
  { es: "Doctor a domicilio", en: "Doctor at home" },
  { es: "Servicio concierge", en: "Concierge service" },
  { es: "Programas funerarios", en: "Funeral programs" },
] as const;

const TOURISM = [
  { es: "Gobiernos y autoridades de turismo", en: "Governments and tourism authorities" },
  { es: "Programas de asistencia para el visitante", en: "Visitor assistance programs" },
  { es: "Soluciones de alto impacto para el destino", en: "High-impact solutions for the destination" },
] as const;

export default function EmpresasPage() {
  const { t } = useLocale();
  return (
    <>
      {/* Hero — objetivo único: generar el lead cualificado */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M-20 90 C 300 40, 420 300, 760 200 S 1200 140, 1240 320"
            fill="none"
            stroke="#10ade4"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="2 10"
            strokeOpacity={0.4}
            className="animate-dashMove"
          />
        </svg>
        <div className="container-max relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-cyan-500">
              {t({ es: "Soluciones corporativas · Travel", en: "Corporate solutions · Travel" })}
            </p>
            <h1 className="h1-hero mt-3">
              {t({
                es: "Protege a tu equipo en cualquier parte del mundo.",
                en: "Protect your team anywhere in the world.",
              })}
            </h1>
            <p className="lead mt-4 max-w-2xl text-white/70">
              {t({
                es: "Desarrollamos programas de asistencia a la medida para corporaciones, negocios, brokers y agencias — desde la gestión de riesgo hasta beneficios para tus clientes.",
                en: "We build tailored assistance programs for corporations, businesses, brokers and agencies — from risk management to benefits for your customers.",
              })}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton href={LEAD_MAILTO} variant="white">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t({ es: "Hablemos de tu programa", en: "Let's talk about your program" })}
              </CTAButton>
              <CTAButton href={CONTACT.whatsappHref} variant="outlineWhite">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t({ es: "Escríbenos por WhatsApp", en: "Message us on WhatsApp" })}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Qué desarrollamos */}
      <section className="section-y bg-white">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "Qué desarrollamos", en: "What we build" })}</p>
          <h2 className="h2 mt-3 text-ink-900">
            {t({ es: "Un programa, diseñado alrededor de tu operación", en: "One program, built around your operation" })}
          </h2>
          <Reveal className="mt-10 grid gap-4 md:grid-cols-2">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title.es} className="rounded-card border border-black/[.07] bg-white p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-100">
                    <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-[18px] font-bold text-navy-900">{t(cap.title)}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{t(cap.description)}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* TRAVEL + HEALTHIER — solución única y global */}
      <section className="section-y bg-hero-navy text-white">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow text-cyan-500">{t({ es: "Único en el mercado", en: "Unique in the market" })}</p>
            <h2 className="h2 mt-3 text-white">
              {t({
                es: "Travel + Healthier: todo el poder de nuestro ecosistema, en un solo lugar",
                en: "Travel + Healthier: the full power of our ecosystem, in one place",
              })}
            </h2>
            <p className="lead mt-4 text-white/70">
              {t({
                es: "Unimos la asistencia en viaje We Assist con Healthier —telemedicina, salud mental, bienestar y mucho más— para crear soluciones únicas para tus clientes y colaboradores, dentro y fuera del viaje, donde sea que estén.",
                en: "We bring together We Assist travel assistance with Healthier —telemedicine, mental health, wellbeing and much more— to build unique solutions for your clients and teams, on and off the trip, wherever they are.",
              })}
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {ECOSYSTEM_SERVICES.map((service, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-white/85"
                >
                  <Check className="h-3.5 w-3.5 flex-none text-green-500" aria-hidden="true" />
                  {t(service)}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[13px] text-white/50">
              {t({
                es: "Diseñamos el programa combinando los servicios que cada organización necesita.",
                en: "We design the program by combining the services each organization needs.",
              })}
            </p>
            <div className="mt-8">
              <a
                href={HEALTHIER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-cyan-500 hover:text-cyan-500/80"
              >
                {t({ es: "Conoce Healthier", en: "Discover Healthier" })}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Turismo de alto impacto — bloque aspiracional */}
      <section className="section-y bg-surface-100">
        <div className="container-max">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="flex items-center gap-2 text-green-700">
                <Landmark className="h-4 w-4" aria-hidden="true" />
                <p className="text-[12px] font-semibold uppercase tracking-wide">
                  {t({ es: "Pensar en grande", en: "Think big" })}
                </p>
              </div>
              <h2 className="h2 mt-2 text-ink-900">
                {t({
                  es: "Soluciones de alto impacto para el turismo",
                  en: "High-impact solutions for tourism",
                })}
              </h2>
              <p className="lead mt-3 max-w-xl">
                {t({
                  es: "Trabajamos con gobiernos y autoridades de turismo para desarrollar programas de asistencia que protegen al visitante y elevan la competitividad del destino.",
                  en: "We work with governments and tourism authorities to develop assistance programs that protect the visitor and raise the destination's competitiveness.",
                })}
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {TOURISM.map((item, i) => (
                <li key={i} className="flex items-center gap-3 rounded-card border border-black/[.07] bg-white px-5 py-4 text-[14px] font-medium text-navy-900">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-surface-green/60">
                    <Check className="h-4 w-4 text-green-700" aria-hidden="true" />
                  </span>
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sello institucional */}
      <section className="bg-white py-12">
        <div className="container-max">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-ink-500">
              {t({ es: "Respaldo institucional", en: "Institutional backing" })}
            </p>
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink-600">
              {t({
                es: "Asistencia respaldada por Lloyd's of London a través de Koris, con más de 20 años operando redes de asistencia en todo el mundo.",
                en: "Assistance underwritten by certain underwriters at Lloyd's through Koris, with over 20 years operating assistance networks worldwide.",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* CTA final — captura del lead */}
      <section className="bg-surface-100 pb-16">
        <div className="container-max flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[24px] bg-hero-navy p-10 text-white lg:flex-row lg:items-center">
          <div>
            <h2 className="h2 text-white">
              {t({ es: "Diseñemos tu programa juntos", en: "Let's design your program together" })}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] text-white/70">
              {t({
                es: "Cuéntanos sobre tu organización y un especialista te contacta para armar la propuesta a la medida.",
                en: "Tell us about your organization and a specialist will reach out to build the tailored proposal.",
              })}
            </p>
          </div>
          <div className="flex flex-none flex-wrap gap-3">
            <CTAButton href={LEAD_MAILTO} variant="white">
              {t({ es: "Solicitar propuesta →", en: "Request a proposal →" })}
            </CTAButton>
            <CTAButton href={ROUTES.business} variant="outlineWhite">
              {t({ es: "¿Eres broker o agencia?", en: "Are you a broker or agency?" })}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
