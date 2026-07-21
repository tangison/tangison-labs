import type { Metadata } from "next";
import { ResearchPage } from "./page-client";

export const metadata: Metadata = {
  title: "Research — Tangison Labs",
  description: "Applied AI research and technical publications from Tangison Labs",
  alternates: { canonical: "/research" },
};

export default function Page() {
  return <ResearchPage />;
}
