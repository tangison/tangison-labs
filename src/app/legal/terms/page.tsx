import type { Metadata } from "next";
import { TermsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Terms of Service — Tangison Labs",
  description: "Terms for using the Tangison Labs website",
  alternates: { canonical: "/legal/terms" },
};

export default function Page() {
  return <TermsPage />;
}
