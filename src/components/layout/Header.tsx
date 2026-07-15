"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { MAIN_NAV, PRODUCT_MENU, LINE_OPTIONS, ROUTES, type LineOption } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { LineSelector } from "./LineSelector";
import { LanguageToggle } from "./LanguageToggle";
import { MegaMenuProductos } from "./MegaMenuProductos";
import { CTAButton } from "@/components/ui/CTAButton";

const PRODUCT_ROUTES = [
  ROUTES.travel,
  ROUTES.allWays,
  ROUTES.student,
  ROUTES.longStay,
];

/** Header global sticky (z-60). Mega-menú Productos + drawer móvil. */
export function Header({ activeLine }: { activeLine?: LineOption["id"] }) {
  const { t } = useLocale();
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // El drawer se monta vía portal en <body> para escapar del containing block
  // que crea el backdrop-blur del header (si no, queda atrapado dentro del header).
  useEffect(() => setMounted(true), []);

  // Al bajar, colapsamos la barra utilitaria superior para compactar el header
  // y mantener el CTA "Cotiza tu plan" siempre a la vista durante el funnel.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear el scroll del fondo mientras el drawer está abierto.
  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  const productsActive = PRODUCT_ROUTES.some((r) => pathname.startsWith(r));
  // Línea activa derivada de la ruta (Corporate/Business); Travel por defecto.
  const line: LineOption["id"] =
    activeLine ??
    (pathname.startsWith(ROUTES.corporate)
      ? "corporate"
      : pathname.startsWith(ROUTES.business)
        ? "business"
        : "travel");

  // Cerrar mega-menú con Esc y click fuera.
  useEffect(() => {
    if (!megaOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMegaOpen(false);
    }
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      const inButton = megaRef.current?.contains(target);
      const inPanel = panelRef.current?.contains(target);
      if (!inButton && !inPanel) setMegaOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

  // Cerrar todo al cambiar de ruta.
  useEffect(() => {
    setMegaOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[60] border-b border-black/[.06] bg-white/95 backdrop-blur">
      {/* Barra superior utilitaria (solo desktop): claim + selector de línea + idioma.
          Se colapsa al hacer scroll para compactar el header. */}
      <div
        className={cn(
          "hidden overflow-hidden border-black/[.06] bg-surface-100/70 transition-all duration-300 lg:block",
          scrolled ? "max-h-0 border-b-0 opacity-0" : "max-h-12 border-b opacity-100",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-5 py-1.5 sm:px-8 lg:px-10">
          <p className="text-[12px] font-medium text-ink-500">
            {t({
              es: "Asistencia 24/7/365 · Pagos directos, $0 deducibles",
              en: "Assistance 24/7/365 · Direct payments, $0 deductibles",
            })}
          </p>
          <div className="flex items-center gap-3">
            <LineSelector active={line} />
            <span className="h-4 w-px bg-black/10" aria-hidden="true" />
            <LanguageToggle />
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-10">
        <Logo width={140} className="shrink-0" />

        {/* Nav desktop */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <div className="relative" ref={megaRef}>
            <button
              type="button"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              onClick={() => setMegaOpen((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1 whitespace-nowrap rounded-control px-3 py-2 text-[14px] font-medium transition-colors",
                productsActive || megaOpen
                  ? "bg-surface-blue text-blue-700"
                  : "text-ink-600 hover:bg-surface-blue",
              )}
            >
              {t({ es: "Productos", en: "Products" })}
              <ChevronDown className={cn("h-4 w-4 transition-transform", megaOpen && "rotate-180")} />
            </button>
          </div>

          {MAIN_NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-control px-3 py-2 text-[14px] font-medium transition-colors",
                  active ? "bg-surface-blue text-blue-700" : "text-ink-600 hover:bg-surface-blue",
                )}
                aria-current={active ? "page" : undefined}
              >
                {t(item.label)}
              </Link>
            );
          })}
        </nav>

        {/* Acciones derecha desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href={ROUTES.ingresar} className="whitespace-nowrap text-[14px] font-medium text-ink-600 hover:text-blue-700">
            {t({ es: "Log-In", en: "Log-In" })}
          </Link>
          <CTAButton href={ROUTES.comprarPlanes} size="sm" className="whitespace-nowrap">
            {t({ es: "Cotiza tu plan →", en: "Get a quote →" })}
          </CTAButton>
        </div>

        {/* Acciones móvil: CTA compacto siempre visible + botón menú */}
        <div className="flex items-center gap-2 lg:hidden">
          <CTAButton href={ROUTES.comprarPlanes} size="sm" className="whitespace-nowrap">
            {t({ es: "Cotizar", en: "Get a quote" })}
          </CTAButton>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menú"
            className="rounded-control p-2 text-ink-900"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mega-menú Productos: centrado bajo el header (no bajo el botón) */}
        {megaOpen && (
          <div
            ref={panelRef}
            className="absolute left-1/2 top-full z-[65] mt-2 hidden w-[min(920px,92vw)] -translate-x-1/2 lg:block"
          >
            <MegaMenuProductos onNavigate={() => setMegaOpen(false)} />
          </div>
        )}
      </div>

      {/* Drawer móvil — portal a <body> para escapar del backdrop-blur del header */}
      {mounted &&
        drawerOpen &&
        createPortal(
          <div className="fixed inset-0 z-[80] lg:hidden">
            <div
              className="absolute inset-0 bg-navy-950/50 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-label={t({ es: "Menú", en: "Menu" })}
              className="absolute right-0 top-0 flex h-full w-[min(360px,90vw)] flex-col overflow-y-auto bg-white shadow-elevated"
            >
              {/* Cabecera del drawer */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/[.06] bg-white/95 px-5 py-4 backdrop-blur">
                <Logo width={112} />
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label={t({ es: "Cerrar menú", en: "Close menu" })}
                  className="grid h-10 w-10 place-items-center rounded-control text-ink-600 transition-colors hover:bg-surface-blue hover:text-blue-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav aria-label={t({ es: "Menú móvil", en: "Mobile menu" })} className="flex flex-col gap-6 px-5 py-6">
                {/* Ingresar — destacado arriba de todo */}
                <CTAButton href={ROUTES.ingresar} onClick={() => setDrawerOpen(false)} className="w-full">
                  {t({ es: "Ingresar a mi cuenta", en: "Log in to my account" })}
                </CTAButton>

                {/* Productos */}
                <div className="flex flex-col gap-1.5">
                  <p className="field-label mb-1 text-ink-500">{t({ es: "Productos", en: "Products" })}</p>
                  {PRODUCT_MENU.map((p) => {
                    const active = pathname.startsWith(p.href);
                    return (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setDrawerOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-start gap-3 rounded-card px-3 py-2.5 transition-colors",
                          active ? "bg-surface-blue" : "hover:bg-surface-100",
                        )}
                      >
                        <span
                          className="mt-1.5 h-2.5 w-2.5 flex-none rounded-full"
                          style={{ backgroundColor: p.accent }}
                          aria-hidden="true"
                        />
                        <span className="flex flex-col">
                          <span className={cn("font-display text-[15px] font-semibold", active ? "text-blue-700" : "text-ink-900")}>
                            {t(p.title)}
                          </span>
                          <span className="text-[12.5px] leading-snug text-ink-500">{t(p.description)}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Explora */}
                <div className="flex flex-col gap-1 border-t border-black/[.06] pt-5">
                  {MAIN_NAV.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDrawerOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "rounded-control px-3 py-2.5 text-[15px] font-medium transition-colors",
                          active ? "bg-surface-blue text-blue-700" : "text-ink-600 hover:bg-surface-blue hover:text-blue-700",
                        )}
                      >
                        {t(item.label)}
                      </Link>
                    );
                  })}
                </div>

                {/* Ecosistema We Assist */}
                <div className="flex flex-col gap-1 border-t border-black/[.06] pt-5">
                  <p className="field-label mb-1 text-ink-500">{t({ es: "Ecosistema", en: "Ecosystem" })}</p>
                  {LINE_OPTIONS.map((opt) => {
                    const active = !opt.external && opt.id === line;
                    const common = cn(
                      "flex items-center justify-between rounded-control px-3 py-2.5 text-[15px] font-medium transition-colors",
                      active ? "bg-surface-blue text-blue-700" : "text-ink-600 hover:bg-surface-blue hover:text-blue-700",
                    );
                    return opt.external ? (
                      <a key={opt.id} href={opt.href} target="_blank" rel="noreferrer" onClick={() => setDrawerOpen(false)} className={common}>
                        {t(opt.label)}
                        <ExternalLink className="h-4 w-4 opacity-60" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link key={opt.id} href={opt.href} onClick={() => setDrawerOpen(false)} aria-current={active ? "page" : undefined} className={common}>
                        {t(opt.label)}
                      </Link>
                    );
                  })}
                </div>

                {/* Cuenta + idioma + CTA */}
                <div className="flex flex-col gap-4 border-t border-black/[.06] pt-5">
                  <div className="flex items-center justify-between">
                    <p className="field-label text-ink-500">{t({ es: "Idioma", en: "Language" })}</p>
                    <LanguageToggle />
                  </div>
                  <CTAButton href={ROUTES.comprarPlanes} onClick={() => setDrawerOpen(false)} className="w-full">
                    {t({ es: "Cotiza tu plan →", en: "Get a quote →" })}
                  </CTAButton>
                </div>
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
