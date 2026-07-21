import type { Metadata } from "next";
import { LockedPage } from "@/components/tangison/locked-page";
import { SiteShell } from "@/components/tangison/site-shell";

export const metadata: Metadata = {
  title: "Reports — Tangison Labs",
  description: "Research reports and industry analysis",
};

export default function ReportsPage() {
  return (
    <SiteShell>
      <LockedPage
        title="Reports"
        description="Research reports and industry analysis"
      />
    </SiteShell>
  );
}
