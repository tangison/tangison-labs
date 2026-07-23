"use client";

import React from "react";
import { SiteShell } from "@/components/tangison/site-shell";

export function PrivacyPage() {
  return (
    <SiteShell>
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-t-bg-elevated/30" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <h1 className="font-satoshi font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] text-t-fg mb-6">
            Privacy Policy
          </h1>
          <p className="font-cabinet text-sm text-t-fg-subtle">
            Last updated: July 2026
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto space-y-10">
          {[
            {
              title: "Information we collect",
              content: "We collect minimal information necessary to operate this website. This includes standard server logs (IP address, browser type, pages visited, and timestamps) collected automatically when you visit labs.tangison.com. If you contact us via email, we store your email address and message content for the purpose of responding to your inquiry. We do not use cookies for tracking, advertising, or analytics. We do not collect personal information beyond what is described here."
            },
            {
              title: "How we use information",
              content: "Server log data is used solely for security monitoring and performance optimization. Email communications are used only to respond to your inquiry. We do not sell, share, or transfer personal information to third parties under any circumstances."
            },
            {
              title: "Data storage",
              content: "This website is hosted on Vercel infrastructure. Server logs are retained for a maximum of 30 days. Email communications are retained for as long as necessary to fulfill the purpose of the communication, and no longer than 12 months."
            },
            {
              title: "Your rights",
              content: "You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at contact@tangison.com. We will respond to all legitimate requests within 30 days."
            },
            {
              title: "Security",
              content: "We implement appropriate technical and organizational measures to protect your information. This site enforces HTTPS, sets strict Content Security Policy headers, and does not use third-party tracking scripts."
            },
            {
              title: "Changes to this policy",
              content: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the site after changes constitutes acceptance of the updated policy."
            },
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
