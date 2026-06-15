import type { Metadata } from "next";
import { SelfHostedVsCloudAiPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Self-Hosted vs. Cloud AI for African Organizations",
  description:
    "A practical comparison of self-hosted and cloud AI deployment models for organizations operating in African markets.",
  alternates: { canonical: "/insights/articles/self-hosted-vs-cloud-ai" },
  openGraph: {
    url: "https://tangison.com/insights/articles/self-hosted-vs-cloud-ai",
    type: "article",
    publishedTime: "2025-07-15",
    authors: ["https://tangison.com/about"],
    tags: ["Infrastructure", "Self-Hosted", "Cloud AI", "AI Strategy", "Africa"],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Self-Hosted vs. Cloud AI for African Organizations",
    description:
      "A practical comparison of self-hosted and cloud AI deployment models for organizations operating in African markets.",
    datePublished: "2025-07-15",
    author: {
      "@type": "Organization",
      name: "Tangison",
    },
    publisher: {
      "@type": "Organization",
      name: "TANGISON",
      logo: {
        "@type": "ImageObject",
        url: "https://tangison.com/images/logo.png",
      },
    },
    url: "https://tangison.com/insights/articles/self-hosted-vs-cloud-ai",
    mainEntityOfPage:
      "https://tangison.com/insights/articles/self-hosted-vs-cloud-ai",
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={generateBreadcrumb("/insights/articles/self-hosted-vs-cloud-ai")}
      />
      <SelfHostedVsCloudAiPage />
    </>
  );
}
