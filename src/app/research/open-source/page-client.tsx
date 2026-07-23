/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ArrowRight } from "lucide-react";
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

/* ─── Repo Data ───────────────────────────────────────────────── */

const repos = [
  {
    name: "webman",
    fullName: "tangison/webman",
    desc: "Skills-based website creation workflow. The system behind every Tangison property. Plan, content, brand, create, audit, deploy.",
    url: "https://github.com/tangison/webman",
  },
  {
    name: "tangison-labs",
    fullName: "tangison/tangison-labs",
    desc: "This website. R&D division site with research, projects, and experiments. Built with Next.js, Tailwind CSS, and Framer Motion.",
    url: "https://github.com/tangison/tangison-labs",
  },
];

/* ─── Open Source Page ────────────────────────────────────────── */

export function OpenSourcePage() {
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
              Public repositories
            </motion.h1>
            <motion.p variants={slideInLeft} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Our code is public. Use it, learn from it, contribute back if it helps you. Every tool we build for our own workflow gets shared.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* Repos as numbered list */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {repos.map((repo, i) => (
              <motion.div
                key={repo.name}
                variants={staggerItemSlide}
                className="group py-10 border-b border-[#E0DDD8] last:border-b-0"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-jetbrains text-[10px] text-[#C4562A] uppercase tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-satoshi font-medium text-xl text-[#1A1A1A] group-hover:text-[#C4562A] transition-colors duration-300 inline-flex items-center gap-2 relative"
                  >
                    {repo.fullName}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute -bottom-1 left-0 h-[2px] bg-[#C4562A] w-0 group-hover:w-full transition-width duration-500 ease-out" />
                  </a>
                </div>

                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed max-w-[65ch] ml-[calc(10px+0.2em+16px)]">
                  {repo.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#1A1A1A]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeIn}
              custom={0}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[#F0EDE8] mb-4"
            >
              See everything on GitHub
            </motion.h2>
            <motion.p
              variants={fadeIn}
              custom={0.1}
              className="font-cabinet text-base text-[#7A756C] leading-relaxed max-w-[55ch] mb-8"
            >
              All repositories, all issues, all pull requests. Open source means open process.
            </motion.p>
            <motion.div variants={fadeIn} custom={0.2}>
              <a
                href="https://github.com/tangison"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C4562A] text-[#FAFAF8] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#A84420] transition-colors duration-300 group"
              >
                <Github className="w-4 h-4" />
                github.com/tangison
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
