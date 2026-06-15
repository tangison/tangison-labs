import type { Metadata } from "next";
import { ServicesPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We build custom AI systems, deploy self-hosted infrastructure, and provide independent consulting for organizations across Africa.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "https://tangison.com/services",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/services")} />
      <ServicesPage />
    </>
  );
}
