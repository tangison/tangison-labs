"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import type { Author } from "@/lib/authors";
import type { Article } from "@/lib/articles";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

export function AuthorPageClient({
  author,
  articles: authorArticles,
}: {
  author: Author;
  articles: Article[];
}) {
  return (
    <SiteShell>
      {/* Author Header */}
      <section
        className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 lg:px-20"
        aria-label="Author profile"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-ink-muted hover:text-rust-signal transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              About
            </Link>

            {/* Category label */}
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-rust-signal block mb-6">
              Author
            </span>

            {/* H1 */}
            <h1 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-4">
              {author.name}
            </h1>

            {/* Role */}
            <p className="font-jetbrains text-xs uppercase tracking-[0.15em] text-ink-muted mb-6">
              {author.role}
            </p>

            {/* Bio */}
            <p className="font-satoshi text-lg md:text-xl text-ink-muted leading-relaxed">
              {author.bio}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles by Author */}
      {authorArticles.length > 0 && (
        <section
          className="pb-20 md:pb-28 px-6 md:px-12 lg:px-20"
          aria-label="Articles by this author"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp}>
              <div className="w-8 h-[2px] bg-rust-signal mb-8" aria-hidden="true" />
              <h2 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-ink mb-8">
                Articles
              </h2>
              <div className="space-y-6">
                {authorArticles.map((article, i) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={`/insights/articles/${article.slug}`}
                      className="group block border border-black/[0.06] p-6 md:p-8 hover:border-black/[0.1] transition-all duration-500"
                    >
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-2 block">
                        {article.pillar}
                      </span>
                      <h3 className="font-cabinet text-xl md:text-2xl font-bold tracking-tight text-ink group-hover:text-rust-signal transition-colors duration-300 mb-3">
                        {article.title}
                      </h3>
                      <p className="font-satoshi text-ink-muted text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                        {article.metaDescription}
                      </p>
                      <div className="flex items-center gap-4 text-ink-muted">
                        <span className="inline-flex items-center gap-1.5 font-jetbrains text-[10px] uppercase tracking-wider">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-jetbrains text-[10px] uppercase tracking-wider">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.publishedDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-atlantic-black p-8 md:p-12 text-center"
          >
            <h3 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-skeleton-bone mb-4">
              Want to work with us?
            </h3>
            <p className="font-satoshi text-skeleton-bone/60 text-base mb-8 max-w-md mx-auto">
              Talk to our team about how applied AI can solve real problems in your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
