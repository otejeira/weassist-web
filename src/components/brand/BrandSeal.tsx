"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { l } from "@/lib/i18n/locale";

const SEAL = l("Aquí cuando importa.", "Here when it matters.");

/** Sello de marca "Aquí cuando importa." — junto al logo blanco en footers. */
export function BrandSeal({ className }: { className?: string }) {
  const { t } = useLocale();
  return (
    <span className={`font-display text-[13px] font-semibold text-cyan-500 ${className ?? ""}`}>
      {t(SEAL)}
    </span>
  );
}
