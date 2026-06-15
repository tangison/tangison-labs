import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { TeamTrainingPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Team Training",
  description:
    "Practical, context-specific AI training that builds lasting organizational capability. Executive workshops, technical training, and ongoing coaching. By TANGISON.",
  alternates: {
    canonical: "/services/consulting/team-training",
  },
  openGraph: {
    url: "https://tangison.com/services/consulting/team-training",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Team Training",
  description:
    "Practical, context-specific AI training that builds lasting organizational capability. Executive workshops, technical training, and ongoing coaching. By TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/consulting/team-training",
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
      <TeamTrainingPage />
    </>
  );
}
