import type { Metadata } from "next";
import { ArticlesPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Perspectives and educational content on applied AI, self-hosted infrastructure, and building technology solutions for African organizations and markets.",
  alternates: {
    canonical: "/insights/articles",
  },
  openGraph: {
    url: "https://tangison.com/insights/articles",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/insights/articles")} />
      <ArticlesPage />
    </>
  );
}
