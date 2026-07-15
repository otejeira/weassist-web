import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/nav";

/** Logo oficial We Assist (PNG). Nunca recrear tipográficamente. */
export function Logo({
  variant = "color",
  href = ROUTES.home,
  className,
  width = 120,
}: {
  variant?: "color" | "white";
  href?: string | null;
  className?: string;
  width?: number;
}) {
  const src =
    variant === "white" ? "/brand/we-assist-logo-white.png" : "/brand/we-assist-logo.png";
  // Relación real de los PNG: 337×230 (color) / 339×230 (blanco) ≈ 1.47:1.
  const height = Math.round((width * 230) / 337);

  const img = (
    <Image
      src={src}
      alt="We Assist"
      width={width}
      height={height}
      priority
      className={className}
    />
  );

  if (href === null) return img;
  return (
    <Link href={href} aria-label="We Assist — inicio" className="inline-flex">
      {img}
    </Link>
  );
}
