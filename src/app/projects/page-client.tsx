"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Globe } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import { heroSlideDown } from "@/lib/animation-variants";

/* ─── Project Data ────────────────────────────────────────────── */

const projects = [
  {
    name: "Tangison Sentry",
    desc: "Monitoring for the systems institutions run on: uptime, performance, SSL and content checks, with alerts on WhatsApp first. In development in the Labs.",
    status: "In development" as const,
  },
  {
    name: "Webman",
    desc: "Skills-based website creation workflow. Plan, content, brand, create, audit, deploy.",
    status: "Active" as const,
    url: "https://github.com/tangison/webman",
    hasSite: true,
    siteUrl: "https://skills.tangison.com",
  },
  {
    name: "Tangison Labs",
    desc: "The website you are reading now. Built, hosted, and maintained by Tangison Studio.",
    status: "Live" as const,
    url: "https://github.com/tangison/tangison-labs",
    hasSite: true,
    siteUrl: "https://labs.tangison.com",
  },
  {
    name: "Tangison Gateway",
    desc: "The hub page for all Tangison properties. One URL, four destinations.",
    status: "Live" as const,
    url: "https://github.com/tangison/tangison",
    hasSite: true,
    siteUrl: "https://tangison.com",
  },
  {
    name: "Agent Orchestration Protocol",
    desc: "Multi-agent coordination research.",
    status: "Research" as const,
    url: "https://github.com/tangison",
    hasSite: false,
  },
  {
    name: "Local-First Inference",
    desc: "Patterns for running AI models on-device.",
    status: "Exploring" as const,
    url: "https://github.com/tangison",
    hasSite: false,
  },
  {
    name: "Design System Tokens",
    desc: "Shared token layer for visual consistency.",
    status: "Active" as const,
    url: "https://github.com/tangison",
    hasSite: false,
  },
];

const statusColors: Record<string, string> = {
  Live: "text-t-teal bg-t-teal/10",
  Active: "text-t-accent bg-t-accent/10",
  Research: "text-t-fg-muted bg-t-fg-muted/10",
  Exploring: "text-t-rust-light bg-t-rust-light/10",
  "In development": "text-t-teal bg-t-teal/10",
};

/* ─── Projects Page ───────────────────────────────────────────── */

export function ProjectsPage() {
  return (
    <SiteShell>
      {/* ─── Hero with image ─── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/gallery/concrete-glass-architecture.webp"
          alt="Concrete and glass architecture"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-t-fg/50" />

        <div className="absolute inset-0 flex items-end pb-12 md:pb-16 px-6 md:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-[1200px] mx-auto w-full"
          >
            <motion.h1
              variants={heroSlideDown}
              custom={0.3}
              className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-t-fg-inverse mb-3"
            >
              Things we have shipped
            </motion.h1>
            <motion.p
              variants={heroSlideDown}
              custom={0.5}
              className="font-cabinet text-base text-t-fg-inverse/70 leading-relaxed max-w-[55ch]"
            >
              Projects that started as research questions or production needs. Some are running right now. Others are tools we maintain. A few are open questions we are still working on.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Projects: Table-style layout (name | description | status) ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-[120px_1fr_100px_80px] gap-4 pb-4 border-b border-t-border-strong">
            <span className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-subtle">Status</span>
            <span className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-subtle">Name</span>
            <span className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-subtle">Description</span>
            <span className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-subtle">Links</span>
          </div>

          {projects.map((project) => (
            <div
              key={project.name}
              className="group border-b border-t-border py-6"
            >
              {/* Mobile layout */}
              <div className="md:hidden space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 shrink-0 ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                  <h3 className="font-satoshi font-medium text-lg text-t-fg">
                    {project.name}
                  </h3>
                </div>
                <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex items-center gap-2">
                  {project.hasSite && (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-t-border flex items-center justify-center hover:border-t-accent/40 transition-colors duration-300"
                      aria-label={`Visit ${project.name}`}
                    >
                      <Globe className="w-3.5 h-3.5 text-t-fg-muted" />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-t-border flex items-center justify-center hover:border-t-accent/40 transition-colors duration-300"
                      aria-label={`${project.name} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5 text-t-fg-muted" />
                    </a>
                  )}
                </div>
              </div>

              {/* Desktop table layout */}
              <div className="hidden md:grid grid-cols-[120px_1fr_100px_80px] gap-4 items-center">
                <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${statusColors[project.status]}`}>
                  {project.status}
                </span>
                <h3 className="font-satoshi font-medium text-lg text-t-fg group-hover:text-t-accent transition-colors duration-300">
                  {project.name}
                </h3>
                <span className="font-cabinet text-sm text-t-fg-muted truncate">
                  {project.desc}
                </span>
                <div className="flex items-center gap-2">
                  {project.hasSite && (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 border border-t-border flex items-center justify-center hover:border-t-accent/40 transition-colors duration-300"
                      aria-label={`Visit ${project.name}`}
                    >
                      <Globe className="w-3 h-3 text-t-fg-muted" />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 border border-t-border flex items-center justify-center hover:border-t-accent/40 transition-colors duration-300"
                      aria-label={`${project.name} on GitHub`}
                    >
                      <Github className="w-3 h-3 text-t-fg-muted" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-t-bg-elevated">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-t-fg mb-4">
            Have a problem worth researching?
          </h2>
          <p className="font-cabinet text-base text-t-fg-muted leading-relaxed max-w-[55ch] mb-8">
            We take on problems that have both a real need and a hard technical constraint. If your problem has both, tell us about it.
          </p>
          <a
            href="mailto:contact@tangison.com"
            className="inline-flex items-center gap-3 bg-t-accent text-t-bg px-6 py-3.5 font-cabinet text-sm tracking-[0.02em] hover:bg-t-accent-hover transition-colors duration-300 group"
          >
            Get in touch
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
