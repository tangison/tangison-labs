"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
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

/* ─── Home Page ───────────────────────────────────────────────── */

export function HomePage() {
  return (
    <SiteShell>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
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
              <div className="w-2 h-2 bg-[#c4562a]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#a89f91] uppercase tracking-[0.3em]">
                Tangison Labs
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(2rem,5vw,4rem)] tracking-[-0.02em] leading-[1.05] text-[#f5f0e8] mb-6"
            >
              We build what we research
            </motion.h1>

            {/* Support text */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="font-cabinet text-base md:text-lg text-[#a89f91] leading-relaxed max-w-[65ch] mb-10"
            >
              Tangison Labs is the research and development division of Tangison.
              Open-source projects, applied AI research, and experimental tools
              from Windhoek, Namibia.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} custom={0.3}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-[#c4562a] text-[#f5f0e8] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#c4562a]/90 transition-colors duration-300 group"
              >
                View projects
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#2a2520]" aria-hidden="true" />
      </section>

      {/* ─── Ecosystem Section ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Heading */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 bg-[#c4562a]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#a89f91] uppercase tracking-[0.3em]">
                Ecosystem
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#f5f0e8] mb-12"
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
                className="group border border-[#2a2520] p-6 hover:border-[#c4562a]/40 transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-jetbrains text-[10px] text-[#a89f91]/60 uppercase tracking-[0.2em]">
                    studio.tangison.com
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#a89f91]/30 group-hover:text-[#c4562a] transition-colors duration-300" />
                </div>
                <h3 className="font-satoshi font-medium text-xl text-[#f5f0e8] mb-2">
                  Studio
                </h3>
                <p className="font-cabinet text-sm text-[#a89f91] leading-relaxed">
                  Creative and infrastructure services
                </p>
              </motion.a>

              {/* Agent */}
              <motion.a
                href="https://agent.tangison.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={0.3}
                className="group border border-[#2a2520] p-6 hover:border-[#c4562a]/40 transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-jetbrains text-[10px] text-[#a89f91]/60 uppercase tracking-[0.2em]">
                    agent.tangison.com
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#a89f91]/30 group-hover:text-[#c4562a] transition-colors duration-300" />
                </div>
                <h3 className="font-satoshi font-medium text-xl text-[#f5f0e8] mb-2">
                  Agent
                </h3>
                <p className="font-cabinet text-sm text-[#a89f91] leading-relaxed">
                  AI agent products
                </p>
              </motion.a>

              {/* Labs (current, highlighted) */}
              <motion.div
                variants={fadeUp}
                custom={0.4}
                className="border border-[#c4562a]/30 bg-[#c4562a]/5 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-jetbrains text-[10px] text-[#c4562a]/80 uppercase tracking-[0.2em]">
                    labs.tangison.com
                  </span>
                  <span className="font-jetbrains text-[9px] text-[#c4562a]/60 uppercase tracking-[0.15em]">
                    Current
                  </span>
                </div>
                <h3 className="font-satoshi font-medium text-xl text-[#f5f0e8] mb-2">
                  Labs
                </h3>
                <p className="font-cabinet text-sm text-[#a89f91] leading-relaxed">
                  Research and development
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Research Highlights Section ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-[#2a2520]">
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
              <div className="w-2 h-2 bg-[#c4562a]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#a89f91] uppercase tracking-[0.3em]">
                Research
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#f5f0e8] mb-6"
            >
              Current research
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="font-cabinet text-base text-[#a89f91] leading-relaxed max-w-[65ch] mb-10"
            >
              Our research spans applied AI, workflow automation, and
              infrastructure systems. Every project starts with a real problem
              and ends with working code.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.3}>
              <Link
                href="/research"
                className="inline-flex items-center gap-3 border border-[#c4562a] text-[#c4562a] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#c4562a]/10 transition-colors duration-300 group"
              >
                Explore research
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Open Source Section ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-[#2a2520]">
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
              <div className="w-2 h-2 bg-[#c4562a]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#a89f91] uppercase tracking-[0.3em]">
                Open Source
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#f5f0e8] mb-6"
            >
              Open source
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="font-cabinet text-base text-[#a89f91] leading-relaxed max-w-[65ch] mb-10"
            >
              Our repositories are public. Star them, fork them, use them.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.3}>
              <a
                href="https://github.com/tangison"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#2a2520] text-[#a89f91] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:border-[#c4562a]/40 hover:text-[#f5f0e8] transition-colors duration-300 group"
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
