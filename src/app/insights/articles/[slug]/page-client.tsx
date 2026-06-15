"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import type { Article } from "@/lib/articles";

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
   ARTICLE PAGE CLIENT
   ────────────────────────────────────────────── */

export function ArticlePageClient({ article }: { article: Article }) {
  const formattedDate = new Date(article.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <SiteShell>
      {/* Article Header */}
      <section
        className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 lg:px-20"
        aria-label="Article header"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <Link
              href="/insights/articles"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-ink-muted hover:text-rust-signal transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Articles
            </Link>

            {/* Category label */}
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-rust-signal block mb-6">
              {article.pillar}
            </span>

            {/* H1 */}
            <h1 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-6">
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="flex items-center gap-6 text-ink-muted">
              <span className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} read
              </span>
              <span className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section
        className="pb-20 md:pb-28 px-6 md:px-12 lg:px-20"
        aria-label="Article content"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            {/* Lede */}
            <p className="font-satoshi text-lg md:text-xl text-ink leading-relaxed mb-12 border-l-2 border-rust-signal/30 pl-6">
              {article.lede}
            </p>

            {/* Sections */}
            {article.sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-12"
              >
                <h2 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6">
                  {section.heading}
                </h2>
                {section.body.split("\n\n").map((paragraph, pi) => (
                  <p
                    key={pi}
                    className="font-satoshi text-base md:text-lg text-ink-muted leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            ))}

            {/* Pull Quote */}
            {article.pullQuote && (
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="my-16 py-8 border-t border-b border-black/[0.06]"
              >
                <p className="font-cabinet text-xl md:text-2xl font-bold tracking-tight text-ink leading-snug">
                  &ldquo;{article.pullQuote}&rdquo;
                </p>
              </motion.blockquote>
            )}

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 pt-8 border-t border-black/[0.06]"
            >
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-ink-muted block mb-4">
                Tags
              </span>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-jetbrains text-[10px] uppercase tracking-wider text-ink-muted bg-warm-gray px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Internal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 pt-8 border-t border-black/[0.06]"
            >
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-ink-muted block mb-6">
                Continue Reading
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.pillar === "AI in Africa" && (
                  <>
                    <Link
                      href="/services/consulting"
                      className="group block border border-black/[0.06] p-6 hover:border-black/[0.1] transition-all duration-500"
                    >
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-2 block">
                        Services
                      </span>
                      <span className="font-cabinet text-lg font-bold tracking-tight text-ink group-hover:text-rust-signal transition-colors duration-300">
                        AI Consulting
                      </span>
                    </Link>
                    <Link
                      href="/insights/resources"
                      className="group block border border-black/[0.06] p-6 hover:border-black/[0.1] transition-all duration-500"
                    >
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-2 block">
                        Resources
                      </span>
                      <span className="font-cabinet text-lg font-bold tracking-tight text-ink group-hover:text-rust-signal transition-colors duration-300">
                        AI Guides & Frameworks
                      </span>
                    </Link>
                  </>
                )}
                {article.pillar === "Infrastructure" && (
                  <>
                    <Link
                      href="/services/infrastructure"
                      className="group block border border-black/[0.06] p-6 hover:border-black/[0.1] transition-all duration-500"
                    >
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-2 block">
                        Services
                      </span>
                      <span className="font-cabinet text-lg font-bold tracking-tight text-ink group-hover:text-rust-signal transition-colors duration-300">
                        AI Infrastructure
                      </span>
                    </Link>
                    <Link
                      href="/insights/articles"
                      className="group block border border-black/[0.06] p-6 hover:border-black/[0.1] transition-all duration-500"
                    >
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-2 block">
                        Articles
                      </span>
                      <span className="font-cabinet text-lg font-bold tracking-tight text-ink group-hover:text-rust-signal transition-colors duration-300">
                        More Articles
                      </span>
                    </Link>
                  </>
                )}
                {(article.pillar === "Business" || article.pillar === "Technical") && (
                  <>
                    <Link
                      href="/services/applied-ai"
                      className="group block border border-black/[0.06] p-6 hover:border-black/[0.1] transition-all duration-500"
                    >
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-2 block">
                        Services
                      </span>
                      <span className="font-cabinet text-lg font-bold tracking-tight text-ink group-hover:text-rust-signal transition-colors duration-300">
                        Applied AI
                      </span>
                    </Link>
                    <Link
                      href="/insights/articles"
                      className="group block border border-black/[0.06] p-6 hover:border-black/[0.1] transition-all duration-500"
                    >
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-2 block">
                        Articles
                      </span>
                      <span className="font-cabinet text-lg font-bold tracking-tight text-ink group-hover:text-rust-signal transition-colors duration-300">
                        More Articles
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 pt-8 border-t border-black/[0.06]"
            >
              <div className="bg-atlantic-black p-8 md:p-12 text-center">
                <h3 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-skeleton-bone mb-4">
                  Want to discuss this topic?
                </h3>
                <p className="font-satoshi text-skeleton-bone/60 text-base mb-8 max-w-md mx-auto">
                  Talk to our team about how these ideas apply to your organization.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
                >
                  Get in Touch
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
