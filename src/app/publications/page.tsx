import type { Metadata } from "next";
import { PublicationsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Publications | Tangison Labs",
  description: "Research papers, reports, and technical publications",
  alternates: { canonical: "/publications" },
};

export default function Page() {
  return <PublicationsPage />;
}
