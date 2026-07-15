import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalView } from "@/components/legal/LegalView";
import { LEGAL_SECTIONS, LEGAL_SLUGS, type LegalSlug } from "@/lib/content/legal";

export function generateStaticParams() {
  return LEGAL_SLUGS.map((seccion) => ({ seccion }));
}

export function generateMetadata({ params }: { params: { seccion: string } }): Metadata {
  const section = LEGAL_SECTIONS[params.seccion as LegalSlug];
  if (!section) return { title: "Legal | We Assist" };
  return { title: `${section.title.es} | We Assist` };
}

export default function LegalPage({ params }: { params: { seccion: string } }) {
  const slug = params.seccion as LegalSlug;
  if (!LEGAL_SECTIONS[slug]) notFound();
  return <LegalView slug={slug} />;
}
