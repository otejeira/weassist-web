"use client";

import { Lock } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { COMPANY } from "@/lib/constants";
import { Logo } from "./Logo";
import { BrandSeal } from "@/components/brand/BrandSeal";

/** FooterSlim — para checkout, login y 404. Logo + sello + cifrado + ©. */
export function FooterSlim() {
  const { t } = useLocale();
  return (
    <footer className="bg-navy-950 text-white/60">
      <div className="container-max flex flex-col items-center gap-3 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Logo variant="white" width={104} />
          <BrandSeal />
        </div>
        <p className="inline-flex items-center gap-1.5 text-[12px]">
          <Lock className="h-4 w-4 text-green-500" aria-hidden="true" />
          {t({ es: "Pagos con cifrado de extremo a extremo", en: "End-to-end encrypted payments" })}
        </p>
        <p className="text-[11px]">© {COMPANY.year} We Assist</p>
      </div>
    </footer>
  );
}
