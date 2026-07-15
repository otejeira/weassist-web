import { cn } from "@/lib/cn";

/** Encabezado de sección reutilizable: eyebrow + título + descripción. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className={cn("h2", tone === "dark" ? "text-white" : "text-ink-900")}>{title}</h2>
      {description && (
        <p className={cn("lead mt-3", tone === "dark" && "text-white/70")}>{description}</p>
      )}
    </div>
  );
}
