"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, BookOpen } from "lucide-react";
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

const publications = [
  {
    type: "Technical Note",
    title: "Why We Built Webman: Structured Site Creation at Scale",
    desc: "A detailed walkthrough of the Webman system design. How we define phases, enforce brand consistency, and ship auditable websites without sacrificing speed.",
    date: "2026",
    tags: ["Webman", "Workflow", "Design Systems"],
  },
  {
    type: "Research Note",
    title: "Agent Orchestration: Decomposing Complex Tasks Across Specialised Models",
    desc: "Our early findings on multi-agent coordination. Task decomposition strategies, validation checkpoints, and the trade-offs between autonomy and control in agent systems.",
    date: "2026",
    tags: ["AI", "Agents", "Orchestration"],
  },
  {
    type: "Field Report",
    title: "Local-First AI: Running Inference at the Edge Without Losing Capability",
    desc: "Practical patterns for on-device model deployment. Quantisation results, latency benchmarks, and the caching strategies that make local inference viable for production workloads.",
    date: "2026",
    tags: ["Edge AI", "Performance", "On-Device"],
  },
  {
    type: "Technical Note",
    title: "Zero Border-Radius: A Design Constraint That Shipped a Visual Identity",
    desc: "How one CSS rule became the defining visual characteristic of Tangison. The design reasoning, implementation details, and the brand consistency it enforces across all properties.",
    date: "2026",
    tags: ["Design", "CSS", "Brand"],
  },
  {
    type: "Research Note",
    title: "Four-Layer Noindex: Keeping Staging Sites Out of Search Engines",
    desc: "The multiple enforcement layers we use to prevent pre-production content from appearing in search results. Meta tags, headers, robots.txt, and server-level controls working together.",
    date: "2026",
    tags: ["SEO", "Security", "DevOps"],
  },
];

export function PublicationsPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="accent-orb accent-orb-rust w-[300px] h-[300px] top-20 right-10 opacity-[0.04]" />
          <div className="absolute inset-0 pattern-grid opacity-30" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.3em]">Publications</span>
              <div className="flex-1 h-[1px] bg-[#E0DDD8] max-w-[80px]" />
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              What we have <span className="text-[#C4562A]">learned</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Technical notes, research findings, and field reports from our engineering work.
              We write about what we build, what breaks, and what we discover along the way.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>

      {/* Publications List */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-5">
            {publications.map((pub) => (
              <motion.article key={pub.title} variants={staggerItem} className="content-card p-8 md:p-10 group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-10 h-10 bg-[#C4562A]/8 flex items-center justify-center shrink-0 group-hover:bg-[#C4562A]/15 transition-colors duration-300">
                    {pub.type === "Technical Note" ? (
                      <FileText className="w-5 h-5 text-[#C4562A]" />
                    ) : pub.type === "Research Note" ? (
                      <BookOpen className="w-5 h-5 text-[#2CB5B4]" />
                    ) : (
                      <FileText className="w-5 h-5 text-[#D4896F]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${
                        pub.type === "Technical Note" ? "text-[#C4562A] bg-[#C4562A]/10" :
                        pub.type === "Research Note" ? "text-[#2CB5B4] bg-[#2CB5B4]/10" :
                        "text-[#D4896F] bg-[#D4896F]/10"
                      }`}>
                        {pub.type}
                      </span>
                      <span className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.15em]">{pub.date}</span>
                    </div>
                    <h3 className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-2 group-hover:text-[#C4562A] transition-colors duration-300">
                      {pub.title}
                    </h3>
                    <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed max-w-[65ch] mb-4">{pub.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="tag-chip">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sub-sections */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A1A1A] mb-12">
              More from the archive
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link href="/insights/articles" className="content-card p-8 group">
                <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.2em] block mb-3">Articles</span>
                <h3 className="font-satoshi font-medium text-xl text-[#1A1A1A] mb-2 group-hover:text-[#C4562A] transition-colors duration-300">Technical Articles</h3>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">Long-form writing on engineering decisions, architecture, and lessons from production.</p>
              </Link>
              <Link href="/insights/reports" className="content-card p-8 group">
                <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.2em] block mb-3">Reports</span>
                <h3 className="font-satoshi font-medium text-xl text-[#1A1A1A] mb-2 group-hover:text-[#C4562A] transition-colors duration-300">Research Reports</h3>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">Periodic research summaries and analysis from our active investigations.</p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
