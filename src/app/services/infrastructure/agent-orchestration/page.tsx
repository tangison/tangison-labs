import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { AgentOrchestrationPage } from "./page-client";

export const metadata: Metadata = {
  title: "Agent Orchestration - AI Infrastructure",
  description:
    "Coordinate multiple AI agents on complex tasks. Multi-agent systems with dependency management, parallelization, and error recovery by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/agent-orchestration",
  },
  openGraph: {
    url: "https://tangison.com/services/infrastructure/agent-orchestration",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent Orchestration - AI Infrastructure",
  description:
    "Coordinate multiple AI agents on complex tasks. Multi-agent systems with dependency management, parallelization, and error recovery by TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/infrastructure/agent-orchestration",
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
      <AgentOrchestrationPage />
    </>
  );
}
