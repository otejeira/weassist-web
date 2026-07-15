"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { ASSISTANCE_GRID } from "@/lib/content/product-template";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { HexShape } from "@/components/brand/HexWe";

/** "¿Cómo funcionan las asistencias We Assist®?" — grid 3×2 con hexágonos outline cian. */
export function AssistanceGrid() {
  const { t } = useLocale();
  return (
    <section className="section-y">
      <div className="container-max">
        <SectionHeading
          align="center"
          eyebrow={t({ es: "Asistencias", en: "Assistance" })}
          title={t({ es: "¿Cómo funcionan las asistencias We Assist®?", en: "How does We Assist® assistance work?" })}
          description={t({
            es: "Omnicanal de verdad: por teléfono, WhatsApp o videollamada, estamos para ti 24/7/365. Sin horarios ni fronteras.",
            en: "Truly omnichannel: by phone, WhatsApp or video call, we're here for you 24/7/365. No schedules, no borders.",
          })}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ASSISTANCE_GRID.map((card) => (
            <div
              key={card.title.es}
              className="rounded-card border border-black/[.06] bg-white p-6 shadow-card transition-shadow hover:shadow-glow"
            >
              <HexShape outline size={46}>
                <Icon name={card.icon} className="h-5 w-5 text-cyan-500" />
              </HexShape>
              <h3 className="h3 mt-4">{t(card.title)}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{t(card.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
