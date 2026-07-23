/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import Image from "next/image";

/* ─── Animation Variants ──────────────────────────────────────── */

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const staggerList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItemSlide = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

/* ─── Experiment Data ─────────────────────────────────────────── */

const experiments = [
  {
    title: "Context-Aware Routing",
    desc: "Can a lightweight classifier determine which AI agent should handle a given task?",
    detail: "Testing accuracy, latency, and fallback behaviour in a multi-model pipeline. Early results show 87% routing accuracy with sub-50ms overhead.",
    stage: "Prototype" as const,
  },
  {
    title: "Streaming Markdown Renderer",
    desc: "A renderer that displays AI-generated markdown as it streams, without layout shift.",
    detail: "The challenge is parsing partial markdown correctly while keeping the DOM stable. Currently handling 94% of edge cases in our test suite.",
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
    detail: "Testing cookie handling, secret rotation, and session management across Vercel edge runtime. Focus on cutting response time by 60%.",
    stage: "Prototype" as const,
  },
];

const stageColors: Record<string, string> = {
  Prototype: "text-[#C4562A] bg-[#C4562A]/10",
  Testing: "text-[#2CB5B4] bg-[#2CB5B4]/10",
  Iteration: "text-[#D4896F] bg-[#D4896F]/10",
  Shipped: "text-[#3D7A5F] bg-[#3D7A5F]/10",
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
      {/* ─── Hero with desert-road-line image ─── */}
      <section className="relative h-[45vh] min-h-[300px] overflow-hidden">
        <Image
          src="/images/gallery/desert-road-line.webp"
          alt="Desert road stretching into the horizon"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/50" />

        <div className="absolute inset-0 flex items-end pb-12 md:pb-16 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-[1200px] mx-auto w-full"
          >
            <motion.h1
              variants={slideInLeft}
              custom={0.3}
              className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#F0EDE8] mb-3"
            >
              Work in progress
            </motion.h1>
            <motion.p
              variants={slideInLeft}
              custom={0.5}
              className="font-cabinet text-base text-[#F0EDE8]/70 leading-relaxed max-w-[55ch]"
            >
              Experiments are prototypes, proof-of-concepts, and half-built ideas. Some will ship as products. Others teach us what not to do. All of them move us forward.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Split lab notebook layout ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-16">
            {/* Left: experiment list with stage indicators */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerList}
            >
              <div className="flex flex-wrap gap-4 mb-8">
                {["Prototype", "Testing", "Iteration", "Shipped"].map((stage) => (
                  <span key={stage} className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-1 ${stageColors[stage]}`}>
                    {stage}
                  </span>
                ))}
              </div>

              {experiments.map((exp) => (
                <motion.div
                  key={exp.title}
                  variants={staggerItemSlide}
                  className="group py-8 border-b border-[#E0DDD8] last:border-b-0"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 shrink-0 ${stageColors[exp.stage]}`}>
                      {exp.stage}
                    </span>
                    <h3 className="font-satoshi font-medium text-lg text-[#1A1A1A] group-hover:text-[#C4562A] transition-colors duration-300">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed ml-[calc(9px*5+0.15em*5+4px+2px+16px)] mb-1">
                    {exp.desc}
                  </p>
                  {/* Hover-reveal detail */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-[80px] transition-max-height duration-500 ease-out">
                    <p className="font-cabinet text-xs text-[#7A756C] leading-relaxed ml-[calc(9px*5+0.15em*5+4px+2px+16px)] pt-2">
                      {exp.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: methodology as editorial prose */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideInRight}
              custom={0.3}
              className="bg-[#F0EDE8] p-8 md:p-12"
            >
              <div className="border-2 border-[#C4562A] p-6 md:p-10 relative">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C4562A]" aria-hidden="true" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C4562A]" aria-hidden="true" />

                <h2 className="font-satoshi font-bold text-[clamp(1.3rem,2.5vw,1.8rem)] tracking-[-0.01em] text-[#1A1A1A] mb-8">
                  How we experiment
                </h2>

                {methodology.map((item) => (
                  <div key={item.step} className="mb-8 last:mb-0">
                    <span className="font-jetbrains text-[10px] text-[#C4562A] uppercase tracking-[0.2em] block mb-2">
                      Step {item.step}
                    </span>
                    <h3 className="font-satoshi font-medium text-base text-[#1A1A1A] mb-1">
                      {item.title}
                    </h3>
                    <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
