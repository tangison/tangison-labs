import type { Metadata } from "next";
import { LockedPage } from "@/components/tangison/locked-page";
import { SiteShell } from "@/components/tangison/site-shell";

export const metadata: Metadata = {
  title: "Terms of Service — Tangison Labs",
  description: "Terms governing the use of this website",
};

export default function TermsPage() {
  return (
    <SiteShell>
      <LockedPage
        title="Terms of Service"
        description="Terms governing the use of this website"
      />
    </SiteShell>
  );
}
