import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";

export const metadata: Metadata = {
  title: "All-Ways — Multiviajes Anual | We Assist",
  description: "Viaja todo el año con una sola póliza. Cobertura activa los 365 días.",
};

export default function AllWaysPage() {
  return <ProductPage slug="all-ways" />;
}
