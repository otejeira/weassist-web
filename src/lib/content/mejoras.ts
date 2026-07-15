import { type Localized, l } from "@/lib/i18n/locale";

/**
 * Contenido de la página de Upgrades (/mejoras).
 *
 * Es una página COMERCIAL (no el paso de checkout). Explica los upgrades por
 * perfil de viajero y su "¿qué pasa si no lo llevas?", y remata con CTA a la
 * cotización (/comprar/mejoras). El catálogo tipado real vive en lib/plans.ts
 * (UPGRADES) y NO se toca aquí; esta capa es la narrativa de venta.
 *
 * TODO PLACEHOLDER: topes/montos son de referencia del handoff — vienen del API.
 */

/** Un "anzuelo" comercial destacado en el hero (diferenciadores reales). */
export interface UpgradeAnchor {
  icon: string;
  title: Localized<string>;
  description: Localized<string>;
}

/** Los 3 diferenciadores de upgrade que abren la página. */
export const UPGRADE_ANCHORS: UpgradeAnchor[] = [
  {
    icon: "Mountain",
    title: l("+220 deportes y actividades extremas", "+220 sports and extreme activities"),
    description: l(
      "Desde esquí y buceo hasta competencias profesionales. Si tu viaje se mueve, tu asistencia se mueve contigo.",
      "From skiing and diving to professional competitions. If your trip moves, your assistance moves with you.",
    ),
  },
  {
    icon: "Ambulance",
    title: l("Traslado y repatriación sanitaria ampliada", "Extended medical transfer and repatriation"),
    description: l(
      "Ampliamos el beneficio de traslado y repatriación para que la distancia nunca decida por tu salud.",
      "We extend the transfer and repatriation benefit so distance never decides for your health.",
    ),
  },
  {
    icon: "HardHat",
    title: l("Gastos médicos por accidente laboral", "Workplace-accident medical expenses"),
    description: l(
      "Beneficio especial, únicamente bajo request — uno de los más contratados por corporaciones para sus equipos en viaje.",
      "A special benefit, by request only — one of the most contracted by corporations for their traveling teams.",
    ),
  },
];

/** Un upgrade contado en lenguaje de venta (con su "riesgo si no lo llevas"). */
export interface UpgradeItem {
  icon: string;
  title: Localized<string>;
  description: Localized<string>;
  /** El costo de NO llevarlo — el argumento comercial. */
  whatIf: Localized<string>;
  /** Solo se activa bajo solicitud (típicamente corporativo). */
  onRequest?: boolean;
}

/** Un grupo de upgrades por perfil / miedo del viajero. */
export interface UpgradeProfile {
  eyebrow: Localized<string>;
  title: Localized<string>;
  items: UpgradeItem[];
}

