"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

/* ─── Project Data ────────────────────────────────────────────── */

const researchProjects = [
  {
    num: "01",
    title: "Webman System",
    desc: "Skills-based website creation workflow. Plan, content, brand, create, audit, deploy. A structured system for building consistent, production-ready websites. Used internally to build all Tangison properties.",
    status: "Active" as const,
    github: "https://github.com/tangison/webman",
  },
  {
    num: "02",
    title: "Agent Orchestration Framework",
    desc: "Multi-agent coordination protocols for complex task decomposition and execution. Defines handoff interfaces, checkpoint mechanisms, and validation strategies that ensure quality at each stage.",
    status: "Active" as const,
    github: "https://github.com/tangison",
  },
  {
    num: "03",
    title: "Local-First AI Patterns",
    desc: "Patterns for running capable AI models on-device without relying on cloud backends. Quantisation, model selection, caching, and graceful fallback when local resources are insufficient.",
    status: "Exploring" as const,
    github: "https://github.com/tangison",
  },
];

const statusColors: Record<string, string> = {
  Active: "text-t-teal bg-t-teal/10",
  Exploring: "text-t-rust-light bg-t-rust-light/10",
};

/* ─── Research Projects Page ──────────────────────────────────── */

export function ResearchProjectsPage() {
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
            R&D projects
          </h1>
          <p className="font-cabinet text-base md:text-lg text-t-fg-muted leading-relaxed max-w-[65ch]">
            Active and exploratory research projects. Each targets a specific problem at the intersection of AI, automation, and infrastructure.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* Projects as numbered list — STATIC */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          {researchProjects.map((project) => (
            <div
              key={project.num}
              className="group py-10 border-b border-t-border last:border-b-0"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-jetbrains text-[10px] text-t-accent uppercase tracking-[0.2em]">
                  {project.num}
                </span>
                <h2 className="font-satoshi font-medium text-xl text-t-fg group-hover:text-t-accent transition-colors duration-300 relative inline-block">
                  {project.title}
                  <span className="absolute -bottom-1 left-0 h-[2px] bg-t-accent w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
                </h2>
                <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed max-w-[65ch] ml-[calc(10px+0.2em+16px)] mb-4">
                {project.desc}
              </p>

              <div className="ml-[calc(10px+0.2em+16px)]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-jetbrains text-[9px] uppercase tracking-[0.15em] text-t-fg-muted hover:text-t-accent transition-colors duration-300"
                >
                  <Github className="w-3.5 h-3.5" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
