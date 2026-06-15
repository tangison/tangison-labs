import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { IntegrationLayerPage } from "./page-client";

export const metadata: Metadata = {
  title: "Integration Layer - AI Infrastructure",
  description:
    "Connect AI infrastructure to your existing tools, APIs, and data pipelines. API gateways, data pipeline management, and observability by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/integration-layer",
  },
  openGraph: {
    url: "https://tangison.com/services/infrastructure/integration-layer",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Integration Layer - AI Infrastructure",
  description:
    "Connect AI infrastructure to your existing tools, APIs, and data pipelines. API gateways, data pipeline management, and observability by TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/infrastructure/integration-layer",
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
      <IntegrationLayerPage />
    </>
  );
}
