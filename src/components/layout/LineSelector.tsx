"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { LINE_OPTIONS, type LineOption } from "@/lib/nav";
import { cn } from "@/lib/cn";

/**
 * Selector de línea (Travel/Corporate/Business/Healthier↗).
 * `active` marca la pill vigente. Healthier es enlace externo.
 */
export function LineSelector({ active = "travel" }: { active?: LineOption["id"] }) {
  const { t } = useLocale();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-black/[.08] p-1">
      {LINE_OPTIONS.map((opt) => {
        const isActive = opt.id === active;
        const label = t(opt.label);
        const cls = cn(
          "whitespace-nowrap rounded-full px-3 py-1 text-[12px] font-semibold transition-colors",
          isActive ? "bg-navy-800 text-white" : "text-ink-600 hover:bg-surface-blue",
        );
        if (opt.external) {
          return (
            <a
              key={opt.id}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(cls, "text-[#004AAD] hover:bg-[#004AAD]/10")}
            >
              {label}
            </a>
          );
        }
        return (
          <Link key={opt.id} href={opt.href} className={cls} aria-current={isActive ? "page" : undefined}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
