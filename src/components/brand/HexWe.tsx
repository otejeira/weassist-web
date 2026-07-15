import { cn } from "@/lib/cn";

const HEX_PATH = "M50 6 L88 28 V72 L50 94 L12 72 V28 Z";

/**
 * HexShape — hexágono de marca como contenedor (sin texto), para colocar un icono encima.
 * `outline` dibuja solo el borde (tarjetas de asistencia con hex outline cian).
 */
export function HexShape({
  fill = "#e6f7fd",
  stroke,
  outline = false,
  size = 46,
  className,
  children,
}: {
  fill?: string;
  stroke?: string;
  outline?: boolean;
  size?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0">
        <path
          d={HEX_PATH}
          fill={outline ? "transparent" : fill}
          stroke={stroke ?? (outline ? "#10ade4" : "transparent")}
          strokeWidth={outline ? 3 : 0}
        />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

type HexVariant = "complete" | "active" | "pending" | "brand";

interface HexBadgeProps {
  /** Estado visual del hexágono (README §Sistema visual de marca #3). */
  variant?: HexVariant;
  /** Número mostrado (para active/pending). */
  number?: number;
  /** Color de relleno para variant="brand". */
  fill?: string;
  size?: number;
  className?: string;
}

/**
 * HexBadge — hexágono "We". Usado en pasos numerados, stepper y CTAs.
 * complete = verde + check · active = azul + número · pending = outline gris + número ·
 * brand = relleno de color con "We" itálica.
 */
export function HexBadge({
  variant = "brand",
  number,
  fill = "#7cc249",
  size = 46,
  className,
}: HexBadgeProps) {
  const styles: Record<HexVariant, { fill: string; stroke: string }> = {
    complete: { fill: "#7cc249", stroke: "#7cc249" },
    active: { fill: "#0a4a86", stroke: "#0a4a86" },
    pending: { fill: "transparent", stroke: "#9aa7b3" },
    brand: { fill, stroke: fill },
  };
  const s = styles[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <path d={HEX_PATH} fill={s.fill} stroke={s.stroke} strokeWidth={variant === "pending" ? 3 : 0} />
      {variant === "complete" && (
        <path
          d="M35 51 L46 62 L67 39"
          fill="none"
          stroke="#fff"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {(variant === "active" || variant === "pending") && number != null && (
        <text
          x="50"
          y="50"
          dominantBaseline="central"
          textAnchor="middle"
          fontFamily="Poppins, sans-serif"
          fontWeight="700"
          fontSize="38"
          fill={variant === "active" ? "#fff" : "#9aa7b3"}
        >
          {number}
        </text>
      )}
      {variant === "brand" && (
        <text
          x="50"
          y="52"
          dominantBaseline="central"
          textAnchor="middle"
          fontFamily="Poppins, sans-serif"
          fontStyle="italic"
          fontWeight="700"
          fontSize="34"
          fill="#fff"
        >
          We
        </text>
      )}
    </svg>
  );
}
