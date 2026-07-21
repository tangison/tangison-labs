import type { Metadata } from "next";
import { ProjectsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Projects | Tangison Labs",
  description: "Open-source projects and tools built by Tangison Labs",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <ProjectsPage />;
}
