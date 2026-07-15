import { type Localized, l } from "@/lib/i18n/locale";
import { HEALTHIER_URL } from "@/lib/constants";

/** Rutas centralizadas — usar SIEMPRE estas constantes (sin anchors muertos). */
export const ROUTES = {
  home: "/",
  travel: "/productos/travel",
  allWays: "/productos/all-ways",
  student: "/productos/student",
  longStay: "/productos/long-stay",
  beneficios: "/beneficios",
  como: "/como-funciona",
  preguntas: "/preguntas",
  corporate: "/corporate",
  business: "/business",
  asistencia: "/asistencia",
  ingresar: "/ingresar",
  legalCondiciones: "/legal/condiciones",
  legalPrivacidad: "/legal/privacidad",
  legalCancelacion: "/legal/cancelacion",
  comprarPlanes: "/comprar/planes",
  comprarComparar: "/comprar/comparar",
  comprarMejoras: "/comprar/mejoras",
  comprarDatos: "/comprar/datos",
  comprarPago: "/comprar/pago",
  comprarConfirmacion: "/comprar/confirmacion",
} as const;

export interface NavItem {
  label: Localized<string>;
  href: string;
  external?: boolean;
}

/**
 * Nav principal del header (enlaces directos). "Productos" abre el mega-menú.
 * Cómo funciona y Preguntas viven en el footer (columna Recursos), no en el header.
 */
export const MAIN_NAV: NavItem[] = [
  { label: l("Beneficios", "Benefits"), href: ROUTES.beneficios },
  { label: l("Asistencia", "Assistance"), href: ROUTES.asistencia },
];

export interface ProductMenuItem {
  eyebrow: Localized<string>;
  title: Localized<string>;
  description: Localized<string>;
  href: string;
  accent: string;
}

/** Ítems del mega-menú Productos (la línea Crucero está descontinuada). */
export const PRODUCT_MENU: ProductMenuItem[] = [
  {
    eyebrow: l("TRAVEL", "TRAVEL"),
    title: l("Travel", "Travel"),
    description: l("Vacaciones y viajes puntuales de hasta 90 días.", "Vacations and one-off trips of up to 90 days."),
    href: ROUTES.travel,
    accent: "#10ade4",
  },
  {
    eyebrow: l("ALL-WAYS · Anual multiviaje", "ALL-WAYS · Annual multi-trip"),
    title: l("All-Ways", "All-Ways"),
    description: l("Viaja todo el año. Un solo plan. Viajes ilimitados de hasta 60 días.", "Travel all year. One plan. Unlimited trips of up to 60 days."),
    href: ROUTES.allWays,
    accent: "#7cc249",
  },
  {
    eyebrow: l("STUDENT", "STUDENT"),
    title: l("Student", "Student"),
    description: l("Estudia sin preocupaciones: programas de 90 a 365 días.", "Study worry-free: programs from 90 to 365 days."),
    href: ROUTES.student,
    accent: "#0a4a86",
  },
  {
    eyebrow: l("LONG STAY", "LONG STAY"),
    title: l("Long Stay", "Long Stay"),
    description: l("Meses en el exterior con asistencia completa por evento — única en el mercado.", "Months abroad with full per-event assistance — unique in the market."),
    href: ROUTES.longStay,
    accent: "#003366",
  },
];

/** Selector de línea (Travel activo / Corporate / Business / Healthier externo). */
export interface LineOption {
  id: "travel" | "corporate" | "business" | "healthier";
  label: Localized<string>;
  href: string;
  external?: boolean;
  accent?: string;
}

export const LINE_OPTIONS: LineOption[] = [
  { id: "travel", label: l("Travel"), href: ROUTES.home },
  { id: "corporate", label: l("Corporate"), href: ROUTES.corporate },
  { id: "business", label: l("Business"), href: ROUTES.business },
  { id: "healthier", label: l("Healthier ↗"), href: HEALTHIER_URL, external: true, accent: "#004AAD" },
];
