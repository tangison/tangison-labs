/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

/* ─── Animation Variants ──────────────────────────────────────── */

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

/* ─── Reports Page ────────────────────────────────────────────── */

export function ReportsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={slideInLeft} custom={0} className="mb-4">
              <Link
                href="/publications"
                className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.2em] hover:text-[#C4562A] transition-colors duration-300 inline-flex items-center gap-2"
              >
                Publications
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            <motion.h1 variants={slideInLeft} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              Research reports
            </motion.h1>
            <motion.p variants={slideInLeft} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Periodic research summaries and analysis from our active investigations. Reports are published when a research line reaches a meaningful milestone.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* Coming soon state */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Corner-mark styled box */}
            <div className="border-2 border-[#C4562A] p-8 md:p-12 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C4562A]" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C4562A]" aria-hidden="true" />

              <motion.h2
                variants={fadeIn}
                custom={0}
                className="font-satoshi font-bold text-[clamp(1.3rem,2.5vw,1.8rem)] tracking-[-0.01em] text-[#1A1A1A] mb-4"
              >
                Reports coming soon
              </motion.h2>

              <motion.p
                variants={fadeIn}
                custom={0.1}
                className="font-cabinet text-base text-[#6B6860] leading-relaxed mb-8"
              >
                Our first research report will be published when the Agent Orchestration Protocol reaches its validation phase. We publish reports when a research line produces findings worth sharing, not on a fixed schedule. Sign up to be notified when the first report drops.
              </motion.p>

              {submitted ? (
                <motion.div variants={fadeIn} custom={0}>
                  <p className="font-cabinet text-sm text-[#3D7A5F]">
                    Thank you. We will notify you when our first report is published.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeIn}
                  custom={0.2}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <label htmlFor="report-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="report-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-[#FAFAF8] border border-[#E0DDD8] px-4 py-3 font-cabinet text-sm text-[#1A1A1A] placeholder-[#7A756C] focus:border-[#C4562A] focus:outline-none transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    className="bg-[#C4562A] text-[#FAFAF8] px-6 py-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#A84420] transition-colors duration-300"
                  >
                    Notify me
                  </button>
                </motion.form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
