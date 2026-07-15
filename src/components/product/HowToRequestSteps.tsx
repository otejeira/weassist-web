"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { HOW_TO_REQUEST } from "@/lib/content/product-template";
import { HexShape } from "@/components/brand/HexWe";

/** "Cómo solicitar tu asistencia" — fondo navy, 5 pasos con hexágonos verdes + RouteLine. */
export function HowToRequestSteps() {
  const { t } = useLocale();
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white section-y">
      <div className="container-max relative">
        <h2 className="h2 text-center text-white">
          {t({ es: "Cómo solicitar tu asistencia", en: "How to request assistance" })}
        </h2>
        <p className="lead mx-auto mt-3 max-w-2xl text-center text-white/70">
          {t({
            es: "Un solo mensaje pone todo en marcha. Así se ve del otro lado:",
            en: "A single message sets everything in motion. Here's how it looks on our side:",
          })}
        </p>

        <div className="relative mt-12">
          {/* RouteLine horizontal que conecta los pasos (desktop) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-[10%] right-[10%] top-6 hidden h-1 lg:block"
            style={{ width: "80%" }}
          >
            <path
              d="M0 2 L1000 2"
              fill="none"
              stroke="#7cc249"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="2 10"
              strokeOpacity={0.5}
              className="animate-dashMove"
            />
          </svg>

          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {HOW_TO_REQUEST.map((step, i) => (
              <li key={step.title.es} className="flex flex-col items-center gap-3 text-center">
                <span className="rounded-full bg-navy-950 p-1">
                  <HexShape fill="#7cc249" size={48}>
                    <span className="font-display text-[17px] font-bold text-white">{i + 1}</span>
                  </HexShape>
                </span>
                <h3 className="h3 text-white">{t(step.title)}</h3>
                <p className="text-[13px] leading-relaxed text-white/70">{t(step.description)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
