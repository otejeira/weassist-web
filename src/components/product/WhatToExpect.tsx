"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { WHAT_TO_EXPECT } from "@/lib/content/product-template";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { HexShape } from "@/components/brand/HexWe";
import { Reveal } from "@/components/ui/Reveal";

/** "¿Qué puedes esperar?" — 3 tarjetas. */
export function WhatToExpect() {
  const { t } = useLocale();
  return (
    <section className="bg-surface-100 section-y">
      <div className="container-max">
        <SectionHeading
          align="center"
          eyebrow={t({ es: "Tranquilidad", en: "Peace of mind" })}
          title={t({ es: "¿Qué puedes esperar de nuestra asistencia?", en: "What can you expect from our assistance?" })}
        />
        <Reveal className="mt-10 grid gap-4 md:grid-cols-3">
          {WHAT_TO_EXPECT.map((card) => (
            <div key={card.title.es} className="rounded-card bg-white p-6 shadow-card">
              <HexShape fill="#7cc249" size={46}>
                <Icon name={card.icon} className="h-5 w-5 text-white" />
              </HexShape>
              <h3 className="h3 mt-4">{t(card.title)}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{t(card.description)}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
