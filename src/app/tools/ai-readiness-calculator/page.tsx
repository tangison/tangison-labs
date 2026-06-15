import type { Metadata } from "next";
import { AiReadinessCalculatorPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "AI Readiness Calculator",
  description:
    "Assess your organization's AI readiness with our structured evaluation tool. Get a personalized score and recommendations for your next steps.",
  alternates: { canonical: "/tools/ai-readiness-calculator" },
  openGraph: { url: "https://tangison.com/tools/ai-readiness-calculator" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/tools/ai-readiness-calculator")} />
      <AiReadinessCalculatorPage />
    </>
  );
}
