import type { Metadata } from "next";
import { ContactPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Contact TANGISON's applied AI lab in Windhoek, Namibia. Tell us about your project, ask about our services, or request a consultation. We respond within 48 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "https://tangison.com/contact",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/contact")} />
      <ContactPage />
    </>
  );
}
