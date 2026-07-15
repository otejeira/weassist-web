import { cn } from "@/lib/cn";

/** Avión de papel de marca (README §Assets). Usado en la 404. */
export function PaperPlane({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn(className)}
      aria-hidden="true"
    >
      <path
        d="M2 13 L22 3 L13 12 L14 21 L10 15 Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
