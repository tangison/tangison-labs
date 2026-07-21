"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export function ReportsPage() {
  return (
    <SiteShell>
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 pattern-grid opacity-30" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.3em]">Insights / Reports</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              Research <span className="text-[#C4562A]">reports</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Periodic research summaries and analysis from our active investigations.
              Reports are published when a research line reaches a meaningful milestone.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} custom={0} className="w-16 h-16 bg-[#C4562A]/8 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-7 h-7 text-[#C4562A]" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0.1} className="font-satoshi font-medium text-xl text-[#1A1A1A] mb-3">
              Reports coming soon
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base text-[#6B6860] leading-relaxed max-w-[50ch] mx-auto">
              Our first research report will be published when the Agent Orchestration Protocol reaches its validation phase. Sign up to be notified.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
