import { type Localized, l } from "@/lib/i18n/locale";
import { ROUTES } from "@/lib/nav";
import { HEALTHIER_URL } from "@/lib/constants";

/** Contenido del home (tipado, ES activo / EN opcional). */

export interface Differentiator {
  icon: string;
  title: Localized<string>;
  description: Localized<string>;
}

/** "¿Por qué We Assist?" — diferenciadores clave (verbatim del prototipo). */
export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: "Wallet",
    title: l("Sin deducibles", "No deductibles"),
    description: l(
      "$0 deducibles en todos los productos. Cero sorpresas al usar tu asistencia.",
      "$0 deductibles on every product. No surprises when you use your assistance.",
    ),
  },
  {
    icon: "Banknote",
    title: l("Pagos directos, no reembolsos", "Direct payments, not reimbursements"),
    description: l(
      "Coordinamos la atención y pagamos directo al proveedor. Tú no adelantas un solo dólar.",
      "We coordinate care and pay the provider directly. You don't advance a single dollar.",
    ),
  },
  {
    icon: "ShieldCheck",
    title: l("Respaldo Lloyd's of London", "Backed by Lloyd's of London"),
    description: l(
      "Coverholder de Lloyd's of London, con una capacidad de respaldo de $55B+.",
      "A Lloyd's of London coverholder, backed by $55B+ in capacity.",
    ),
  },
  {
    icon: "Clock",
    title: l("Soporte 24/7/365", "Support 24/7/365"),
    description: l(
      "Empatía primero, solución siempre — a cualquier hora y desde cualquier país.",
      "Empathy first, always a solution — any time, from any country.",
    ),
  },
];

/** "Lo que recibes con We Assist" — 4 beneficios destacados (verbatim del prototipo). */
export const HOME_BENEFITS: Differentiator[] = [
  {
    icon: "Stethoscope",
    title: l("Asistencia médica con pago directo", "Medical assistance with direct payment"),
    description: l(
      "Coordinamos la atención y pagamos directo al proveedor. Tú no adelantas un solo dólar.",
      "We coordinate care and pay the provider directly. You don't advance a single dollar.",
    ),
  },
  {
    icon: "Luggage",
    title: l("Equipaje protegido", "Protected baggage"),
    description: l(
      "Apoyo ante demora, pérdida o inconvenientes según los beneficios contratados.",
      "Support for delays, loss or issues according to your contracted benefits.",
    ),
  },
  {
    icon: "CalendarX",
    title: l("Cancelación e interrupción", "Cancellation & interruption"),
    description: l(
      "Planes y upgrades pueden proteger parte de tu inversión ante imprevistos elegibles.",
      "Plans and upgrades can protect part of your investment against eligible contingencies.",
    ),
  },
  {
    icon: "Headphones",
    title: l("Soporte humano 24/7/365", "Human support 24/7/365"),
    description: l(
      "Empatía primero, solución siempre — a cualquier hora y desde cualquier país.",
      "Empathy first, always a solution — any time, from any country.",
    ),
  },
];

export interface HomePlan {
  title: Localized<string>;
  description: Localized<string>;
  /** Precio "desde" ilustrativo (placeholder — vendrá del API de cotización). */
  price: string;
  priceUnit: Localized<string>;
  href: string;
  accent: string;
  icon: string;
  featured?: boolean;
  badge?: Localized<string>;
}

/** "Una asistencia para cada forma de viajar" — 4 líneas con precio "desde" (verbatim del prototipo). */
export const HOME_PLANS: HomePlan[] = [
  {
    title: l("Travel"),
    description: l("Vacaciones y viajes puntuales de hasta 90 días.", "Vacations and one-off trips of up to 90 days."),
    price: "$4",
    priceUnit: l("/día por viajero", "/day per traveler"),
    href: ROUTES.travel,
    accent: "#10ade4",
    icon: "Plane",
  },
  {
    title: l("All-Ways · Anual multiviaje", "All-Ways · Annual multi-trip"),
    description: l("Viaja todo el año. Un solo plan. Viajes ilimitados de hasta 60 días.", "Travel all year. One plan. Unlimited trips of up to 60 days."),
    price: "$220",
    priceUnit: l("/año", "/year"),
    href: ROUTES.allWays,
    accent: "#7cc249",
    icon: "CalendarDays",
    featured: true,
    badge: l("Más elegido", "Most chosen"),
  },
  {
    title: l("Student"),
    description: l("Estudia sin preocupaciones: programas de 90 a 365 días.", "Study worry-free: programs from 90 to 365 days."),
    price: "$1.6",
    priceUnit: l("/día por viajero", "/day per traveler"),
    href: ROUTES.student,
    accent: "#10ade4",
    icon: "GraduationCap",
  },
  {
    title: l("Long Stay"),
    description: l("Meses en el exterior con cobertura completa por evento — única en el mercado.", "Months abroad with full per-event coverage — unique in the market."),
    price: "$2",
    priceUnit: l("/día por viajero", "/day per traveler"),
    href: ROUTES.longStay,
    accent: "#10ade4",
    icon: "Luggage",
  },
];

