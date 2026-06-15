import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { DataAnalysisPage } from "./page-client";

export const metadata: Metadata = {
  title: "Data Analysis & Decision Support",
  description:
    "Surface patterns, predict outcomes, and present actionable insights from your organisational data. Turn raw information into decisions you can act on with confidence.",
  alternates: { canonical: "/services/applied-ai/data-analysis" },
  openGraph: {
    url: "https://tangison.com/services/applied-ai/data-analysis",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Analysis & Decision Support",
  description:
    "Surface patterns, predict outcomes, and present actionable insights from your organisational data. Turn raw information into decisions you can act on with confidence.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/applied-ai/data-analysis",
  serviceType: "AI Professional Services",
  areaServed: {
    "@type": "Place",
    name: "Africa",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <DataAnalysisPage />
    </>
  );
}
