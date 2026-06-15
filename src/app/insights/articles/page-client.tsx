"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import { articles } from "@/lib/articles";

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

/* ──────────────────────────────────────────────
   ARTICLES PAGE
   ────────────────────────────────────────────── */

export function ArticlesPage() {
  return (
    <SiteShell>
      {/* Section 1: Page Header */}
      <section
        className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20"
        aria-label="Articles header"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-ink-muted hover:text-rust-signal transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Insights
            </Link>
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-rust-signal block mb-6">
              ARTICLES
            </span>
            <h1 className="font-cabinet text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-6">
              Perspectives and Commentary
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed">
              Perspectives and educational content on applied AI and building in Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Article Cards */}
      <section
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-gray"
        aria-label="Articles"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={`/insights/articles/${article.slug}`}
                  className="group block border border-black/[0.06] bg-warm-white p-6 md:p-8 h-full flex flex-col hover:border-black/[0.1] transition-all duration-500"
                >
                  {/* Category tag */}
                  <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-4">
                    {article.pillar}
                  </span>

                  {/* Title */}
                  <h2 className="font-cabinet text-xl font-bold tracking-tight text-ink mb-3 flex-1 group-hover:text-rust-signal transition-colors duration-300">
                    {article.title}
                  </h2>

                  {/* Summary */}
                  <p className="font-satoshi text-ink-muted text-sm leading-relaxed mb-6">
                    {article.lede}
                  </p>

                  {/* Footer: Read time */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/[0.04]">
                    <span className="font-jetbrains text-[10px] text-ink-muted/60 uppercase tracking-wider">
                      {article.readTime} read
                    </span>
                    <span className="inline-flex items-center gap-1 font-jetbrains text-[10px] uppercase tracking-[0.15em] text-ink-muted group-hover:text-rust-signal transition-colors duration-300">
                      Read
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20" aria-label="Explore more">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/insights/resources"
              className="group block border border-black/[0.06] bg-warm-white p-8 md:p-10 hover:border-black/[0.1] transition-all duration-500"
            >
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-4 block">
                Resources
              </span>
              <h3 className="font-cabinet text-xl md:text-2xl font-bold tracking-tight text-ink mb-3 group-hover:text-rust-signal transition-colors duration-300">
                AI Guides and Frameworks
              </h3>
              <p className="font-satoshi text-ink-muted text-sm leading-relaxed">
                Download our comprehensive library of AI strategy guides, maturity frameworks, and industry-specific playbooks.
              </p>
              <div className="flex items-center gap-2 mt-6 font-jetbrains text-[11px] uppercase tracking-[0.15em] text-ink-muted group-hover:text-rust-signal transition-colors duration-300">
                <span>Browse</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/insights/case-studies"
              className="group block border border-black/[0.06] bg-warm-white p-8 md:p-10 hover:border-black/[0.1] transition-all duration-500"
            >
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-4 block">
                Case Studies
              </span>
              <h3 className="font-cabinet text-xl md:text-2xl font-bold tracking-tight text-ink mb-3 group-hover:text-rust-signal transition-colors duration-300">
                Results from the Field
              </h3>
              <p className="font-satoshi text-ink-muted text-sm leading-relaxed">
                Real projects. Real outcomes. See how organizations are deploying AI with TANGISON.
              </p>
              <div className="flex items-center gap-2 mt-6 font-jetbrains text-[11px] uppercase tracking-[0.15em] text-ink-muted group-hover:text-rust-signal transition-colors duration-300">
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
