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

/** Opción de duración del toggle anual (All-Ways): días máximos por salida. */
export interface AnnualDuration {
  /** Clave usada en la matriz de precios (p. ej. "30"). */
  id: string;
  /** Etiqueta corta del toggle (p. ej. "30 días"). */
  label: Localized<string>;
  featured?: boolean;
}

/** Nivel anual (Gold / Black / Diamond) con precio por duración. */
export interface AnnualTier {
  /** Nombre de marca — NO se traduce. */
  name: string;
  accent: string;
  featured?: boolean;
  badge?: Localized<string>;
  /** Precio por viajero según la duración elegida (clave = AnnualDuration.id). */
  prices: Record<string, number>;
  /** 4 beneficios clave por persona. */
  benefits: Localized<string>[];
}

/** Datos del bloque anual multiviaje (solo All-Ways). */
export interface AnnualPlansData {
  durations: AnnualDuration[];
  tiers: AnnualTier[];
}

/**
 * Diferenciador específico del producto, contado en lenguaje humano con contraste
 * explícito ("a diferencia de otras asistencias…"). Es el argumento de venta incopiable.
 */
export interface ProductDifferentiator {
  /** Sello corto (p. ej. "Único en el mercado" / "Beneficio por evento"). */
  eyebrow: Localized<string>;
  title: Localized<string>;
  /** Cómo funciona en el resto del mercado (lo apagado). */
  others: Localized<string>;
  /** Cómo funciona con We Assist (lo dominante). */
  weassist: Localized<string>;
}

