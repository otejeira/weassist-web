"use client";

import { Check } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";
import { HEALTHIER_URL } from "@/lib/constants";

const HERO_STATS = [
  { value: "+80M", label: { es: "Personas atendidas al año", en: "People served per year" } },
  { value: "+1.5MM", label: { es: "Proveedores en red global", en: "Providers in global network" } },
  { value: "+21", label: { es: "Centros de contacto", en: "Contact centers" } },
  { value: "+5,000", label: { es: "Red operativa", en: "Operational network" } },
];

const NETWORK_CHECKS = [
  { es: "Coordinación directa con proveedores locales", en: "Direct coordination with local providers" },
  { es: "Atención multilingüe 24/7/365", en: "Multilingual support 24/7/365" },
  { es: "Estándares PCI DSS, HIPAA, ISO 9001 y SOC según aplique", en: "PCI DSS, HIPAA, ISO 9001 and SOC standards as applicable" },
];

const NETWORK_STATS = [
  { label: { es: "Países con red", en: "Countries with network" }, value: "+200" },
  { label: { es: "Países con presencia operativa", en: "Countries with operations" }, value: "21" },
  { label: { es: "Proveedores individuales", en: "Individual providers" }, value: "+1.5MM" },
];

// TODO PLACEHOLDER: agrupación de centros por región (referencia del mapa operativo).
const REGIONS = [
  {
    name: { es: "Américas", en: "Americas" },
    note: { es: "EE. UU., México, Panamá, Colombia, Brasil y más.", en: "USA, Mexico, Panama, Colombia, Brazil and more." },
  },
  {
    name: { es: "Europa", en: "Europe" },
    note: { es: "España, Portugal, Reino Unido, Alemania, Nórdicos, Italia.", en: "Spain, Portugal, UK, Germany, Nordics, Italy." },
  },
  {
    name: { es: "Asia-Pacífico", en: "Asia-Pacific" },
    note: { es: "Japón, Corea, China, Indonesia, Australia.", en: "Japan, Korea, China, Indonesia, Australia." },
  },
  {
    name: { es: "Medio Oriente y África", en: "Middle East & Africa" },
    note: { es: "Egipto, Golfo Pérsico, Nigeria.", en: "Egypt, Persian Gulf, Nigeria." },
  },
];

const ECOSYSTEM = [
  {
    name: "Travel",
    accent: "#10ade4",
    nameColor: "#003366",
    href: ROUTES.travel,
    external: false,
    description: { es: "Asistencia de viaje internacional para personas, familias y estudiantes.", en: "International travel assistance for individuals, families and students." },
  },
  {
    name: "Healthier",
    accent: "#00C2FF",
    nameColor: "#004AAD",
    href: HEALTHIER_URL,
    external: true,
    description: { es: "Salud y bienestar para empresas y sus equipos.", en: "Health and wellbeing for companies and their teams." },
  },
  {
    name: "Business",
    accent: "#7cc249",
    nameColor: "#4e8a1f",
    href: ROUTES.business,
    external: false,
    description: { es: "Plataforma y soluciones para agentes, agencias y aliados.", en: "Platform and solutions for agents, agencies and partners." },
  },
];

