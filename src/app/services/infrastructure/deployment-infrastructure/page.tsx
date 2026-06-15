import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { DeploymentInfrastructurePage } from "./page-client";

export const metadata: Metadata = {
  title: "Deployment Infrastructure - AI Infrastructure",
  description:
    "Move AI from prototype to production. Model serving, auto-scaling, blue-green deployments, and infrastructure as code. Built for African conditions by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/deployment-infrastructure",
  },
  openGraph: {
    url: "https://tangison.com/services/infrastructure/deployment-infrastructure",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deployment Infrastructure - AI Infrastructure",
  description:
    "Move AI from prototype to production. Model serving, auto-scaling, blue-green deployments, and infrastructure as code. Built for African conditions by TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/infrastructure/deployment-infrastructure",
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
      <DeploymentInfrastructurePage />
    </>
  );
}
