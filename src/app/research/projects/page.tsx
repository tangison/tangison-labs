import type { Metadata } from "next";
import { ResearchProjectsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Research Projects | Tangison Labs",
  description: "R&D projects exploring applied AI, automation, and infrastructure",
  alternates: { canonical: "/research/projects" },
};

export default function Page() {
  return <ResearchProjectsPage />;
}