export interface ProductLine {
  slug: ProductSlug;
  eyebrow: Localized<string>;
  title: Localized<string>;
  subtitle: Localized<string>;
  href: string;
  /** Diferenciador de venta específico (All-Ways, Student, Long-Stay). Travel no lleva. */
  differentiator?: ProductDifferentiator;
  /**
   * Modo de precio:
   * - "tiers": los 5 niveles Travel (PLANS).
   * - "duration": tarjetas de duración con precio fijo (Student / Long-Stay).
   * - "annual": toggle de días + niveles con precio dinámico (All-Ways).
   */
  mode: "tiers" | "duration" | "annual";
  /** Solo para mode="duration". */
  durations?: DurationOption[];
  /** Solo para mode="annual". */
  annualPlans?: AnnualPlansData;
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
      "La asistencia clásica por viaje: eliges fechas y destino, y viajas con 5 niveles de asistencia para escoger — siempre con $0 deducibles y pagos directos.",
      "The classic per-trip assistance: choose dates and destination, and travel with 5 assistance tiers to pick from — always with $0 deductibles and direct payments.",
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
    differentiator: {
      eyebrow: l("Único en el mercado", "Unique in the market"),
      title: l(
        "Cada viaje del año arranca con tu asistencia completa.",
        "Every trip of the year starts with your full assistance.",
      ),
      others: l(
        "Con otras asistencias multiviaje, lo que usas en un viaje se descuenta de tu monto anual: si lo usas en enero, llegas a diciembre con menos —o descubierto—.",
        "With other multi-trip plans, whatever you use on one trip is deducted from your annual amount: use it in January and you reach December with less — or nothing.",
      ),
      weassist: l(
        "Con We Assist All-Ways, cada viaje del año empieza con tu asistencia íntegra, sin importar si ya la usaste antes — y eso incluye la cancelación. Somos los únicos del mercado en ofrecerlo.",
        "With We Assist All-Ways, every trip of the year starts with your full assistance, no matter if you already used it — and that includes cancellation. We're the only ones in the market who offer this.",
      ),
    },
    mode: "annual",
    // TODO PLACEHOLDER: matriz de precios/montos de asistencia de referencia. La columna de 30 días
    // corresponde al sitio actual; 60/90 escalan como estimación hasta conectar el API.
    annualPlans: {
      durations: [
        { id: "30", label: l("30 días", "30 days"), featured: true },
        { id: "60", label: l("60 días", "60 days") },
        { id: "90", label: l("90 días", "90 days") },
      ],
      tiers: [
        {
          name: "Gold",
          accent: "#7cc249",
          prices: { "30": 150.0, "60": 245.0, "90": 340.0 },
          benefits: [
            l("USD 35,000 asistencia médica (incluye Covid)", "USD 35,000 medical assistance (Covid included)"),
            l("USD 700 preexistencias", "USD 700 pre-existing"),
            l("USD 1,000 equipaje", "USD 1,000 baggage"),
            l("USD 1,000 cancelación de viaje", "USD 1,000 trip cancellation"),
          ],
        },
        {
          name: "Black",
          accent: "#10ade4",
          prices: { "30": 250.0, "60": 405.0, "90": 560.0 },
          benefits: [
            l("USD 55,000 asistencia médica (incluye Covid)", "USD 55,000 medical assistance (Covid included)"),
            l("USD 800 preexistencias", "USD 800 pre-existing"),
            l("USD 1,200 equipaje", "USD 1,200 baggage"),
            l("USD 1,500 cancelación de viaje", "USD 1,500 trip cancellation"),
          ],
        },
        {
          name: "Diamond",
          accent: "#0a4a86",
          featured: true,
          badge: l("Más vendido", "Best seller"),
          prices: { "30": 355.0, "60": 575.0, "90": 795.0 },
          benefits: [
            l("USD 100,000 asistencia médica (incluye Covid)", "USD 100,000 medical assistance (Covid included)"),
            l("USD 1,000 preexistencias", "USD 1,000 pre-existing"),
            l("USD 1,500 equipaje", "USD 1,500 baggage"),
            l("USD 1,800 cancelación de viaje", "USD 1,800 trip cancellation"),
          ],
        },
      ],
    },
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
      "Asistencia continua de 3 a 12 meses para estudiar en el exterior, con el certificado que piden las visas y universidades — y una familia que se entera de todo, al instante.",
      "Continuous assistance from 3 to 12 months to study abroad, with the certificate visas and universities require — and a family kept informed of everything, instantly.",
    ),
    href: ROUTES.student,
    differentiator: {
      eyebrow: l("Beneficio por evento", "Per-event benefit"),
      title: l(
        "No hay una bolsa anual que se agote.",
        "There's no annual pot that runs out.",
      ),
      others: l(
        "En muchos planes estudiantiles, cada atención descuenta de un tope anual: si te enfermas en octubre, llegas a fin de curso con menos protección.",
        "In many student plans, each visit is deducted from an annual cap: get sick in October and you finish the year with less protection.",
      ),
      weassist: l(
        "Con We Assist, la asistencia médica por accidente y las condiciones no preexistentes son POR EVENTO: cada atención se atiende como si fuera la primera, durante todo tu programa.",
        "With We Assist, medical assistance for accidents and non-pre-existing conditions are PER EVENT: each one is handled as if it were the first, throughout your whole program.",
      ),
    },
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
      "Trabajo remoto, asignaciones largas, temporadas fuera de casa. Asistencia continua de 90 a 365 días, renovable desde donde estés.",
      "Remote work, long assignments, seasons away from home. Continuous assistance from 90 to 365 days, renewable from wherever you are.",
    ),
    href: ROUTES.longStay,
    differentiator: {
      eyebrow: l("Beneficio por evento", "Per-event benefit"),
      title: l(
        "Cada evento se atiende como el primero.",
        "Each event is handled like the first.",
      ),
      others: l(
        "Otros planes de larga estadía reparten un solo tope anual entre todo lo que te pase: mientras más lo usas, menos te queda para el resto del año.",
        "Other long-stay plans split one annual cap across everything that happens: the more you use it, the less is left for the rest of the year.",
      ),
      weassist: l(
        "Con We Assist Long Stay, la asistencia médica por accidente y las condiciones no preexistentes son POR EVENTO — sin una bolsa que se vacíe mientras estás afuera.",
        "With We Assist Long Stay, medical assistance for accidents and non-pre-existing conditions are PER EVENT — with no pot that empties while you're away.",
      ),
    },
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
