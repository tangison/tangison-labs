import type { Metadata } from "next";
import { CustomAiSystemsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Custom AI Systems",
  description:
    "Purpose-built AI systems designed around your data, workflows, and regulatory context. Not generic templates. Solutions that fit the problem they solve.",
  alternates: { canonical: "/services/applied-ai/custom-ai-systems" },
  openGraph: {
    url: "https://tangison.com/services/applied-ai/custom-ai-systems",
  },
};

export default function Page() {
  return <CustomAiSystemsPage />;
}
