"use client";

import { ShieldCheck } from "lucide-react";
import { CERTS } from "@/lib/constants";
import { Chip } from "./Chip";

/** Barra de confianza: chips de certificaciones/partners. */
export function TrustBar({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      <span
        className={`inline-flex items-center gap-1.5 text-[12px] font-semibold ${
          tone === "dark" ? "text-white/70" : "text-ink-500"
        }`}
      >
        <ShieldCheck className="h-4 w-4 text-green-500" aria-hidden="true" />
        Certificaciones y partners
      </span>
      {CERTS.map((cert) => (
        <Chip key={cert} tone={tone === "dark" ? "navy" : "neutral"}>
          {cert}
        </Chip>
      ))}
    </div>
  );
}
