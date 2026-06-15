import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { ImplementationSupportPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Implementation Support",
  description:
    "Hands-on guidance from pilot to production. Avoid common pitfalls, manage change, and build confidence in AI processes. By TANGISON.",
  alternates: {
    canonical: "/services/consulting/implementation-support",
  },
  openGraph: {
    url: "https://tangison.com/services/consulting/implementation-support",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Implementation Support",
  description:
    "Hands-on guidance from pilot to production. Avoid common pitfalls, manage change, and build confidence in AI processes. By TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/consulting/implementation-support",
  serviceType: "AI Professional Services",
  areaServed: {
    "@type": "Place",
    name: "Africa",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ImplementationSupportPage />
    </>
  );
}
