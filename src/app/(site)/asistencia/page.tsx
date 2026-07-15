"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, Info } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useToast } from "@/components/ui/Toast";
import { CONTACT } from "@/lib/constants";
import { ROUTES } from "@/lib/nav";
import { Field, Select, Textarea } from "@/components/ui/Field";
import { CTAButton } from "@/components/ui/CTAButton";

const STEPS = [
  {
    number: "01",
    strong: { es: "Ponte a salvo", en: "Get to safety" },
    rest: { es: " y busca la atención que necesites. Tu seguridad primero.", en: " and get the care you need. Your safety first." },
  },
  {
    number: "02",
    strong: { es: "Escríbenos con tu voucher", en: "Message us with your voucher" },
    rest: { es: " (o tu nombre y destino, si no lo tienes a mano).", en: " (or your name and destination, if you don't have it handy)." },
  },
  {
    number: "03",
    strong: { es: "Nosotros coordinamos y pagamos directo.", en: "We coordinate and pay directly." },
    rest: { es: " Tú no adelantas ni un dólar.", en: " You don't pay a single dollar upfront." },
  },
];

export default function AsistenciaPage() {
  const { t } = useLocale();
  const { toast } = useToast();
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    toast(t({ es: "Mensaje enviado. Te contactaremos pronto.", en: "Message sent. We'll contact you soon." }));
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-navy pb-36 text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 1280 340"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M 75 -10 C 95 110 340 190 640 150 C 880 120 1110 150 1080 350"
            fill="none"
            stroke="#10ade4"
            strokeWidth={2}
            strokeDasharray="2 10"
            strokeLinecap="round"
            strokeOpacity={0.4}
            className="animate-dashMove"
          />
        </svg>
        <div className="container-max relative py-16 text-center">
          <p className="eyebrow">{t({ es: "Asistencia 24/7/365", en: "Assistance 24/7/365" })}</p>
          <h1 className="h1-hero mx-auto mt-4">{t({ es: "¿Necesitas ayuda ahora?", en: "Need help right now?" })}</h1>
          <p className="lead mx-auto mt-4 max-w-xl text-white/70">
            {t({
              es: "Estamos aquí cuando importa. Escríbenos por el canal que tengas a mano — respondemos en minutos, en tu idioma.",
              en: "We're here when it matters. Reach us through any channel — we respond in minutes, in your language.",
            })}
          </p>
        </div>
      </section>

      {/* Canales (superpuestos sobre el hero) */}
      <section className="bg-surface-100 pb-14">
        <div className="container-max relative z-10 -mt-24 grid gap-4 md:grid-cols-3">
          <div className="rounded-[18px] border-t-[3px] border-green-500 bg-white p-6 shadow-[0_24px_60px_-18px_rgba(2,26,51,.35)]">
            <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-surface-green">
              <MessageCircle className="h-5 w-5 text-green-700" aria-hidden="true" />
            </span>
            <p className="mt-3.5 font-display text-[16px] font-bold text-ink-900">WhatsApp</p>
            <p className="mt-1 font-display text-[18px] font-bold text-blue-700">{CONTACT.whatsapp}</p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
              {t({ es: "El canal más rápido. Escríbenos con tu voucher a mano.", en: "The fastest channel. Message us with your voucher handy." })}
            </p>
            <a
              href={CONTACT.whatsappHref}
              className="mt-3.5 flex items-center justify-center gap-2 rounded-control bg-green-500 py-2.5 font-display text-[13.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {t({ es: "Abrir WhatsApp →", en: "Open WhatsApp →" })}
            </a>
          </div>
          <div className="rounded-[18px] border-t-[3px] border-cyan-500 bg-white p-6 shadow-[0_24px_60px_-18px_rgba(2,26,51,.35)]">
            <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-surface-cyan">
              <Phone className="h-5 w-5 text-blue-700" aria-hidden="true" />
            </span>
            <p className="mt-3.5 font-display text-[16px] font-bold text-ink-900">{t({ es: "Llamada a cobro revertido", en: "Collect call" })}</p>
            <p className="mt-1 font-display text-[18px] font-bold text-blue-700">{CONTACT.collectCall}</p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
              {t({ es: "Desde cualquier país del mundo, sin costo para ti.", en: "From any country in the world, at no cost to you." })}
            </p>
            <a
              href={`tel:${CONTACT.collectCall.replace(/\s/g, "")}`}
              className="mt-3.5 flex items-center justify-center gap-2 rounded-control border-[1.5px] border-blue-700 py-2.5 font-display text-[13.5px] font-semibold text-blue-700 transition-colors hover:bg-surface-blue"
            >
              {t({ es: "Ver instrucciones", en: "See instructions" })}
            </a>
          </div>
          <div className="rounded-[18px] border-t-[3px] border-blue-700 bg-white p-6 shadow-[0_24px_60px_-18px_rgba(2,26,51,.35)]">
            <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-surface-blue">
              <Mail className="h-5 w-5 text-blue-700" aria-hidden="true" />
            </span>
            <p className="mt-3.5 font-display text-[16px] font-bold text-ink-900">{t({ es: "Correo de asistencia", en: "Assistance email" })}</p>
            <p className="mt-1 font-display text-[16px] font-bold text-blue-700">{CONTACT.email}</p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
              {t({ es: "Para casos no urgentes y seguimiento de asistencias.", en: "For non-urgent cases and assistance follow-up." })}
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-3.5 flex items-center justify-center gap-2 rounded-control border-[1.5px] border-blue-700 py-2.5 font-display text-[13.5px] font-semibold text-blue-700 transition-colors hover:bg-surface-blue"
            >
              {t({ es: "Escribir correo", en: "Write email" })}
            </a>
          </div>
        </div>
        <div className="container-max mt-7 grid gap-4 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="flex items-start gap-3.5">
              <span className="font-display text-[15px] font-extrabold text-cyan-500">{step.number}</span>
              <p className="text-[13px] leading-relaxed text-ink-500">
                <strong className="text-ink-900">{t(step.strong)}</strong>
                {t(step.rest)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario + sidebar */}
      <section className="section-y bg-white">
        <div className="container-max grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <form
            onSubmit={submit}
            className="rounded-[18px] border border-black/[.08] bg-white p-7 shadow-[0_1px_3px_rgba(2,26,51,.05)]"
          >
            <h2 className="font-display text-[22px] font-bold tracking-tight text-ink-900">
              {t({ es: "Escríbenos un mensaje", en: "Write us a message" })}
            </h2>
            <p className="mt-1.5 text-[13px] text-ink-500">
              {t({ es: "Te respondemos el mismo día hábil. Si es urgente, usa WhatsApp.", en: "We reply the same business day. If it's urgent, use WhatsApp." })}
            </p>
            <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
              <Field label={t({ es: "Nombre", en: "Name" })} placeholder={t({ es: "Tu nombre", en: "Your name" })} required />
              <Field type="email" label={t({ es: "Correo", en: "Email" })} placeholder="tucorreo@ejemplo.com" required />
              <Field label={t({ es: "Nº de voucher (opcional)", en: "Voucher no. (optional)" })} placeholder="WA-2026-XXXXX" />
              <Select
                label={t({ es: "Motivo", en: "Reason" })}
                options={[
                  { value: "asistencia", label: t({ es: "Asistencia en viaje", en: "Travel assistance" }) },
                  { value: "compra", label: t({ es: "Compra y cotización", en: "Purchase and quote" }) },
                  { value: "agente", label: t({ es: "Agentes y agencias", en: "Agents and agencies" }) },
                  { value: "otro", label: t({ es: "Otro", en: "Other" }) },
                ]}
              />
              <Textarea
                wrapClassName="sm:col-span-2"
                label={t({ es: "Mensaje", en: "Message" })}
                placeholder={t({ es: "Cuéntanos qué necesitas…", en: "Tell us what you need…" })}
                rows={4}
                required
              />
            </div>
            <CTAButton type="submit" className="mt-5">
              {sent ? t({ es: "Enviado ✓", en: "Sent ✓" }) : t({ es: "Enviar mensaje →", en: "Send message →" })}
            </CTAButton>
          </form>

          <div className="flex flex-col gap-3.5">
            <div className="rounded-[16px] border border-black/[.08] p-6">
              <p className="font-display text-[15px] font-bold text-navy-900">{t({ es: "Oficina · Ciudad de Panamá", en: "Office · Panama City" })}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-500">
                {CONTACT.addressLine}
                <br />
                {t({ es: "Lunes a viernes · 8:00 a.m. – 6:00 p.m.", en: "Monday to Friday · 8:00 a.m. – 6:00 p.m." })}
              </p>
              <p className="mt-2.5 text-[13px] text-ink-500">
                {t({ es: "Ventas y corporativo:", en: "Sales and corporate:" })}
                <br />
                <strong className="text-blue-700">{CONTACT.salesEmail}</strong> · {CONTACT.phone}
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-[16px] bg-surface-100 px-5 py-5">
              <Info className="mt-0.5 h-[17px] w-[17px] flex-none text-blue-700" aria-hidden="true" />
              <p className="text-[12.5px] leading-relaxed text-ink-500">
                {t({ es: "¿Dudas sobre coberturas o cómo comprar? Revisa primero las ", en: "Questions about coverage or how to buy? Check the " })}
                <a href={ROUTES.preguntas} className="font-bold text-blue-700 hover:underline">
                  {t({ es: "Preguntas frecuentes", en: "FAQ" })}
                </a>
                {t({ es: " — casi todo está respondido ahí.", en: " first — almost everything is answered there." })}
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-[16px] bg-navy-950 px-5 py-5 text-white">
              <span className="mt-1 h-2 w-2 flex-none rounded-full bg-green-500" />
              <p className="text-[12.5px] leading-relaxed text-white/80">
                <strong className="text-white">{t({ es: "La asistencia nunca cierra.", en: "Assistance never closes." })}</strong>
                {t({
                  es: " Los canales de emergencia operan 24/7/365, incluso feriados. Aquí cuando importa.",
                  en: " Emergency channels operate 24/7/365, even on holidays. Here when it matters.",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
