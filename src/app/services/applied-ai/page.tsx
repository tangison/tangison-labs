import type { Metadata } from "next";
import { AppliedAiPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Applied AI",
  description:
    "Custom AI systems built for your data, workflows, and regulatory context. Enterprise deployments, workflow automation, and decision support by TANGISON.",
  alternates: {
    canonical: "/services/applied-ai",
  },
  openGraph: {
    url: "https://tangison.com/services/applied-ai",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Applied AI",
  description:
    "Custom AI systems built for your data, workflows, and regulatory context. Enterprise deployments, workflow automation, and decision support by TANGISON.",
  provider: {
    "@type": "Organization",
    name: "TANGISON",
  },
  serviceType: "Applied AI Solutions",
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={generateBreadcrumb("/services/applied-ai")} />
      <AppliedAiPage />
    </>
  );
}
