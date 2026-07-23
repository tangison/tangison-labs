/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

/* ─── Animation Variants ──────────────────────────────────────── */

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
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

/* ─── Publication Data ────────────────────────────────────────── */

const publications = [
  {
    year: "2026",
    title: "Why We Built Webman: Structured Site Creation at Scale",
    type: "Technical Note",
    desc: "A detailed walkthrough of the Webman system design. How we define phases, enforce brand consistency, and ship auditable websites.",
    href: "/insights/articles",
  },
  {
    year: "2026",
    title: "Agent Orchestration: Decomposing Complex Tasks Across Specialised Models",
    type: "Research Note",
    desc: "Our early findings on multi-agent coordination. Task decomposition, validation, and the trade-offs between autonomy and control.",
    href: "/insights/articles",
  },
  {
    year: "2026",
    title: "Local-First AI: Running Inference at the Edge Without Losing Capability",
    type: "Field Report",
    desc: "Practical patterns for on-device model deployment. Quantisation results, latency benchmarks, and caching strategies.",
    href: "/insights/reports",
  },
  {
    year: "2026",
    title: "Zero Border-Radius: A Design Constraint That Shipped a Visual Identity",
    type: "Technical Note",
    desc: "How one CSS rule became the defining visual characteristic of Tangison. Design reasoning and implementation details.",
    href: "/insights/articles",
  },
  {
    year: "2026",
    title: "Four-Layer Noindex: Keeping Staging Sites Out of Search Engines",
    type: "Research Note",
    desc: "The multiple enforcement layers we use to prevent pre-production content from appearing in search results.",
    href: "/insights/articles",
  },
];

const typeColors: Record<string, string> = {
  "Technical Note": "text-[#C4562A] bg-[#C4562A]/10",
  "Research Note": "text-[#2CB5B4] bg-[#2CB5B4]/10",
  "Field Report": "text-[#D4896F] bg-[#D4896F]/10",
};

/* ─── Publications Page ───────────────────────────────────────── */

export function PublicationsPage() {
  return (
    <SiteShell>
      {/* ─── Hero with desk-books-lamp-sunlight image ─── */}
      <section className="relative h-[45vh] min-h-[300px] overflow-hidden">
        <Image
          src="/images/gallery/desk-books-lamp-sunlight.webp"
          alt="Desk with books, lamp, and sunlight"
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
              What we have learned
            </motion.h1>
            <motion.p
              variants={slideInLeft}
              custom={0.5}
              className="font-cabinet text-base text-[#F0EDE8]/70 leading-relaxed max-w-[55ch]"
            >
              Technical notes, research findings, and field reports. We write about what we build, what breaks, and what we discover.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Timeline-style layout ─── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-[calc(10px+0.15em*5+16px+8px)] md:left-[calc(9px*5+0.15em*5+4px+2px+16px)] top-0 bottom-0 w-[1px] bg-[#E0DDD8]" aria-hidden="true" />

            {publications.map((pub, i) => (
              <motion.article
                key={pub.title}
                variants={staggerItemSlide}
                className="group relative pl-8 md:pl-12 py-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-10 w-3 h-3 bg-[#C4562A] -translate-x-1/2" aria-hidden="true" />

                <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                  <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.15em]">
                    {pub.year}
                  </span>
                  <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${typeColors[pub.type]}`}>
                    {pub.type}
                  </span>
                </div>

                <Link
                  href={pub.href}
                  className="font-satoshi font-medium text-lg text-[#1A1A1A] group-hover:text-[#C4562A] transition-colors duration-300 inline-block mb-2 relative"
                >
                  {pub.title}
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-[#C4562A] w-0 group-hover:w-full transition-width duration-500 ease-out" />
                </Link>

                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed max-w-[65ch]">
                  {pub.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Sub-section links ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
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
                href="/insights/articles"
                className="group inline-flex items-center gap-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C4562A] transition-colors duration-300"
              >
                Technical Articles
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
            <motion.div variants={staggerItemSlide}>
              <Link
                href="/insights/reports"
                className="group inline-flex items-center gap-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C4562A] transition-colors duration-300"
              >
                Research Reports
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
