"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { ALLIANCES } from "@/lib/constants";

/**
 * Cinta de "Respaldo y alianzas" — los aliados se desplazan de derecha a
 * izquierda en loop continuo. Se duplican dos grupos idénticos y se anima el
 * contenedor a translateX(-50%): al mover exactamente el ancho de un grupo el
 * segundo cae donde estaba el primero, logrando un bucle sin costura.
 * La animación se pausa con prefers-reduced-motion (regla global en globals.css).
 * TODO: reemplazar los nombres por logos reales de los aliados.
 */
export function AlliancesMarquee() {
  const { t } = useLocale();
  const heading = t({ es: "Respaldo y alianzas", en: "Backed by & partners" });

  return (
    <section aria-label={heading} className="border-b border-line-300 bg-white py-5">
      <div className="container-max flex items-center gap-6">
        <p className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-300 sm:block">
          {heading}
        </p>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((group) => (
              <ul
                key={group}
                aria-hidden={group === 1 ? true : undefined}
                className="flex shrink-0 items-center gap-12 pr-12"
              >
                {ALLIANCES.map((name) => (
                  <li
                    key={name}
                    className="whitespace-nowrap font-display text-[16px] font-semibold text-ink-500/80"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
