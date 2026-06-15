import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { TechnologyEvaluationPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Technology Evaluation",
  description:
    "Vendor-neutral assessment of AI tools, platforms, and approaches. Know what works before you commit. Independent evaluation by TANGISON.",
  alternates: {
    canonical: "/services/consulting/technology-evaluation",
  },
  openGraph: {
    url: "https://tangison.com/services/consulting/technology-evaluation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Technology Evaluation",
  description:
    "Vendor-neutral assessment of AI tools, platforms, and approaches. Know what works before you commit. Independent evaluation by TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/consulting/technology-evaluation",
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
      <TechnologyEvaluationPage />
    </>
  );
}
