"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import { TypeWriter } from "@/components/tangison/type-writer";

/* ─── Focus Area Data ──────────────────────────────────────────── */

const focusAreas = [
  { title: "Applied AI", desc: "AI systems built for real tasks: classification, routing, text processing. Not research papers that never run." },
  { title: "Open Source", desc: "Public repositories. Every tool we build for our own workflow gets published." },
  { title: "Experiments", desc: "Short-lived prototypes that test one assumption at a time. Ship, iterate, or kill." },
  { title: "Publications", desc: "Technical writing about what we built, what broke, and what the data showed." },
];

/* ─── Reduced motion subscription ─── */

function subscribeToReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/* ─── Home Page ───────────────────────────────────────────────── */

export function HomePage() {
  /* ─── Anime.js Hero Choreography ─── */
  const heroBgRef = useRef<HTMLDivElement>(null);
  const videoAccentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      // Static render — set all elements visible
      [heroBgRef, videoAccentRef, headingRef, supportRef, ctaRef].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "none";
        }
      });
      return;
    }

    // Dynamic import of anime.js to avoid SSR issues
    let timeline: { pause: () => void } | null = null;

    import("animejs").then(({ createTimeline, utils }) => {
      const tl = createTimeline({
        defaults: { ease: "outQuart" },
      });

      // 1. Background image: fade in over 1.2s
      if (heroBgRef.current) {
        tl.add(heroBgRef.current, {
          opacity: [0, 1],
          duration: 1200,
        }, 0);
      }

      // 2. Video accent: slide in from right over 0.8s, delay 0.4s
      if (videoAccentRef.current) {
        tl.add(videoAccentRef.current, {
          translateX: [40, 0],
          opacity: [0, 1],
          duration: 800,
        }, 400);
      }

      // 3. Heading container: fade in
      if (headingRef.current) {
        tl.add(headingRef.current, {
          opacity: [0, 1],
          duration: 600,
        }, 600);
      }

      // 4. Support text: fade in, delay 0.8s
      if (supportRef.current) {
        tl.add(supportRef.current, {
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 600,
        }, 800);
      }

      // 5. CTA buttons: fade in with stagger, delay 1.2s
      if (ctaRef.current) {
        tl.add(Array.from(ctaRef.current.children) as HTMLElement[], {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 500,
        delay: utils.stagger(100),
      }, 1200);
      }

      timeline = tl;
    });

    return () => {
      if (timeline) {
        timeline.pause();
      }
    };
  }, [prefersReducedMotion]);

  return (
    <SiteShell>
      {/* ─── Hero: 60vh with desert landscape + video accent ─── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background image — animated via Anime.js */}
        <div ref={heroBgRef} style={prefersReducedMotion ? {} : { opacity: 0 }}>
          <Image
            src="/images/gallery/desert-road-landscape.webp"
            alt="Desert road stretching into the Namibian landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-t-fg/50" />

        {/* Video accent element — desktop only, right side */}
        <div
          ref={videoAccentRef}
          className="hidden lg:block absolute right-6 md:right-12 lg:right-20 top-0 bottom-0 w-[300px] max-w-[300px] overflow-hidden"
          style={prefersReducedMotion ? {} : { opacity: 0, transform: "translateX(40px)" }}
        >
          <div className="relative w-full h-full border-2 border-t-video-frame">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/video/labs-hero-poster.jpg"
              aria-hidden="true"
              className="w-full h-full object-cover"
            >
              <source src="/video/labs-hero.mp4" type="video/mp4" />
              <source src="/video/labs-hero.webm" type="video/webm" />
            </video>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-[1200px] mx-auto w-full">
            {/* Heading with TypeWriter */}
            <div ref={headingRef} style={prefersReducedMotion ? {} : { opacity: 0 }}>
              <h1 className="font-satoshi font-bold text-[clamp(2rem,5vw,4rem)] tracking-[-0.02em] leading-[1.05] text-t-fg-inverse mb-4">
                <TypeWriter
                  text="We build what we research"
                  speed={45}
                  delay={0.8}
                />
              </h1>
            </div>

            {/* Support text */}
            <div ref={supportRef} style={prefersReducedMotion ? {} : { opacity: 0, transform: "translateY(10px)" }}>
              <p className="font-cabinet text-base md:text-lg text-t-fg-inverse/70 leading-relaxed max-w-[55ch] mb-8">
                The R&D division of Tangison. We write code, not press releases.
                Open-source tools, applied AI, and prototypes from Windhoek, Namibia.
              </p>
            </div>

            {/* CTA buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4" style={prefersReducedMotion ? {} : { opacity: 0 }}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 bg-t-accent text-t-bg px-6 py-3.5 font-cabinet text-sm tracking-[0.02em] hover:bg-t-accent-hover transition-colors duration-300 group"
              >
                View projects
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center gap-3 border border-t-fg-inverse/40 text-t-fg-inverse px-6 py-3.5 font-cabinet text-sm tracking-[0.02em] hover:bg-t-fg-inverse/10 transition-colors duration-300 group"
              >
                Explore research
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* ─── Tangison Sentry announcement ──────────────────────── */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-t-bg-elevated">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: the watchtower image */}
            <div className="relative overflow-hidden">
              <Image
                src="/images/sentry.webp"
                alt="A minimal signal watchtower with one teal light over a foggy desert horizon"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right: the announcement */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jetbrains text-[10px] text-t-fg-subtle uppercase tracking-[0.2em]">
                  Coming from the Labs
                </span>
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.15em] text-t-teal bg-t-teal/10 px-2 py-0.5">
                  In development
                </span>
              </div>
              <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-t-fg mb-4">
                Tangison Sentry
              </h2>
              <p className="font-cabinet text-base text-t-fg-muted leading-relaxed max-w-[55ch] mb-6">
                Monitoring for the systems institutions run on. Sentry watches
                uptime, performance, SSL certificates and content changes
                across every site you operate, and tells you before your users
                do, with alerts on WhatsApp first, because that is where
                Namibian teams actually are. It started the way our products
                do: as the internal tool that keeps our own properties honest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 bg-t-accent text-t-bg px-6 py-3.5 font-cabinet text-sm tracking-[0.02em] hover:bg-t-accent-hover transition-colors duration-300 group"
                >
                  Read about it
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="mailto:contact@tangison.com"
                  className="inline-flex items-center gap-3 border border-t-fg/20 text-t-fg px-6 py-3.5 font-cabinet text-sm tracking-[0.02em] hover:bg-t-fg/5 transition-colors duration-300 group"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Focus Areas: Split layout (photo + list) — STATIC ─── */}
      <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: architecture photo */}
            <div className="relative overflow-hidden">
              <Image
                src="/images/gallery/concrete-glass-architecture.webp"
                alt="Concrete and glass architecture in Namibia"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: stacked typographic list */}
            <div>
              <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-t-fg mb-10">
                What we work on
              </h2>

              {focusAreas.map((area, i) => (
                <div
                  key={area.title}
                  className="group py-6 border-b border-t-border last:border-b-0"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-jetbrains text-[10px] text-t-fg-subtle uppercase tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <h3 className="font-satoshi font-medium text-xl text-t-fg relative inline-block">
                      {area.title}
                      <span className="absolute bottom-0 left-0 h-[2px] bg-t-accent w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
                    </h3>
                  </div>
                  <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed ml-[calc(10px+0.2em+16px)]">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ecosystem: Horizontal band — STATIC ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-t-bg-elevated">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-t-fg mb-12">
            Part of the Tangison ecosystem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Studio */}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="font-jetbrains text-[10px] text-t-fg-subtle uppercase tracking-[0.2em] block mb-2">
                studio.tangison.com
              </span>
              <h3 className="font-satoshi font-medium text-xl text-t-fg mb-2 inline-block relative">
                Studio
                <span className="absolute -bottom-1 left-0 h-[2px] bg-t-accent/40 w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
              </h3>
              <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
                Design, development, and hosting. The team that builds and runs every Tangison property.
              </p>
              <ArrowUpRight className="w-3.5 h-3.5 text-t-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Agent */}
            <a
              href="https://agent.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="font-jetbrains text-[10px] text-t-fg-subtle uppercase tracking-[0.2em] block mb-2">
                agent.tangison.com
              </span>
              <h3 className="font-satoshi font-medium text-xl text-t-fg mb-2 inline-block relative">
                Agent
                <span className="absolute -bottom-1 left-0 h-[2px] bg-t-teal/40 w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
              </h3>
              <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
                AI agent products. Task-specific automation that routes work to the right model and runs it.
              </p>
              <ArrowUpRight className="w-3.5 h-3.5 text-t-teal mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Labs (current) — highlighted */}
            <div className="border-2 border-t-accent p-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-t-accent" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-t-accent" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-t-accent uppercase tracking-[0.2em] block mb-2">
                labs.tangison.com
              </span>
              <span className="font-jetbrains text-[9px] text-t-accent/70 uppercase tracking-[0.15em] bg-t-accent/10 px-2 py-1">
                Current
              </span>
              <h3 className="font-satoshi font-medium text-xl text-t-fg mt-2 mb-2">
                Labs
              </h3>
              <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
                Research and development. The division that tests ideas against real constraints before they become products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Research Highlights: Dark background — STATIC ─── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-t-fg text-t-fg-inverse">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            {/* Left: heading */}
            <div>
              <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3.5vw,3rem)] tracking-[-0.02em] text-t-fg-inverse mb-4">
                Current research
              </h2>
              <p className="font-cabinet text-sm text-t-fg-subtle leading-relaxed max-w-[40ch]">
                We start with a concrete problem. We end with working code. Nothing in between is decoration.
              </p>
            </div>

            {/* Right: numbered list */}
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Webman System",
                  desc: "Skills-based website creation workflow for consistent, auditable site builds. Plan, content, brand, create, audit, deploy.",
                  status: "Active",
                },
                {
                  num: "02",
                  title: "Agent Orchestration",
                  desc: "Multi-agent coordination protocols for complex task decomposition and execution. Handoffs, validation, composition.",
                  status: "Active",
                },
                {
                  num: "03",
                  title: "Local-First AI",
                  desc: "On-device inference patterns that cut cloud calls. Quantisation, caching, fallback to server only when local resources run out.",
                  status: "Exploring",
                },
                {
                  num: "04",
                  title: "Tangison Sentry",
                  desc: "Monitoring for the systems institutions run on: uptime, performance, SSL and content checks, with alerts on WhatsApp first. Now in development as a product.",
                  status: "In development",
                },
              ].map((item) => (
                <div key={item.num} className="group">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-jetbrains text-[10px] text-t-accent tracking-[0.2em]">
                      {item.num}
                    </span>
                    <h3 className="font-satoshi font-medium text-lg text-t-fg-inverse inline-block relative">
                      {item.title}
                      <span className="absolute -bottom-1 left-0 h-[2px] bg-t-accent w-0 group-hover:w-full transition-[width] duration-500 ease-out" />
                    </h3>
                    <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 ${
                      item.status === "Active" || item.status === "In development" ? "text-t-teal bg-t-teal/10" : "text-t-rust-light bg-t-rust-light/10"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="font-cabinet text-sm text-t-fg-subtle leading-relaxed ml-[calc(10px+0.2em+16px)]">
                    {item.desc}
                  </p>
                </div>
              ))}

              <div>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-3 border border-t-accent text-t-accent px-5 py-3 font-cabinet text-sm tracking-[0.02em] hover:bg-t-accent/10 transition-colors duration-300 group mt-4"
                >
                  Explore research
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Open Source: Split layout — STATIC ─── */}
      <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            {/* Left: GitHub icon + heading */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Github className="w-5 h-5 text-t-accent" />
                <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-t-fg">
                  Open source
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  { name: "webman", url: "https://github.com/tangison/webman" },
                  { name: "tangison-labs", url: "https://github.com/tangison/tangison-labs" },
                ].map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jetbrains text-sm text-t-fg hover:text-t-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    tangison/{repo.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: descriptions */}
            <div>
              <p className="font-cabinet text-base text-t-fg-muted leading-relaxed max-w-[65ch] mb-6">
                Our repositories are public. Star them, fork them, use them. Every tool we build for ourselves gets shared.
              </p>

              <div className="space-y-6">
                <div className="border-b border-t-border pb-6">
                  <h3 className="font-satoshi font-medium text-lg text-t-fg mb-2">
                    Webman
                  </h3>
                  <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
                    Skills-based website creation workflow. Plan, build, audit, deploy. A structured system for building consistent, production-ready websites. Used internally to build all Tangison properties.
                  </p>
                </div>
                <div className="pb-6">
                  <h3 className="font-satoshi font-medium text-lg text-t-fg mb-2">
                    Tangison Labs
                  </h3>
                  <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">
                    This site. Built with Next.js, Tailwind CSS, and Framer Motion. Serves as a live example of our design system and brand language.
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/tangison"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-t-fg text-t-bg px-5 py-3 font-cabinet text-sm tracking-[0.02em] hover:bg-t-fg/80 transition-colors duration-300 group mt-4"
              >
                <Github className="w-4 h-4" />
                View all on GitHub
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA: Left-aligned on accent background — expansive ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-t-accent">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-satoshi font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.02em] text-t-bg mb-6 max-w-[50ch]">
            From prototype to product
          </h2>
          <p className="font-cabinet text-base md:text-lg text-t-bg/70 leading-relaxed max-w-[55ch] mb-10">
            Experiments that pass validation become Tangison products. The ones that fail teach us what to avoid next time. Both are useful.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:contact@tangison.com"
              className="inline-flex items-center gap-3 bg-t-card-surface text-t-fg px-6 py-3.5 font-cabinet text-sm tracking-[0.02em] hover:bg-t-bg-elevated transition-colors duration-300 group"
            >
              Get in touch
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/experiments"
              className="inline-flex items-center gap-3 border border-t-bg/30 text-t-bg px-6 py-3.5 font-cabinet text-sm tracking-[0.02em] hover:bg-t-bg/10 transition-colors duration-300 group"
            >
              View experiments
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
