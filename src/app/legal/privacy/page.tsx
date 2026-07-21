import type { Metadata } from "next";
import { PrivacyPage } from "./page-client";

export const metadata: Metadata = {
  title: "Privacy Policy | Tangison Labs",
  description: "How Tangison handles your data",
  alternates: { canonical: "/legal/privacy" },
};

export default function Page() {
  return <PrivacyPage />;
}
