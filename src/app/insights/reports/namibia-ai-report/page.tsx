import type { Metadata } from "next";
import { NamibiaAiReportPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Namibia AI Landscape Report",
  description:
    "A comprehensive analysis of AI adoption, infrastructure, and opportunities across Namibia's key industries.",
  alternates: { canonical: "/insights/reports/namibia-ai-report" },
  openGraph: { url: "https://tangison.com/insights/reports/namibia-ai-report" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/insights/reports/namibia-ai-report")} />
      <NamibiaAiReportPage />
    </>
  );
}
