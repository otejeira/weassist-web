import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * PhotoSlot — espacio reservado para fotografía real (la integra el cliente).
 * Decisión explícita del cliente: NO generar ilustraciones SVG de personas.
 * Muestra un marcador neutro con etiqueta.
 */
export function PhotoSlot({
  label = "Espacio para fotografía",
  ratio = "4/3",
  tone = "light",
  className,
}: {
  label?: string;
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

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex items-center justify-center rounded-card border border-dashed",
        ratioClass,
        tone === "dark"
          ? "border-white/20 bg-white/5 text-white/40"
          : "border-line-300 bg-surface-100 text-ink-300",
        className,
      )}
    >
      <span className="flex flex-col items-center gap-2 px-4 text-center text-[12px] font-medium">
        <ImageIcon className="h-6 w-6" aria-hidden="true" />
        {label}
      </span>
    </div>
  );
}
