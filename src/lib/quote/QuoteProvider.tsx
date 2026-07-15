"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { PlanId } from "@/lib/plans";
import {
  type AgeBracket,
  type QuoteState,
  type Traveler,
  emptyQuote,
  totalTravelers,
} from "./types";

const STORAGE_KEY = "wa.quote";
const MAX_COMPARE = 3;

type QuoteContextValue = {
  quote: QuoteState;
  update: (patch: Partial<QuoteState>) => void;
  setCount: (bracket: AgeBracket, value: number) => void;
  setPlan: (planId: PlanId) => void;
  toggleCompare: (planId: PlanId) => void;
  clearCompare: () => void;
  toggleTravelerUpgrade: (travelerId: string, upgradeId: string) => void;
  setPromo: (code: string | null) => void;
  reset: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

/** Deriva la lista de viajeros individuales a partir de los contadores por edad. */
function buildTravelers(
  counts: Record<AgeBracket, number>,
  previous: Traveler[],
): Traveler[] {
  const result: Traveler[] = [];
  const brackets: AgeBracket[] = ["adults", "children", "seniors"];
  for (const bracket of brackets) {
    for (let i = 0; i < counts[bracket]; i++) {
      const existing = previous.find(
        (t) => t.bracket === bracket && !result.includes(t),
      );
      result.push(
        existing ?? {
          id: `${bracket}-${i}-${Math.random().toString(36).slice(2, 8)}`,
          bracket,
          upgrades: [],
        },
      );
    }
  }
  return result;
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [quote, setQuote] = useState<QuoteState>(() => ({
    ...emptyQuote,
    travelers: buildTravelers(emptyQuote.counts, []),
  }));

  // Hidrata desde localStorage (persistencia para "guardar y terminar después").
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setQuote(JSON.parse(saved) as QuoteState);
    } catch {
      /* estado corrupto: ignorar y usar el default */
    }
  }, []);

  // Persiste en cada cambio.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(quote));
  }, [quote]);

  const update = useCallback((patch: Partial<QuoteState>) => {
    setQuote((prev) => ({ ...prev, ...patch }));
  }, []);

  const setCount = useCallback((bracket: AgeBracket, value: number) => {
    setQuote((prev) => {
      const counts = { ...prev.counts, [bracket]: Math.max(0, value) };
      if (totalTravelers(counts) < 1) counts.adults = 1;
      return { ...prev, counts, travelers: buildTravelers(counts, prev.travelers) };
    });
  }, []);

  const setPlan = useCallback((planId: PlanId) => {
    setQuote((prev) => ({ ...prev, planId }));
  }, []);

  const toggleCompare = useCallback((planId: PlanId) => {
    setQuote((prev) => {
      const has = prev.compare.includes(planId);
      if (has) return { ...prev, compare: prev.compare.filter((p) => p !== planId) };
      if (prev.compare.length >= MAX_COMPARE) return prev;
      return { ...prev, compare: [...prev.compare, planId] };
    });
  }, []);

  const clearCompare = useCallback(() => {
    setQuote((prev) => ({ ...prev, compare: [] }));
  }, []);

  const toggleTravelerUpgrade = useCallback((travelerId: string, upgradeId: string) => {
    setQuote((prev) => ({
      ...prev,
      travelers: prev.travelers.map((t) => {
        if (t.id !== travelerId) return t;
        const has = t.upgrades.includes(upgradeId);
        return {
          ...t,
          upgrades: has
            ? t.upgrades.filter((u) => u !== upgradeId)
            : [...t.upgrades, upgradeId],
        };
      }),
    }));
  }, []);

  const setPromo = useCallback((code: string | null) => {
    setQuote((prev) => ({ ...prev, promoCode: code }));
  }, []);

  const reset = useCallback(() => {
    setQuote({ ...emptyQuote, travelers: buildTravelers(emptyQuote.counts, []) });
  }, []);

  const value = useMemo<QuoteContextValue>(
    () => ({
      quote,
      update,
      setCount,
      setPlan,
      toggleCompare,
      clearCompare,
      toggleTravelerUpgrade,
      setPromo,
      reset,
    }),
    [quote, update, setCount, setPlan, toggleCompare, clearCompare, toggleTravelerUpgrade, setPromo, reset],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote debe usarse dentro de <QuoteProvider>");
  return ctx;
}
