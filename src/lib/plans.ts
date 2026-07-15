import { type Localized, l } from "@/lib/i18n/locale";

/**
 * Datos de planes y upgrades (tipados).
 *
 * TODO PLACEHOLDER: precios y topes de cobertura son valores de referencia del handoff.
 * Vendrán del API de cotización real. Mantener aquí hasta conectar el backend.
 */

export type PlanId = "silver" | "gold" | "black" | "diamond" | "platinum";

export interface Plan {
  id: PlanId;
  /** Nombre de marca — NO se traduce. */
  name: string;
  /** Tope médico mostrado en la card. */
  medicalCap: Localized<string>;
  /** Precio de referencia por viajero (placeholder, ejemplo 5 días / 1 viajero). */
  basePrice: number;
  /** Tarjeta destacada (Black) con borde cian + glow. */
  featured?: boolean;
  badge?: Localized<string>;
  /** 4 beneficios clave mostrados con check verde en la PlanCard. */
  keyBenefits: Localized<string>[];
  /** Color de acento del header de la card. */
  accent: string;
}

/** Los 5 niveles de la línea Travel — usados en el checkout (/comprar/planes). */
export const PLANS: Plan[] = [
  {
    id: "silver",
    name: "Silver",
    medicalCap: l("USD 10,000 asistencia médica", "USD 10,000 medical assistance"),
    basePrice: 20.0,
    accent: "#9aa7b3",
    keyBenefits: [
      l("USD 10,000 asistencia médica", "USD 10,000 medical assistance"),
      l("USD 600 equipaje", "USD 600 baggage"),
      l("USD 300 preexistencias", "USD 300 pre-existing"),
      l("USD 800 cancelación", "USD 800 cancellation"),
    ],
  },
  {
    id: "gold",
    name: "Gold",
    medicalCap: l("USD 35,000 asistencia médica", "USD 35,000 medical assistance"),
    basePrice: 28.55,
    accent: "#7cc249",
    keyBenefits: [
      l("USD 35,000 asistencia médica", "USD 35,000 medical assistance"),
      l("USD 1,000 equipaje", "USD 1,000 baggage"),
      l("USD 3,000 preexistencias", "USD 3,000 pre-existing"),
      l("USD 1,500 cancelación", "USD 1,500 cancellation"),
    ],
  },
  {
    id: "black",
    name: "Black",
    medicalCap: l("USD 75,000 asistencia médica", "USD 75,000 medical assistance"),
    basePrice: 44.25,
    featured: true,
    badge: l("MÁS VENDIDO", "BEST SELLER"),
    accent: "#10ade4",
    keyBenefits: [
      l("USD 75,000 asistencia médica", "USD 75,000 medical assistance"),
      l("USD 1,200 equipaje", "USD 1,200 baggage"),
      l("USD 7,000 preexistencias", "USD 7,000 pre-existing"),
      l("USD 1,800 cancelación", "USD 1,800 cancellation"),
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    medicalCap: l("USD 150,000 asistencia médica", "USD 150,000 medical assistance"),
    basePrice: 62.0,
    accent: "#0a4a86",
    keyBenefits: [
      l("USD 150,000 asistencia médica", "USD 150,000 medical assistance"),
      l("USD 1,500 equipaje", "USD 1,500 baggage"),
      l("USD 7,000 preexistencias", "USD 7,000 pre-existing"),
      l("USD 1,800 cancelación", "USD 1,800 cancellation"),
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    medicalCap: l("USD 250,000 asistencia médica", "USD 250,000 medical assistance"),
    basePrice: 90.0,
    accent: "#003366",
    keyBenefits: [
      l("USD 250,000 asistencia médica", "USD 250,000 medical assistance"),
      l("USD 1,800 equipaje", "USD 1,800 baggage"),
      l("USD 8,000 preexistencias", "USD 8,000 pre-existing"),
      l("USD 1,800 cancelación", "USD 1,800 cancellation"),
    ],
  },
];

export function getPlan(id: PlanId): Plan | undefined {
  return PLANS.find((p) => p.id === id);
}

/**
 * Matriz de comparación de beneficios por plan (para la tabla /comprar/comparar).
 * `values` da el valor por plan: `true`/`false` (incluido o no) o un texto localizado.
 *
 * TODO PLACEHOLDER: coberturas de referencia del handoff.
 */
export interface CompareFeature {
  label: Localized<string>;
  values: Record<PlanId, boolean | Localized<string>>;
}

export const COMPARE_FEATURES: CompareFeature[] = [
  {
    label: l("Asistencia médica por accidente", "Medical assistance for accidents"),
    values: {
      silver: l("USD 10,000"),
      gold: l("USD 35,000"),
      black: l("USD 75,000"),
      diamond: l("USD 150,000"),
      platinum: l("USD 250,000"),
    },
  },
  {
    label: l("Enfermedad preexistente", "Pre-existing condition"),
    values: {
      silver: l("USD 300"),
      gold: l("USD 3,000"),
      black: l("USD 7,000"),
      diamond: l("USD 7,000"),
      platinum: l("USD 8,000"),
    },
  },
  {
    label: l("Deducible", "Deductible"),
    values: {
      silver: l("$0"),
      gold: l("$0"),
      black: l("$0"),
      diamond: l("$0"),
      platinum: l("$0"),
    },
  },
  {
    label: l("Telemedicina 24/7", "Telemedicine 24/7"),
    values: { silver: true, gold: true, black: true, diamond: true, platinum: true },
  },
  {
    label: l("Cancelación de viaje contratado", "Booked-trip cancellation"),
    values: {
      silver: l("USD 800"),
      gold: l("USD 1,500"),
      black: l("USD 1,800"),
      diamond: l("USD 1,800"),
      platinum: l("USD 1,800"),
    },
  },
  {
    label: l("Compensación de equipaje", "Baggage compensation"),
    values: {
      silver: l("USD 600"),
      gold: l("USD 1,000"),
      black: l("USD 1,200"),
      diamond: l("USD 1,500"),
      platinum: l("USD 1,800"),
    },
  },
  {
    label: l("Regreso anticipado / acompañante", "Early return / companion"),
    values: { silver: true, gold: true, black: true, diamond: true, platinum: true },
  },
  {
    label: l("Pago directo (sin reembolsos)", "Direct payment (no reimbursements)"),
    values: { silver: true, gold: true, black: true, diamond: true, platinum: true },
  },
];

/** Categorías de upgrade (estilo Pax). El precio se aplica POR VIAJERO. */
export interface Upgrade {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  /** Precio por viajero (placeholder). */
  price: number;
  /** Icono de lucide-react (nombre). */
  icon: string;
}

export const UPGRADES: Upgrade[] = [
  {
    id: "multi-cancel",
    title: l("Cancelación Multi-causa", "Multi-reason cancellation"),
    description: l(
      "Amplía las causas justificadas de cancelación de 8 a 17.",
      "Extend justified cancellation reasons from 8 to 17.",
    ),
    price: 24.0,
    icon: "CalendarX",
  },
  {
    id: "med-evac",
    title: l("Evacuación Médica de Emergencia", "Emergency medical evacuation"),
    description: l("Traslado sanitario ampliado.", "Extended medical transport."),
    price: 2.25,
    icon: "Ambulance",
  },
  {
    id: "preexisting",
    title: l("Preexistencias Médicas ampliadas", "Extended pre-existing conditions"),
    description: l(
      "Aumenta el tope de tu plan para condiciones preexistentes.",
      "Raise your plan's cap for pre-existing conditions.",
    ),
    price: 22.0,
    icon: "HeartPulse",
  },
  {
    id: "sports",
    title: l("Protección Deportes", "Sports protection"),
    description: l(
      "Práctica recreativa y competitiva, incluye deportes extremos.",
      "Recreational and competitive practice, including extreme sports.",
    ),
    price: 9.75,
    icon: "Mountain",
  },
  {
    id: "tech",
    title: l("Protección Tecnológica", "Tech protection"),
    description: l("Laptop, tablet y celular hasta USD 2,000.", "Laptop, tablet and phone up to USD 2,000."),
    price: 35.5,
    icon: "Laptop",
  },
  {
    id: "pets",
    title: l("Asistencia de Mascotas", "Pet assistance"),
    description: l("Atención veterinaria en viaje hasta USD 5,000.", "Veterinary care while traveling up to USD 5,000."),
    price: 50.0,
    icon: "PawPrint",
  },
  {
    id: "pregnancy",
    title: l("Mujer Embarazada", "Pregnant traveler"),
    description: l("Cobertura ampliada hasta la semana 32.", "Extended coverage up to week 32."),
    price: 49.5,
    icon: "Baby",
  },
];

export function getUpgrade(id: string): Upgrade | undefined {
  return UPGRADES.find((u) => u.id === id);
}