export default function CorporatePage() {
  const { t } = useLocale();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-navy text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 1280 380"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M 75 -10 C 105 140 400 260 700 210 C 900 176 1120 240 1080 390"
            fill="none"
            stroke="#10ade4"
            strokeWidth={2}
            strokeDasharray="2 10"
            strokeLinecap="round"
            strokeOpacity={0.45}
            className="animate-dashMove"
          />
        </svg>
        <div className="container-max relative py-16 lg:py-20">
          <p className="eyebrow">{t({ es: "We Assist Corporativo", en: "We Assist Corporate" })}</p>
          <h1 className="h1-hero mt-4 max-w-3xl">
            {t({ es: "La compañía detrás de la asistencia", en: "The company behind the assistance" })}
          </h1>
          <p className="lead mt-4 max-w-2xl text-white/80">
            {t({
              es: "Somos una compañía de asistencia con presencia global: tecnología, red de proveedores y personas coordinando ayuda real, 24/7/365.",
              en: "We're an assistance company with global presence: technology, a provider network and people coordinating real help, 24/7/365.",
            })}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton href={ROUTES.asistencia} variant="white">{t({ es: "Contáctanos →", en: "Contact us →" })}</CTAButton>
            <CTAButton href="#red-global" variant="outlineWhite">{t({ es: "Ver la red", en: "See the network" })}</CTAButton>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="font-display text-[16px] font-semibold text-white/90">
              {t({ es: "El poder de nuestro ecosistema operativo", en: "The power of our operational ecosystem" })}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {HERO_STATS.map((s) => (
                <div key={s.value}>
                  <p className="font-display text-[32px] font-extrabold text-cyan-500">{s.value}</p>
                  <p className="mt-1 text-[13px] text-white/65">{t(s.label)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Red global */}
      <section id="red-global" className="section-y bg-white">
        <div className="container-max">
          <h2 className="h2 max-w-3xl text-ink-900">
            {t({ es: "Una compañía de asistencia, no solo una póliza", en: "An assistance company, not just a policy" })}
          </h2>
          <p className="lead mt-3 max-w-3xl">
            {t({
              es: "Operamos un ecosistema de proveedores, tecnología y equipos humanos alineados con estándares de seguridad, privacidad y calidad según el producto, país y proveedor.",
              en: "We operate an ecosystem of providers, technology and human teams aligned with security, privacy and quality standards depending on product, country and provider.",
            })}
          </p>

          <div className="mt-11 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="eyebrow">{t({ es: "Red global", en: "Global network" })}</p>
              <h3 className="mt-3 font-display text-[28px] font-bold tracking-tight text-ink-900">
                {t({ es: "Presencia donde tus viajeros y equipos están", en: "Present where your travelers and teams are" })}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                {t({
                  es: "Coordinamos asistencia con proveedores en múltiples países y territorios, con atención multilingüe y central 24/7/365.",
                  en: "We coordinate assistance with providers across multiple countries and territories, with multilingual support and a 24/7/365 center.",
                })}
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                {NETWORK_CHECKS.map((c) => (
                  <div key={c.es} className="flex items-start gap-2.5 text-[14px] text-ink-900/80">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[#009BAA]" strokeWidth={3} aria-hidden="true" />
                    {t(c)}
                  </div>
                ))}
              </div>
              <CTAButton href="#red-global" variant="outline" className="mt-6">
                {t({ es: "Ver la red", en: "See the network" })}
              </CTAButton>
            </div>
            <div className="rounded-[24px] border border-black/[.07] bg-white px-7 shadow-card">
              {NETWORK_STATS.map((s, i) => (
                <div
                  key={s.value}
                  className={`flex items-baseline justify-between gap-4 py-5 ${i < NETWORK_STATS.length - 1 ? "border-b border-black/[.06]" : ""}`}
                >
                  <span className="text-[13.5px] text-ink-600">{t(s.label)}</span>
                  <span className="font-display text-[30px] font-bold text-blue-700">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de centros de operación */}
      <section id="centros" className="section-y bg-surface-100">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="eyebrow">{t({ es: "Centros de operación", en: "Operation centers" })}</p>
            <h2 className="h2 mt-3 text-ink-900">
              {t({ es: "Presencia operativa en todo el mundo", en: "Operational presence worldwide" })}
            </h2>
            <p className="lead mt-3">
              {t({
                es: "Nuestra red de centros de contacto y proveedores coordina asistencia donde tus viajeros y equipos están — sin importar la zona horaria.",
                en: "Our network of contact centers and providers coordinates assistance wherever your travelers and teams are — no matter the time zone.",
              })}
            </p>
          </div>

          <figure className="mt-8 overflow-hidden rounded-[24px] border border-black/[.07] bg-white p-4 shadow-card sm:p-8">
            {/* SVG con los centros como <circle class="op-dot">; el pulso/flotar y los
                colores de marca viven dentro del propio SVG (ver public/assets/operations-map.svg). */}
            <img
              src="/assets/operations-map.svg"
              alt={t({
                es: "Mapa mundial con los centros de operación de We Assist",
                en: "World map showing We Assist operation centers",
              })}
              className="mx-auto h-auto w-full"
            />
          </figure>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((r) => (
              <div key={r.name.es} className="rounded-[18px] border border-black/[.07] bg-white p-5">
                <p className="font-display text-[15px] font-bold text-ink-900">{t(r.name)}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-600">{t(r.note)}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[12px] text-ink-500">
            {t({
              es: "Ubicaciones ilustrativas. La cobertura efectiva depende del producto, país y proveedor.",
              en: "Illustrative locations. Effective coverage depends on product, country and provider.",
            })}
          </p>
        </div>
      </section>

      {/* Ecosistema */}
      <section className="section-y bg-white">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "Ecosistema", en: "Ecosystem" })}</p>
          <h2 className="h2 mt-3 text-ink-900">{t({ es: "Un grupo, tres formas de asistir", en: "One group, three ways to assist" })}</h2>
          <p className="lead mt-3 max-w-2xl">
            {t({
              es: "Bajo la misma compañía, soluciones para personas, empresas y aliados comerciales.",
              en: "Under the same company, solutions for individuals, companies and commercial partners.",
            })}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ECOSYSTEM.map((card) => (
              <a
                key={card.name}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-2.5 rounded-[20px] border border-black/[.07] bg-white p-7 transition-transform duration-300 ease-brand hover:-translate-y-1"
                style={{ borderTop: `3px solid ${card.accent}` }}
              >
                <p className="font-display text-[17px] font-bold" style={{ color: card.nameColor }}>{card.name}</p>
                <p className="flex-1 text-[13.5px] leading-relaxed text-ink-600">{t(card.description)}</p>
                <span className="text-[13.5px] font-semibold" style={{ color: card.accent }}>
                  {t({ es: "Explorar →", en: "Explore →" })}
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-11 flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[24px] bg-hero-navy p-10 text-white lg:flex-row lg:items-center">
            <div>
              <h2 className="h2 text-white">{t({ es: "Hablemos de tu operación", en: "Let's talk about your operation" })}</h2>
              <p className="mt-3 text-[15px] text-white/70">
                {t({
                  es: "Cuéntanos las necesidades de tu empresa o red y diseñamos la asistencia adecuada.",
                  en: "Tell us your company or network needs and we'll design the right assistance.",
                })}
              </p>
            </div>
            <CTAButton href={ROUTES.asistencia} variant="white" className="flex-none">
              {t({ es: "Contáctanos →", en: "Contact us →" })}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
