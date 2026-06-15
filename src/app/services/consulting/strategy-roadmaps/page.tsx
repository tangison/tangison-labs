import type { Metadata } from "next";
import { JsonLd } from "@/components/tangison/json-ld";
import { StrategyRoadmapsPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Strategy & Roadmaps",
  description:
    "Build AI strategies tied to your business goals and operational realities. Honest timelines, realistic resource estimates, and measurable success metrics. By TANGISON.",
  alternates: {
    canonical: "/services/consulting/strategy-roadmaps",
  },
  openGraph: {
    url: "https://tangison.com/services/consulting/strategy-roadmaps",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Strategy & Roadmaps",
  description:
    "Build AI strategies tied to your business goals and operational realities. Honest timelines, realistic resource estimates, and measurable success metrics. By TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
    url: "https://tangison.com",
  },
  url: "https://tangison.com/services/consulting/strategy-roadmaps",
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
      <StrategyRoadmapsPage />
    </>
  );
}
