import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { AutomationSystemsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Automation Systems - AI Infrastructure",
  description:
    "Build automation pipelines that handle real-world complexity. Event-driven automation, exception handling, and compliance trails by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/automation-systems",
  },
  openGraph: {
    url: "https://tangison.com/services/infrastructure/automation-systems",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automation Systems - AI Infrastructure",
  description:
    "Build automation pipelines that handle real-world complexity. Event-driven automation, exception handling, and compliance trails by TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/infrastructure/automation-systems",
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
      <AutomationSystemsPage />
    </>
  );
}
