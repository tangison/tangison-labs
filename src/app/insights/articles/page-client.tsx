"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
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

const articles = [
  {
    title: "Why We Chose Zero Border-Radius",
    desc: "How a single CSS constraint unified our visual identity across four properties and eliminated design decision fatigue entirely.",
    date: "July 2026",
    tags: ["Design", "CSS", "Brand"],
  },
  {
    title: "Building Multi-Agent Pipelines That Actually Work",
    desc: "The practical challenges of coordinating specialised AI agents. What we learned about handoffs, validation, and the cost of autonomy.",
    date: "July 2026",
    tags: ["AI", "Agents", "Architecture"],
  },
  {
    title: "Four Layers of Noindex: Keeping Staging Invisible",
    desc: "Why one robots.txt is not enough. The defence-in-depth approach we use to keep pre-production content out of search indexes.",
    date: "June 2026",
    tags: ["SEO", "Security", "DevOps"],
  },
];

export function ArticlesPage() {
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
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">Insights / Articles</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              Technical <span className="text-[#C4562A]">articles</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Long-form writing on engineering decisions, architecture, and lessons from building production systems.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-5">
            {articles.map((article) => (
              <motion.article key={article.title} variants={staggerItem} className="content-card p-8 group cursor-pointer">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-jetbrains text-[9px] text-[#7A756C] uppercase tracking-[0.15em]">{article.date}</span>
                </div>
                <div className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-2 group-hover:text-[#C4562A] transition-colors duration-300">
                  {article.title}
                </div>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed max-w-[65ch] mb-4">{article.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
