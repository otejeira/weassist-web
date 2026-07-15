"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { l } from "@/lib/i18n/locale";

const SEAL = l("Aquí cuando importa.", "Here when it matters.");

/**
 * Sello de marca "Aquí cuando importa." — junto al logo blanco en footers.
 * `tone="dark"` (por defecto): cian sobre navy (footers). `tone="light"`: teal
 * oscuro AA-safe cuando el sello vive sobre un fondo claro (p. ej. voucher).
 */
export function BrandSeal({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { t } = useLocale();
  return (
    <span
      className={`font-display text-[13px] font-semibold ${className ?? ""}`}
      style={{ color: tone === "dark" ? "#10ade4" : "#0a6f92" }}
    >
      {t(SEAL)}
    </span>
  );
}
