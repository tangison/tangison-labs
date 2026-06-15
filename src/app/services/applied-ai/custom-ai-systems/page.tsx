import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { CustomAiSystemsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Custom AI Systems",
  description:
    "Purpose-built AI systems designed around your data, workflows, and regulatory context. Not generic templates. Solutions that fit the problem they solve.",
  alternates: { canonical: "/services/applied-ai/custom-ai-systems" },
  openGraph: {
    url: "https://tangison.com/services/applied-ai/custom-ai-systems",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom AI Systems",
  description:
    "Purpose-built AI systems designed around your data, workflows, and regulatory context. Not generic templates. Solutions that fit the problem they solve.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/applied-ai/custom-ai-systems",
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
      <CustomAiSystemsPage />
    </>
  );
}
