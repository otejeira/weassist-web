import { getPlan, getUpgrade } from "@/lib/plans";
import { PROMO_CODES } from "@/lib/constants";
import type { QuoteState } from "@/lib/quote/types";

export interface PriceLineItem {
  key: string;
  label: string;
  amount: number;
}

export interface PriceBreakdown {
  planTotal: number;
  upgradeItems: PriceLineItem[];
  subtotal: number;
  discount: number;
  total: number;
}

/**
 * Cálculo de totales en vivo (mock — sustituir por el API de cotización).
 * Plan: precio base por viajero × nº de viajeros.
 * Upgrades: precio por cada viajero que lo tenga seleccionado.
 * Promo: descuento porcentual sobre el subtotal.
 */
export function computePrice(quote: QuoteState): PriceBreakdown {
  const plan = quote.planId ? getPlan(quote.planId) : undefined;
  const travelerCount = Math.max(quote.travelers.length, 1);
  const planTotal = plan ? plan.basePrice * travelerCount : 0;

  // Agrupa upgrades por tipo, sumando cuántos viajeros lo eligieron.
  const upgradeCounts = new Map<string, number>();
  for (const traveler of quote.travelers) {
    for (const upgradeId of traveler.upgrades) {
      upgradeCounts.set(upgradeId, (upgradeCounts.get(upgradeId) ?? 0) + 1);
    }
  }

  const upgradeItems: PriceLineItem[] = [];
  for (const [id, count] of upgradeCounts) {
    const upgrade = getUpgrade(id);
    if (!upgrade) continue;
    upgradeItems.push({
      key: id,
      label: upgrade.title.es,
      amount: upgrade.price * count,
    });
  }

  const upgradesTotal = upgradeItems.reduce((sum, item) => sum + item.amount, 0);
  const subtotal = planTotal + upgradesTotal;

  const promoRate = quote.promoCode ? (PROMO_CODES[quote.promoCode] ?? 0) : 0;
  const discount = subtotal * promoRate;
  const total = Math.max(0, subtotal - discount);

  return { planTotal, upgradeItems, subtotal, discount, total };
}

export function formatUSD(amount: number): string {
  return `USD$ ${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
