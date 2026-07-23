"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

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
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-t-bg-elevated/30" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-4">
            <Link
              href="/publications"
              className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-subtle hover:text-t-accent transition-colors duration-300 inline-flex items-center gap-2"
            >
              Publications
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <h1 className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-t-fg mb-6">
            Technical articles
          </h1>
          <p className="font-cabinet text-base md:text-lg text-t-fg-muted leading-relaxed max-w-[65ch]">
            Long-form writing on engineering decisions, architecture, and lessons from building production systems.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* Articles as numbered list — STATIC */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          {articles.map((article, i) => (
            <article
              key={article.title}
              className="group py-10 border-b border-t-border last:border-b-0"
            >
              <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                <span className="font-jetbrains text-[10px] text-t-accent uppercase tracking-[0.2em]">
                  0{i + 1}
                </span>
                <span className="font-jetbrains text-[10px] text-t-fg-subtle uppercase tracking-[0.15em]">
                  {article.date}
                </span>
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 text-t-fg-muted bg-t-fg-muted/10">
                  {article.category}
                </span>
              </div>

              <h3 className="font-satoshi font-medium text-lg text-t-fg mb-2 group-hover:text-t-accent transition-colors duration-300">
                {article.title}
              </h3>

              <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed max-w-[65ch] ml-[calc(10px+0.2em+16px)] mb-3">
                {article.desc}
              </p>

              {article.comingSoon && (
                <span className="font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-[0.15em] ml-[calc(10px+0.2em+16px)]">
                  Coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
