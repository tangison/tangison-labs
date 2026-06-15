import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { WorkflowArchitecturePage } from "./page-client";

export const metadata: Metadata = {
  title: "Workflow Architecture - AI Infrastructure",
  description:
    "Design workflows that connect AI with human operations. State machines, human-in-the-loop patterns, and resilient pipelines by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/workflow-architecture",
  },
  openGraph: {
    url: "https://tangison.com/services/infrastructure/workflow-architecture",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Workflow Architecture - AI Infrastructure",
  description:
    "Design workflows that connect AI with human operations. State machines, human-in-the-loop patterns, and resilient pipelines by TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/infrastructure/workflow-architecture",
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
      <WorkflowArchitecturePage />
    </>
  );
}
