import type { Metadata } from "next";
import { ConsultingPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "AI Consulting",
  description:
    "AI strategy, technology evaluation, implementation support, and team training. Practical guidance for organizations in Africa. By TANGISON.",
  alternates: {
    canonical: "/services/consulting",
  },
  openGraph: {
    url: "https://tangison.com/services/consulting",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Consulting",
  description:
    "AI strategy, technology evaluation, implementation support, and team training. Practical guidance for organizations in Africa. By TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
  },
  serviceType: "AI Consulting Services",
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={generateBreadcrumb("/services/consulting")} />
      <ConsultingPage />
    </>
  );
}
