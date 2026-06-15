import type { Metadata } from "next";
import { SMEFrogAcademyPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "SMEFrog Academy",
  description:
    "Free business education for Namibian entrepreneurs by TANGISON. Practical AI courses designed for African SMEs. Mobile-first. No paywalls. No technical background required.",
  alternates: {
    canonical: "/products/smefrog-academy",
  },
  openGraph: {
    url: "https://tangison.com/products/smefrog-academy",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SMEFrog Academy",
  description:
    "Free business education for Namibian entrepreneurs by TANGISON. Practical AI courses designed for African SMEs. Mobile-first. No paywalls. No technical background required.",
  brand: {
    "@type": "Brand",
    name: "TANGISON",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={generateBreadcrumb("/products/smefrog-academy")} />
      <SMEFrogAcademyPage />
    </>
  );
}
