import type { Metadata } from "next";
import { KapatashuPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Tate-Ati Tangi Iigonda | Principal Consultant",
  description:
    "Tate-Ati Tangi Iigonda - Principal Consultant and AI Strategist at TANGISON. Director of Tangison Studio, owner of SMEfrog Academy, focused on offline-first AI systems and applied AI strategy for African organizations.",
  alternates: { canonical: "/about/kapatashu" },
  openGraph: { url: "https://tangison.com/about/kapatashu" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tate-Ati Tangi Iigonda",
  jobTitle: "Principal Consultant & AI Strategist",
  worksFor: {
    "@type": "Organization",
    name: "TANGISON",
  },
  url: "https://tangison.com/about/kapatashu",
  description:
    "Tate-Ati Tangi Iigonda - Principal Consultant and AI Strategist at TANGISON. Director of Tangison Studio, owner of SMEfrog Academy, focused on offline-first AI systems and applied AI strategy for African organizations.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={generateBreadcrumb("/about/kapatashu")} />
      <KapatashuPage />
    </>
  );
}
