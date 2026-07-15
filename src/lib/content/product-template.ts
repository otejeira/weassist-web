import { type Localized, l } from "@/lib/i18n/locale";

/** Contenido compartido por las 4 páginas de producto (README §Páginas de producto). */

export interface IconCard {
  icon: string;
  title: Localized<string>;
  description: Localized<string>;
}

/** "¿Cómo funcionan las asistencias We Assist®?" — grid 3×2 (verbatim del prototipo). */
export const ASSISTANCE_GRID: IconCard[] = [
  {
    icon: "Stethoscope",
    title: l("Asistencia médica internacional 24 h", "24h international medical assistance"),
    description: l(
      "¿Lesión o enfermedad en viaje? Nos escribes por WhatsApp o nos llamas: te indicamos el mejor centro sanitario, coordinamos todo y nos encargamos de los gastos.",
      "Injured or sick while traveling? Message us on WhatsApp or call: we point you to the best medical center, coordinate everything and handle the costs.",
    ),
  },
  {
    icon: "ConciergeBell",
    title: l("Servicio concierge", "Concierge service"),
    description: l(
      "Entradas, reservas, renta de autos, arreglos de viaje e información local. Disponible 24/7/365 en las principales ciudades del mundo.",
      "Tickets, reservations, car rentals, travel arrangements and local info. Available 24/7/365 in the world's major cities.",
    ),
  },
  {
    icon: "Luggage",
    title: l("Equipajes", "Baggage"),
    description: l(
      "Si tu equipaje no aparece, te ayudamos a recuperarlo, cubrimos los gastos del camino y te compensamos si no se recupera.",
      "If your baggage doesn't show up, we help you recover it, cover the expenses along the way and compensate you if it's not recovered.",
    ),
  },
  {
    icon: "CalendarX",
    title: l("Cancelación e interrupción", "Cancellation & interruption"),
    description: l(
      "Una pérdida familiar, un siniestro en casa, una epidemia. Todos los planes traen beneficios de cancelación — y upgrades para ampliarlos.",
      "A family loss, an incident at home, an epidemic. Every plan includes cancellation benefits — plus upgrades to extend them.",
    ),
  },
  {
    icon: "Clock",
    title: l("Demoras", "Delays"),
    description: l(
      "¿Vuelo retrasado hasta mañana? Coordinamos las nuevas gestiones y reconocemos hotel, comidas y transporte hasta el tope contratado.",
      "Flight delayed until tomorrow? We coordinate the new arrangements and cover hotel, meals and transport up to your contracted limit.",
    ),
  },
  {
    icon: "Mountain",
    title: l("Deportes amateur", "Amateur sports"),
    description: l(
      "¿Te animaste a bucear o esquiar? Te asistimos en deporte recreativo: ecuestres, nieve, acuáticos y más (no profesional).",
      "Feel like diving or skiing? We assist with recreational sports: equestrian, snow, water and more (non-professional).",
    ),
  },
];

export interface Step {
  title: Localized<string>;
  description: Localized<string>;
}

/** "Cómo solicitar tu asistencia" — 5 pasos con hexágonos verdes (verbatim del prototipo). */
export const HOW_TO_REQUEST: Step[] = [
  {
    title: l("Contáctanos", "Contact us"),
    description: l(
      "Nos escribes o llamas a la central de atención 24/7.",
      "You message or call our 24/7 assistance center.",
    ),
  },
  {
    title: l("Te atendemos", "We take your case"),
    description: l(
      "Un especialista recibe y procesa tu solicitud.",
      "A specialist receives and processes your request.",
    ),
  },
  {
    title: l("Coordinamos", "We coordinate"),
    description: l(
      "Nuestro equipo coordina los servicios que necesitas.",
      "Our team coordinates the services you need.",
    ),
  },
  {
    title: l("Monitoreamos", "We monitor"),
    description: l(
      "Monitoreamos que todo se entregue correctamente.",
      "We monitor that everything is delivered correctly.",
    ),
  },
  {
    title: l("Pagamos directo", "We pay directly"),
    description: l(
      "Pagamos directo a los proveedores — tú no adelantas nada.",
      "We pay providers directly — you advance nothing.",
    ),
  },
];

/** "¿Qué puedes esperar de nuestra asistencia?" — 3 tarjetas (verbatim del prototipo). */
export const WHAT_TO_EXPECT: IconCard[] = [
  {
    icon: "HeartPulse",
    title: l("Tu salud", "Your health"),
    description: l(
      "En una emergencia médica cubrimos los costos de tu atención. Tu salud es nuestra prioridad número uno.",
      "In a medical emergency we cover the cost of your care. Your health is our number one priority.",
    ),
  },
  {
    icon: "Ambulance",
    title: l("Evacuaciones médicas", "Medical evacuations"),
    description: l(
      "¿Un accidente en la montaña? Te evacuamos al hospital y cubrimos los gastos. Viaja con confianza incluso en tus actividades extremas.",
      "An accident in the mountains? We evacuate you to the hospital and cover the costs. Travel with confidence even in extreme activities.",
    ),
  },
  {
    icon: "ConciergeBell",
    title: l("Servicios concierge", "Concierge services"),
    description: l(
      "Reservas, cambios de itinerario, interpretación, visas y requisitos de entrada. Nuestro equipo se encarga de los detalles.",
      "Reservations, itinerary changes, interpretation, visas and entry requirements. Our team handles the details.",
    ),
  },
];
