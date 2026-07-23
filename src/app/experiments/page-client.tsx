"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { heroSlideIn } from "@/lib/animation-variants";
import Image from "next/image";

/* ─── Experiment Data ─────────────────────────────────────────── */

const experiments = [
  {
    title: "Context-Aware Routing",
    desc: "Can a lightweight classifier determine which AI agent should handle a given task?",
    detail: "Testing routing accuracy with measured latency targets. Results will be published with methodology documentation.",
    stage: "Prototype" as const,
  },
  {
    title: "Streaming Markdown Renderer",
    desc: "A renderer that displays AI-generated markdown as it streams, without layout shift.",
    detail: "The challenge is parsing partial markdown correctly while keeping the DOM stable. Covering edge cases in active test suites.",
    stage: "Testing" as const,
  },
  {
    title: "Design Token Compiler",
    desc: "A build tool that takes a single JSON token definition and outputs CSS, Tailwind, and Figma variables.",
    detail: "The goal is one source of truth for all brand tokens across platforms.",
    stage: "Iteration" as const,
  },
  {
    title: "Edge Function Auth Gateway",
    desc: "Moving preview authentication from API routes to edge functions for lower latency.",
    detail: "Testing cookie handling, secret rotation, and session management across Vercel edge runtime. Targeting significant response time reduction.",
    stage: "Prototype" as const,
  },
];

const stageColors: Record<string, string> = {
  Prototype: "text-t-accent bg-t-accent/10",
  Testing: "text-t-teal bg-t-teal/10",
  Iteration: "text-t-rust-light bg-t-rust-light/10",
  Shipped: "text-t-success bg-t-success/10",
};

/* ─── Methodology Steps ───────────────────────────────────────── */

const methodology = [
  { step: "01", title: "Question", desc: "Start with a specific, answerable question. No vague exploration." },
  { step: "02", title: "Prototype", desc: "Build the smallest thing that could answer the question. Days, not weeks." },
  { step: "03", title: "Validate", desc: "Run it against real data. Measure. Compare to the baseline." },
  { step: "04", title: "Decide", desc: "Ship it, iterate, or kill it. No zombie experiments." },
];

/* ─── Experiments Page ────────────────────────────────────────── */

export function ExperimentsPage() {
  return (
    <SiteShell>
      {/* ─── Hero ─── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/gallery/desert-road-line.webp"
          alt="Desert road stretching into the horizon"
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
              Work in progress
            </motion.h1>
            <motion.p
              variants={heroSlideIn}
              custom={0.5}
              className="font-cabinet text-base text-t-fg-inverse/70 leading-relaxed max-w-[55ch]"
            >
              Experiments are prototypes, proof-of-concepts, and half-built ideas. Some will ship as products. Others teach us what not to do. All of them move us forward.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Split layout: left experiment names, right methodology prose ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-16">
            {/* Left: experiment list with stage indicators */}
            <div>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Prototype", "Testing", "Iteration", "Shipped"].map((stage) => (
                  <span key={stage} className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-1 ${stageColors[stage]}`}>
                    {stage}
                  </span>
                ))}
              </div>

              {experiments.map((exp) => (
                <div
                  key={exp.title}
                  className="group py-8 border-b border-t-border last:border-b-0"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 shrink-0 ${stageColors[exp.stage]}`}>
                      {exp.stage}
                    </span>
                    <h3 className="font-satoshi font-medium text-lg text-t-fg group-hover:text-t-accent transition-colors duration-300">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed ml-[calc(9px*5+0.15em*5+4px+2px+16px)] mb-1">
                    {exp.desc}
                  </p>
                  {/* Hover-reveal detail */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-[80px] transition-[max-height] duration-500 ease-out">
                    <p className="font-cabinet text-xs text-t-fg-subtle leading-relaxed ml-[calc(9px*5+0.15em*5+4px+2px+16px)] pt-2">
                      {exp.detail}
                    </p>
                  </div>
                </div>
              ))}

              {/* Honest metrics note */}
              <p className="font-cabinet text-xs text-t-fg-subtle mt-6">
                Specific metrics will be published with methodology documentation.
              </p>
            </div>

            {/* Right: methodology as editorial prose — no card-in-card */}
            <div className="bg-t-bg-elevated p-8 md:p-12">
              <h2 className="font-satoshi font-bold text-[clamp(1.3rem,2.5vw,1.8rem)] tracking-[-0.01em] text-t-fg mb-8">
                How we experiment
              </h2>

              {methodology.map((item) => (
                <div key={item.step} className="mb-8 last:mb-0">
                  <span className="font-jetbrains text-[10px] text-t-accent uppercase tracking-[0.2em] block mb-2">
                    Step {item.step}
                  </span>
                  <h3 className="font-satoshi font-medium text-base text-t-fg mb-1">
                    {item.title}
                  </h3>
                  <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
