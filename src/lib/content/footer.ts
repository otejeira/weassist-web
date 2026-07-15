import { type Localized, l } from "@/lib/i18n/locale";
import { ROUTES } from "@/lib/nav";
import { HEALTHIER_URL } from "@/lib/constants";

export interface FooterLink {
  label: Localized<string>;
  href: string;
  external?: boolean;
  /** Color de acento opcional (Healthier cian, Asistencia verde). */
  tone?: "cyan" | "green";
}

export interface FooterColumn {
  title: Localized<string>;
  links: FooterLink[];
}

/**
 * Columnas del footer global (variante Travel).
 * Corporate/Business sustituyen la columna "Productos" por sus soluciones.
 */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: l("Productos", "Products"),
    links: [
      { label: l("Viajes por día", "Per-trip travel"), href: ROUTES.travel },
      { label: l("Multiviajes Anual", "Annual multi-trip"), href: ROUTES.allWays },
      { label: l("Viajes Estudiantiles", "Student travel"), href: ROUTES.student },
      { label: l("Viajes de Larga Estadía", "Long-stay travel"), href: ROUTES.longStay },
      { label: l("Comparar planes", "Compare plans"), href: ROUTES.comprarComparar },
    ],
  },
  {
    title: l("Compañía", "Company"),
    links: [
      { label: l("Sobre nosotros", "About us"), href: ROUTES.corporate },
      { label: l("Corporate", "Corporate"), href: ROUTES.corporate },
      { label: l("Business", "Business"), href: ROUTES.business },
      { label: l("Assist Healthier ↗", "Assist Healthier ↗"), href: HEALTHIER_URL, external: true, tone: "cyan" },
      { label: l("Ingresar", "Log in"), href: ROUTES.ingresar },
    ],
  },
  {
    title: l("Recursos", "Resources"),
    links: [
      { label: l("Consulta tu plan", "Check your plan"), href: ROUTES.ingresar },
      { label: l("Preguntas frecuentes", "FAQ"), href: ROUTES.preguntas },
      { label: l("Cómo funciona", "How it works"), href: ROUTES.como },
      { label: l("Beneficios", "Benefits"), href: ROUTES.beneficios },
      { label: l("Asistencia 24/7 →", "24/7 Assistance →"), href: ROUTES.asistencia, tone: "green" },
    ],
  },
  {
    title: l("Legal", "Legal"),
    links: [
      { label: l("Condiciones Generales", "General Conditions"), href: ROUTES.legalCondiciones },
      { label: l("Condiciones de uso Web", "Website Terms of Use"), href: "/legal/uso-web" },
      { label: l("Políticas de privacidad", "Privacy Policy"), href: ROUTES.legalPrivacidad },
      { label: l("Cancelación y Devolución", "Cancellation & Refunds"), href: ROUTES.legalCancelacion },
    ],
  },
];

/** Columna de soluciones para la línea Corporate. */
const CORPORATE_COLUMN: FooterColumn = {
  title: l("Corporate", "Corporate"),
  links: [
    { label: l("Programas para empresas", "Corporate programs"), href: ROUTES.corporate },
    { label: l("Asistencia a colaboradores", "Employee assistance"), href: ROUTES.corporate },
    { label: l("Cobertura global", "Global coverage"), href: ROUTES.corporate },
    { label: l("Hablar con un asesor", "Talk to an advisor"), href: ROUTES.asistencia },
  ],
};

/** Columna de soluciones para la línea Business. */
const BUSINESS_COLUMN: FooterColumn = {
  title: l("Business", "Business"),
  links: [
    { label: l("Alianzas y agencias", "Partners & agencies"), href: ROUTES.business },
    { label: l("Venta de asistencia", "Sell assistance"), href: ROUTES.business },
    { label: l("Integraciones", "Integrations"), href: ROUTES.business },
    { label: l("Hablar con un asesor", "Talk to an advisor"), href: ROUTES.asistencia },
  ],
};

/** Devuelve las columnas del footer sustituyendo Productos según la línea activa. */
export function getFooterColumns(pathname: string): FooterColumn[] {
  if (pathname.startsWith(ROUTES.corporate)) {
    return [CORPORATE_COLUMN, ...FOOTER_COLUMNS.slice(1)];
  }
  if (pathname.startsWith(ROUTES.business)) {
    return [BUSINESS_COLUMN, ...FOOTER_COLUMNS.slice(1)];
  }
  return FOOTER_COLUMNS;
}

export const FOOTER_DESCRIPTION = l(
  "The Assistance Company. Asistencia en viaje con $0 deducibles, pagos directos y soporte humano 24/7/365.",
  "The Assistance Company. Travel assistance with $0 deductibles, direct payments and 24/7/365 human support.",
);
