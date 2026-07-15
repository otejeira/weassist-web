"use client";

import { usePathname } from "next/navigation";
import { CheckoutHeader } from "@/components/layout/CheckoutHeader";
import { Stepper } from "@/components/layout/Stepper";
import { FooterSlim } from "@/components/layout/FooterSlim";
import { useQuote } from "@/lib/quote/QuoteProvider";
import { computePrice, formatUSD } from "@/lib/pricing";

/** Mapea la ruta de checkout al índice del paso activo del Stepper. */
function stepFromPath(pathname: string): number {
  if (pathname.includes("/comprar/planes") || pathname.includes("/comprar/comparar")) return 1;
  if (pathname.includes("/comprar/mejoras")) return 2;
  if (pathname.includes("/comprar/datos")) return 3;
  if (pathname.includes("/comprar/pago")) return 4;
  if (pathname.includes("/comprar/confirmacion")) return 5;
  return 1;
}

export function CheckoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { quote } = useQuote();
  const step = stepFromPath(pathname);
  const isConfirmation = pathname.includes("/comprar/confirmacion");
  const { total } = computePrice(quote);
  const pill = quote.planId ? `Total ${formatUSD(total)}` : "COT-2026-0001";

  return (
    <div className="flex min-h-screen flex-col bg-surface-100">
      <CheckoutHeader contextPill={pill} />
      {!isConfirmation && (
        <div className="border-b border-black/[.06] bg-white">
          <div className="container-max py-5">
            <Stepper current={step} />
          </div>
        </div>
      )}
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <FooterSlim />
    </div>
  );
}
