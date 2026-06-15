import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { OperationalAiPage } from "./page-client";

export const metadata: Metadata = {
  title: "Operational AI - AI Infrastructure",
  description:
    "Keep AI running in production. Model monitoring, drift detection, automated retraining, and incident response. Maintain AI quality over time by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/operational-ai",
  },
  openGraph: {
    url: "https://tangison.com/services/infrastructure/operational-ai",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Operational AI - AI Infrastructure",
  description:
    "Keep AI running in production. Model monitoring, drift detection, automated retraining, and incident response. Maintain AI quality over time by TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/infrastructure/operational-ai",
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
      <OperationalAiPage />
    </>
  );
}
