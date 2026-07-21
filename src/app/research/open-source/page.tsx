import type { Metadata } from "next";
import { OpenSourcePage } from "./page-client";

export const metadata: Metadata = {
  title: "Open Source — Tangison Labs",
  description: "Public repositories and open-source contributions",
  alternates: { canonical: "/research/open-source" },
};

export default function Page() {
  return <OpenSourcePage />;
}
