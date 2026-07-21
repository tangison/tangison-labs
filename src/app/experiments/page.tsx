import type { Metadata } from "next";
import { ExperimentsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Experiments | Tangison Labs",
  description: "Live experiments, prototypes, and work in progress",
  alternates: { canonical: "/experiments" },
};

export default function Page() {
  return <ExperimentsPage />;
}
