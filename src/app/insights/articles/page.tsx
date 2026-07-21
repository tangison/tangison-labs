import type { Metadata } from "next";
import { LockedPage } from "@/components/tangison/locked-page";
import { SiteShell } from "@/components/tangison/site-shell";

export const metadata: Metadata = {
  title: "Articles — Tangison Labs",
  description: "Technical articles on AI, automation, and systems engineering",
};

export default function ArticlesPage() {
  return (
    <SiteShell>
      <LockedPage
        title="Articles"
        description="Technical articles on AI, automation, and systems engineering"
      />
    </SiteShell>
  );
}
