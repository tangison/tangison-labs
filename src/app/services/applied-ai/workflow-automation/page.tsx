import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { WorkflowAutomationPage } from "./page-client";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description:
    "Automate complex workflows that understand context, handle exceptions, and know when to involve people. Not rigid scripts. Workflows that adapt.",
  alternates: { canonical: "/services/applied-ai/workflow-automation" },
  openGraph: {
    url: "https://tangison.com/services/applied-ai/workflow-automation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Workflow Automation",
  description:
    "Automate complex workflows that understand context, handle exceptions, and know when to involve people. Not rigid scripts. Workflows that adapt.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/applied-ai/workflow-automation",
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
      <WorkflowAutomationPage />
    </>
  );
}
