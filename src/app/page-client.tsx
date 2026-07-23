/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import { TypeWriter } from "@/components/tangison/type-writer";

/* ─── Animation Variants ──────────────────────────────────────── */

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const revealWidth = {
  hidden: { width: 0 },
  visible: (delay: number = 0) => ({
    width: "100%",
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
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

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

/* ─── Focus Area Data ──────────────────────────────────────────── */

const focusAreas = [
  { title: "Applied AI", desc: "Practical AI systems for automation, language, and decision-making." },
  { title: "Open Source", desc: "Public repositories and tooling for the developer community." },
  { title: "Experiments", desc: "Rapid prototypes that test assumptions before they become products." },
  { title: "Publications", desc: "Technical writing and shared learnings from our engineering work." },
];

/* ─── Home Page ───────────────────────────────────────────────── */

export function HomePage() {
  return (
    <SiteShell>
      {/* ─── Hero: Full-width desert landscape with typing animation ─── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/gallery/desert-road-landscape.webp"
          alt="Desert road stretching into the Namibian landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#1A1A1A]/50" />

        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-[1200px] mx-auto w-full"
          >
            {/* Typing animation on the left */}
            <motion.div variants={slideInLeft} custom={0.3}>
              <h1 className="font-satoshi font-bold text-[clamp(2rem,5vw,4rem)] tracking-[-0.02em] leading-[1.05] text-[#F0EDE8] mb-4">
                <TypeWriter
                  text="We build what we research"
                  speed={45}
                  delay={0.8}
                />
              </h1>
            </motion.div>

            <motion.p
              variants={slideInLeft}
              custom={0.5}
              className="font-cabinet text-base md:text-lg text-[#F0EDE8]/70 leading-relaxed max-w-[55ch] mb-8"
            >
              Tangison Labs is the research and development division of Tangison.
              Open-source projects, applied AI research, and experimental tools
              from Windhoek, Namibia.
            </motion.p>

            <motion.div variants={slideInLeft} custom={0.7} className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-[#C4562A] text-[#FAFAF8] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#A84420] transition-colors duration-300 group"
              >
                View projects
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center gap-3 border border-[#F0EDE8]/40 text-[#F0EDE8] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#F0EDE8]/10 transition-colors duration-300 group"
              >
                Explore research
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Focus Areas: Split layout (photo left, list right) ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: half-width architecture photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideInLeft}
              custom={0}
              className="relative overflow-hidden"
            >
              <Image
                src="/images/gallery/concrete-glass-architecture.webp"
                alt="Concrete and glass architecture in Namibia"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Right: stacked typographic list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerList}
            >
              <motion.h2
                variants={slideInRight}
                custom={0}
                className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#1A1A1A] mb-10"
              >
                What we work on
              </motion.h2>

              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  variants={staggerItemSlide}
                  className="group py-6 border-b border-[#E0DDD8] last:border-b-0"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <h3 className="font-satoshi font-medium text-xl text-[#1A1A1A] relative inline-block">
                      {area.title}
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#C4562A] w-0 group-hover:w-full transition-width duration-500 ease-out" />
                    </h3>
                  </div>
                  <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed ml-[calc(10px+0.2em+16px)]">
                    {area.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Ecosystem: Horizontal band with 3 text blocks ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0}
            className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#1A1A1A] mb-12"
          >
            Part of the Tangison ecosystem
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerList}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {/* Studio */}
            <motion.a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItemSlide}
              className="group block"
            >
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.2em] block mb-2">
                studio.tangison.com
              </span>
              <h3 className="font-satoshi font-medium text-xl text-[#1A1A1A] mb-2 inline-block relative">
                Studio
                <span className="absolute -bottom-1 left-0 h-[2px] bg-[#C4562A]/40 w-0 group-hover:w-full transition-width duration-500 ease-out" />
              </h3>
              <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                Creative and infrastructure services. Design, build, and ship digital products.
              </p>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C4562A] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Agent */}
            <motion.a
              href="https://agent.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItemSlide}
              className="group block"
            >
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.2em] block mb-2">
                agent.tangison.com
              </span>
              <h3 className="font-satoshi font-medium text-xl text-[#1A1A1A] mb-2 inline-block relative">
                Agent
                <span className="absolute -bottom-1 left-0 h-[2px] bg-[#2CB5B4]/40 w-0 group-hover:w-full transition-width duration-500 ease-out" />
              </h3>
              <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                AI agent products. Intelligent automation tools that learn, adapt, and execute workflows.
              </p>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2CB5B4] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Labs (current) — highlighted with accent border */}
            <motion.div
              variants={staggerItemSlide}
              className="border-2 border-[#C4562A] p-6 relative"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C4562A]" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C4562A]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#C4562A] uppercase tracking-[0.2em] block mb-2">
                labs.tangison.com
              </span>
              <span className="font-jetbrains text-[9px] text-[#C4562A]/70 uppercase tracking-[0.15em] bg-[#C4562A]/10 px-2 py-1">
                Current
              </span>
              <h3 className="font-satoshi font-medium text-xl text-[#1A1A1A] mt-2 mb-2">
                Labs
              </h3>
              <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                Research and development. This is where the thinking happens before the building starts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Research Highlights: Dark background, magazine-style ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#1A1A1A] text-[#F0EDE8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            {/* Left: large heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.h2
                variants={slideInLeft}
                custom={0}
                className="font-satoshi font-bold text-[clamp(1.5rem,3.5vw,3rem)] tracking-[-0.02em] text-[#F0EDE8] mb-4"
              >
                Current research
              </motion.h2>
              <motion.p
                variants={slideInLeft}
                custom={0.1}
                className="font-cabinet text-sm text-[#7A756C] leading-relaxed max-w-[40ch]"
              >
                Every project starts with a real problem and ends with working code.
              </motion.p>
            </motion.div>

            {/* Right: numbered list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerList}
              className="space-y-8"
            >
              {[
                {
                  num: "01",
                  title: "Webman System",
                  desc: "Skills-based website creation workflow for consistent, auditable site builds. Plan, content, brand, create, audit, deploy.",
                  status: "Active",
                },
                {
                  num: "02",
                  title: "Agent Orchestration",
                  desc: "Multi-agent coordination protocols for complex task decomposition and execution. Handoffs, validation, composition.",
                  status: "Active",
                },
                {
                  num: "03",
                  title: "Local-First AI",
                  desc: "On-device inference patterns that reduce cloud dependency while maintaining capability. Quantisation, caching, fallback.",
                  status: "Exploring",
                },
              ].map((item) => (
                <motion.div
                  key={item.num}
                  variants={staggerItemSlide}
                  className="group"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-jetbrains text-[10px] text-[#C4562A] tracking-[0.2em]">
                      {item.num}
                    </span>
                    <h3 className="font-satoshi font-medium text-lg text-[#F0EDE8] inline-block relative">
                      {item.title}
                      <span className="absolute -bottom-1 left-0 h-[2px] bg-[#C4562A] w-0 group-hover:w-full transition-width duration-500 ease-out" />
                    </h3>
                    <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${
                      item.status === "Active" ? "text-[#2CB5B4] bg-[#2CB5B4]/10" : "text-[#D4896F] bg-[#D4896F]/10"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="font-cabinet text-sm text-[#7A756C] leading-relaxed ml-[calc(10px+0.2em+16px)]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

              <motion.div variants={staggerItemSlide}>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-3 border border-[#C4562A] text-[#C4562A] px-5 py-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#C4562A]/10 transition-colors duration-300 group mt-4"
                >
                  Explore research
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Open Source: Split layout ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            {/* Left: GitHub icon + repo names */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideInLeft}
              custom={0}
            >
              <div className="flex items-center gap-3 mb-8">
                <Github className="w-5 h-5 text-[#C4562A]" />
                <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#1A1A1A]">
                  Open source
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  { name: "webman", url: "https://github.com/tangison/webman" },
                  { name: "tangison-labs", url: "https://github.com/tangison/tangison-labs" },
                ].map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jetbrains text-sm text-[#1A1A1A] hover:text-[#C4562A] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    tangison/{repo.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: descriptions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideInRight}
              custom={0.2}
            >
              <p className="font-cabinet text-base text-[#6B6860] leading-relaxed max-w-[65ch] mb-6">
                Our repositories are public. Star them, fork them, use them. Every tool we build for ourselves gets shared.
              </p>

              <div className="space-y-6">
                <div className="border-b border-[#E0DDD8] pb-6">
                  <h3 className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-2">
                    Webman
                  </h3>
                  <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                    Skills-based website creation workflow. Plan, build, audit, deploy. A structured system for building consistent, production-ready websites. Used internally to build all Tangison properties.
                  </p>
                </div>
                <div className="pb-6">
                  <h3 className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-2">
                    Tangison Labs
                  </h3>
                  <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                    This site. Built with Next.js, Tailwind CSS, and Framer Motion. Serves as a live example of our design system and brand language.
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/tangison"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1A1A1A] text-[#FAFAF8] px-5 py-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#333] transition-colors duration-300 group mt-4"
              >
                <Github className="w-4 h-4" />
                View all on GitHub
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA: Left-aligned text on rust background ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#C4562A]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={slideInLeft}
              custom={0}
              className="font-satoshi font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.02em] text-[#FAFAF8] mb-6 max-w-[50ch]"
            >
              Research meets production
            </motion.h2>
            <motion.p
              variants={slideInLeft}
              custom={0.1}
              className="font-cabinet text-base md:text-lg text-[#FAFAF8]/70 leading-relaxed max-w-[55ch] mb-10"
            >
              Every experiment in Labs is a candidate for the next Tangison product.
              Follow the work, or bring a problem and let us solve it together.
            </motion.p>
            <motion.div
              variants={slideInLeft}
              custom={0.2}
              className="flex flex-wrap gap-4"
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
