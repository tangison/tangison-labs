import type { Metadata } from "next";
import { TeamTrainingPage } from "./page-client";

export const metadata: Metadata = {
  title: "AI Team Training",
  description:
    "Practical, context-specific AI training that builds lasting organizational capability. Executive workshops, technical training, and ongoing coaching. By TANGISON.",
  alternates: {
    canonical: "/services/consulting/team-training",
  },
  openGraph: {
    url: "https://tangison.com/services/consulting/team-training",
  },
};

export default function Page() {
  return <TeamTrainingPage />;
}
