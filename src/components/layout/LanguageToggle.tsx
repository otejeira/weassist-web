"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

/** Toggle ES / EN. Cambia el locale activo (EN cae a ES hasta traducir). */
export function LanguageToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full p-0.5 text-[12px] font-semibold",
        tone === "dark" ? "bg-white/10" : "bg-surface-100",
      )}
      role="group"
      aria-label="Idioma / Language"
    >
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            locale === code
              ? "bg-blue-700 text-white"
              : tone === "dark"
                ? "text-white/70"
                : "text-ink-500",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
