import { cn } from "@/lib/cn";

type ChipTone = "neutral" | "cyan" | "green" | "navy" | "removable";

/** Chip/pill reutilizable (certificaciones, tags, chips de comparación). */
export function Chip({
  children,
  tone = "neutral",
  className,
  onRemove,
}: {
  children: React.ReactNode;
  tone?: ChipTone;
  className?: string;
  onRemove?: () => void;
}) {
  const tones: Record<ChipTone, string> = {
    neutral: "bg-surface-100 text-ink-600 border border-black/[.06]",
    cyan: "bg-surface-cyan text-blue-700",
    green: "bg-surface-green text-green-700",
    navy: "bg-white/10 text-white",
    removable: "bg-white/10 text-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Quitar"
          className="ml-0.5 rounded-full opacity-70 hover:opacity-100"
        >
          ✕
        </button>
      )}
    </span>
  );
}
