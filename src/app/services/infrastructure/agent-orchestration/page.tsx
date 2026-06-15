import type { Metadata } from "next";
import { AgentOrchestrationPage } from "./page-client";

export const metadata: Metadata = {
  title: "Agent Orchestration - AI Infrastructure",
  description:
    "Coordinate multiple AI agents on complex tasks. Multi-agent systems with dependency management, parallelization, and error recovery by TANGISON.",
  alternates: {
    canonical: "/services/infrastructure/agent-orchestration",
  },
  openGraph: {
    url: "https://tangison.com/services/infrastructure/agent-orchestration",
  },
};

export default function Page() {
  return <AgentOrchestrationPage />;
}
