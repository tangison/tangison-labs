import type { Metadata } from "next";
import { LockedPage } from "@/components/tangison/locked-page";
import { SiteShell } from "@/components/tangison/site-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — Tangison Labs",
  description: "How Tangison handles your data",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <LockedPage
        title="Privacy Policy"
        description="How Tangison handles your data"
      />
    </SiteShell>
  );
}
