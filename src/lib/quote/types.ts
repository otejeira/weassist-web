import type { PlanId } from "@/lib/plans";

/** Rangos de edad de viajeros usados por el cotizador (contadores). */
export type AgeBracket = "adults" | "children" | "seniors";

export interface TripDates {
  from: string; // ISO yyyy-mm-dd
  to: string; // ISO yyyy-mm-dd
}

export interface Traveler {
  id: string;
  bracket: AgeBracket;
  /** IDs de upgrades seleccionados para ESTE viajero. */
  upgrades: string[];
}

export interface QuoteContact {
  email: string;
  phone: string;
}

export interface QuoteState {
  origin: string;
  destination: string;
  dates: TripDates;
  /** Contadores por rango de edad; los viajeros individuales se derivan de esto. */
  counts: Record<AgeBracket, number>;
  contact: QuoteContact;
  /** Viajeros individuales (para datos y upgrades por persona). */
  travelers: Traveler[];
  planId: PlanId | null;
  /** Set de planes marcados para comparar (máx 3). */
  compare: PlanId[];
  promoCode: string | null;
}

export const emptyQuote: QuoteState = {
  origin: "Panamá",
  destination: "Estados Unidos",
  dates: { from: "", to: "" },
  counts: { adults: 2, children: 0, seniors: 0 },
  contact: { email: "", phone: "" },
  travelers: [],
  planId: null,
  compare: [],
  promoCode: null,
};

export function totalTravelers(counts: Record<AgeBracket, number>): number {
  return counts.adults + counts.children + counts.seniors;
}
