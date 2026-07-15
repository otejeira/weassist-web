import { type Localized, l } from "@/lib/i18n/locale";

/** Preguntas frecuentes (página /preguntas) — preguntas verbatim del prototipo. */

export type FaqCategory =
  | "antes-de-comprar"
  | "planes"
  | "beneficios"
  | "durante-el-viaje"
  | "agentes";

export interface FaqItem {
  category: FaqCategory;
  q: Localized<string>;
  a: Localized<string>;
}

/** Filtros mostrados como pills (además de "Todas"). */
export const FAQ_CATEGORIES: { id: FaqCategory; label: Localized<string> }[] = [
  { id: "antes-de-comprar", label: l("Antes de comprar", "Before buying") },
  { id: "planes", label: l("Planes", "Plans") },
  { id: "beneficios", label: l("Beneficios", "Benefits") },
  { id: "durante-el-viaje", label: l("Durante el viaje", "During the trip") },
  { id: "agentes", label: l("Agentes", "Agents") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "antes-de-comprar",
    q: l("¿Qué es una asistencia de viaje?", "What is travel assistance?"),
    a: l(
      "Es un servicio que te acompaña antes y durante tu viaje con orientación, coordinación médica, apoyo con equipaje y soporte humano 24/7, según el plan contratado.",
      "It's a service that supports you before and during your trip with guidance, medical coordination, baggage support and human support 24/7, according to the plan purchased.",
    ),
  },
  {
    category: "antes-de-comprar",
    q: l("¿Qué diferencia hay entre asistencia y seguro de viaje?", "What's the difference between assistance and travel insurance?"),
    a: l(
      "El seguro tradicional te paga después de que sufres. La asistencia te ayuda mientras sufres: coordinamos la atención y pagamos directo, sin que adelantes dinero.",
      "Traditional insurance pays you after you suffer. Assistance helps you while you suffer: we coordinate care and pay directly, without you paying upfront.",
    ),
  },
  {
    category: "antes-de-comprar",
    q: l("¿Cuándo debo comprar mi asistencia?", "When should I buy my assistance?"),
    a: l(
      "Lo ideal es comprarla al reservar tu viaje: algunos beneficios, como cancelación, dependen de contratar con la anticipación indicada en las condiciones.",
      "Ideally when you book your trip: some benefits, like cancellation, depend on purchasing within the advance window stated in the conditions.",
    ),
  },
  {
    category: "planes",
    q: l("¿Qué es un plan multiviajes anual?", "What is an annual multi-trip plan?"),
    a: l(
      "Es All-Ways: te protege en viajes ilimitados durante 365 días, sin activar nada cada vez que sales. Ideal si viajas varias veces al año.",
      "It's All-Ways: it protects you on unlimited trips for 365 days, with nothing to activate each time you leave. Ideal if you travel several times a year.",
    ),
  },
  {
    category: "beneficios",
    q: l("¿Qué pasa si tengo una condición preexistente?", "What if I have a pre-existing condition?"),
    a: l(
      "Los planes superiores incluyen asistencia de emergencia por preexistencias, y puedes ampliar el tope con el upgrade de preexistencias. Consulta las condiciones del plan.",
      "Higher tiers include emergency assistance for pre-existing conditions, and you can raise the cap with the pre-existing upgrade. Check the plan conditions.",
    ),
  },
  {
    category: "durante-el-viaje",
    q: l("¿Qué hago si me enfermo durante mi viaje?", "What do I do if I get sick during my trip?"),
    a: l(
      "Contáctanos 24/7 por los canales de tu voucher. Te orientamos al proveedor adecuado, coordinamos la atención y pagamos directo según tu plan.",
      "Contact us 24/7 through your voucher channels. We guide you to the right provider, coordinate care and pay directly according to your plan.",
    ),
  },
  {
    category: "agentes",
    q: l("¿Puedo vender We Assist como agente o agencia?", "Can I sell We Assist as an agent or agency?"),
    a: l(
      "Sí. En We Assist Business cotizas, emites y cobras comisiones desde una sola plataforma. Solicita una demo para empezar.",
      "Yes. With We Assist Business you quote, issue and earn commissions from a single platform. Request a demo to get started.",
    ),
  },
];
