import type { Metadata } from "next";
import { SkillsCampPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "SkillsCamp",
  description:
    "SkillsCamp by TANGISON — self-hosted AI agent skills built for African contexts. 531+ modular skills with zero cloud dependency. Deploy on your own infrastructure.",
  alternates: {
    canonical: "/products/skillscamp",
  },
  openGraph: {
    url: "https://tangison.com/products/skillscamp",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SkillsCamp",
  description:
    "SkillsCamp by TANGISON — self-hosted AI agent skills built for African contexts. 531+ modular skills with zero cloud dependency. Deploy on your own infrastructure.",
  brand: {
    "@type": "Brand",
    name: "TANGISON",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={generateBreadcrumb("/products/skillscamp")} />
      <SkillsCampPage />
    </>
  );
}
