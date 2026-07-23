"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import { heroSlideIn } from "@/lib/animation-variants";
import { motion } from "framer-motion";

/* ─── Publication Data ────────────────────────────────────────── */

const publications = [
  {
    year: "2026",
    title: "Why We Built Webman: Structured Site Creation at Scale",
    type: "Technical Note",
    desc: "A walkthrough of the Webman system design. How we define phases, what each phase produces, and why we audit before we deploy.",
    href: "/insights/articles",
  },
  {
    year: "2026",
    title: "Agent Orchestration: Decomposing Complex Tasks Across Specialised Models",
    type: "Research Note",
    desc: "What we found coordinating multiple AI agents on real tasks. Handoff timing, validation frequency, and where giving agents more freedom actually slows things down.",
    href: "/insights/articles",
  },
  {
    year: "2026",
    title: "Local-First AI: Running Inference at the Edge Without Losing Capability",
    type: "Field Report",
    desc: "Patterns for running models on-device. Quantisation results, latency numbers from our test hardware, and caching strategies that reduce server calls.",
    href: "/insights/reports",
  },
  {
    year: "2026",
    title: "Zero Border-Radius: A Design Constraint That Shipped a Visual Identity",
    type: "Technical Note",
    desc: "How one CSS rule forced a consistent visual identity across four properties. The reasoning, the resistance, and the result.",
    href: "/insights/articles",
  },
  {
    year: "2026",
    title: "Four-Layer Noindex: Keeping Staging Sites Out of Search Engines",
    type: "Research Note",
    desc: "The multiple enforcement layers we use to prevent pre-production content from appearing in search results.",
    href: "/insights/articles",
  },
];

const typeColors: Record<string, string> = {
  "Technical Note": "text-t-accent bg-t-accent/10",
  "Research Note": "text-t-teal bg-t-teal/10",
  "Field Report": "text-t-rust-light bg-t-rust-light/10",
};

/* ─── Publications Page ───────────────────────────────────────── */

export function PublicationsPage() {
  return (
    <SiteShell>
      {/* ─── Hero ─── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/gallery/desk-books-lamp-sunlight.webp"
          alt="Desk with books, lamp, and sunlight"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-t-fg/50" />

        <div className="absolute inset-0 flex items-end pb-12 md:pb-16 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-[1200px] mx-auto w-full"
          >
            <motion.h1
              variants={heroSlideIn}
              custom={0.3}
              className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-t-fg-inverse mb-3"
            >
              What we have learned
            </motion.h1>
            <motion.p
              variants={heroSlideIn}
              custom={0.5}
              className="font-cabinet text-base text-t-fg-inverse/70 leading-relaxed max-w-[55ch]"
            >
              Technical notes, research findings, and field reports. We write about what works, what fails, and what the numbers say.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Vertical timeline with year markers ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-[1px] bg-t-border" aria-hidden="true" />

            {/* Year marker — all publications are 2026 */}
            <div className="relative pl-8 md:pl-12 py-2">
              <div className="absolute left-0 md:left-4 top-2 w-3 h-3 bg-t-accent -translate-x-1/2" aria-hidden="true" />
              <span className="font-satoshi font-bold text-lg text-t-fg">
                2026
              </span>
            </div>

            {publications.map((pub) => (
              <article
                key={pub.title}
                className="group relative pl-8 md:pl-12 py-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-8 w-2 h-2 bg-t-border-strong -translate-x-1/2" aria-hidden="true" />

                <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                  <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${typeColors[pub.type]}`}>
                    {pub.type}
                  </span>
                </div>

                <Link
                  href={pub.href}
                  className="font-satoshi font-medium text-lg text-t-fg group-hover:text-t-accent transition-colors duration-300 inline-block mb-2 relative"
                >
                  {pub.title}
                  <span className="absolute -bottom-1 left-0 h-[1px] bg-t-accent w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
                </Link>

                <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed max-w-[65ch]">
                  {pub.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sub-section links ─── */}
      <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-t-bg-elevated">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <Link
              href="/insights/articles"
              className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-muted hover:text-t-accent transition-colors duration-300 inline-flex items-center gap-2 group"
            >
              Technical Articles
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/insights/reports"
              className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-muted hover:text-t-accent transition-colors duration-300 inline-flex items-center gap-2 group"
            >
              Research Reports
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
