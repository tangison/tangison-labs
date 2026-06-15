import type { Metadata } from "next";
import { InfrastructurePage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "AI Infrastructure",
  description:
    "Agent orchestration, automation pipelines, deployment, and monitoring for production AI. Built for African environments by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure",
  },
  openGraph: {
    url: "https://tangison.com/services/infrastructure",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Infrastructure",
  description:
    "Agent orchestration, automation pipelines, deployment, and monitoring for production AI. Built for African environments by TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
  },
  serviceType: "AI Infrastructure Services",
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={generateBreadcrumb("/services/infrastructure")} />
      <InfrastructurePage />
    </>
  );
}
