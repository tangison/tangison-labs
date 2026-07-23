"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

/* ─── Reports Page ────────────────────────────────────────────── */

export function ReportsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-t-bg-elevated/30" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-4">
            <Link
              href="/publications"
              className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-subtle hover:text-t-accent transition-colors duration-300 inline-flex items-center gap-2"
            >
              Publications
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <h1 className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-t-fg mb-6">
            Research reports
          </h1>
          <p className="font-cabinet text-base md:text-lg text-t-fg-muted leading-relaxed max-w-[65ch]">
            Research summaries published when a project produces verifiable results. No fixed schedule. No filler. Reports appear when there is data worth reading.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* Coming soon state — STATIC */}
      <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-t-bg-elevated">
        <div className="max-w-[800px] mx-auto">
          {/* Corner-mark styled box */}
          <div className="border-2 border-t-accent p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-t-accent" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-t-accent" aria-hidden="true" />

            <h2 className="font-satoshi font-bold text-[clamp(1.3rem,2.5vw,1.8rem)] tracking-[-0.01em] text-t-fg mb-4">
              Reports coming soon
            </h2>

            <p className="font-cabinet text-base text-t-fg-muted leading-relaxed mb-8">
              Our first research report will be published when the Agent Orchestration Protocol completes its validation phase. We publish reports when a line produces findings with data attached, not on a calendar. Leave your email to hear when the first one goes live.
            </p>

            {submitted ? (
              <p className="font-cabinet text-sm text-t-success">
                Thank you. We will notify you when our first report is published.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <label htmlFor="report-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="report-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-t-bg border border-t-border px-4 py-3 font-cabinet text-sm text-t-fg placeholder:text-t-fg-subtle focus:border-t-accent focus:outline-none transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="bg-t-accent text-t-bg px-6 py-3 font-cabinet text-sm tracking-[0.02em] hover:bg-t-accent-hover transition-colors duration-300"
                >
                  Notify me
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
