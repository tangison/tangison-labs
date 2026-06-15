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

export function DeploymentGuidePage() {
  return (
    <SiteShell>
      <PageHeader
        label="GUIDE"
        title="Self-Hosted AI Deployment Guide"
        subtitle="A practical guide to deploying AI systems on your own infrastructure. Covers hardware requirements, software stack, and security considerations."
        backHref="/insights"
        backLabel="Insights"
      />

      {/* Guide Content */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="w-8 h-[2px] bg-rust-signal mb-8" aria-hidden="true" />
            <h2 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6">
              Taking Control of Your AI Infrastructure
            </h2>
            <div className="space-y-6 font-satoshi text-ink-muted text-base md:text-lg leading-relaxed">
              <p>
                Self-hosting AI systems gives you control over your data, your costs, and your uptime. But it also means taking responsibility for hardware provisioning, software configuration, security hardening, and ongoing maintenance. This guide walks you through each consideration with practical recommendations based on real deployments in African infrastructure environments.
              </p>
              <p>
                Deployment considerations include selecting appropriate GPU or CPU-based hardware for your workload, choosing between containerized and bare-metal deployments, configuring network security for AI inference endpoints, implementing monitoring and alerting for production models, and planning for capacity scaling as usage grows.
              </p>
              <p>
                Full guide coming soon. This resource will cover the complete deployment lifecycle - from initial requirements gathering through production operation - with specific guidance for organizations operating in environments with limited connectivity, variable power, and constrained budgets.
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
            Need deployment support now?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Our infrastructure team can help you plan and execute a self-hosted AI deployment tailored to your environment.
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
