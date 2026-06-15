import type { Metadata } from "next";
import { InsightsPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on AI, engineering, and building in Africa. Read articles, case studies, and downloadable resources from the TANGISON applied AI laboratory.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    url: "https://tangison.com/insights",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/insights")} />
      <InsightsPage />
    </>
  );
}
