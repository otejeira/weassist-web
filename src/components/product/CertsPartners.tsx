"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { CERTS } from "@/lib/constants";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

/** "Certificaciones y partners" — chips. */
export function CertsPartners() {
  const { t } = useLocale();
  return (
    <section className="section-y">
      <Reveal className="container-max text-center">
        <p className="eyebrow">{t({ es: "Respaldo", en: "Backed by" })}</p>
        <h2 className="h2 mt-2">{t({ es: "Certificaciones y partners", en: "Certifications & partners" })}</h2>
        <p className="lead mx-auto mt-3 max-w-2xl">
          {t({
            es: "Estándares internacionales de seguridad, calidad y manejo de datos médicos, en cada asistencia.",
            en: "International standards of security, quality and medical data handling, in every assistance.",
          })}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {CERTS.map((cert) => (
            <Chip key={cert} tone="neutral" className="px-4 py-2 text-[13px]">
              {cert}
            </Chip>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
