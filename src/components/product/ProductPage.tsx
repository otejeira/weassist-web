import { ProductHero } from "@/components/product/ProductHero";
import { TierCards } from "@/components/product/TierCards";
import { DurationSelector } from "@/components/product/DurationSelector";
import { AssistanceGrid } from "@/components/product/AssistanceGrid";
import { HowToRequestSteps } from "@/components/product/HowToRequestSteps";
import { WhatToExpect } from "@/components/product/WhatToExpect";
import { CertsPartners } from "@/components/product/CertsPartners";
import { FinalCTA } from "@/components/product/FinalCTA";
import { PRODUCT_LINES, type ProductSlug } from "@/lib/content/products";
import { ROUTES } from "@/lib/nav";

/** Plantilla compartida de las 4 páginas de producto. */
export function ProductPage({ slug }: { slug: ProductSlug }) {
  const line = PRODUCT_LINES[slug];
  return (
    <>
      <ProductHero
        eyebrow={line.eyebrow}
        title={line.title}
        subtitle={line.subtitle}
        secondaryLabel={{ es: "Ver beneficios", en: "See benefits" }}
        secondaryHref={ROUTES.beneficios}
      />
      {line.mode === "tiers" ? (
        <TierCards title={line.pricingTitle} subtitle={line.pricingSubtitle} />
      ) : (
        <DurationSelector
          title={line.pricingTitle}
          subtitle={line.pricingSubtitle}
          durations={line.durations ?? []}
        />
      )}
      <AssistanceGrid />
      <HowToRequestSteps />
      <WhatToExpect />
      <CertsPartners />
      <FinalCTA />
    </>
  );
}
