import { Camera } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * PhotoSlot — espacio de fotografía CON DIRECCIÓN DE ARTE.
 *
 * No es un hueco gris: es un brief visual en el propio maquetado. Marketing
 * sustituye este bloque por la foto real conservando el mismo encuadre (ratio),
 * tono (navy/claro) y tratamiento (cian como luz). Así el sitio queda "casi al
 * 100%" y marketing solo conecta la foto y le da el sello de lujo.
 *
 * - `subject`  qué muestra la foto (rostro real, escena, primer plano).
 * - `direction` nota de encuadre/luz para el fotógrafo o banco de imágenes.
 * - `tone`     dónde vive: sobre navy (dark) o sobre fondo claro (light).
 *
 * Decisión del cliente: NO generar ilustraciones SVG de personas.
 */
export function PhotoSlot({
  subject = "Fotografía real",
  direction,
  ratio = "4/3",
  tone = "light",
  className,
}: {
  subject?: string;
  direction?: string;
  ratio?: "4/3" | "16/9" | "1/1" | "3/4";
  tone?: "light" | "dark";
  className?: string;
}) {
  const ratioClass = {
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-video",
    "1/1": "aspect-square",
    "3/4": "aspect-[3/4]",
  }[ratio];

  const dark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={subject}
      className={cn(
        "group relative flex flex-col items-center justify-center overflow-hidden rounded-card border border-dashed p-6 text-center",
        ratioClass,
        dark
          ? "border-cyan-500/40 bg-navy-900 text-white"
          : "border-cyan-500/40 bg-surface-blue text-navy-900",
        className,
      )}
    >
      {/* Luz cian (el cian es la "luz" de la marca, según brandbook) */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full blur-3xl",
          dark ? "bg-cyan-500/25" : "bg-cyan-500/15",
        )}
      />
      {/* Etiqueta de espacio */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide",
          dark ? "bg-navy-950/70 text-cyan-500" : "bg-white/70 text-blue-700",
        )}
      >
        <Camera className="h-3 w-3" strokeWidth={2.2} />
        Espacio de foto
      </span>

      <span className="relative flex flex-col items-center gap-2">
        <span
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full",
            dark ? "bg-white/10 text-cyan-500" : "bg-white text-cyan-500 shadow-card",
          )}
        >
          <Camera className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="font-display text-[14px] font-bold leading-snug">{subject}</span>
        {direction && (
          <span
            className={cn(
              "max-w-[30ch] text-[11.5px] leading-relaxed",
              dark ? "text-white/55" : "text-ink-500",
            )}
          >
            {direction}
          </span>
        )}
      </span>
    </div>
  );
}
