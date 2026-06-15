import type { Metadata } from "next";
import { CaseStudiesPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real projects, real outcomes. Applied AI case studies from TANGISON showing how organizations deploy intelligent systems across African industries.",
  alternates: {
    canonical: "/insights/case-studies",
  },
  openGraph: {
    url: "https://tangison.com/insights/case-studies",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/insights/case-studies")} />
      <CaseStudiesPage />
    </>
  );
}
