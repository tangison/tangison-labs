"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Beaker, BookOpen, FlaskConical, Cpu } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

/* ─── Animation Variants ──────────────────────────────────────── */

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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

/* ─── Home Page ───────────────────────────────────────────────── */

export function HomePage() {
  return (
    <SiteShell>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background visual elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient accent orb - top right */}
          <div className="accent-orb accent-orb-rust w-[500px] h-[500px] -top-40 -right-40 opacity-[0.07]" />
          {/* Teal orb - bottom left */}
          <div className="accent-orb accent-orb-teal w-[400px] h-[400px] -bottom-32 -left-32 opacity-[0.05]" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 pattern-grid opacity-60" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Label */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 bg-[#C4562A]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">
                Tangison Labs
              </span>
              <div className="flex-1 h-[1px] bg-[#E0DDD8] max-w-[80px]" />
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(2.2rem,5.5vw,4.5rem)] tracking-[-0.02em] leading-[1.05] text-[#1A1A1A] mb-6"
            >
              We build what<br />
              <span className="text-[#C4562A]">we research</span>
            </motion.h1>

            {/* Support text */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch] mb-10"
            >
              Tangison Labs is the research and development division of Tangison.
              Open-source projects, applied AI research, and experimental tools
              from Windhoek, Namibia.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={0.3} className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-[#C4562A] text-[#FAFAF8] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#A84420] transition-colors duration-300 group"
              >
                View projects
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center gap-3 border border-[#E0DDD8] text-[#1A1A1A] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:border-[#C4562A]/40 transition-colors duration-300 group"
              >
                Explore research
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="accent-bar" />
        </div>
      </section>

      {/* ─── Focus Areas ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 bg-[#C4562A]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">
                Focus
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#1A1A1A] mb-12"
            >
              What we work on
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {[
                {
                  icon: Cpu,
                  title: "Applied AI",
                  desc: "Research into practical AI systems that solve real problems in automation, language, and decision-making.",
                  tag: "Core",
                },
                {
                  icon: Beaker,
                  title: "Open Source",
                  desc: "Public repositories, reusable tooling, and contributions that give back to the developer community.",
                  tag: "Community",
                },
                {
                  icon: FlaskConical,
                  title: "Experiments",
                  desc: "Rapid prototypes and proof-of-concept builds that test assumptions before they become products.",
                  tag: "R&D",
                },
                {
                  icon: BookOpen,
                  title: "Publications",
                  desc: "Technical writing, research notes, and shared learnings from our day-to-day engineering work.",
                  tag: "Knowledge",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="content-card p-6 group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-[#C4562A]/8 flex items-center justify-center group-hover:bg-[#C4562A]/15 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-[#C4562A]" />
                    </div>
                    <span className="tag-chip">{item.tag}</span>
                  </div>
                  <h3 className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Ecosystem Section ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 bg-[#C4562A]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">
                Ecosystem
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#1A1A1A] mb-12"
            >
              Part of the Tangison ecosystem
            </motion.h2>

            {/* Three properties */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Studio */}
              <motion.a
                href="https://studio.tangison.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={0.2}
                className="group content-card p-8 hover:border-[#C4562A]/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.2em]">
                    studio.tangison.com
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#D0CDC8] group-hover:text-[#C4562A] transition-colors duration-300" />
                </div>
                <h3 className="font-satoshi font-medium text-2xl text-[#1A1A1A] mb-3">
                  Studio
                </h3>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                  Creative and infrastructure services. Design, build, and ship digital products with Tangison Studio.
                </p>
              </motion.a>

              {/* Agent */}
              <motion.a
                href="https://agent.tangison.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={0.3}
                className="group content-card p-8 hover:border-[#2CB5B4]/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.2em]">
                    agent.tangison.com
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#D0CDC8] group-hover:text-[#2CB5B4] transition-colors duration-300" />
                </div>
                <h3 className="font-satoshi font-medium text-2xl text-[#1A1A1A] mb-3">
                  Agent
                </h3>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                  AI agent products. Intelligent automation tools that learn, adapt, and execute workflows.
                </p>
              </motion.a>

              {/* Labs (current, highlighted) */}
              <motion.div
                variants={fadeUp}
                custom={0.4}
                className="border-2 border-[#C4562A] bg-[#C4562A]/[0.03] p-8 relative"
              >
                {/* Corner marks */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C4562A]" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C4562A]" />
                <div className="flex items-center justify-between mb-6">
                  <span className="font-jetbrains text-[10px] text-[#C4562A] uppercase tracking-[0.2em]">
                    labs.tangison.com
                  </span>
                  <span className="font-jetbrains text-[9px] text-[#C4562A]/70 uppercase tracking-[0.15em] bg-[#C4562A]/10 px-2 py-1">
                    Current
                  </span>
                </div>
                <h3 className="font-satoshi font-medium text-2xl text-[#1A1A1A] mb-3">
                  Labs
                </h3>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                  Research and development. This is where the thinking happens before the building starts.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Research Highlights Section ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#1A1A1A] text-[#F0EDE8] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C4562A] opacity-[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#2CB5B4] opacity-[0.02] rounded-full blur-[80px]" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 bg-[#C4562A]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">
                Research
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#F0EDE8] mb-6"
            >
              Current research
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="font-cabinet text-base text-[#7A756C] leading-relaxed max-w-[65ch] mb-10"
            >
              Our research spans applied AI, workflow automation, and
              infrastructure systems. Every project starts with a real problem
              and ends with working code.
            </motion.p>

            {/* Research cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
            >
              {[
                {
                  title: "Webman System",
                  desc: "Skills-based website creation workflow for consistent, auditable site builds.",
                  status: "Active",
                },
                {
                  title: "Agent Orchestration",
                  desc: "Multi-agent coordination protocols for complex task decomposition and execution.",
                  status: "Active",
                },
                {
                  title: "Local-First AI",
                  desc: "On-device inference patterns that reduce cloud dependency while maintaining capability.",
                  status: "Exploring",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="border border-[#F0EDE8]/10 p-6 hover:border-[#C4562A]/30 transition-colors duration-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-1 ${
                      item.status === "Active" ? "text-[#2CB5B4] bg-[#2CB5B4]/10" : "text-[#D4896F] bg-[#D4896F]/10"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-satoshi font-medium text-lg text-[#F0EDE8] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-cabinet text-sm text-[#7A756C] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={0.3}>
              <Link
                href="/research"
                className="inline-flex items-center gap-3 border border-[#C4562A] text-[#C4562A] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#C4562A]/10 transition-colors duration-300 group"
              >
                Explore research
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Open Source Section ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 pattern-cross opacity-40 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 bg-[#C4562A]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">
                Open Source
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#1A1A1A] mb-6"
            >
              Open source
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="font-cabinet text-base text-[#6B6860] leading-relaxed max-w-[65ch] mb-10"
            >
              Our repositories are public. Star them, fork them, use them. Every tool we build for ourselves gets shared.
            </motion.p>

            {/* Repo cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
            >
              {[
                {
                  name: "webman",
                  desc: "Skills-based website creation workflow. Plan, build, audit, deploy.",
                  url: "https://github.com/tangison/webman",
                },
                {
                  name: "tangison-labs",
                  desc: "This site. Built with Next.js, Tailwind CSS, and Framer Motion.",
                  url: "https://github.com/tangison/tangison-labs",
                },
              ].map((repo) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  className="content-card p-6 group flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#F0EDE8] flex items-center justify-center shrink-0 group-hover:bg-[#C4562A]/8 transition-colors duration-300">
                    <Github className="w-5 h-5 text-[#6B6860] group-hover:text-[#C4562A] transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-satoshi font-medium text-sm text-[#1A1A1A] mb-1 group-hover:text-[#C4562A] transition-colors duration-300">
                      tangison/{repo.name}
                    </h3>
                    <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                      {repo.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D0CDC8] group-hover:text-[#C4562A] transition-colors duration-300 shrink-0 mt-1" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={0.3}>
              <a
                href="https://github.com/tangison"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1A1A1A] text-[#FAFAF8] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#333] transition-colors duration-300 group"
              >
                <Github className="w-4 h-4" />
                View all on GitHub
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#C4562A] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 border border-[#FAFAF8]/10" />
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-[#FAFAF8]/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FAFAF8] opacity-[0.03] rounded-full blur-[80px]" />
        </div>

        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-satoshi font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.02em] text-[#FAFAF8] mb-6"
            >
              Research meets production
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="font-cabinet text-base md:text-lg text-[#FAFAF8]/70 leading-relaxed max-w-[55ch] mx-auto mb-10"
            >
              Every experiment in Labs is a candidate for the next Tangison product.
              Follow the work, or bring a problem and let us solve it together.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="mailto:contact@tangison.com"
                className="inline-flex items-center gap-3 bg-[#FAFAF8] text-[#1A1A1A] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#F0EDE8] transition-colors duration-300 group"
              >
                Get in touch
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/experiments"
                className="inline-flex items-center gap-3 border border-[#FAFAF8]/30 text-[#FAFAF8] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#FAFAF8]/10 transition-colors duration-300 group"
              >
                View experiments
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
