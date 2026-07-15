/**
 * Constantes del sitio.
 *
 * TODO (cliente/marketing): reemplazar TODOS los valores marcados como PLACEHOLDER
 * por los datos reales antes de publicar. Están centralizados aquí a propósito.
 */

// Assist Healthier es un sitio EXTERNO ya construido. Todo enlace "Healthier ↗" apunta aquí.
// TODO PLACEHOLDER: URL real de Assist Healthier.
export const HEALTHIER_URL = "https://healthier.weassistgroup.com";

// Sofy — AI Agent de We Assist en WhatsApp. Los CTA "hablar con Sofy" apuntan aquí.
// TODO PLACEHOLDER: número real de WhatsApp de Sofy.
export const SOFY_WHATSAPP_HREF =
  "https://wa.me/5076XXXXXXX?text=" +
  encodeURIComponent("Hola Sofy 👋 Ayúdame a elegir mi plan de asistencia de viaje.");

// Contacto — TODO PLACEHOLDER: teléfonos, WhatsApp y dirección reales.
export const CONTACT = {
  phone: "+507 6XXX-XXXX",
  whatsapp: "+507 6XXX-XXXX",
  whatsappHref: "https://wa.me/5076XXXXXXX", // TODO PLACEHOLDER
  collectCall: "+507 6XXX-XXXX",
  email: "asistencia@weassistgroup.com",
  salesEmail: "info@weassistgroup.com",
  addressLine: "Dirección de oficina (placeholder)",
  city: "Ciudad de Panamá, Panamá",
} as const;

// Datos corporativos para el disclaimer del footer.
export const COMPANY = {
  legalName: "We Assist Corp",
  ruc: "RUC 155256278-2-2017",
  address: "PH Office One, Obarrio, Ciudad de Panamá",
  year: 2026,
} as const;

// Certificaciones / partners mostrados como chips.
export const CERTS = [
  "PCI DSS",
  "HIPAA",
  "ISO 9001",
  "AICPA SOC",
  "AirHelp",
  "Elite Global Doctors",
] as const;

// Aliados y respaldos mostrados en la cinta animada del home (marquee).
// TODO PLACEHOLDER: reemplazar por los logos reales de cada aliado.
export const ALLIANCES = [
  "Lloyd's of London",
  "Elite Global Doctors",
  "binah.ai",
  "deel.",
  "KORIS",
  "AirHelp",
  "IRIS",
] as const;

// Códigos promocionales de demostración (mock — el API real los validará).
export const PROMO_CODES: Record<string, number> = {
  // porcentaje de descuento sobre el subtotal
  WEASSIST10: 0.1,
  VIAJESEGURO: 0.15,
};
