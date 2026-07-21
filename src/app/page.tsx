import type { Metadata } from "next";
import { HomePage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";

export const metadata: Metadata = {
  title: { absolute: "Tangison Labs — Research and Development" },
  description:
    "Open-source projects, applied AI research, and experimental tools from Tangison Labs in Windhoek, Namibia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://labs.tangison.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tangison Labs",
  url: "https://labs.tangison.com",
  description:
    "Open-source projects, applied AI research, and experimental tools from Tangison Labs in Windhoek, Namibia.",
  logo: "https://labs.tangison.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windhoek",
    addressCountry: "NA",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <HomePage />
    </>
  );
}
