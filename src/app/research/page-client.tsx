"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import { TypeWriter } from "@/components/tangison/type-writer";
import { heroSlideIn, heroFadeIn } from "@/lib/animation-variants";

/* ─── Research Areas ──────────────────────────────────────────── */

const researchAreas = [
  {
    num: "01",
    title: "Applied AI",
    desc: "Building practical AI systems that work in production. From workflow automation to natural language understanding, every model we train solves a specific problem.",
    href: "/research/projects",
  },
  {
    num: "02",
    title: "Workflow Automation",
    desc: "Designing systems that eliminate repetitive work without eliminating human judgement. Every automation preserves override control and maintains audit trails.",
    href: "/research/projects",
  },
  {
    num: "03",
    title: "Infrastructure Systems",
    desc: "Researching the foundational layers that make AI products viable at scale. Deployment pipelines, observability stacks, and cost-aware scaling.",
    href: "/research/projects",
  },
];

/* ─── Sidebar navigation links ─── */

const sidebarLinks = [
  { label: "R&D Projects", href: "/research/projects" },
  { label: "Open Source", href: "/research/open-source" },
];

/* ─── Research Page ───────────────────────────────────────────── */

export function ResearchPage() {
  return (
    <SiteShell>
      {/* ─── Hero with typing animation ─── */}
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-t-bg-elevated/30" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.h1
              variants={heroSlideIn}
              custom={0}
              className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-t-fg mb-4"
            >
              <TypeWriter text="Current research" speed={45} delay={0.5} />
            </motion.h1>

            <motion.p
              variants={heroSlideIn}
              custom={0.3}
              className="font-cabinet text-base md:text-lg text-t-fg-muted leading-relaxed max-w-[65ch]"
            >
              Every research line at Tangison Labs starts with a problem we have encountered in production.
              We study, prototype, validate, and then ship. Nothing stays in the lab unless it works in the field.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Full-width desert image ─── */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <Image
            src="/images/gallery/desert-path-quiver-trees.webp"
            alt="Desert path with quiver trees in Namibia"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* ─── Sidebar layout: left nav + right content ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-16">
            {/* Left sidebar: research area navigation */}
            <aside className="hidden md:block">
              <nav className="space-y-4" aria-label="Research sections">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-muted hover:text-t-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Right content: research areas */}
            <div>
              {researchAreas.map((area) => (
                <div
                  key={area.num}
                  className="group py-8 border-b border-t-border last:border-b-0"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-jetbrains text-[10px] text-t-accent uppercase tracking-[0.2em]">
                      {area.num}
                    </span>
                    <Link
                      href={area.href}
                      className="font-satoshi font-medium text-xl text-t-fg hover:text-t-accent transition-colors duration-300 relative inline-block"
                    >
                      {area.title}
                      <span className="absolute -bottom-1 left-0 h-[2px] bg-t-accent w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
                    </Link>
                  </div>
                  <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed ml-[calc(10px+0.2em+16px)]">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Methodology note: editorial prose ─── */}
      <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-t-bg-elevated">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[65ch]">
            <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.01em] text-t-fg mb-6">
              Methodology
            </h2>
            <p className="font-cabinet text-base text-t-fg-muted leading-relaxed">
              We start with a specific, answerable question. Build the smallest thing that could answer it. Run it against real data, measure, and compare. Then decide: ship, iterate, or kill. No zombie experiments. No research that exists only on paper.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Mobile sub-page links ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 md:hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {sidebarLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-muted hover:text-t-accent transition-colors duration-300 inline-flex items-center gap-2 group"
              >
                {link.label}
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
