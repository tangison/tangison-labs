"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Globe } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const projects = [
  {
    name: "Webman",
    desc: "Skills-based website creation workflow. Plan, content, brand, create, audit, deploy. A structured system for building consistent, production-ready websites. Used internally to build all Tangison properties.",
    tags: ["TypeScript", "Next.js", "CLI"],
    status: "Active",
    url: "https://github.com/tangison/webman",
    hasSite: false,
  },
  {
    name: "Tangison Labs",
    desc: "This website. The public face of our R&D division. Built with Next.js 16, Tailwind CSS 4, and Framer Motion. Serves as a live example of our design system and brand language.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    url: "https://github.com/tangison/tangison-labs",
    hasSite: true,
    siteUrl: "https://labs.tangison.com",
  },
  {
    name: "Tangison Gateway",
    desc: "The coming-soon gateway at tangison.com. Server-side auth with preview access, four-layer noindex enforcement, and cross-property navigation. The front door to the Tangison ecosystem.",
    tags: ["Next.js", "Server Auth", "Vercel"],
    status: "Live",
    url: "https://github.com/tangison/tangison",
    hasSite: true,
    siteUrl: "https://tangison.com",
  },
  {
    name: "Agent Orchestration Protocol",
    desc: "Research into multi-agent coordination. How do you decompose a complex task, assign it to specialised agents, validate intermediate results, and compose the final output? Early-stage exploration.",
    tags: ["AI", "Research", "Protocols"],
    status: "Research",
    url: "https://github.com/tangison",
    hasSite: false,
  },
  {
    name: "Local-First Inference",
    desc: "Patterns for running AI models on-device. Reduces cloud dependency, improves latency, and keeps data local. Exploring quantisation, caching, and fallback strategies for production use.",
    tags: ["AI", "Edge", "Performance"],
    status: "Exploring",
    url: "https://github.com/tangison",
    hasSite: false,
  },
  {
    name: "Design System Tokens",
    desc: "The shared token layer that keeps all Tangison properties visually consistent. Colours, typography, spacing, and motion all defined once and consumed across projects. Zero border-radius is law.",
    tags: ["Design", "Tokens", "CSS"],
    status: "Active",
    url: "https://github.com/tangison",
    hasSite: false,
  },
];

export function ProjectsPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="accent-orb accent-orb-teal w-[400px] h-[400px] -top-20 -left-20 opacity-[0.04]" />
          <div className="absolute inset-0 pattern-dots opacity-20" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">Projects</span>
              <div className="flex-1 h-[1px] bg-[#E0DDD8] max-w-[80px]" />
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              Things we have <span className="text-[#C4562A]">shipped</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Every project here started as a research question or a production need. Some are live products. Others are
              open-source tools or active research threads. All of them are real.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-5">
            {projects.map((project) => (
              <motion.div key={project.name} variants={staggerItem} className="content-card p-8 md:p-10 group">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <div className="font-satoshi font-medium text-xl text-[#1A1A1A] group-hover:text-[#C4562A] transition-colors duration-300">
                        {project.name}
                      </div>
                      <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${
                        project.status === "Live" ? "text-[#2CB5B4] bg-[#2CB5B4]/10" :
                        project.status === "Active" ? "text-[#C4562A] bg-[#C4562A]/10" :
                        project.status === "Research" ? "text-[#6B6860] bg-[#6B6860]/10" :
                        "text-[#D4896F] bg-[#D4896F]/10"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed max-w-[65ch] mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-chip">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {project.hasSite && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-[#E0DDD8] flex items-center justify-center hover:border-[#C4562A]/40 hover:bg-[#C4562A]/5 transition-colors duration-300"
                        aria-label={`Visit ${project.name}`}
                      >
                        <Globe className="w-4 h-4 text-[#6B6860]" />
                      </a>
                    )}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-[#E0DDD8] flex items-center justify-center hover:border-[#C4562A]/40 hover:bg-[#C4562A]/5 transition-colors duration-300"
                      aria-label={`${project.name} on GitHub`}
                    >
                      <Github className="w-4 h-4 text-[#6B6860]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A1A1A] mb-4">
              Have a problem worth researching?
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.1} className="font-cabinet text-base text-[#6B6860] leading-relaxed max-w-[55ch] mx-auto mb-8">
              We take on research projects that sit at the intersection of real need and technical challenge. If your problem fits, reach out.
            </motion.p>
            <motion.div variants={fadeUp} custom={0.2}>
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
