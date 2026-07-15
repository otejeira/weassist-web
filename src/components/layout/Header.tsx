"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { MAIN_NAV, PRODUCT_MENU, ROUTES, type LineOption } from "@/lib/nav";
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
  const megaRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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
          <div className="hidden xl:block">
            <LineSelector active={line} />
          </div>
          <LanguageToggle />
          <Link href={ROUTES.ingresar} className="whitespace-nowrap text-[14px] font-medium text-ink-600 hover:text-blue-700">
            {t({ es: "Ingresar", en: "Log in" })}
          </Link>
          <CTAButton href={ROUTES.comprarPlanes} size="sm" className="whitespace-nowrap">
            {t({ es: "Cotiza tu plan →", en: "Get a quote →" })}
          </CTAButton>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="Abrir menú"
          className="rounded-control p-2 text-ink-900 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

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

      {/* Drawer móvil */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(360px,88vw)] flex-col gap-5 overflow-y-auto bg-white p-6 shadow-elevated">
            <div className="flex items-center justify-between">
              <Logo width={104} />
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Cerrar menú"
                className="rounded-control p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <p className="field-label mb-1">{t({ es: "Productos", en: "Products" })}</p>
              {PRODUCT_MENU.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="rounded-control px-3 py-2 text-[15px] font-medium text-ink-700 hover:bg-surface-blue"
                >
                  {t(p.title)}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1 border-t border-black/[.06] pt-4">
              {MAIN_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-control px-3 py-2 text-[15px] font-medium text-ink-700 hover:bg-surface-blue"
                >
                  {t(item.label)}
                </Link>
              ))}
              <Link
                href={ROUTES.ingresar}
                className="rounded-control px-3 py-2 text-[15px] font-medium text-ink-700 hover:bg-surface-blue"
              >
                {t({ es: "Ingresar", en: "Log in" })}
              </Link>
            </div>

            <div className="flex flex-col gap-4 border-t border-black/[.06] pt-4">
              <LineSelector active={line} />
              <LanguageToggle />
              <CTAButton href={ROUTES.comprarPlanes} className="w-full">
                {t({ es: "Cotiza tu plan →", en: "Get a quote →" })}
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
