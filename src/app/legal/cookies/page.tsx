import type { Metadata } from "next";
import { LockedPage } from "@/components/tangison/locked-page";
import { SiteShell } from "@/components/tangison/site-shell";

export const metadata: Metadata = {
  title: "Cookie Policy — Tangison Labs",
  description: "How Tangison uses cookies",
};

export default function CookiesPage() {
  return (
    <SiteShell>
      <LockedPage
        title="Cookie Policy"
        description="How Tangison uses cookies"
      />
    </SiteShell>
  );
}
