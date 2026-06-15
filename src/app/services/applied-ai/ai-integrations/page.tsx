import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { AiIntegrationsPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Integrations",
  description:
    "Connect AI to your existing tools, platforms, and data sources. Enhance what you already have without disrupting operations.",
  alternates: { canonical: "/services/applied-ai/ai-integrations" },
  openGraph: {
    url: "https://tangison.com/services/applied-ai/ai-integrations",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Integrations",
  description:
    "Connect AI to your existing tools, platforms, and data sources. Enhance what you already have without disrupting operations.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/applied-ai/ai-integrations",
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
      <AiIntegrationsPage />
    </>
  );
}
