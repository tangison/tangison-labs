import type { Metadata } from "next";
import { OpenSourcePage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Open source repositories and community tools from TANGISON. Self-hosted AI agents, skills, and education platforms built for African developers.",
  alternates: {
    canonical: "/research/open-source",
  },
  openGraph: {
    url: "https://tangison.com/research/open-source",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/research/open-source")} />
      <OpenSourcePage />
    </>
  );
}
