"use client";

import React from "react";
import { SiteShell } from "@/components/tangison/site-shell";

export function CookiesPage() {
  return (
    <SiteShell>
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-t-bg-elevated/30" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <h1 className="font-satoshi font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] text-t-fg mb-6">Cookie Policy</h1>
          <p className="font-cabinet text-sm text-t-fg-subtle">Last updated: July 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto space-y-10">
          <div>
            <h2 className="font-satoshi font-medium text-lg text-t-fg mb-3">We do not use cookies</h2>
            <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
              Tangison Labs does not use cookies for tracking, analytics, or advertising. We do not set any cookies in your browser when you visit this website. This is a deliberate choice: we believe you should be able to read our research without being tracked.
            </p>
          </div>
          <div>
            <h2 className="font-satoshi font-medium text-lg text-t-fg mb-3">Third-party resources</h2>
            <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
              This website loads fonts from Fontshare and Google Fonts. These services may set their own cookies according to their own policies. We load these resources with the "anonymous" cross-origin attribute to minimize data sharing. We do not control and are not responsible for the cookie practices of these third-party services.
            </p>
          </div>
          <div>
            <h2 className="font-satoshi font-medium text-lg text-t-fg mb-3">Changes to this policy</h2>
            <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
              If we ever introduce cookies, we will update this policy and provide clear notice on the website. Our commitment is to never use cookies for advertising or cross-site tracking, regardless of future changes.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
