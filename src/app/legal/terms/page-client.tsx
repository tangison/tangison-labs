"use client";

import React from "react";
import { SiteShell } from "@/components/tangison/site-shell";

export function TermsPage() {
  return (
    <SiteShell>
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-t-bg-elevated/30" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <h1 className="font-satoshi font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] text-t-fg mb-6">Terms of Service</h1>
          <p className="font-cabinet text-sm text-t-fg-subtle">Last updated: July 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto space-y-10">
          {[
            { title: "Acceptance of terms", content: "By accessing and using labs.tangison.com, you accept and agree to be bound by these terms. If you do not agree, do not use this website." },
            { title: "Use of the website", content: "This website provides information about Tangison Labs research and development activities. You may browse, read, and share links to our content. You may not scrape, copy in bulk, or redistribute our content without written permission." },
            { title: "Intellectual property", content: "All content on this website, including text, design, code, and imagery, is the property of Tangison Technologies unless otherwise stated. Our open-source repositories are licensed under the terms specified in each repository." },
            { title: "Limitation of liability", content: "The information on this website is provided as-is. We make no warranties about its completeness or accuracy. Tangison Technologies shall not be liable for any damages arising from the use of this website." },
            { title: "External links", content: "This website may contain links to external sites, including our GitHub repositories and other Tangison properties. We are not responsible for the content or practices of external sites." },
            { title: "Governing law", content: "These terms are governed by the laws of the Republic of Namibia. Any disputes shall be resolved in the courts of Namibia." },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-satoshi font-medium text-lg text-t-fg mb-3">{section.title}</h2>
              <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
