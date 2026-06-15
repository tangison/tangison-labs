import type { Metadata } from "next";
import { TangisonAgentPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Agent",
  description:
    "Self-hosted AI agent platform by TANGISON. Hermes Agent with 59 skills, OpenClaw, Graphify, PAUL, and BaseAI. Runs on your servers, not the cloud.",
  alternates: {
    canonical: "/products/tangison-agent",
  },
  openGraph: {
    url: "https://tangison.com/products/tangison-agent",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tangison Agent",
  description:
    "Self-hosted AI agent platform by TANGISON. Hermes Agent with 59 skills, OpenClaw, Graphify, PAUL, and BaseAI. Runs on your servers, not the cloud.",
  brand: {
    "@type": "Brand",
    name: "TANGISON",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={generateBreadcrumb("/products/tangison-agent")} />
      <TangisonAgentPage />
    </>
  );
}
