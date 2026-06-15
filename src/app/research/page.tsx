import type { Metadata } from "next";
import { ResearchPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research and open source projects from the TANGISON applied AI lab. Explore agent architecture, offline-first AI systems, and African language models built for organizations across Africa.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    url: "https://tangison.com/research",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/research")} />
      <ResearchPage />
    </>
  );
}
