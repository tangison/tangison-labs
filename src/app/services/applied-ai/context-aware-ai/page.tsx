import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { ContextAwareAiPage } from "./page-client";

export const metadata: Metadata = {
  title: "Context-Aware AI",
  description:
    "AI systems that understand local language, regulation, market conditions, and cultural nuance. Built for the contexts in which they operate, not for everywhere else.",
  alternates: { canonical: "/services/applied-ai/context-aware-ai" },
  openGraph: {
    url: "https://tangison.com/services/applied-ai/context-aware-ai",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Context-Aware AI",
  description:
    "AI systems that understand local language, regulation, market conditions, and cultural nuance. Built for the contexts in which they operate, not for everywhere else.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/applied-ai/context-aware-ai",
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
      <ContextAwareAiPage />
    </>
  );
}
