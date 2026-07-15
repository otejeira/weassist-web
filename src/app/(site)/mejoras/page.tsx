"use client";

import {
  Mountain,
  Ambulance,
  HardHat,
  Bike,
  Laptop,
  Briefcase,
  HeartPulse,
  Baby,
  PawPrint,
  FerrisWheel,
  CalendarX,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { ProductHero } from "@/components/product/ProductHero";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";
import { ROUTES } from "@/lib/nav";
import { UPGRADE_ANCHORS, UPGRADE_PROFILES } from "@/lib/content/mejoras";

const ICONS: Record<string, LucideIcon> = {
  Mountain,
  Ambulance,
  HardHat,
  Bike,
  Laptop,
  Briefcase,
  HeartPulse,
  Baby,
  PawPrint,
  FerrisWheel,
  CalendarX,
};

export default function MejorasPage() {
  const { t } = useLocale();
  return (
    <>
      <ProductHero
        eyebrow={{ es: "Upgrades", en: "Upgrades" }}
        title={{
          es: "Ajusta tu asistencia a cómo viajas tú.",
          en: "Tailor your assistance to how you travel.",
        }}
        subtitle={{
          es: "Los upgrades amplían tu voucher con beneficios pensados para tu tipo de viaje. Los agregas en la cotización, por viajero, sin cambiar de plan.",
          en: "Upgrades extend your voucher with benefits built for your kind of trip. Add them at checkout, per traveler, without switching plans.",
        }}
        secondaryLabel={{ es: "Ver todos los upgrades", en: "See all upgrades" }}
        secondaryHref="#catalogo"
      />

      {/* 3 anzuelos — los diferenciadores fuertes */}
      <section className="section-y bg-hero-navy text-white">
        <div className="container-max">
          <p className="eyebrow text-cyan-500">{t({ es: "Lo que casi nadie ofrece", en: "What almost no one offers" })}</p>
          <h2 className="h2 mt-3 text-white">
            {t({ es: "Tres upgrades que marcan la diferencia", en: "Three upgrades that make the difference" })}
          </h2>
          <Reveal className="mt-10 grid gap-4 md:grid-cols-3">
            {UPGRADE_ANCHORS.map((anchor, i) => {
              const Icon = ICONS[anchor.icon] ?? Mountain;
              return (
                <div key={anchor.title.es} className="rounded-card border border-white/10 bg-white/[0.06] p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-500/15">
                    <Icon className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-[17px] font-bold leading-snug text-white">
                    {t(anchor.title)}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/70">{t(anchor.description)}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Catálogo por perfil */}
      <section id="catalogo" className="section-y bg-white">
        <div className="container-max">
          <p className="eyebrow">{t({ es: "El catálogo", en: "The catalog" })}</p>
          <h2 className="h2 mt-3 text-ink-900">
            {t({ es: "Elige por cómo viajas", en: "Choose by how you travel" })}
          </h2>
          <p className="lead mt-3 max-w-2xl">
            {t({
              es: "Cada upgrade responde a un miedo real de viaje. Mira qué pasa si no lo llevas — y decide con calma.",
              en: "Each upgrade answers a real travel fear. See what happens if you skip it — and decide with calm.",
            })}
          </p>

          <div className="mt-12 flex flex-col gap-14">
            {UPGRADE_PROFILES.map((profile) => (
              <Reveal key={profile.title.es}>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-cyan-500">
                  {t(profile.eyebrow)}
                </p>
                <h3 className="mt-1.5 font-display text-[22px] font-bold text-navy-900">{t(profile.title)}</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {profile.items.map((item) => {
                    const Icon = ICONS[item.icon] ?? Mountain;
                    return (
                      <div
                        key={item.title.es}
                        className="flex flex-col rounded-card border border-black/[.07] bg-white p-6 transition-transform duration-300 ease-brand hover:-translate-y-1"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-surface-100">
                            <Icon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                          </span>
                          {item.onRequest && (
                            <span className="rounded-full bg-surface-green/60 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-green-700">
                              {t({ es: "Bajo request", en: "By request" })}
                            </span>
                          )}
                        </div>
                        <h4 className="mt-4 font-display text-[16px] font-bold leading-snug text-navy-900">
                          {t(item.title)}
                        </h4>
                        <p className="mt-2 text-[13px] leading-relaxed text-ink-600">{t(item.description)}</p>
                        <p className="mt-4 border-t border-black/[.06] pt-3 text-[12.5px] leading-relaxed text-ink-500">
                          <span className="font-semibold text-navy-900">
                            {t({ es: "Si no lo llevas: ", en: "If you skip it: " })}
                          </span>
                          {t(item.whatIf)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nota corporativa */}
      <section className="bg-surface-100 py-14">
        <div className="container-max">
          <div className="flex flex-col items-start gap-6 rounded-card border border-black/[.07] bg-white p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-green-700">
                <HardHat className="h-4 w-4" aria-hidden="true" />
                <p className="text-[12px] font-semibold uppercase tracking-wide">
                  {t({ es: "Para corporaciones", en: "For corporations" })}
                </p>
              </div>
              <h3 className="mt-2 font-display text-[19px] font-bold text-navy-900">
                {t({
                  es: "¿Proteges a un equipo en viaje de trabajo?",
                  en: "Protecting a team on work trips?",
                })}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                {t({
                  es: "El upgrade de accidente laboral y los programas a la medida se gestionan desde nuestras soluciones corporativas.",
                  en: "The workplace-accident upgrade and tailored programs are handled through our corporate solutions.",
                })}
              </p>
            </div>
            <CTAButton href={ROUTES.empresas} variant="outline" className="flex-none">
              {t({ es: "Ver soluciones corporativas", en: "See corporate solutions" })}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-surface-100 pb-16">
        <div className="container-max flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[24px] bg-hero-navy p-10 text-white lg:flex-row lg:items-center">
          <div>
            <h2 className="h2 text-white">
              {t({ es: "Los upgrades se añaden en tu cotización", en: "Upgrades are added at checkout" })}
            </h2>
            <p className="mt-3 text-[15px] text-white/70">
              {t({
                es: "Cotiza tu plan, elige tu nivel y suma los upgrades que necesites — por viajero, en el mismo flujo.",
                en: "Quote your plan, pick your tier and add the upgrades you need — per traveler, in the same flow.",
              })}
            </p>
          </div>
          <div className="flex flex-none flex-wrap gap-3">
            <CTAButton href={ROUTES.comprarMejoras} variant="white">
              {t({ es: "Añadir en mi cotización →", en: "Add to my quote →" })}
            </CTAButton>
            <CTAButton href={ROUTES.comprarPlanes} variant="outlineWhite">
              {t({ es: "Empezar de cero", en: "Start from scratch" })}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
