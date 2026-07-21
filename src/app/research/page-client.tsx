"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Cpu, Beaker, FlaskConical } from "lucide-react";
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

const researchAreas = [
  {
    icon: Cpu,
    title: "Applied AI",
    desc: "Building practical AI systems that work in production. Our research focuses on making intelligence useful: from workflow automation to natural language understanding, every model we train solves a specific problem. We prioritise reliability and interpretability over raw benchmarks.",
    status: "Active",
    projects: ["Agent orchestration protocols", "Local-first inference patterns", "Context-aware task routing"],
  },
  {
    icon: Beaker,
    title: "Workflow Automation",
    desc: "Designing systems that eliminate repetitive work without eliminating human judgement. Our automation research targets the gap between what AI can do and what people actually need done. Every automation we build preserves override control and maintains audit trails.",
    status: "Active",
    projects: ["Skills-based site creation (Webman)", "Multi-agent coordination", "Pipeline validation frameworks"],
  },
  {
    icon: FlaskConical,
    title: "Infrastructure Systems",
    desc: "Researching the foundational layers that make AI products viable at scale. From deployment pipelines to observability stacks, we study how to run intelligent systems reliably in real-world conditions. Our infrastructure work feeds directly into Studio and Agent.",
    status: "Exploring",
    projects: ["Edge deployment patterns", "Observability for AI systems", "Cost-aware scaling strategies"],
  },
];

export function ResearchPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="accent-orb accent-orb-rust w-[400px] h-[400px] -top-20 -right-20 opacity-[0.05]" />
          <div className="absolute inset-0 pattern-grid opacity-40" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.3em]">Research</span>
              <div className="flex-1 h-[1px] bg-[#E0DDD8] max-w-[80px]" />
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              Applied research,<br /><span className="text-[#C4562A]">not academic exercises</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Every research line at Tangison Labs starts with a problem we have encountered in production.
              We study, prototype, validate, and then ship. Nothing stays in the lab unless it works in the field.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>

      {/* Research Areas */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#1A1A1A] mb-12">
              Research areas
            </motion.h2>

            <motion.div variants={staggerContainer} className="space-y-6">
              {researchAreas.map((area) => (
                <motion.div key={area.title} variants={staggerItem} className="content-card p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-[#C4562A]/8 flex items-center justify-center">
                          <area.icon className="w-5 h-5 text-[#C4562A]" />
                        </div>
                        <h3 className="font-satoshi font-medium text-xl text-[#1A1A1A]">{area.title}</h3>
                        <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-1 ${
                          area.status === "Active" ? "text-[#2CB5B4] bg-[#2CB5B4]/10" : "text-[#D4896F] bg-[#D4896F]/10"
                        }`}>
                          {area.status}
                        </span>
                      </div>
                      <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed mb-6 max-w-[65ch]">{area.desc}</p>
                    </div>
                    <div className="md:w-[280px] shrink-0">
                      <h4 className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.2em] mb-4">Active projects</h4>
                      <ul className="space-y-2">
                        {area.projects.map((proj) => (
                          <li key={proj} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-[#C4562A] mt-2 shrink-0" />
                            <span className="font-cabinet text-sm text-[#6B6860]">{proj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#1A1A1A] mb-12">
              Go deeper
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link href="/research/projects" className="content-card p-8 group">
                <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.2em] block mb-3">Research Projects</span>
                <h3 className="font-satoshi font-medium text-xl text-[#1A1A1A] mb-2 group-hover:text-[#C4562A] transition-colors duration-300">R&D Projects</h3>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed mb-4">Dive into specific projects exploring applied AI, automation, and infrastructure.</p>
                <span className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.15em] text-[#C4562A] group-hover:gap-3 transition-all duration-300">
                  View projects <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              <Link href="/research/open-source" className="content-card p-8 group">
                <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.2em] block mb-3">Open Source</span>
                <h3 className="font-satoshi font-medium text-xl text-[#1A1A1A] mb-2 group-hover:text-[#C4562A] transition-colors duration-300">Public Repositories</h3>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed mb-4">Our public code. Star, fork, or contribute to the tools we build for the community.</p>
                <span className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.15em] text-[#C4562A] group-hover:gap-3 transition-all duration-300">
                  View repos <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
