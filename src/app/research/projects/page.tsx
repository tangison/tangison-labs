import type { Metadata } from "next";
import { ResearchProjectsPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Research Projects",
  description:
    "Active research from the TANGISON lab. Agent architecture, offline-first AI, and African language models designed for production deployment.",
  alternates: {
    canonical: "/research/projects",
  },
  openGraph: {
    url: "https://tangison.com/research/projects",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/research/projects")} />
      <ResearchProjectsPage />
    </>
  );
}
