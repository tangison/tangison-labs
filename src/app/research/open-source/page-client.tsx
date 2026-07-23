"use client";

import React from "react";
import Link from "next/link";
import { Github, ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

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
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-t-bg-elevated/30" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-4">
            <Link
              href="/research"
              className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-subtle hover:text-t-accent transition-colors duration-300 inline-flex items-center gap-2"
            >
              Research
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <h1 className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-t-fg mb-6">
            Public repositories
          </h1>
          <p className="font-cabinet text-base md:text-lg text-t-fg-muted leading-relaxed max-w-[65ch]">
            Our code is public. Star it, fork it, use it. If a tool helps you, contribute back. Every tool we build for ourselves goes open source.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* Repos as numbered list — STATIC */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          {repos.map((repo, i) => (
            <div
              key={repo.name}
              className="group py-10 border-b border-t-border last:border-b-0"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-jetbrains text-[10px] text-t-accent uppercase tracking-[0.2em]">
                  0{i + 1}
                </span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-satoshi font-medium text-xl text-t-fg group-hover:text-t-accent transition-colors duration-300 inline-flex items-center gap-2 relative"
                >
                  {repo.fullName}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-t-accent w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
                </a>
              </div>

              <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed max-w-[65ch] ml-[calc(10px+0.2em+16px)]">
                {repo.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub CTA — STATIC */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-t-fg">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-t-fg-inverse mb-4">
            See everything on GitHub
          </h2>
          <p className="font-cabinet text-base text-t-fg-subtle leading-relaxed max-w-[55ch] mb-8">
            All repositories, all issues, all pull requests. Open source means open process.
          </p>
          <a
            href="https://github.com/tangison"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-t-accent text-t-bg px-6 py-3.5 font-cabinet text-sm tracking-[0.02em] hover:bg-t-accent-hover transition-colors duration-300 group"
          >
            <Github className="w-4 h-4" />
            github.com/tangison
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
