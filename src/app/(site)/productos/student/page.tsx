import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";

export const metadata: Metadata = {
  title: "Student — Viajes Estudiantiles | We Assist",
  description: "Tu semestre afuera, cubierto. Estadías largas, telemedicina y apoyo en el destino.",
};

export default function StudentPage() {
  return <ProductPage slug="student" />;
}
