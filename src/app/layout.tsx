import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { QuoteProvider } from "@/lib/quote/QuoteProvider";
import { ToastProvider } from "@/components/ui/Toast";

// Tipografía institucional del brandbook (Montserrat display) + coherencia con
// el ecosistema (healthier.weassistgroup.com también usa Montserrat).
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "We Assist — Asistencia en viaje",
    template: "%s · We Assist",
  },
  description:
    "The Assistance Company. Asistencia en viaje con $0 deducibles, pagos directos y soporte humano 24/7/365.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <LocaleProvider>
          <ToastProvider>
            <QuoteProvider>
              <a href="#contenido" className="skip-link">
                Saltar al contenido
              </a>
              {children}
            </QuoteProvider>
          </ToastProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
