import { type Localized, l } from "@/lib/i18n/locale";

/**
 * Contenido legal (páginas /legal/[seccion]).
 *
 * TODO PLACEHOLDER: textos ilustrativos. El cliente debe reemplazarlos por los
 * documentos legales definitivos aprobados por su equipo legal.
 */

export type LegalSlug = "condiciones" | "privacidad" | "cancelacion";

export interface LegalSection {
  slug: LegalSlug;
  title: Localized<string>;
  intro: Localized<string>;
  blocks: { heading: Localized<string>; body: Localized<string> }[];
}

export const LEGAL_SECTIONS: Record<LegalSlug, LegalSection> = {
  condiciones: {
    slug: "condiciones",
    title: l("Condiciones generales", "General conditions"),
    intro: l(
      "Estas condiciones regulan el uso de los servicios de asistencia de We Assist. (Texto de referencia — pendiente de aprobación legal.)",
      "These conditions govern the use of We Assist's assistance services. (Reference text — pending legal approval.)",
    ),
    blocks: [
      {
        heading: l("Objeto del servicio", "Scope of service"),
        body: l(
          "We Assist presta servicios de asistencia en viaje según el plan contratado y los topes de cobertura vigentes.",
          "We Assist provides travel assistance services according to the contracted plan and applicable coverage caps.",
        ),
      },
      {
        heading: l("Vigencia", "Validity"),
        body: l(
          "La cobertura aplica durante las fechas indicadas al momento de la contratación y para el destino seleccionado.",
          "Coverage applies during the dates indicated at purchase and for the selected destination.",
        ),
      },
      {
        heading: l("Exclusiones", "Exclusions"),
        body: l(
          "No se cubren situaciones expresamente excluidas en las condiciones particulares del plan.",
          "Situations expressly excluded in the plan's particular conditions are not covered.",
        ),
      },
    ],
  },
  privacidad: {
    slug: "privacidad",
    title: l("Política de privacidad", "Privacy policy"),
    intro: l(
      "Explicamos cómo tratamos tus datos personales. (Texto de referencia — pendiente de aprobación legal.)",
      "We explain how we handle your personal data. (Reference text — pending legal approval.)",
    ),
    blocks: [
      {
        heading: l("Datos que recopilamos", "Data we collect"),
        body: l(
          "Recopilamos los datos necesarios para emitir tu cobertura y prestar asistencia (identidad, contacto, viaje).",
          "We collect the data needed to issue your coverage and provide assistance (identity, contact, trip).",
        ),
      },
      {
        heading: l("Uso de los datos", "Use of data"),
        body: l(
          "Usamos tus datos exclusivamente para gestionar tu asistencia y cumplir obligaciones legales.",
          "We use your data solely to manage your assistance and meet legal obligations.",
        ),
      },
      {
        heading: l("Tus derechos", "Your rights"),
        body: l(
          "Puedes solicitar acceso, rectificación o eliminación de tus datos escribiéndonos.",
          "You may request access, correction or deletion of your data by contacting us.",
        ),
      },
    ],
  },
  cancelacion: {
    slug: "cancelacion",
    title: l("Política de cancelación", "Cancellation policy"),
    intro: l(
      "Condiciones para cancelar tu plan y solicitar reembolsos. (Texto de referencia — pendiente de aprobación legal.)",
      "Conditions to cancel your plan and request refunds. (Reference text — pending legal approval.)",
    ),
    blocks: [
      {
        heading: l("Cancelación antes del viaje", "Cancellation before travel"),
        body: l(
          "Puedes cancelar antes de la fecha de inicio de cobertura según los plazos indicados en la contratación.",
          "You may cancel before the coverage start date within the timeframes indicated at purchase.",
        ),
      },
      {
        heading: l("Reembolsos", "Refunds"),
        body: l(
          "Los reembolsos se procesan al medio de pago original según la política vigente.",
          "Refunds are processed to the original payment method per the current policy.",
        ),
      },
    ],
  },
};

export const LEGAL_SLUGS: LegalSlug[] = ["condiciones", "privacidad", "cancelacion"];
