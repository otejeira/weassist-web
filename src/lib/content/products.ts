import { type Localized, l } from "@/lib/i18n/locale";
import { ROUTES } from "@/lib/nav";

/**
 * Contenido de las 4 líneas de producto (Travel / All-Ways / Student / Long-Stay).
 *
 * TODO PLACEHOLDER: precios y topes vienen del handoff como referencia.
 * Se sustituyen por el API de cotización real.
 */

export type ProductSlug = "travel" | "all-ways" | "student" | "long-stay";

export interface DurationOption {
  /** Etiqueta de la duración (p. ej. "30 días"). */
  label: Localized<string>;
  /** Precio de referencia por viajero para esa duración. */
  price: number;
  /** Marca visual de la opción recomendada. */
  featured?: boolean;
}

export interface ProductLine {
  slug: ProductSlug;
  eyebrow: Localized<string>;
  title: Localized<string>;
  subtitle: Localized<string>;
  href: string;
  /** Modo de precio: "tiers" usa los 5 niveles (PLANS); "duration" usa duraciones. */
  mode: "tiers" | "duration";
  /** Solo para mode="duration". */
  durations?: DurationOption[];
  /** Título de la sección de precios. */
  pricingTitle: Localized<string>;
  pricingSubtitle: Localized<string>;
}

export const PRODUCT_LINES: Record<ProductSlug, ProductLine> = {
  travel: {
    slug: "travel",
    eyebrow: l("Travel · Viajes por día", "Travel · Per-trip"),
    title: l("Un viaje a la vez, hasta 90 días.", "One trip at a time, up to 90 days."),
    subtitle: l(
      "La asistencia clásica por viaje: eliges fechas y destino, y viajas con 5 niveles de cobertura para escoger — siempre con $0 deducibles y pagos directos.",
      "The classic per-trip assistance: choose dates and destination, and travel with 5 coverage tiers to pick from — always with $0 deductibles and direct payments.",
    ),
    href: ROUTES.travel,
    mode: "tiers",
    pricingTitle: l("5 niveles, un mismo respaldo", "5 tiers, one same backing"),
    pricingSubtitle: l(
      "Ejemplo: 5 días · 1 viajero · PA → US",
      "Example: 5 days · 1 traveler · PA → US",
    ),
  },
  "all-ways": {
    slug: "all-ways",
    eyebrow: l("Travel · All-Ways", "Travel · All-Ways"),
    title: l("Viajas todo el año. Protégete todo el año.", "You travel all year. Get protected all year."),
    subtitle: l(
      "Una sola asistencia anual multiviaje: sales las veces que quieras durante 365 días, sin activar nada ni avisar a nadie. Compras una vez y viajas todo el año.",
      "A single annual multi-trip assistance: leave as many times as you want over 365 days, with nothing to activate and no one to notify. Buy once and travel all year.",
    ),
    href: ROUTES.allWays,
    mode: "duration",
    durations: [
      { label: l("Hasta 30 días por viaje", "Up to 30 days per trip"), price: 150.0 },
      { label: l("Hasta 60 días por viaje", "Up to 60 days per trip"), price: 250.0, featured: true },
      { label: l("Hasta 90 días por viaje", "Up to 90 days per trip"), price: 355.0 },
    ],
    pricingTitle: l("¿Cuánto durará tu viaje más largo del año?", "How long will your longest trip of the year be?"),
    pricingSubtitle: l(
      "Elige la duración máxima por salida y el precio se ajusta al instante. Viajes ilimitados durante 365 días, en todos.",
      "Choose the max duration per trip and the price adjusts instantly. Unlimited trips for 365 days, on every plan.",
    ),
  },
  student: {
    slug: "student",
    eyebrow: l("Travel · Student", "Travel · Student"),
    title: l("Tu semestre afuera, cubierto de principio a fin.", "Your semester abroad, covered from start to finish."),
    subtitle: l(
      "Cobertura continua de 3 a 12 meses para estudiar en el exterior, con el certificado que piden las visas y universidades — y una familia que se entera de todo, al instante.",
      "Continuous coverage from 3 to 12 months to study abroad, with the certificate visas and universities require — and a family kept informed of everything, instantly.",
    ),
    href: ROUTES.student,
    mode: "duration",
    durations: [
      { label: l("Semestre (hasta 180 días)", "Semester (up to 180 days)"), price: 420.0, featured: true },
      { label: l("Año académico (hasta 365 días)", "Academic year (up to 365 days)"), price: 760.0 },
    ],
    pricingTitle: l("Planes para estudiantes", "Student plans"),
    pricingSubtitle: l(
      "Desde USD$ 1.90 por día en planes de 6 a 12 meses.",
      "From USD$ 1.90 per day on 6–12 month plans.",
    ),
  },
  "long-stay": {
    slug: "long-stay",
    eyebrow: l("Travel · Long Stay", "Travel · Long Stay"),
    title: l("Para los que se quedan más que unas vacaciones.", "For those who stay longer than a vacation."),
    subtitle: l(
      "Trabajo remoto, asignaciones largas, temporadas fuera de casa. Cobertura continua de 90 a 365 días, renovable desde donde estés.",
      "Remote work, long assignments, seasons away from home. Continuous coverage from 90 to 365 days, renewable from wherever you are.",
    ),
    href: ROUTES.longStay,
    mode: "duration",
    durations: [
      { label: l("90 días", "90 days"), price: 210.0 },
      { label: l("180 días", "180 days"), price: 390.0, featured: true },
      { label: l("365 días", "365 days"), price: 720.0 },
    ],
    pricingTitle: l("Elige tu horizonte", "Choose your horizon"),
    pricingSubtitle: l(
      "Un solo plan continuo — no parches de 30 días encadenados. Si te quedas más, lo renuevas en línea.",
      "One continuous plan — not chained 30-day patches. If you stay longer, renew it online.",
    ),
  },
};

export const PRODUCT_SLUGS: ProductSlug[] = ["travel", "all-ways", "student", "long-stay"];
