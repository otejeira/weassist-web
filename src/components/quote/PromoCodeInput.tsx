"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { PROMO_CODES } from "@/lib/constants";
import { cn } from "@/lib/cn";

/** PromoCodeInput — aplica un código promocional (mock, valida contra PROMO_CODES). */
export function PromoCodeInput() {
  const { t } = useLocale();
  const { quote, setPromo } = useQuote();
  const [value, setValue] = useState(quote.promoCode ?? "");
  const [error, setError] = useState(false);

  function apply(e: React.FormEvent) {
    e.preventDefault();
    const code = value.trim().toUpperCase();
    if (code in PROMO_CODES) {
      setPromo(code);
      setError(false);
    } else {
      setError(true);
      setPromo(null);
    }
  }

  const applied = quote.promoCode && quote.promoCode in PROMO_CODES;

  return (
    <form onSubmit={apply} className="flex flex-col gap-1.5">
      <label htmlFor="promo" className="field-label">
        {t({ es: "Código promocional", en: "Promo code" })}
      </label>
      <div className="flex gap-2">
        <input
          id="promo"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="WEASSIST10"
          className="flex-1 rounded-control border border-line-300 px-3 py-2 text-[14px] uppercase text-ink-900 placeholder:normal-case placeholder:text-ink-300 focus:border-blue-700"
        />
        <button
          type="submit"
          className="rounded-control border border-blue-700 px-4 py-2 text-[13px] font-semibold text-blue-700 hover:bg-surface-blue"
        >
          {t({ es: "Aplicar", en: "Apply" })}
        </button>
      </div>
      {applied && (
        <p className="text-[12px] font-medium text-green-700">
          {t({ es: "Código aplicado ✓", en: "Code applied ✓" })}
        </p>
      )}
      {error && (
        <p className={cn("text-[12px] font-medium text-red-600")}>
          {t({ es: "Código no válido.", en: "Invalid code." })}
        </p>
      )}
    </form>
  );
}
