import type { Metadata } from "next";
import { LockedPage } from "@/components/tangison/locked-page";
import { SiteShell } from "@/components/tangison/site-shell";

export const metadata: Metadata = {
  title: "Experiments — Tangison Labs",
  description: "Live experiments, prototypes, and work in progress",
};

export default function ExperimentsPage() {
  return (
    <SiteShell>
      <LockedPage
        title="Experiments"
        description="Live experiments, prototypes, and work in progress"
      />
    </SiteShell>
  );
}
