/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

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

/* ─── Article Data ────────────────────────────────────────────── */

const articles = [
  {
    title: "Why We Chose Zero Border-Radius",
    desc: "How a single CSS constraint unified our visual identity across four properties and eliminated design decision fatigue entirely. The design reasoning, implementation details, and the brand consistency it enforces.",
    date: "July 2026",
    category: "Design",
    comingSoon: true,
  },
  {
    title: "Building Multi-Agent Pipelines That Actually Work",
    desc: "The practical challenges of coordinating specialised AI agents. What we learned about handoffs, validation, and the cost of autonomy. Agent orchestration in practice, not theory.",
    date: "July 2026",
    category: "AI",
    comingSoon: true,
  },
  {
    title: "Four Layers of Noindex: Keeping Staging Invisible",
    desc: "Why one robots.txt is not enough. The defence-in-depth approach we use to keep pre-production content out of search indexes. Meta tags, headers, server controls working together.",
    date: "June 2026",
    category: "DevOps",
    comingSoon: true,
  },
];

/* ─── Articles Page ───────────────────────────────────────────── */

export function ArticlesPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={slideInLeft} custom={0} className="mb-4">
              <Link
                href="/publications"
                className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.2em] hover:text-[#C4562A] transition-colors duration-300 inline-flex items-center gap-2"
              >
                Publications
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            <motion.h1 variants={slideInLeft} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              Technical articles
            </motion.h1>
            <motion.p variants={slideInLeft} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Long-form writing on engineering decisions, architecture, and lessons from building production systems.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* Articles as numbered list */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                variants={staggerItemSlide}
                className="group py-10 border-b border-[#E0DDD8] last:border-b-0"
              >
                <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                  <span className="font-jetbrains text-[10px] text-[#C4562A] uppercase tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.15em]">
                    {article.date}
                  </span>
                  <span className="font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 text-[#6B6860] bg-[#6B6860]/10">
                    {article.category}
                  </span>
                </div>

                <h3 className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-2 group-hover:text-[#C4562A] transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed max-w-[65ch] ml-[calc(10px+0.2em+16px)] mb-3">
                  {article.desc}
                </p>

                {article.comingSoon && (
                  <span className="font-jetbrains text-[9px] text-[#7A756C] uppercase tracking-[0.15em] ml-[calc(10px+0.2em+16px)]">
                    Coming soon
                  </span>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
