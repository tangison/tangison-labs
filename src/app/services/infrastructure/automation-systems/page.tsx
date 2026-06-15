import type { Metadata } from "next";
import { AutomationSystemsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Automation Systems - AI Infrastructure",
  description:
    "Build automation pipelines that handle real-world complexity. Event-driven automation, exception handling, and compliance trails by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/automation-systems",
  },
  openGraph: {
    url: "https://tangison.com/services/infrastructure/automation-systems",
  },
};

export default function Page() {
  return <AutomationSystemsPage />;
}
