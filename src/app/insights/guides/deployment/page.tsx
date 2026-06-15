import type { Metadata } from "next";
import { DeploymentGuidePage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Self-Hosted AI Deployment Guide",
  description:
    "A practical guide to deploying AI systems on your own infrastructure. Covers hardware requirements, software stack, and security considerations.",
  alternates: { canonical: "/insights/guides/deployment" },
  openGraph: { url: "https://tangison.com/insights/guides/deployment" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/insights/guides/deployment")} />
      <DeploymentGuidePage />
    </>
  );
}
