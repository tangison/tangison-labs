import type { Metadata } from "next";
import { LockedPage } from "@/components/tangison/locked-page";
import { SiteShell } from "@/components/tangison/site-shell";

export const metadata: Metadata = {
  title: "Projects — Tangison Labs",
  description: "Open-source projects and tools built by Tangison Labs",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <LockedPage
        title="Projects"
        description="Open-source projects and tools built by Tangison Labs"
      />
    </SiteShell>
  );
}
