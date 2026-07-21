import type { Metadata } from "next";
import { ReportsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Reports — Tangison Labs",
  description: "Research reports and industry analysis",
  alternates: { canonical: "/insights/reports" },
};

export default function Page() {
  return <ReportsPage />;
}
