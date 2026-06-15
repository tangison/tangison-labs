import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { EnterpriseDeploymentsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Enterprise Deployments",
  description:
    "Deploy AI within your own infrastructure with full compliance, governance, and observability. Scale AI systems without surrendering control.",
  alternates: { canonical: "/services/applied-ai/enterprise-deployments" },
  openGraph: {
    url: "https://tangison.com/services/applied-ai/enterprise-deployments",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Deployments",
  description:
    "Deploy AI within your own infrastructure with full compliance, governance, and observability. Scale AI systems without surrendering control.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/applied-ai/enterprise-deployments",
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
      <EnterpriseDeploymentsPage />
    </>
  );
}
