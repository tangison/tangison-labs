"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
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

const researchProjects = [
  {
    title: "Agent Orchestration Protocol",
    desc: "Designing a coordination layer for multi-agent systems. The protocol handles task decomposition, assignment, validation, and recomposition. Current focus is on defining the handoff interface between agents and the checkpoint mechanism that ensures quality at each stage.",
    status: "Active",
    tags: ["AI", "Agents", "Protocol Design"],
  },
  {
    title: "Local-First Inference Patterns",
    desc: "Exploring how to run capable AI models on-device without relying on cloud backends. Quantisation, model selection, caching, and graceful fallback when local resources are insufficient. The goal is 80% cloud independence for common workloads.",
    status: "Exploring",
    tags: ["Edge AI", "On-Device", "Quantisation"],
  },
  {
    title: "Webman: Structured Site Creation",
    desc: "The Webman system defines a repeatable workflow for building production websites. Skills for planning, content, brand definition, creation, auditing, and deployment. Every site built with Webman follows the same auditable path from idea to live.",
    status: "Active",
    tags: ["Webman", "Workflow", "Tooling"],
  },
  {
    title: "Cost-Aware AI Scaling",
    desc: "How do you scale AI inference without scaling costs proportionally? Research into batching strategies, model routing, and adaptive quality settings that maintain user experience while reducing compute spend.",
    status: "Exploring",
    tags: ["Infrastructure", "Cost", "Scaling"],
  },
];

export function ResearchProjectsPage() {
  return (
    <SiteShell>
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="accent-orb accent-orb-rust w-[300px] h-[300px] -top-20 right-10 opacity-[0.04]" />
          <div className="absolute inset-0 pattern-grid opacity-30" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">Research / Projects</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              R&D <span className="text-[#C4562A]">projects</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Active and exploratory research projects. Each one targets a specific problem at the intersection of AI, automation, and infrastructure.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-5">
            {researchProjects.map((project) => (
              <motion.div key={project.title} variants={staggerItem} className="content-card p-8 md:p-10 group">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="font-satoshi font-medium text-xl text-[#1A1A1A] group-hover:text-[#C4562A] transition-colors duration-300">{project.title}</div>
                  <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${
                    project.status === "Active" ? "text-[#2CB5B4] bg-[#2CB5B4]/10" : "text-[#D4896F] bg-[#D4896F]/10"
                  }`}>{project.status}</span>
                </div>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed max-w-[65ch] mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
