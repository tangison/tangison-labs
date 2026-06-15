import type { Metadata } from "next";
import { AboutPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "About - Applied AI Lab in Namibia",
  description:
    "Applied AI laboratory in Windhoek, Namibia. We research, build, and deploy intelligent systems for African business conditions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "https://tangison.com/about",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/about")} />
      <AboutPage />
    </>
  );
}
