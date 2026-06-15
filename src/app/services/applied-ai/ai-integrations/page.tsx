import type { Metadata } from "next";
import { AiIntegrationsPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Integrations",
  description:
    "Connect AI to your existing tools, platforms, and data sources. Enhance what you already have without disrupting operations.",
  alternates: { canonical: "/services/applied-ai/ai-integrations" },
  openGraph: {
    url: "https://tangison.com/services/applied-ai/ai-integrations",
  },
};

export default function Page() {
  return <AiIntegrationsPage />;
}
