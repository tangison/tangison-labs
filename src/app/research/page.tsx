import type { Metadata } from "next";
import { LockedPage } from "@/components/tangison/locked-page";
import { SiteShell } from "@/components/tangison/site-shell";

export const metadata: Metadata = {
  title: "Research — Tangison Labs",
  description: "Applied AI research and technical publications from Tangison Labs",
};

export default function ResearchPage() {
  return (
    <SiteShell>
      <LockedPage
        title="Research"
        description="Applied AI research and technical publications from Tangison Labs"
      />
    </SiteShell>
  );
}
