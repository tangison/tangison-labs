"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function AiReadinessCalculatorPage() {
  return (
    <SiteShell>
      <PageHeader
        label="TOOLS"
        title="AI Readiness Calculator"
        subtitle="Assess your organization's AI readiness with our structured evaluation tool. Get a personalized score and actionable recommendations for your next steps."
        backHref="/"
        backLabel="Home"
      />

      {/* Placeholder Content */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="w-8 h-[2px] bg-rust-signal mb-8" aria-hidden="true" />
            <h2 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6">
              Evaluate Your AI Readiness
            </h2>
            <div className="space-y-6 font-satoshi text-ink-muted text-base md:text-lg leading-relaxed">
              <p>
                Understanding where your organization stands on the AI maturity spectrum is the first step toward meaningful adoption. Our AI Readiness Calculator evaluates your organization across six critical dimensions: data infrastructure, technical capabilities, organizational culture, process readiness, governance frameworks, and strategic alignment.
              </p>
              <p>
                The calculator evaluates your organization across six dimensions of AI readiness and provides a personalized roadmap. It is currently in development. In the meantime, our team offers manual AI readiness assessments that cover the same framework with direct consultation.
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
            Want to assess your AI readiness now?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            While the calculator is in development, our team can provide a manual AI readiness assessment for your organization.
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
