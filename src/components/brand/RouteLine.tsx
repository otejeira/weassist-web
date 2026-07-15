import { cn } from "@/lib/cn";

type RouteLineTone = "onDark" | "onLight";

interface RouteLineProps {
  /** Path SVG del recorrido. */
  path: string;
  /** viewBox del SVG (por defecto lienzo ancho de sección). */
  viewBox?: string;
  /** Tono según el fondo: cian .4 sobre navy, .12–.25 sobre claro. */
  tone?: RouteLineTone;
  /** Opacidad del trazo (sobrescribe el tono). */
  opacity?: number;
  className?: string;
}

/**
 * RouteLine — línea de ruta punteada animada. Motivo central de la marca.
 * SVG absoluto por sección, `preserveAspectRatio="none"`, dash 2/10, grosor 2,
 * animación `dashMove` (pausada con prefers-reduced-motion vía globals.css).
 */
export function RouteLine({
  path,
  viewBox = "0 0 1200 400",
  tone = "onLight",
  opacity,
  className,
}: RouteLineProps) {
  const stroke = tone === "onDark" ? "#10ade4" : "#0a4a86";
  const resolvedOpacity = opacity ?? (tone === "onDark" ? 0.4 : 0.18);

  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="2 10"
        strokeOpacity={resolvedOpacity}
        className="animate-dashMove"
      />
    </svg>
  );
}
