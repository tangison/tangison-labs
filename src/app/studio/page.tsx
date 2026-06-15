import type { Metadata } from "next";
import { StudioPage } from "./page-client";
import { JsonLd } from "@/components/tangison/json-ld";
import { generateBreadcrumb } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "One company. An applied AI laboratory and a creative studio, both built in Windhoek, Namibia.",
  alternates: {
    canonical: "/studio",
  },
  openGraph: {
    url: "https://tangison.com/studio",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={generateBreadcrumb("/studio")} />
      <StudioPage />
    </>
  );
}
