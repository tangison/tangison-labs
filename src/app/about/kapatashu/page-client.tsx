"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const professionalFocus = [
  "Director at Tangison Studio - creative and technology delivery",
  "Owner of SMEfrog Academy - practical business education for African SMEs",
  "Focus on offline-first AI systems designed for connectivity constraints",
  "Applied AI strategy for organizations beginning their AI adoption journey",
];

/* ──────────────────────────────────────────────
   KAPATASHU PAGE (CLIENT COMPONENT)
   ────────────────────────────────────────────── */

export function KapatashuPage() {
  return (
    <SiteShell>
      {/* ── Section 1: Header with Profile Image (LIGHT) ── */}
      <section
        className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20"
        aria-label="Profile header"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            {/* Back link */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-ink-muted hover:text-rust-signal transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              About
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Text column */}
            <motion.div {...fadeUp} className="flex-1">
              {/* Category label */}
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-rust-signal block mb-6">
                Principal Consultant
              </span>

              {/* H1 */}
              <h1 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-4">
                Tate-Ati Tangi Iigonda
              </h1>

              {/* Subtitle */}
              <p className="font-satoshi text-lg md:text-xl text-ink-muted leading-relaxed">
                Principal Consultant &amp; AI Strategist
              </p>
            </motion.div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-64 lg:w-72 shrink-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/tangi-profile.png"
                  alt="Tate-Ati Tangi Iigonda - Principal Consultant and AI Strategist at TANGISON"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 288px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full-width Landscape Image ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28" aria-label="Landscape photograph">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[21/9] overflow-hidden"
          >
            <Image
              src="/images/kapatashu-landscape.png"
              alt="Namibian landscape - the environment where TANGISON builds and deploys AI systems"
              fill
              className="object-cover cinematic-image"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: The AI Literacy Mandate (LIGHT) ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center gap-4 mb-4">
            <div className="editorial-divider" aria-hidden="true" />
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-10 md:mb-14"
          >
            The AI Literacy Mandate
          </motion.h2>

          <motion.div {...fadeUp} className="space-y-6">
            <p className="font-satoshi text-ink text-base md:text-lg leading-relaxed">
              Namibia&apos;s business landscape is dominated by micro, small, and
              medium enterprises. These organizations face regulatory
              requirements around data handling, digital compliance, and
              reporting that most cannot meet without digital infrastructure.
              AI systems built for European or American bandwidth and hardware
              assumptions do not function here. The gap between what AI can do
              and what local businesses can actually use is not a technology
              problem - it is a literacy problem.
            </p>
            <p className="font-satoshi text-ink text-base md:text-lg leading-relaxed">
              Localized AI infrastructure must account for intermittent
              connectivity, limited computing resources, and regulatory
              frameworks that differ from the jurisdictions where most AI tools
              are built. Digital education is the prerequisite. Without it,
              organizations adopt tools they cannot maintain, evaluate, or
              trust. SMEfrog Academy exists to address this directly: structured
              practical education that teaches business owners how to evaluate,
              implement, and operate digital systems within their actual
              constraints, not theoretical ones.
            </p>
            <p className="font-satoshi text-ink text-base md:text-lg leading-relaxed">
              Economic resilience in Namibia depends on whether MSMEs can meet
              compliance standards and participate in digital markets. This is
              not aspirational - it is operational. The organizations that
              develop digital competence now will be the ones that survive
              regulatory tightening and market consolidation. The mandate is
              clear: build local capacity, deliver practical education, and
              create AI systems that work where the internet does not.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Professional Focus (LIGHT) ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center gap-4 mb-4">
            <div className="editorial-divider" aria-hidden="true" />
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-10 md:mb-14"
          >
            Professional Focus
          </motion.h2>

          <motion.ul className="space-y-4">
            {professionalFocus.map((item, i) => (
              <motion.li
                key={i}
                {...staggerItem}
                transition={{
                  ...staggerItem.transition,
                  delay: i * 0.08,
                }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-satoshi text-ink text-base md:text-lg leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Section 4: Background (LIGHT) ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="flex items-center gap-4 mb-4">
            <div className="editorial-divider" aria-hidden="true" />
          </motion.div>
          <motion.h2
            {...fadeUp}
            className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-10 md:mb-14"
          >
            Background
          </motion.h2>

          <motion.div {...fadeUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0"
                aria-hidden="true"
              />
              <span className="font-satoshi text-ink text-base md:text-lg leading-relaxed">
                High School graduation - November 2021
              </span>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-1.5 h-1.5 bg-rust-signal mt-2.5 shrink-0"
                aria-hidden="true"
              />
              <span className="font-satoshi text-ink text-base md:text-lg leading-relaxed">
                Ongoing University studies combined with entrepreneurship
              </span>
            </div>
            <p className="font-satoshi text-ink text-base md:text-lg leading-relaxed pt-4">
              Academic study and applied technology work are not separate tracks.
              University coursework in computer science and business provides the
              theoretical foundation. Tangison Studio and SMEfrog Academy provide
              the testing ground. Every system built, every course delivered, and
              every client engagement feeds back into both domains. The result is
              work that is grounded in formal methodology but shaped by direct
              experience with the constraints and opportunities of operating in
              Namibia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: CTA (DARK) ── */}
      <section
        className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-atlantic-black"
        aria-label="Work with Tate-Ati"
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-cabinet text-[clamp(2.5rem,6vw,6rem)] font-black tracking-[-0.04em] text-skeleton-bone mb-10 leading-[0.9]"
          >
            Work with Tate-Ati
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-rust-signal text-warm-white px-10 py-5 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-rust-light transition-colors duration-300 group"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
