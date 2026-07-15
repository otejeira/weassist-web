import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";

export const metadata: Metadata = {
  title: "Larga Estadía — Travel + | We Assist",
  description: "Asistencia extendida para estadías prolongadas fuera de casa, con topes médicos ampliados.",
};

export default function LongStayPage() {
  return <ProductPage slug="long-stay" />;
}
