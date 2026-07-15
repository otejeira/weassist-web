"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { HOW_TO_REQUEST } from "@/lib/content/product-template";

/** Path del hexágono de marca (viewBox 100×100, centro en 50,50). */
const HEX = "M50 6 L88 28 V72 L50 94 L12 72 V28 Z";

/** Nodos de la ruta en zigzag vertical (móvil) — coordenadas en el viewBox 375×900. */
const MOBILE_NODES = [
  { x: 295, y: 90 },
  { x: 80, y: 270 },
  { x: 295, y: 450 },
  { x: 80, y: 630 },
  { x: 295, y: 810 },
];
const MOBILE_H = 900;

/** Nodos de la ruta horizontal (desktop) — viewBox 1000×120, alineados a columnas. */
const DESKTOP_NODES = [100, 300, 500, 700, 900].map((x) => ({ x, y: 60 }));

function routePath(nodes: { x: number; y: number }[]) {
  return `M${nodes[0].x} ${nodes[0].y} ` + nodes.slice(1).map((n) => `L${n.x} ${n.y}`).join(" ");
}

/** Hexágono-parada verde con el número del paso, dibujado dentro del SVG. */
function HexNode({ x, y, n, size }: { x: number; y: number; n: number; size: number }) {
  const k = size / 100;
  return (
    <g>
      <path d={HEX} transform={`translate(${x - 50 * k} ${y - 50 * k}) scale(${k})`} fill="#7cc249" />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Poppins, sans-serif"
        fontWeight={700}
        fontSize={size * 0.44}
        fill="#fff"
      >
        {n}
      </text>
    </g>
  );
}

/**
 * Hexágono "We" cian que recorre la ruta (animateMotion) girando sobre sí mismo
 * (animateTransform). Se oculta con prefers-reduced-motion.
 */
function HexTraveler({ routeId, dur, size }: { routeId: string; dur: number; size: number }) {
  const k = size / 100;
  return (
    <g className="motion-reduce:hidden">
      <g>
        <g transform={`scale(${k}) translate(-50 -50)`}>
          <path d={HEX} fill="#10ade4" />
          <text
            x={50}
            y={54}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Poppins, sans-serif"
            fontStyle="italic"
            fontWeight={700}
            fontSize={34}
            fill="#fff"
          >
            We
          </text>
        </g>
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="5s" repeatCount="indefinite" />
      </g>
      <animateMotion dur={`${dur}s`} repeatCount="indefinite">
        <mpath href={`#${routeId}`} />
      </animateMotion>
    </g>
  );
}

const dashedRoute =
  "fill-none [stroke-dasharray:2_10] [stroke-linecap:round] animate-dashMove";

/** "Cómo solicitar tu asistencia" — journey de marca: ruta punteada + hex "We" viajero. */
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

        {/* ───────── Móvil / tablet: ruta vertical en zigzag que recorres al hacer scroll ───────── */}
        <div className="relative mx-auto mt-10 w-full max-w-[380px] lg:hidden">
          <svg viewBox={`0 0 375 ${MOBILE_H}`} className="h-auto w-full">
            <path
              id="routeMobile"
              d={routePath(MOBILE_NODES)}
              stroke="#10ade4"
              strokeWidth={2}
              strokeOpacity={0.5}
              className={dashedRoute}
            />
            {MOBILE_NODES.map((node, i) => (
              <HexNode key={i} x={node.x} y={node.y} n={i + 1} size={48} />
            ))}
            <HexTraveler routeId="routeMobile" dur={9} size={44} />
          </svg>

          {MOBILE_NODES.map((node, i) => {
            const right = node.x > 187;
            const step = HOW_TO_REQUEST[i];
            return (
              <div
                key={i}
                className={`absolute flex w-[52%] -translate-y-1/2 flex-col ${
                  right ? "left-[2%] items-end text-right" : "right-[2%] items-start text-left"
                }`}
                style={{ top: `${(node.y / MOBILE_H) * 100}%` }}
              >
                <h3 className="font-display text-[15px] font-bold text-white">{t(step.title)}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-white/70">{t(step.description)}</p>
              </div>
            );
          })}
        </div>

        {/* ───────── Desktop: ruta horizontal con las paradas + tarjetas debajo ───────── */}
        <div className="mt-12 hidden lg:block">
          <svg viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet" className="h-auto w-full">
            <path
              id="routeDesktop"
              d={routePath(DESKTOP_NODES)}
              stroke="#7cc249"
              strokeWidth={2}
              strokeOpacity={0.5}
              className={dashedRoute}
            />
            {DESKTOP_NODES.map((node, i) => (
              <HexNode key={i} x={node.x} y={node.y} n={i + 1} size={46} />
            ))}
            <HexTraveler routeId="routeDesktop" dur={8} size={44} />
          </svg>

          <ol className="mt-6 grid grid-cols-5 gap-4">
            {HOW_TO_REQUEST.map((step, i) => (
              <li key={i} className="px-2 text-center">
                <h3 className="h3 text-white">{t(step.title)}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/70">{t(step.description)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
