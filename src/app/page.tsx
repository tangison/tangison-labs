import type { Metadata } from "next";
import { HomePage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";

export const metadata: Metadata = {
  title: "TANGISON | Applied AI Laboratory",
  description:
    "We build AI systems that solve real business problems for African organizations. Custom agents. Self-hosted infrastructure. Applied research. Windhoek, Namibia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://tangison.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TANGISON",
  url: "https://tangison.com",
  description:
    "We build AI systems that solve real business problems for African organizations. Custom agents. Self-hosted infrastructure. Applied research. Windhoek, Namibia.",
  logo: "https://tangison.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windhoek",
    addressCountry: "NA",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TANGISON",
  url: "https://tangison.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://tangison.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <HomePage />
    </>
  );
}
