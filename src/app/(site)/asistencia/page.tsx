"use client";

import { useRef, useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  Info,
  Copy,
  Check,
  X,
  BadgeDollarSign,
  MapPin,
  FileText,
  ClipboardList,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useToast } from "@/components/ui/Toast";
import { CONTACT } from "@/lib/constants";
import { ROUTES } from "@/lib/nav";
import { Field, Select, Textarea } from "@/components/ui/Field";
import { CTAButton } from "@/components/ui/CTAButton";

const REASSURANCE = [
  { es: "Pagamos directo al proveedor", en: "We pay the provider directly" },
  { es: "$0 deducibles", en: "$0 deductibles" },
  {
    es: "En la gran mayoría de casos coordinados no adelantas dinero",
    en: "In the vast majority of coordinated cases you don't pay upfront",
  },
];

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

const CHECKLIST = [
  {
    icon: FileText,
    title: { es: "Tu Nº de voucher", en: "Your voucher no." },
    detail: { es: "O tu nombre completo y destino, si no lo tienes a mano.", en: "Or your full name and destination, if you don't have it handy." },
  },
  {
    icon: MapPin,
    title: { es: "Dónde estás", en: "Where you are" },
    detail: { es: "Ciudad y país, y el nombre del hotel o clínica si aplica.", en: "City and country, plus the hotel or clinic name if relevant." },
  },
  {
    icon: Info,
    title: { es: "Qué pasó, en una frase", en: "What happened, in one line" },
    detail: { es: "Nos ayuda a orientarte al proveedor correcto más rápido.", en: "Helps us route you to the right provider faster." },
  },
  {
    icon: Phone,
    title: { es: "Un teléfono de contacto", en: "A contact phone" },
    detail: { es: "Donde podamos ubicarte durante la coordinación.", en: "Where we can reach you during coordination." },
  },
];