export interface HomeStep {
  number: string;
  title: Localized<string>;
  description: Localized<string>;
  /** navy (#003366) para pasos 1–2, verde (#7cc249) para el paso final. */
  accent: string;
}

/** "Compra tu asistencia en 3 pasos" (verbatim del prototipo). */
export const HOME_STEPS: HomeStep[] = [
  {
    number: "01",
    accent: "#003366",
    title: l("Cotiza", "Get a quote"),
    description: l("Cuéntanos tu viaje y viajeros para ver planes y precios al instante.", "Tell us about your trip and travelers to see plans and prices instantly."),
  },
  {
    number: "02",
    accent: "#003366",
    title: l("Elige tu plan", "Choose your plan"),
    description: l("Compara coberturas y agrega upgrades — deportes, preexistencias, cancelación.", "Compare coverage and add upgrades — sports, pre-existing conditions, cancellation."),
  },
  {
    number: "03",
    accent: "#7cc249",
    title: l("Compra en minutos", "Buy in minutes"),
    description: l("Recibe tu voucher digital y los canales de asistencia listos para viajar.", "Get your digital voucher and assistance channels ready to travel."),
  },
];

export interface EcosystemCard {
  title: Localized<string>;
  description: Localized<string>;
  href: string;
  accent: string;
  external?: boolean;
}

/** "El viaje es la puerta de entrada..." — 3 tarjetas de ecosistema (verbatim del prototipo). */
export const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    title: l("We Assist Healthier"),
    description: l("Salud mental, bienestar y acceso médico para empresas y sus equipos.", "Mental health, wellbeing and medical access for companies and their teams."),
    href: HEALTHIER_URL,
    accent: "#00C2FF",
    external: true,
  },
  {
    title: l("We Assist Corporativo", "We Assist Corporate"),
    description: l("La compañía, la red global y los beneficios corporativos.", "The company, the global network and corporate benefits."),
    href: ROUTES.corporate,
    accent: "#10ade4",
  },
  {
    title: l("We Assist Business"),
    description: l("El aliado que sí aparece: plataforma para agentes, agencias y corredores.", "The ally that shows up: a platform for agents, agencies and brokers."),
    href: ROUTES.business,
    accent: "#7cc249",
  },
];

export interface HomeFaq {
  q: Localized<string>;
  a: Localized<string>;
}

/** Preview de FAQ en el home — 5 preguntas (verbatim del prototipo). */
export const HOME_FAQ: HomeFaq[] = [
  {
    q: l("¿Qué diferencia hay entre asistencia y seguro de viaje?", "What's the difference between assistance and travel insurance?"),
    a: l(
      "El seguro tradicional te paga después de que sufres. La asistencia te ayuda mientras sufres: coordinamos la atención y pagamos directo — el 98.5% de nuestros casos no pasa por reembolso.",
      "Traditional insurance pays you after you suffer. Assistance helps you while you suffer: we coordinate care and pay directly — 98.5% of our cases never go through reimbursement.",
    ),
  },
  {
    q: l("¿Ya tengo asistencia incluida en mi tarjeta de crédito, para qué otra?", "I already have assistance on my credit card, why get another?"),
    a: l(
      "La asistencia de tarjeta suele tener topes bajos, exigir reembolso y activarse solo si pagas el viaje con esa tarjeta. Con We Assist tienes topes dedicados, pago directo y $0 deducibles.",
      "Card assistance usually has low caps, requires reimbursement and only activates if you paid the trip with that card. With We Assist you get dedicated caps, direct payment and $0 deductibles.",
    ),
  },
  {
    q: l("¿Qué pasa si tengo una condición preexistente?", "What if I have a pre-existing condition?"),
    a: l(
      "Los planes superiores incluyen atención de emergencia por preexistencias, y puedes ampliarla con el upgrade de preexistencias. Consulta las condiciones del plan.",
      "Higher tiers include emergency care for pre-existing conditions, and you can extend it with the pre-existing upgrade. Check the plan conditions.",
    ),
  },
  {
    q: l("¿Cómo solicito asistencia médica durante mi viaje?", "How do I request medical assistance during my trip?"),
    a: l(
      "Llámanos o escríbenos por WhatsApp 24/7 con tu número de voucher. Coordinamos la atención y pagamos directo al proveedor.",
      "Call us or message us on WhatsApp 24/7 with your voucher number. We coordinate care and pay the provider directly.",
    ),
  },
  {
    q: l("¿Viajo varias veces al año — me conviene All-Ways?", "I travel several times a year — is All-Ways for me?"),
    a: l(
      "Si sales más de dos veces al año, All-Ways casi siempre cuesta menos que cotizar por viaje: viajes ilimitados durante 365 días, sin activar nada.",
      "If you travel more than twice a year, All-Ways almost always costs less than quoting per trip: unlimited trips for 365 days, with nothing to activate.",
    ),
  },
];

