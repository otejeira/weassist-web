"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useToast } from "@/components/ui/Toast";
import { Field } from "@/components/ui/Field";
import { CTAButton } from "@/components/ui/CTAButton";
import { HexBadge } from "@/components/brand/HexWe";
import { ROUTES } from "@/lib/nav";

export default function IngresarPage() {
  const { t } = useLocale();
  const { toast } = useToast();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    toast(t({ es: "Acceso de demostración (sin backend).", en: "Demo login (no backend)." }));
  }

  return (
    <section className="relative overflow-hidden bg-hero-navy py-20 lg:py-24">
      <svg
        aria-hidden="true"
        viewBox="0 0 1280 560"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          d="M 75 -10 C 105 140 380 300 640 250 C 660 246 640 200 640 190"
          fill="none"
          stroke="#10ade4"
          strokeWidth={2}
          strokeDasharray="2 10"
          strokeLinecap="round"
          strokeOpacity={0.4}
          className="animate-dashMove"
        />
        <path
          d="M 1205 570 C 1175 440 940 330 760 350"
          fill="none"
          stroke="#10ade4"
          strokeWidth={2}
          strokeDasharray="2 10"
          strokeLinecap="round"
          strokeOpacity={0.25}
          className="animate-dashMove"
        />
      </svg>
      <div className="container-max relative flex justify-center">
        <div className="w-full max-w-md">
          <div className="rounded-[22px] bg-white p-8 shadow-elevated">
            <HexBadge variant="brand" fill="#7cc249" size={40} />
            <h1 className="mt-4 font-display text-[25px] font-bold tracking-tight text-ink-900">
              {t({ es: "Bienvenido de vuelta", en: "Welcome back" })}
            </h1>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-500">
              {t({
                es: "Clientes y agentes entran por la misma puerta. Te llevamos a tu plataforma automáticamente.",
                en: "Clients and agents come in through the same door. We route you to your platform automatically.",
              })}
            </p>
            <form onSubmit={submit} className="mt-6 flex flex-col gap-3.5">
              <Field type="email" label={t({ es: "Correo", en: "Email" })} placeholder="tucorreo@correo.com" required />
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="field-label">{t({ es: "Contraseña", en: "Password" })}</span>
                  <button type="button" className="text-[11.5px] font-semibold text-blue-700 hover:text-cyan-500">
                    {t({ es: "¿La olvidaste?", en: "Forgot it?" })}
                  </button>
                </div>
                <Field type="password" placeholder="••••••••••" required aria-label={t({ es: "Contraseña", en: "Password" })} />
              </div>
              <CTAButton type="submit" className="w-full">
                {t({ es: "Ingresar →", en: "Sign in →" })}
              </CTAButton>
            </form>
            <div className="mt-5 border-t border-black/[.07] pt-5 text-center text-[12.5px] leading-relaxed text-ink-500">
              {t({ es: "¿Primera vez aquí? Tu cuenta se crea sola con tu primera compra.", en: "First time here? Your account is created with your first purchase." })}
              <br />
              <Link href={ROUTES.comprarPlanes} className="font-semibold text-blue-700 hover:text-cyan-500">
                {t({ es: "Cotiza tu primer plan →", en: "Get your first quote →" })}
              </Link>
            </div>
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-center text-[11.5px] text-white/55">
            <Lock className="h-3 w-3 text-green-500" strokeWidth={2.2} aria-hidden="true" />
            {t({ es: "Conexión cifrada de extremo a extremo", en: "End-to-end encrypted connection" })}
          </p>
        </div>
      </div>
    </section>
  );
}
