import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { FooterSlim } from "@/components/layout/FooterSlim";
import { PaperPlane } from "@/components/brand/PaperPlane";
import { CTAButton } from "@/components/ui/CTAButton";
import { ROUTES } from "@/lib/nav";

const QUICK_LINKS = [
  { label: "Viajes por día", href: ROUTES.travel },
  { label: "Beneficios", href: ROUTES.beneficios },
  { label: "Cómo funciona", href: ROUTES.como },
  { label: "Asistencia 24/7", href: ROUTES.asistencia },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b border-white/10 bg-navy-950">
        <div className="container-max py-4">
          <Logo variant="white" width={104} />
        </div>
      </div>

      <section className="relative flex flex-1 items-center overflow-hidden bg-hero-navy py-20 text-white">
        {/* La ruta se fragmenta y se desvanece con un avión de papel */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        >
          <path
            d="M0 220 C 200 120, 380 300, 560 200"
            fill="none"
            stroke="#10ade4"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="2 10"
            strokeOpacity={0.4}
            className="animate-dashMove"
          />
        </svg>

        <div className="container-max relative">
          <span
            aria-hidden="true"
            className="font-display text-[120px] font-extrabold leading-none text-white/10 sm:text-[180px]"
          >
            404
          </span>
          <div className="-mt-8 flex items-center gap-3">
            <h1 className="h1 text-white">Esta ruta no está en el mapa.</h1>
            <PaperPlane size={44} className="text-cyan-500" />
          </div>
          <p className="lead mt-3 max-w-lg text-white/70">
            El enlace que buscas se salió del recorrido. Volvamos a ponerte en ruta.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href={ROUTES.home}>Volver al inicio</CTAButton>
            <CTAButton href={ROUTES.comprarPlanes} variant="outlineWhite">
              Cotizar un plan
            </CTAButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {QUICK_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-[13px] font-medium text-cyan-500 hover:text-white">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSlim />
    </div>
  );
}
