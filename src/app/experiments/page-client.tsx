"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Zap, Microscope, RotateCcw } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const experiments = [
  {
    title: "Context-Aware Routing",
    desc: "Can a lightweight classifier determine which AI agent should handle a given task? Testing accuracy, latency, and fallback behaviour in a multi-model pipeline. Early results show 87% routing accuracy with sub-50ms overhead.",
    stage: "Prototype",
    icon: Zap,
    tags: ["AI", "Routing", "Classification"],
  },
  {
    title: "Streaming Markdown Renderer",
    desc: "A renderer that displays AI-generated markdown as it streams, without layout shift. The challenge is parsing partial markdown correctly while keeping the DOM stable. Currently handling 94% of edge cases in our test suite.",
    stage: "Testing",
    icon: Microscope,
    tags: ["Rendering", "Streaming", "UX"],
  },
  {
    title: "Design Token Compiler",
    desc: "A build tool that takes a single JSON token definition and outputs CSS custom properties, Tailwind config, and Figma variables. The goal is one source of truth for all brand tokens across platforms.",
    stage: "Iteration",
    icon: RotateCcw,
    tags: ["Design", "Tooling", "Build"],
  },
  {
    title: "Edge Function Auth Gateway",
    desc: "Moving preview authentication from API routes to edge functions for lower latency. Testing cookie handling, secret rotation, and session management across Vercel edge runtime. Focus on maintaining security while cutting response time by 60%.",
    stage: "Prototype",
    icon: FlaskConical,
    tags: ["Auth", "Edge", "Performance"],
  },
];

const stageColors: Record<string, string> = {
  Prototype: "text-[#C4562A] bg-[#C4562A]/10",
  Testing: "text-[#2CB5B4] bg-[#2CB5B4]/10",
  Iteration: "text-[#D4896F] bg-[#D4896F]/10",
  Shipped: "text-[#3D7A5F] bg-[#3D7A5F]/10",
};

export function ExperimentsPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="accent-orb accent-orb-rust w-[350px] h-[350px] -top-10 right-20 opacity-[0.05]" />
          <div className="accent-orb accent-orb-teal w-[250px] h-[250px] bottom-10 -left-10 opacity-[0.03]" />
          <div className="absolute inset-0 pattern-cross opacity-30" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">Experiments</span>
              <div className="flex-1 h-[1px] bg-[#E0DDD8] max-w-[80px]" />
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              Work in <span className="text-[#C4562A]">progress</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Experiments are prototypes, proof-of-concepts, and half-built ideas. Some will ship as products.
              Others teach us what not to do. All of them move us forward.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>

      {/* Stage Legend */}
      <section className="px-6 md:px-12 lg:px-20 pb-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-4">
            {["Prototype", "Testing", "Iteration", "Shipped"].map((stage) => (
              <div key={stage} className="flex items-center gap-2">
                <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-1 ${stageColors[stage]}`}>
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiments Grid */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {experiments.map((exp) => (
              <motion.div key={exp.title} variants={staggerItem} className="content-card p-8 group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 bg-[#C4562A]/8 flex items-center justify-center group-hover:bg-[#C4562A]/15 transition-colors duration-300">
                    <exp.icon className="w-5 h-5 text-[#C4562A]" />
                  </div>
                  <span className={`font-jetbrains text-[9px] uppercase tracking-[0.15em] px-2 py-1 ${stageColors[exp.stage]}`}>
                    {exp.stage}
                  </span>
                </div>
                <div className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-2 group-hover:text-[#C4562A] transition-colors duration-300">
                  {exp.title}
                </div>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#1A1A1A] text-[#F0EDE8]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">Method</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[#F0EDE8] mb-12">
              How we experiment
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: "01", title: "Question", desc: "Start with a specific, answerable question. No vague exploration." },
                { step: "02", title: "Prototype", desc: "Build the smallest thing that could answer the question. Days, not weeks." },
                { step: "03", title: "Validate", desc: "Run it against real data. Measure. Compare to the baseline." },
                { step: "04", title: "Decide", desc: "Ship it, iterate, or kill it. No zombie experiments." },
              ].map((item) => (
                <motion.div key={item.step} variants={staggerItem} className="border border-[#F0EDE8]/10 p-6">
                  <span className="font-jetbrains text-[10px] text-[#C4562A] uppercase tracking-[0.2em] block mb-4">
                    Step {item.step}
                  </span>
                  <h3 className="font-satoshi font-medium text-lg text-[#F0EDE8] mb-2">{item.title}</h3>
                  <p className="font-cabinet text-sm text-[#7A756C] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
