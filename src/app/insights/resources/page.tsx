import type { Metadata } from "next";
import { ResourcesPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "AI Guides & Frameworks",
  description:
    "Download TANGISON's comprehensive library of AI guides, frameworks, and industry-specific playbooks designed for African organizations. From AI strategy to sector-specific implementation.",
  alternates: {
    canonical: "/insights/resources",
  },
  openGraph: {
    url: "https://tangison.com/insights/resources",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/insights/resources")} />
      <ResourcesPage />
    </>
  );
}
