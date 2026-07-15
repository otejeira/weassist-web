import { type Localized, l } from "@/lib/i18n/locale";

/** Beneficios de la página /beneficios — copy verbatim del prototipo. */

export interface Benefit {
  /** Número mostrado en el badge verde (01–09). */
  number: string;
  title: Localized<string>;
  description: Localized<string>;
}

/** Los 9 beneficios en un solo grid numerado (la card 09 va destacada en verde). */
export const BENEFITS: Benefit[] = [
  {
    number: "01",
    title: l("Asistencia médica internacional", "International medical assistance"),
    description: l(
      "Orientación al centro adecuado, coordinación de la atención y seguimiento del caso según tu plan.",
      "Guidance to the right facility, care coordination and case follow-up according to your plan.",
    ),
  },
  {
    number: "02",
    title: l("Preexistencias", "Pre-existing conditions"),
    description: l(
      "Asistencia por condiciones preexistentes hasta el límite contemplado en tu plan o upgrade.",
      "Assistance for pre-existing conditions up to the limit set in your plan or upgrade.",
    ),
  },
  {
    number: "03",
    title: l("Telemedicina", "Telemedicine"),
    description: l(
      "Orientación médica remota cuando el plan lo contempla, antes de decidir tu próximo paso.",
      "Remote medical guidance when your plan includes it, before deciding your next step.",
    ),
  },
  {
    number: "04",
    title: l("Equipaje protegido", "Protected baggage"),
    description: l(
      "Apoyo ante demora, pérdida o inconvenientes con tu equipaje según los beneficios contratados.",
      "Support for baggage delay, loss or issues according to the benefits you purchased.",
    ),
  },
  {
    number: "05",
    title: l("Vuelos demorados o cancelados", "Delayed or cancelled flights"),
    description: l(
      "Beneficios de apoyo ante demoras y cancelaciones de vuelo según el plan contratado.",
      "Support benefits for flight delays and cancellations according to your plan.",
    ),
  },
  {
    number: "06",
    title: l("Cancelación e interrupción", "Cancellation & interruption"),
    description: l(
      "Protege parte de tu inversión ante imprevistos elegibles, cumpliendo las condiciones de plazo.",
      "Protects part of your investment against eligible events, meeting the timing conditions.",
    ),
  },
  {
    number: "07",
    title: l("Concierge y orientación", "Concierge & guidance"),
    description: l(
      "Información, servicios, cambios y orientación cuando estás lejos de casa.",
      "Information, services, changes and guidance while you're away from home.",
    ),
  },
  {
    number: "08",
    title: l("Coordinación directa", "Direct coordination"),
    description: l(
      "Cuando aplica, coordinamos con proveedores para reducir anticipos y fricción en una emergencia.",
      "When applicable, we coordinate with providers to reduce out-of-pocket costs and friction in an emergency.",
    ),
  },
  {
    number: "09",
    title: l("Soporte 24/7/365", "Support 24/7/365"),
    description: l(
      "Atención humana por canales digitales y telefónicos, sin importar la zona horaria.",
      "Human support through digital and phone channels, no matter the time zone.",
    ),
  },
];

/** Nota legal al pie del grid de beneficios. */
export const BENEFITS_FOOTNOTE = l(
  "Los beneficios, límites, condiciones y exclusiones dependen del plan contratado. Consulta las condiciones generales aplicables.",
  "Benefits, limits, conditions and exclusions depend on the plan purchased. See the applicable general terms.",
);

export interface Difference {
  title: Localized<string>;
  description: Localized<string>;
}

/** Sección "Nuestra diferencia · Por qué se siente distinto". */
export const BENEFIT_DIFFERENCE: Difference[] = [
  {
    title: l("Acompañamiento, no solo póliza", "Support, not just a policy"),
    description: l(
      "Resolvemos y coordinamos en el momento, no solo reembolsamos después.",
      "We solve and coordinate in the moment, not just reimburse afterward.",
    ),
  },
  {
    title: l("Coordinación directa", "Direct coordination"),
    description: l(
      "Hablamos con el proveedor por ti para reducir anticipos y complicaciones.",
      "We talk to the provider for you to reduce out-of-pocket costs and hassle.",
    ),
  },
  {
    title: l("Respuesta 24/7/365", "24/7/365 response"),
    description: l(
      "Una persona real disponible en cualquier momento y zona horaria.",
      "A real person available at any time and in any time zone.",
    ),
  },
];
