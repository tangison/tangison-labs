/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Globe } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

/* ─── Animation Variants ──────────────────────────────────────── */

const slideInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const staggerList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItemExpand = {
  hidden: { opacity: 0, scaleY: 0.8 },
  visible: { opacity: 1, scaleY: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

/* ─── Project Data ────────────────────────────────────────────── */

const projects = [
  {
    name: "Webman",
    desc: "Skills-based website creation workflow. Plan, content, brand, create, audit, deploy.",
    detail: "A structured system for building consistent, production-ready websites. Used internally to build all Tangison properties.",
    status: "Active" as const,
    url: "https://github.com/tangison/webman",
    hasSite: false,
  },
  {
    name: "Tangison Labs",
    desc: "This website. The public face of our R&D division.",
    detail: "Built with Next.js 16, Tailwind CSS 4, and Framer Motion. Serves as a live example of our design system and brand language.",
    status: "Live" as const,
    url: "https://github.com/tangison/tangison-labs",
    hasSite: true,
    siteUrl: "https://labs.tangison.com",
  },
  {
    name: "Tangison Gateway",
    desc: "The front door to the Tangison ecosystem.",
    detail: "Server-side auth with preview access, four-layer noindex enforcement, and cross-property navigation.",
    status: "Live" as const,
    url: "https://github.com/tangison/tangison",
    hasSite: true,
    siteUrl: "https://tangison.com",
  },
  {
    name: "Agent Orchestration Protocol",
    desc: "Multi-agent coordination research.",
    detail: "How do you decompose a complex task, assign it to specialised agents, validate intermediate results, and compose the final output?",
    status: "Research" as const,
    url: "https://github.com/tangison",
    hasSite: false,
  },
  {
    name: "Local-First Inference",
    desc: "Patterns for running AI models on-device.",
    detail: "Reduces cloud dependency, improves latency, and keeps data local. Exploring quantisation, caching, and fallback strategies.",
    status: "Exploring" as const,
    url: "https://github.com/tangison",
    hasSite: false,
  },
  {
    name: "Design System Tokens",
    desc: "Shared token layer for visual consistency.",
    detail: "Colours, typography, spacing, and motion all defined once and consumed across projects. Zero border-radius is law.",
    status: "Active" as const,
    url: "https://github.com/tangison",
    hasSite: false,
  },
];

const statusColors: Record<string, string> = {
  Live: "text-[#2CB5B4] bg-[#2CB5B4]/10",
  Active: "text-[#C4562A] bg-[#C4562A]/10",
  Research: "text-[#6B6860] bg-[#6B6860]/10",
  Exploring: "text-[#D4896F] bg-[#D4896F]/10",
};

/* ─── Projects Page ───────────────────────────────────────────── */

export function ProjectsPage() {
  return (
    <SiteShell>
      {/* ─── Hero with concrete-glass-architecture image ─── */}
      <section className="relative h-[45vh] min-h-[300px] overflow-hidden">
        <Image
          src="/images/gallery/concrete-glass-architecture.webp"
          alt="Concrete and glass architecture"
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
              variants={slideInDown}
              custom={0.3}
              className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#F0EDE8] mb-3"
            >
              Things we have shipped
            </motion.h1>
            <motion.p
              variants={slideInDown}
              custom={0.5}
              className="font-cabinet text-base text-[#F0EDE8]/70 leading-relaxed max-w-[55ch]"
            >
              Every project started as a research question or a production need. Some are live products, others are open-source tools or active research threads.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Projects: vertical list with status indicators ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-0"
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={staggerItemExpand}
                className="group border-b border-[#E0DDD8] py-8"
              >
                {/* Visible row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 shrink-0 ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                    <h3 className="font-satoshi font-medium text-lg text-[#1A1A1A] group-hover:text-[#C4562A] transition-colors duration-300 truncate">
                      {project.name}
                    </h3>
                    <span className="font-cabinet text-sm text-[#6B6860] truncate hidden md:inline">
                      {project.desc}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.hasSite && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 border border-[#E0DDD8] flex items-center justify-center hover:border-[#C4562A]/40 transition-colors duration-300"
                        aria-label={`Visit ${project.name}`}
                      >
                        <Globe className="w-3.5 h-3.5 text-[#6B6860]" />
                      </a>
                    )}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-[#E0DDD8] flex items-center justify-center hover:border-[#C4562A]/40 transition-colors duration-300"
                      aria-label={`${project.name} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5 text-[#6B6860]" />
                    </a>
                  </div>
                </div>

                {/* Hover-reveal detail */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-[120px] transition-max-height duration-500 ease-out">
                  <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed max-w-[65ch] pt-4 ml-[calc(9px*5+0.15em*5+16px+16px)]">
                    {project.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeIn}
              custom={0}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A1A1A] mb-4"
            >
              Have a problem worth researching?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              custom={0.1}
              className="font-cabinet text-base text-[#6B6860] leading-relaxed max-w-[55ch] mb-8"
            >
              We take on research projects that sit at the intersection of real need and technical challenge. If your problem fits, reach out.
            </motion.p>
            <motion.div variants={fadeIn} custom={0.2}>
              <a
                href="mailto:contact@tangison.com"
                className="inline-flex items-center gap-3 bg-[#C4562A] text-[#FAFAF8] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#A84420] transition-colors duration-300 group"
              >
                Get in touch
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
