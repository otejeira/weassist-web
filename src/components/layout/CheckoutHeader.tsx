"use client";

import { Lock, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useToast } from "@/components/ui/Toast";
import { Logo } from "./Logo";

/**
 * CheckoutHeader — header slim de la compra.
 * Logo + candado "Compra segura · Cifrado SSL" + "¿Ayuda?" + pill de contexto.
 */
export function CheckoutHeader({ contextPill }: { contextPill?: string }) {
  const { t } = useLocale();
  const { toast } = useToast();
  return (
    <header className="sticky top-0 z-[60] border-b border-black/[.06] bg-white">
      <div className="container-max flex items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-4">
          <Logo width={104} />
          <span className="hidden items-center gap-1.5 text-[12px] font-semibold text-green-700 sm:inline-flex">
            <Lock className="h-4 w-4" aria-hidden="true" />
            {t({ es: "Compra segura · Cifrado SSL", en: "Secure checkout · SSL encryption" })}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {contextPill && (
            <span className="rounded-full bg-surface-blue px-3 py-1 text-[12px] font-semibold text-blue-700">
              {contextPill}
            </span>
          )}
          <button
            type="button"
            onClick={() => toast(t({ es: "Abriría WhatsApp (demo)", en: "Would open WhatsApp (demo)" }))}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-600 hover:text-blue-700"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t({ es: "¿Ayuda? Escríbenos", en: "Need help? Message us" })}
          </button>
        </div>
      </div>
    </header>
  );
}
