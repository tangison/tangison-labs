import type { Metadata } from "next";
import { ProductsPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Self-hosted AI products by TANGISON. SkillsCamp offers 531+ agent skills. Tangison Agent runs autonomous operations. Zero cloud dependency. Built for Africa.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    url: "https://tangison.com/products",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/products")} />
      <ProductsPage />
    </>
  );
}
