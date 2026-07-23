/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

/* ─── Research Page ───────────────────────────────────────────── */

export function ResearchPage() {
  return (
    <SiteShell>
      {/* ─── Hero with typing animation ─── */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" animate="visible">
            <motion.h1
              variants={slideInLeft}
              custom={0}
              className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-4"
            >
              <TypeWriter text="Current research" speed={45} delay={0.5} />
            </motion.h1>

            <motion.p
              variants={slideInLeft}
              custom={0.3}
              className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]"
            >
              Every research line at Tangison Labs starts with a problem we have encountered in production.
              We study, prototype, validate, and then ship. Nothing stays in the lab unless it works in the field.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Two-column index: image left, research areas right ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left: large desert image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideInLeft}
              custom={0}
              className="relative overflow-hidden"
            >
              <Image
                src="/images/gallery/desert-path-quiver-trees.webp"
                alt="Desert path with quiver trees in Namibia"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Right: numbered research areas */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerList}
            >
              {researchAreas.map((area) => (
                <motion.div
                  key={area.num}
                  variants={staggerItemSlide}
                  className="group py-8 border-b border-[#E0DDD8] last:border-b-0"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-jetbrains text-[10px] text-[#C4562A] uppercase tracking-[0.2em]">
                      {area.num}
                    </span>
                    <Link
                      href={area.href}
                      className="font-satoshi font-medium text-xl text-[#1A1A1A] hover:text-[#C4562A] transition-colors duration-300 relative inline-block"
                    >
                      {area.title}
                      <span className="absolute -bottom-1 left-0 h-[2px] bg-[#C4562A] w-0 group-hover:w-full transition-width duration-500 ease-out" />
                    </Link>
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

      {/* ─── Methodology note: editorial aside ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-[65ch]"
          >
            <motion.h2
              variants={fadeIn}
              custom={0}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.01em] text-[#1A1A1A] mb-6"
            >
              Methodology
            </motion.h2>
            <motion.p
              variants={fadeIn}
              custom={0.1}
              className="font-cabinet text-base text-[#6B6860] leading-relaxed"
            >
              We start with a specific, answerable question. Build the smallest thing that could answer it. Run it against real data, measure, and compare. Then decide: ship, iterate, or kill. No zombie experiments. No research that exists only on paper.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Sub-pages links ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerList}
            className="flex flex-col md:flex-row gap-8 md:gap-16"
          >
            <motion.div variants={staggerItemSlide}>
              <Link
                href="/research/projects"
                className="group inline-flex items-center gap-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C4562A] transition-colors duration-300"
              >
                R&D Projects
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
            <motion.div variants={staggerItemSlide}>
              <Link
                href="/research/open-source"
                className="group inline-flex items-center gap-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C4562A] transition-colors duration-300"
              >
                Open Source
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
