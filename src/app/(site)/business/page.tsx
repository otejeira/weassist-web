"use client";

import { Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

const PANEL_STATS = [
  { value: "1 min", label: { es: "Cotización", en: "Quote" }, green: false },
  { value: "24/7", label: { es: "Emisión", en: "Issuance" }, green: false },
  { value: "100%", label: { es: "Digital", en: "Digital" }, green: false },
  { value: "Viernes", label: { es: "Pago de comisiones", en: "Commission payouts" }, green: true },
];

const FEATURES = [
  {
    title: { es: "Cotiza y emite", en: "Quote and issue" },
    description: { es: "Genera cotizaciones y emite vouchers al instante, sin llamadas ni papeleo.", en: "Generate quotes and issue vouchers instantly, no calls or paperwork." },
  },
  {
    title: { es: "Reporte en tiempo real", en: "Real-time reporting" },
    description: { es: "Panel con tus ventas, pólizas y clientes actualizados al instante.", en: "Dashboard with your sales, policies and clients updated instantly." },
  },
  {
    title: { es: "Comisiones cada viernes", en: "Commissions every Friday" },
    description: { es: "Pago de comisiones todos los viernes, en cualquier parte del mundo.", en: "Commission payouts every Friday, anywhere in the world." },
  },
  {
    title: { es: "Multi-producto", en: "Multi-product" },
    description: { es: "Viaje corto, anual, estudiante y larga estadía en un mismo flujo.", en: "Short trip, annual, student and long stay in a single flow." },
  },
  {
    title: { es: "Marca y respaldo", en: "Brand and backing" },
    description: { es: "Vende con el respaldo de una compañía de asistencia con red global.", en: "Sell with the backing of an assistance company with a global network." },
  },
  {
    title: { es: "Soporte dedicado", en: "Dedicated support" },
    description: { es: "Un equipo comercial y de asistencia que te acompaña a ti y a tus clientes.", en: "A commercial and assistance team supporting you and your clients." },
  },
];

const DEEL_CHECKS = [
  { es: "Pagos en +100 países", en: "Payments in 100+ countries" },
  { es: "Múltiples monedas, incluida USDC", en: "Multiple currencies, including USDC" },
  { es: "Cumplimiento y contratos gestionados", en: "Managed compliance and contracts" },
];

const CURRENCIES = ["USD", "EUR", "GBP", "MXN", "BRL"];

const STEPS = [
  { number: "01", accent: "#003366", title: { es: "Regístrate", en: "Sign up" }, description: { es: "Solicita tu acceso y valida tu perfil comercial con nuestro equipo.", en: "Request access and validate your commercial profile with our team." } },
  { number: "02", accent: "#003366", title: { es: "Activa el portal", en: "Activate the portal" }, description: { es: "Recibe credenciales y configura tu operación en minutos.", en: "Receive credentials and set up your operation in minutes." } },
  { number: "03", accent: "#7cc249", title: { es: "Empieza a vender", en: "Start selling" }, description: { es: "Cotiza, emite y gestiona clientes con soporte dedicado.", en: "Quote, issue and manage clients with dedicated support." } },
];

export default function BusinessPage() {
  const { t } = useLocale();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 1280 420"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M 75 -10 C 105 150 400 280 700 225 C 900 190 1120 260 1080 430"
            fill="none"
            stroke="#10ade4"
            strokeWidth={2}
            strokeDasharray="2 10"
            strokeLinecap="round"
            strokeOpacity={0.45}
            className="animate-dashMove"
          />
        </svg>
        <div className="container-max relative grid gap-14 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow">{t({ es: "We Assist Business", en: "We Assist Business" })}</p>
            <h1 className="h1-hero mt-4">
              {t({ es: "Vende y gestiona asistencia desde una sola plataforma", en: "Sell and manage assistance from a single platform" })}
            </h1>
            <p className="lead mt-4 max-w-md text-white/80">
              {t({
                es: "El portal para agentes, agencias y aliados: cotiza, emite y administra clientes con el respaldo de We Assist.",
                en: "The portal for agents, agencies and partners: quote, issue and manage clients with We Assist's backing.",
              })}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href={ROUTES.asistencia} variant="white">{t({ es: "Solicita una demo →", en: "Request a demo →" })}</CTAButton>
              <CTAButton href={ROUTES.ingresar} variant="outlineWhite">{t({ es: "Iniciar sesión", en: "Sign in" })}</CTAButton>
            </div>
          </div>
          <div className="rounded-[24px] border border-white/15 bg-white/[.08] p-7 backdrop-blur-sm">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/70">
              {t({ es: "Portal de aliados", en: "Partner portal" })}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {PANEL_STATS.map((s) => (
                <div
                  key={s.value}
                  className={`rounded-[16px] border p-[18px] ${s.green ? "border-green-500/35 bg-green-500/[.18]" : "border-white/10 bg-white/[.08]"}`}
                >
                  <p className={`font-display text-[24px] font-bold ${s.green ? "text-green-500" : "text-white"}`}>{s.value}</p>
                  <p className="mt-1 text-[12.5px] text-white/70">{t(s.label)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plataforma */}
      <section className="section-y bg-white">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "Plataforma", en: "Platform" })}</p>
          <h2 className="h2 mt-3 text-ink-900">{t({ es: "Todo lo que necesitas para vender", en: "Everything you need to sell" })}</h2>
          <p className="lead mt-3 max-w-2xl">
            {t({
              es: "Una herramienta pensada para acelerar tu operación comercial de principio a fin.",
              en: "A tool designed to accelerate your commercial operation from start to finish.",
            })}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title.es}
                className="rounded-[20px] border border-black/[.08] p-6 transition-transform duration-300 ease-brand hover:-translate-y-1"
              >
                <p className="font-display text-[15.5px] font-bold text-navy-900">{t(f.title)}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">{t(f.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deel + pasos + CTA */}
      <section className="section-y bg-surface-100">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="eyebrow text-green-700">{t({ es: "Alianza global", en: "Global partnership" })}</p>
              <h2 className="h2 mt-3 text-ink-900">{t({ es: "Comisiones globales, en alianza con Deel", en: "Global commissions, in partnership with Deel" })}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                {t({
                  es: "Gestionamos nuestra red global de agentes junto a Deel: pagamos comisiones en todo el mundo, en múltiples monedas —incluyendo USDC—, de forma rápida y transparente.",
                  en: "We manage our global agent network with Deel: we pay commissions worldwide, in multiple currencies —including USDC—, fast and transparently.",
                })}
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                {DEEL_CHECKS.map((c) => (
                  <div key={c.es} className="flex items-start gap-2.5 text-[14px] text-ink-900/80">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-green-500" strokeWidth={3} aria-hidden="true" />
                    {t(c)}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-black/[.05] bg-surface-blue p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-cta-slide bg-[length:220%_100%] font-display text-[15px] font-bold text-white">$</span>
                <div>
                  <p className="font-display text-[15.5px] font-bold text-blue-700">{t({ es: "Pago · Viernes", en: "Payout · Friday" })}</p>
                  <p className="mt-0.5 text-[12.5px] text-ink-500">{t({ es: "Comisiones liquidadas cada semana, en +100 países.", en: "Commissions settled weekly, in 100+ countries." })}</p>
                </div>
              </div>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-ink-500">{t({ es: "Monedas soportadas", en: "Supported currencies" })}</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {CURRENCIES.map((c) => (
                  <span key={c} className="rounded-full border border-black/[.06] bg-white px-3.5 py-1.5 text-[13px] font-semibold text-blue-700">{c}</span>
                ))}
                <span className="rounded-full border border-green-500/30 bg-surface-green px-3.5 py-1.5 text-[13px] font-semibold text-green-700">USDC</span>
              </div>
            </div>
          </div>

          {/* Empezar en 3 pasos */}
          <div className="mt-14">
            <p className="eyebrow">{t({ es: "Empezar", en: "Get started" })}</p>
            <h2 className="h2 mt-3 text-ink-900">{t({ es: "Comienza en 3 pasos", en: "Start in 3 steps" })}</h2>
            <div className="relative mt-10">
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
                {STEPS.map((step) => (
                  <div key={step.number}>
                    <span
                      className="inline-grid h-[46px] w-[46px] place-items-center rounded-full font-display text-[15px] font-bold text-white ring-[6px] ring-surface-100"
                      style={{ backgroundColor: step.accent }}
                    >
                      {step.number}
                    </span>
                    <h3 className="mt-4 font-display text-[18px] font-bold text-navy-900">{t(step.title)}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{t(step.description)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[24px] bg-hero-navy p-10 text-white lg:flex-row lg:items-center">
            <div>
              <h2 className="h2 text-white">{t({ es: "Solicita una demo", en: "Request a demo" })}</h2>
              <p className="mt-3 text-[15px] text-white/70">
                {t({
                  es: "Te mostramos el portal y diseñamos un esquema comercial a tu medida.",
                  en: "We'll show you the portal and design a commercial scheme tailored to you.",
                })}
              </p>
            </div>
            <div className="flex flex-none flex-wrap gap-3">
              <CTAButton href={ROUTES.asistencia} variant="white">{t({ es: "Solicita una demo →", en: "Request a demo →" })}</CTAButton>
              <CTAButton href={ROUTES.ingresar} variant="outlineWhite">{t({ es: "Iniciar sesión", en: "Sign in" })}</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
