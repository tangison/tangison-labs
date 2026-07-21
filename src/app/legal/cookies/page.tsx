import type { Metadata } from "next";
import { CookiesPage } from "./page-client";

export const metadata: Metadata = {
  title: "Cookie Policy | Tangison Labs",
  description: "How Tangison Labs uses cookies",
  alternates: { canonical: "/legal/cookies" },
};

export default function Page() {
  return <CookiesPage />;
}