export const UPGRADE_PROFILES: UpgradeProfile[] = [
  {
    eyebrow: l("Para el que no se queda quieto", "For those who never sit still"),
    title: l("Aventura y deporte", "Adventure and sport"),
    items: [
      {
        icon: "Mountain",
        title: l("Protección Deportes", "Sports protection"),
        description: l(
          "Práctica recreativa y competitiva, incluye +220 deportes y actividades extremas.",
          "Recreational and competitive practice, covering +220 sports and extreme activities.",
        ),
        whatIf: l(
          "Sin este upgrade, un accidente practicando deporte extremo puede quedar fuera de tu asistencia.",
          "Without this upgrade, an accident during an extreme sport can fall outside your assistance.",
        ),
      },
      {
        icon: "Bike",
        title: l("Protección de elementos deportivos", "Sports-equipment protection"),
        description: l(
          "Tu equipo de esquí, bici o buceo, protegido durante el viaje.",
          "Your ski, bike or diving gear, protected during the trip.",
        ),
        whatIf: l(
          "Sin ella, el daño o pérdida de tu equipo deportivo corre por tu cuenta.",
          "Without it, damage or loss of your sports gear is on you.",
        ),
      },
    ],
  },
  {
    eyebrow: l("Para el que viaja con lo suyo", "For those who travel with their things"),
    title: l("Objetos de valor", "Valuables"),
    items: [
      {
        icon: "Laptop",
        title: l("Protección tecnológica", "Tech protection"),
        description: l(
          "Laptop, tablet y celular protegidos hasta USD 2,000.",
          "Laptop, tablet and phone protected up to USD 2,000.",
        ),
        whatIf: l(
          "Un robo o daño de tus equipos sin este upgrade sale de tu bolsillo.",
          "A theft or damage of your devices without this upgrade comes out of your pocket.",
        ),
      },
      {
        icon: "Briefcase",
        title: l("Objetos personales", "Personal belongings"),
        description: l(
          "Cobertura ampliada para tus pertenencias frente a robo o daño.",
          "Extended coverage for your belongings against theft or damage.",
        ),
        whatIf: l(
          "Sin ella, reponer lo perdido en un robo depende solo de ti.",
          "Without it, replacing what's lost in a theft depends only on you.",
        ),
      },
    ],
  },
  {
    eyebrow: l("Para el que viaja con su salud primero", "For those who put health first"),
    title: l("Salud y familia", "Health and family"),
    items: [
      {
        icon: "HeartPulse",
        title: l("Preexistencias médicas ampliadas", "Extended pre-existing conditions"),
        description: l(
          "Aumenta el tope de tu plan para condiciones preexistentes.",
          "Raise your plan's cap for pre-existing conditions.",
        ),
        whatIf: l(
          "Sin ampliación, una condición previa puede superar rápido el tope base.",
          "Without an extension, a prior condition can quickly exceed the base cap.",
        ),
      },
      {
        icon: "Baby",
        title: l("Mujer embarazada", "Pregnant traveler"),
        description: l(
          "Asistencia ampliada durante el embarazo hasta la semana 32.",
          "Extended assistance during pregnancy up to week 32.",
        ),
        whatIf: l(
          "Sin este upgrade, una urgencia relacionada al embarazo puede quedar fuera.",
          "Without this upgrade, a pregnancy-related emergency can fall outside coverage.",
        ),
      },
      {
        icon: "PawPrint",
        title: l("Asistencia de mascotas", "Pet assistance"),
        description: l(
          "Atención veterinaria durante el viaje hasta USD 5,000.",
          "Veterinary care while traveling up to USD 5,000.",
        ),
        whatIf: l(
          "Sin ella, la atención de tu mascota en el viaje corre por tu cuenta.",
          "Without it, your pet's care during the trip is on you.",
        ),
      },
      {
        icon: "FerrisWheel",
        title: l("Parque temático", "Theme park"),
        description: l(
          "Protección específica para tus días en parques y atracciones.",
          "Specific protection for your days at parks and attractions.",
        ),
        whatIf: l(
          "Sin ella, un incidente dentro del parque puede no estar contemplado.",
          "Without it, an incident inside the park may not be considered.",
        ),
      },
    ],
  },
  {
    eyebrow: l("Para el que anticipa lo inesperado", "For those who anticipate the unexpected"),
    title: l("Planes que cambian", "Plans that change"),
    items: [
      {
        icon: "CalendarX",
        title: l("Cancelación multi-causa", "Multi-reason cancellation"),
        description: l(
          "Amplía las causas justificadas de cancelación de 8 a 17.",
          "Extends justified cancellation reasons from 8 to 17.",
        ),
        whatIf: l(
          "Sin ella, cancelar por un motivo no listado significa perder lo invertido en tu viaje.",
          "Without it, cancelling for an unlisted reason means losing what you invested in your trip.",
        ),
      },
      {
        icon: "Ambulance",
        title: l("Traslado y repatriación sanitaria ampliada", "Extended medical transfer and repatriation"),
        description: l(
          "Amplía el beneficio de traslado y repatriación sanitaria.",
          "Extends the medical transfer and repatriation benefit.",
        ),
        whatIf: l(
          "Un traslado de emergencia entre países es de los gastos más altos de un viaje.",
          "An emergency transfer between countries is among the highest costs of a trip.",
        ),
      },
    ],
  },
  {
    eyebrow: l("Para las corporaciones", "For corporations"),
    title: l("Equipos en viaje", "Teams on the move"),
    items: [
      {
        icon: "HardHat",
        title: l("Gastos médicos por accidente laboral", "Workplace-accident medical expenses"),
        description: l(
          "Beneficio especial únicamente bajo request — uno de los más contratados por corporaciones para proteger a sus equipos en viaje de trabajo.",
          "A special benefit by request only — one of the most contracted by corporations to protect their teams on work trips.",
        ),
        whatIf: l(
          "Sin él, un accidente en funciones de trabajo fuera de casa no está contemplado en un plan de viaje estándar.",
          "Without it, an on-duty accident away from home isn't considered in a standard travel plan.",
        ),
        onRequest: true,
      },
    ],
  },
];
