"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function NamibiaAiReportPage() {
  return (
    <SiteShell>
      <PageHeader
        label="REPORT"
        title="Namibia AI Landscape Report"
        subtitle="A comprehensive analysis of AI adoption, infrastructure, and opportunities across Namibia's key industries."
        backHref="/insights"
        backLabel="Insights"
      />

      {/* Report Content */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="w-8 h-[2px] bg-rust-signal mb-8" aria-hidden="true" />
            <h2 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6">
              AI Across Namibia&apos;s Industries
            </h2>
            <div className="space-y-6 font-satoshi text-ink-muted text-base md:text-lg leading-relaxed">
              <p>
                This report examines AI adoption patterns across Namibia&apos;s mining, agriculture, financial services, and public sector industries. The full report is in development.
              </p>
              <p>
                Namibia presents a unique landscape for AI adoption. With a growing digital infrastructure, a resource-rich economy, and a young, tech-curious population, the conditions for meaningful AI deployment exist - but they are unevenly distributed and often poorly understood by both technology providers and the organizations that could benefit most.
              </p>
              <p>
                Our research covers infrastructure readiness, data availability, regulatory considerations, skills gaps, and sector-specific opportunities for applied AI. The full report will include quantitative benchmarks, qualitative case studies, and a set of recommendations for policymakers and business leaders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="w-12 h-[2px] bg-rust-signal mx-auto mb-8" aria-hidden="true" />
          <h2 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-skeleton-bone mb-6">
            Interested in the full report?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Contact our research team to be notified when the full Namibia AI Landscape Report is published.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-rust-signal text-warm-white px-8 py-4 font-jetbrains text-[11px] uppercase tracking-[0.15em] hover:bg-rust-light transition-colors duration-300 group"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
