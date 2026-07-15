import Link from "next/link";
import { cn } from "@/lib/cn";

export type CTAVariant = "primary" | "outline" | "outlineWhite" | "white" | "ghost";
export type CTASize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-control font-display font-semibold transition-transform duration-200 ease-brand disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<CTASize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-[26px] py-[14px] text-[14px]",
  lg: "px-8 py-4 text-[15px]",
};

const variants: Record<CTAVariant, string> = {
  // Primario con slider de color animado (README §2)
  primary:
    "text-white bg-cta-slide bg-[length:220%_100%] animate-ctaSlide shadow-card hover:-translate-y-0.5 hover:shadow-glow",
  outline:
    "border border-blue-700 text-blue-700 bg-transparent hover:bg-surface-blue",
  outlineWhite:
    "border border-white/70 text-white bg-transparent hover:bg-white/10",
  white: "bg-white text-blue-700 hover:-translate-y-0.5 shadow-card",
  ghost: "text-blue-700 hover:bg-surface-blue",
};

type CommonProps = {
  variant?: CTAVariant;
  size?: CTASize;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

/**
 * CTAButton — botón/enlace de marca. Primario usa el slider de color animado.
 * Renderiza <Link> si recibe `href` interno, <a> si es externo, o <button>.
 */
export function CTAButton(props: ButtonProps | LinkProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
