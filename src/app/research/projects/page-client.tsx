/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import Image from "next/image";

/* ─── Animation Variants ──────────────────────────────────────── */

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const staggerList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

/* ─── Project Data ────────────────────────────────────────────── */

const researchProjects = [
  {
    num: "01",
    title: "Webman System",
    desc: "Skills-based website creation workflow. Plan, content, brand, create, audit, deploy. A structured system for building consistent, production-ready websites. Used internally to build all Tangison properties.",
    status: "Active" as const,
    github: "https://github.com/tangison/webman",
  },
  {
    num: "02",
    title: "Agent Orchestration Framework",
    desc: "Multi-agent coordination protocols for complex task decomposition and execution. Defines handoff interfaces, checkpoint mechanisms, and validation strategies that ensure quality at each stage.",
    status: "Active" as const,
    github: "https://github.com/tangison",
  },
  {
    num: "03",
    title: "Local-First AI Patterns",
    desc: "Patterns for running capable AI models on-device without relying on cloud backends. Quantisation, model selection, caching, and graceful fallback when local resources are insufficient. The goal is 80% cloud independence.",
    status: "Exploring" as const,
    github: "https://github.com/tangison",
  },
];

const statusColors: Record<string, string> = {
  Active: "text-[#2CB5B4] bg-[#2CB5B4]/10",
  Exploring: "text-[#D4896F] bg-[#D4896F]/10",
};

/* ─── Research Projects Page ──────────────────────────────────── */

export function ResearchProjectsPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={slideInLeft} custom={0} className="mb-4">
              <Link
                href="/research"
                className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.2em] hover:text-[#C4562A] transition-colors duration-300 inline-flex items-center gap-2"
              >
                Research
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            <motion.h1 variants={slideInLeft} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              R&D projects
            </motion.h1>
            <motion.p variants={slideInLeft} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Active and exploratory research projects. Each targets a specific problem at the intersection of AI, automation, and infrastructure.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* Projects as numbered list */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {researchProjects.map((project) => (
              <motion.div
                key={project.num}
                variants={staggerItemSlide}
                className="group py-10 border-b border-[#E0DDD8] last:border-b-0"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-jetbrains text-[10px] text-[#C4562A] uppercase tracking-[0.2em]">
                    {project.num}
                  </span>
                  <h2 className="font-satoshi font-medium text-xl text-[#1A1A1A] group-hover:text-[#C4562A] transition-colors duration-300 relative inline-block">
                    {project.title}
                    <span className="absolute -bottom-1 left-0 h-[2px] bg-[#C4562A] w-0 group-hover:w-full transition-width duration-500 ease-out" />
                  </h2>
                  <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed max-w-[65ch] ml-[calc(10px+0.2em+16px)] mb-4">
                  {project.desc}
                </p>

                <div className="ml-[calc(10px+0.2em+16px)]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-jetbrains text-[9px] uppercase tracking-[0.15em] text-[#6B6860] hover:text-[#C4562A] transition-colors duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
