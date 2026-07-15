"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { UPGRADES } from "@/lib/plans";
import { formatPrice } from "@/lib/pricing";
import type { AgeBracket } from "@/lib/quote/types";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Checkbox } from "@/components/ui/Checkbox";
import { Icon } from "@/components/ui/Icon";

const BRACKET_LABEL: Record<AgeBracket, { es: string; en: string }> = {
  adults: { es: "Adulto", en: "Adult" },
  children: { es: "Niño", en: "Child" },
  seniors: { es: "Adulto mayor", en: "Senior" },
};

/**
 * UpgradeAccordion — mejoras (upgrades) por viajero.
 * Cada viajero es un panel; dentro, checkboxes de cada upgrade (precio por viajero).
 */
export function UpgradeAccordion() {
  const { t } = useLocale();
  const { quote, toggleTravelerUpgrade } = useQuote();

  const items: AccordionItem[] = quote.travelers.map((traveler, i) => {
    const count = traveler.upgrades.length;
    return {
      id: traveler.id,
      title: (
        <span className="flex items-center gap-2">
          {t({ es: `Viajero ${i + 1}`, en: `Traveler ${i + 1}` })}
          <span className="text-[12px] font-normal text-ink-500">
            · {t(BRACKET_LABEL[traveler.bracket])}
          </span>
          {count > 0 && (
            <span className="rounded-full bg-surface-green px-2 py-0.5 text-[11px] font-semibold text-green-700">
              {count} {count === 1 ? t({ es: "mejora", en: "add-on" }) : t({ es: "mejoras", en: "add-ons" })}
            </span>
          )}
        </span>
      ),
      content: (
        <div className="grid gap-3 sm:grid-cols-2">
          {UPGRADES.map((upgrade) => {
            const checked = traveler.upgrades.includes(upgrade.id);
            return (
              <div
                key={upgrade.id}
                className="flex items-start gap-3 rounded-card border border-line-300 p-3"
              >
                <span className="mt-0.5 text-cyan-500">
                  <Icon name={upgrade.icon} className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <Checkbox
                    checked={checked}
                    onChange={() => toggleTravelerUpgrade(traveler.id, upgrade.id)}
                    label={
                      <span className="flex flex-col">
                        <span className="font-semibold text-ink-900">
                          {t(upgrade.title)}{" "}
                          <span className="text-blue-700">+{formatPrice(upgrade.price)}</span>
                        </span>
                        <span className="text-[12px] text-ink-500">{t(upgrade.description)}</span>
                      </span>
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      ),
    };
  });

  return <Accordion items={items} defaultOpen={items.length ? [items[0].id] : []} allowMultiple />;
}
