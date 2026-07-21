import type { Metadata } from "next";
import { LockedPage } from "@/components/tangison/locked-page";
import { SiteShell } from "@/components/tangison/site-shell";

export const metadata: Metadata = {
  title: "Publications — Tangison Labs",
  description: "Research papers, reports, and technical publications",
};

export default function PublicationsPage() {
  return (
    <SiteShell>
      <LockedPage
        title="Publications"
        description="Research papers, reports, and technical publications"
      />
    </SiteShell>
  );
}
