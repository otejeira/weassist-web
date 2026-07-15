import type { Config } from "tailwindcss";

/**
 * Design tokens del handoff (README §Design Tokens).
 * Toda la paleta, radios, sombras, gradientes y animaciones de marca viven aquí
 * para que el equipo de marketing/tecnología los ajuste desde un solo lugar.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#021a33", // fondos oscuros profundos (footer, gradientes)
          900: "#072a50", // headers de PlanCard, títulos de marca
          800: "#003366", // gradientes hero, pill activa del selector
        },
        blue: {
          700: "#0a4a86", // primario de acción, enlaces
        },
        cyan: {
          500: "#10ade4", // acento: RouteLine, bordes destacados, hovers
        },
        green: {
          500: "#7cc249", // éxito, checks, badge MÁS VENDIDO, hexágono verde
          700: "#3e7d1c", // texto de éxito sobre claro
        },
        ink: {
          900: "#0c2236", // texto principal
          600: "#3d4f5f", // párrafos largos
          500: "#5c6b7a", // texto secundario
          300: "#9aa7b3", // terciario / placeholders
        },
        line: {
          300: "#c7d3dd", // bordes de inputs/checkbox inactivos
        },
        surface: {
          100: "#f5f9fc", // fondo de secciones alternas
          blue: "#eaf3fb", // chips / hover de nav / fondos de íconos
          cyan: "#e6f7fd", // columnas destacadas, hints informativos
          green: "#f0f9ee", // estados seleccionados verdes
        },
        healthier: {
          blue: "#004AAD", // SOLO menciones/enlaces a Assist Healthier
          cyan: "#00C2FF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        control: "10px", // botones / inputs
        card: "16px", // tarjetas
        panel: "22px", // paneles grandes
      },
      boxShadow: {
        card: "0 1px 3px rgba(2,26,51,.05)",
        elevated: "0 24px 60px -12px rgba(2,26,51,.5)",
        glow: "0 18px 44px -14px rgba(16,173,228,.35)",
        toast: "0 18px 40px -8px rgba(2,26,51,.5)",
      },
      backgroundImage: {
        "hero-navy": "linear-gradient(165deg,#021a33,#003366 72%,#0a4a86)",
        "cta-slide": "linear-gradient(100deg,#0a4a86,#10ade4,#0a4a86)",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(.2,0,0,1)",
      },
      keyframes: {
        dashMove: { to: { strokeDashoffset: "-24" } },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        ctaSlide: {
          "0%,100%": { backgroundPosition: "100% 0" },
          "50%": { backgroundPosition: "0% 0" },
        },
        toastIn: {
          from: { opacity: "0", transform: "translate(-50%,10px)" },
          to: { opacity: "1", transform: "translate(-50%,0)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".5", transform: "scale(1.35)" },
        },
      },
      animation: {
        dashMove: "dashMove 2.4s linear infinite",
        marquee: "marquee 34s linear infinite",
        ctaSlide: "ctaSlide 3.6s ease-in-out infinite",
        toastIn: "toastIn .25s ease",
        pulseDot: "pulseDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
