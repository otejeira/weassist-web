import { ProductHero } from "@/components/product/ProductHero";
import { TierCards } from "@/components/product/TierCards";
import { DurationSelector } from "@/components/product/DurationSelector";
import { AnnualPlans } from "@/components/product/AnnualPlans";
import { AssistanceGrid } from "@/components/product/AssistanceGrid";
import { HowToRequestSteps } from "@/components/product/HowToRequestSteps";
import { WhatToExpect } from "@/components/product/WhatToExpect";
import { CertsPartners } from "@/components/product/CertsPartners";
import { FinalCTA } from "@/components/product/FinalCTA";
import { ContrastBlock } from "@/components/brand/ContrastBlock";
import { PRODUCT_LINES, type ProductSlug } from "@/lib/content/products";
import { HOME_CASES, PRODUCT_CASE_INDEX } from "@/lib/content/home";

/**
 * Plantilla compartida de las 4 páginas de producto.
 * Orden: primero creamos necesidad y probamos el valor (qué cubre → por qué
 * somos distintos → caso real → cómo se activa) y el precio es el clímax.
 */
export function ProductPage({ slug }: { slug: ProductSlug }) {
  const line = PRODUCT_LINES[slug];
  const featuredCase = HOME_CASES[PRODUCT_CASE_INDEX[slug] ?? 0];
  return (
    <>
      <ProductHero
        eyebrow={line.eyebrow}
        title={line.title}
        subtitle={line.subtitle}
        secondaryLabel={{ es: "Ver qué incluye", en: "See what's included" }}
        secondaryHref="#servicios"
      />
      <AssistanceGrid />
      <ContrastBlock featuredCase={featuredCase} className="bg-surface-100" />
      <HowToRequestSteps />
      <WhatToExpect />
      {line.mode === "tiers" ? (
        <TierCards title={line.pricingTitle} subtitle={line.pricingSubtitle} />
      ) : line.mode === "annual" && line.annualPlans ? (
        <AnnualPlans
          title={line.pricingTitle}
          subtitle={line.pricingSubtitle}
          data={line.annualPlans}
        />
      ) : (
        <DurationSelector
          title={line.pricingTitle}
          subtitle={line.pricingSubtitle}
          durations={line.durations ?? []}
        />
      )}
      <CertsPartners />
      <FinalCTA />
    </>
  );
}
