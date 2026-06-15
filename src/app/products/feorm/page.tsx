import type { Metadata } from "next";
import { FeormPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Feorm - Agrotourism & Equipment Rental",
  description:
    "Namibian agrotourism and equipment rental marketplace by TANGISON. Book farm stays, rent machinery, and connect with Namibian agriculture. Built with Tuppaman Investment.",
  alternates: {
    canonical: "/products/feorm",
  },
  openGraph: {
    url: "https://tangison.com/products/feorm",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Feorm",
  description:
    "Namibian agrotourism and equipment rental marketplace by TANGISON. Book farm stays, rent machinery, and connect with Namibian agriculture. Built with Tuppaman Investment.",
  brand: {
    "@type": "Brand",
    name: "TANGISON",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={generateBreadcrumb("/products/feorm")} />
      <FeormPage />
    </>
  );
}