export interface StatItem {
  value: string;
  label: Localized<string>;
}

/** Banda de estadísticas de confianza (verbatim del prototipo). */
export const HOME_STATS: StatItem[] = [
  { value: "98.5%", label: l("de los casos con pago directo — no anticipas, no reclamas", "of cases paid directly — no advances, no claims") },
  { value: "$0", label: l("deducibles en todos los productos — cero sorpresas", "deductibles on every product — no surprises") },
  { value: "Por evento", label: l("en Long Stay cada evento médico activa la cobertura completa", "in Long Stay every medical event triggers full coverage") },
  { value: "Lloyd's", label: l("coverholder de Lloyd's of London — respaldo de $55B+", "Lloyd's of London coverholder — $55B+ backing") },
];

export interface EcosystemStat {
  value: string;
  label: Localized<string>;
}

/** "El poder del ecosistema" — 6 cifras (verbatim del prototipo). */
export const ECOSYSTEM_STATS: EcosystemStat[] = [
  { value: "+80M", label: l("Personas atendidas al año", "People served per year") },
  { value: "+842K", label: l("Llamadas gestionadas al mes", "Calls handled per month") },
  { value: "+1.5MM", label: l("Proveedores en red global", "Providers in global network") },
  { value: "+200", label: l("Países y territorios", "Countries and territories") },
  { value: "+21", label: l("Centros de contacto", "Contact centers") },
  { value: "$55B+", label: l("Capacidad de Lloyd's of London", "Lloyd's of London capacity") },
];

export interface HomeCase {
  badge: Localized<string>;
  accent: string;
  title: Localized<string>;
  description: Localized<string>;
  /** Resultado destacado al pie de la tarjeta. */
  outcomeStrong: Localized<string>;
  outcomeText: Localized<string>;
}

/** "Casos reales — Aquí cuando importó" (verbatim del prototipo). */
export const HOME_CASES: HomeCase[] = [
  {
    badge: l("COVID en México", "COVID in Mexico"),
    accent: "#7cc249",
    title: l(
      "Cuando la burocracia decía no, buscamos el recibo de peaje.",
      "When bureaucracy said no, we tracked down the toll receipt.",
    ),
    description: l(
      "Hospitalizada 14 días con dos hijos menores solos en el hotel. Nunca suspendimos la cobertura, cuidamos a los niños y validamos su póliza rastreando un recibo de peaje.",
      "Hospitalized for 14 days with two young children alone at the hotel. We never suspended coverage, cared for the kids and validated her policy by tracking down a toll receipt.",
    ),
    outcomeStrong: l("$0", "$0"),
    outcomeText: l("pagados por la cliente", "paid by the client"),
  },
  {
    badge: l("Estudiante en EE.UU.", "Student in the U.S."),
    accent: "#10ade4",
    title: l(
      "Fuimos más allá del contrato porque era lo correcto.",
      "We went beyond the contract because it was the right thing.",
    ),
    description: l(
      "Rótula fracturada y un hospital que solo aceptaba el seguro universitario. Coordinamos especialistas, cubrimos hotel y transporte, y lo repatriamos en primera clase para que viajara sin dolor.",
      "A fractured kneecap and a hospital that only accepted the university insurance. We coordinated specialists, covered hotel and transport, and repatriated him in first class so he'd travel pain-free.",
    ),
    outcomeStrong: l("El contrato define el mínimo.", "The contract sets the minimum."),
    outcomeText: l("Nosotros decidimos el máximo.", "We decide the maximum."),
  },
  {
    badge: l("Equipaje en Europa", "Baggage in Europe"),
    accent: "#7cc249",
    title: l(
      "Cubrimos gastos que técnicamente no correspondían.",
      "We covered expenses that technically didn't apply.",
    ),
    description: l(
      "Su maleta apareció en otra ciudad. Cubrimos la ropa durante la demora — y también los gastos posteriores, fuera de cobertura, porque las circunstancias lo justificaban.",
      "Her suitcase turned up in another city. We covered clothing during the delay — and the later out-of-coverage expenses too, because the circumstances justified it.",
    ),
    outcomeStrong: l("El criterio humano", "Human judgment"),
    outcomeText: l("es parte del producto.", "is part of the product."),
  },
];
