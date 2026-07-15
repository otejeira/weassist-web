import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";

export const metadata: Metadata = {
  title: "Travel — Viajes por día | We Assist",
  description: "Asistencia completa para tu próximo viaje de hasta 90 días, con $0 deducibles y soporte 24/7/365.",
};

export default function TravelPage() {
  return <ProductPage slug="travel" />;
}