function CopyButton({ value, ariaLabel }: { value: string; ariaLabel: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard no disponible — el número sigue visible para copiar a mano */
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={ariaLabel}
      className="grid h-8 w-8 flex-none place-items-center rounded-lg border border-black/[.08] text-ink-500 transition-colors hover:bg-surface-100 hover:text-blue-700"
    >
      {copied ? <Check className="h-4 w-4 text-green-700" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}

export default function AsistenciaPage() {
  const { t } = useLocale();
  const { toast } = useToast();
  const [sent, setSent] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    toast(t({ es: "Mensaje enviado. Te contactaremos pronto.", en: "Message sent. We'll contact you soon." }));
  }

  return (
    <>
      {/* Franja de emergencia */}
      <div className="bg-navy-950 text-white">
        <div className="container-max flex flex-col items-center justify-between gap-3 py-3 sm:flex-row">
          <p className="flex items-center gap-2.5 text-[13px] font-semibold">
            <span className="relative flex h-2.5 w-2.5 flex-none">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            {t({ es: "¿Emergencia en tu viaje? Estamos disponibles ahora — 24/7/365.", en: "Emergency on your trip? We're available now — 24/7/365." })}
          </p>
          <div className="flex items-center gap-2.5">
            <a
              href={CONTACT.whatsappHref}
              className="flex items-center gap-1.5 rounded-control bg-green-700 px-3.5 py-1.5 text-[12.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> {t({ es: "WhatsApp", en: "WhatsApp" })}
            </a>
            <a
              href={`tel:${CONTACT.collectCall.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 rounded-control border border-white/25 px-3.5 py-1.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {t({ es: "Llamar", en: "Call" })}
            </a>
          </div>
        </div>
      </div>

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
          <p className="eyebrow text-cyan-500">{t({ es: "Asistencia 24/7/365", en: "Assistance 24/7/365" })}</p>
          <h1 className="h1-hero mx-auto mt-4">{t({ es: "¿Necesitas ayuda ahora?", en: "Need help right now?" })}</h1>
          <p className="lead mx-auto mt-4 max-w-xl text-white/70">
            {t({
              es: "Estamos aquí cuando importa. Escríbenos por el canal que tengas a mano — respondemos en minutos, en tu idioma.",
              en: "We're here when it matters. Reach us through any channel — we respond in minutes, in your language.",
            })}
          </p>
          <ul className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-[13px]">
            {REASSURANCE.map((chip, i) => (
              <li
                key={i}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.06] px-3.5 py-1.5 font-medium text-white/85"
              >
                <Check className="h-3.5 w-3.5 flex-none text-green-500" aria-hidden="true" />
                {t(chip)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Canales (superpuestos sobre el hero) */}
      <section className="bg-surface-100 pb-14">
        <div className="container-max relative z-10 -mt-24 grid gap-4 md:grid-cols-3">
          {/* WhatsApp */}
          <div className="rounded-[18px] border-t-[3px] border-green-500 bg-white p-6 shadow-[0_24px_60px_-18px_rgba(2,26,51,.35)]">
            <div className="flex items-center justify-between">
              <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-surface-green">
                <MessageCircle className="h-5 w-5 text-green-700" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-surface-green px-2.5 py-1 text-[11px] font-semibold text-green-700">
                {t({ es: "Primer contacto en 2–5 min", en: "First contact in 2–5 min" })}
              </span>
            </div>
            <p className="mt-3.5 font-display text-[16px] font-bold text-ink-900">WhatsApp</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-display text-[18px] font-bold text-blue-700">{CONTACT.whatsapp}</p>
              <CopyButton value={CONTACT.whatsapp} ariaLabel={t({ es: "Copiar número de WhatsApp", en: "Copy WhatsApp number" })} />
            </div>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
              {t({ es: "El canal más rápido. Escríbenos con tu voucher a mano.", en: "The fastest channel. Message us with your voucher handy." })}
            </p>
            <a
              href={CONTACT.whatsappHref}
              className="mt-3.5 flex items-center justify-center gap-2 rounded-control bg-green-700 py-2.5 font-display text-[13.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {t({ es: "Abrir WhatsApp →", en: "Open WhatsApp →" })}
            </a>
          </div>

          {/* Llamada a cobro revertido */}
          <div className="rounded-[18px] border-t-[3px] border-cyan-500 bg-white p-6 shadow-[0_24px_60px_-18px_rgba(2,26,51,.35)]">
            <div className="flex items-center justify-between">
              <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-surface-cyan">
                <Phone className="h-5 w-5 text-blue-700" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-surface-cyan px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                {t({ es: "98% contestadas en 8 seg", en: "98% answered in 8 sec" })}
              </span>
            </div>
            <p className="mt-3.5 font-display text-[16px] font-bold text-ink-900">{t({ es: "Llamada a cobro revertido", en: "Collect call" })}</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-display text-[18px] font-bold text-blue-700">{CONTACT.collectCall}</p>
              <CopyButton value={CONTACT.collectCall} ariaLabel={t({ es: "Copiar número de teléfono", en: "Copy phone number" })} />
            </div>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
              {t({ es: "Desde cualquier país del mundo, sin costo para ti — la llamada la pagamos nosotros.", en: "From any country in the world, at no cost to you — we cover the call." })}
            </p>
            <button
              type="button"
              onClick={() => dialogRef.current?.showModal()}
              className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-control border-[1.5px] border-blue-700 py-2.5 font-display text-[13.5px] font-semibold text-blue-700 transition-colors hover:bg-surface-blue"
            >
              {t({ es: "Ver instrucciones", en: "See instructions" })}
            </button>
          </div>

          {/* Correo */}
          <div className="rounded-[18px] border-t-[3px] border-blue-700 bg-white p-6 shadow-[0_24px_60px_-18px_rgba(2,26,51,.35)]">
            <div className="flex items-center justify-between">
              <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-surface-blue">
                <Mail className="h-5 w-5 text-blue-700" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-surface-blue px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                {t({ es: "No urgente", en: "Non-urgent" })}
              </span>
            </div>
            <p className="mt-3.5 font-display text-[16px] font-bold text-ink-900">{t({ es: "Correo de asistencia", en: "Assistance email" })}</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-display text-[16px] font-bold text-blue-700">{CONTACT.email}</p>
              <CopyButton value={CONTACT.email} ariaLabel={t({ es: "Copiar correo", en: "Copy email" })} />
            </div>
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

        <p className="container-max mt-4 text-center text-[11.5px] text-ink-500">
          {t({
            es: "Tiempos de respuesta medidos por nuestro equipo de Calidad.",
            en: "Response times measured by our Quality team.",
          })}
        </p>

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

      {/* Qué tener a mano */}
      <section className="section-y bg-white">
        <div className="container-max">
          <div className="flex items-center gap-2.5">
            <ClipboardList className="h-5 w-5 text-blue-700" aria-hidden="true" />
            <h2 className="font-display text-[22px] font-bold tracking-tight text-ink-900">
              {t({ es: "Qué tener a mano", en: "What to have ready" })}
            </h2>
          </div>
          <p className="mt-1.5 max-w-xl text-[13.5px] text-ink-500">
            {t({
              es: "Nada de esto es obligatorio para contactarnos, pero nos ayuda a atenderte más rápido.",
              en: "None of this is required to reach us, but it helps us assist you faster.",
            })}
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CHECKLIST.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <li key={i} className="rounded-[16px] border border-black/[.06] bg-surface-100 p-5">
                  <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-white">
                    <ItemIcon className="h-[18px] w-[18px] text-blue-700" aria-hidden="true" />
                  </span>
                  <p className="mt-3 font-display text-[14.5px] font-bold text-ink-900">{t(item.title)}</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">{t(item.detail)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Formulario + sidebar */}
      <section className="section-y bg-surface-100">
        <div className="container-max grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <form
            onSubmit={submit}
            className="rounded-[18px] border border-black/[.08] bg-white p-7 shadow-[0_1px_3px_rgba(2,26,51,.05)]"
          >
            <h2 className="font-display text-[22px] font-bold tracking-tight text-ink-900">
              {t({ es: "Escríbenos un mensaje", en: "Write us a message" })}
            </h2>
            <p className="mt-1.5 text-[13px] text-ink-500">
              {t({ es: "Para consultas no urgentes. Te respondemos el mismo día hábil. Si es una emergencia, usa WhatsApp o llámanos.", en: "For non-urgent queries. We reply the same business day. If it's an emergency, use WhatsApp or call us." })}
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
            <div className="rounded-[16px] border border-black/[.08] bg-white p-6">
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
            <div className="flex items-start gap-3 rounded-[16px] bg-white px-5 py-5">
              <Info className="mt-0.5 h-[17px] w-[17px] flex-none text-blue-700" aria-hidden="true" />
              <p className="text-[12.5px] leading-relaxed text-ink-500">
                {t({ es: "¿Dudas sobre beneficios o cómo comprar? Revisa primero las ", en: "Questions about benefits or how to buy? Check the " })}
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

      {/* Instrucciones de cobro revertido */}
      <dialog
        ref={dialogRef}
        className="w-[min(440px,92vw)] rounded-[18px] p-0 shadow-elevated backdrop:bg-navy-950/50"
      >
        <div className="p-7">
          <div className="flex items-start justify-between">
            <h3 className="font-display text-[18px] font-bold text-ink-900">
              {t({ es: "Llamada a cobro revertido", en: "Collect call" })}
            </h3>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={t({ es: "Cerrar", en: "Close" })}
              className="grid h-8 w-8 place-items-center rounded-lg text-ink-500 transition-colors hover:bg-surface-100"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500">
            {t({
              es: "La llamada la pagamos nosotros. Puedes contactarnos desde cualquier país, sin costo para ti.",
              en: "We cover the call. You can reach us from any country, at no cost to you.",
            })}
          </p>
          <ol className="mt-5 flex flex-col gap-3.5">
            {[
              { es: "Marca a la operadora internacional del país donde estás (\"cobro revertido\" o \"collect call\").", en: "Dial the international operator in the country you're in (ask for a \"collect call\")." },
              { es: "Indica que la llamada es por cobrar al número de asistencia de We Assist.", en: "Say the call is collect, to the We Assist assistance number." },
              { es: "Da nuestro número cuando la operadora lo pida:", en: "Give our number when the operator asks:" },
            ].map((line, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-surface-cyan font-display text-[12px] font-bold text-blue-700">
                  {i + 1}
                </span>
                <p className="text-[13px] leading-relaxed text-ink-600">{t(line)}</p>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex items-center justify-between rounded-[12px] bg-surface-100 px-4 py-3">
            <span className="font-display text-[17px] font-bold text-blue-700">{CONTACT.collectCall}</span>
            <CopyButton value={CONTACT.collectCall} ariaLabel={t({ es: "Copiar número de teléfono", en: "Copy phone number" })} />
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-[12px] text-ink-500">
            <BadgeDollarSign className="h-4 w-4 flex-none text-green-700" aria-hidden="true" />
            {t({ es: "Sin costo para ti. La asistencia responde 24/7/365.", en: "No cost to you. Assistance answers 24/7/365." })}
          </p>
        </div>
      </dialog>

      {/* Dock móvil sticky */}
      <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-black/[.08] bg-white/95 p-3 shadow-[0_-8px_24px_-12px_rgba(2,26,51,.3)] backdrop-blur lg:hidden">
        <div className="flex gap-2.5">
          <a
            href={CONTACT.whatsappHref}
            className="flex flex-1 items-center justify-center gap-2 rounded-control bg-green-700 py-3 font-display text-[14px] font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
          </a>
          <a
            href={`tel:${CONTACT.collectCall.replace(/\s/g, "")}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-control border-[1.5px] border-blue-700 py-3 font-display text-[14px] font-semibold text-blue-700"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {t({ es: "Llamar", en: "Call" })}
          </a>
        </div>
      </div>
      {/* espaciador para que el dock no tape el footer en móvil */}
      <div aria-hidden="true" className="h-20 lg:hidden" />
    </>
  );
}
