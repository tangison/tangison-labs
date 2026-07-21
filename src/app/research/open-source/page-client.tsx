"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
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

const repos = [
  {
    name: "webman",
    desc: "Skills-based website creation workflow. The system behind every Tangison property.",
    url: "https://github.com/tangison/webman",
    tags: ["CLI", "Workflow", "Skills"],
  },
  {
    name: "tangison",
    desc: "The Tangison gateway site. Server-side auth, noindex enforcement, cross-property navigation.",
    url: "https://github.com/tangison/tangison",
    tags: ["Next.js", "Auth", "Gateway"],
  },
  {
    name: "tangison-labs",
    desc: "This website. R&D division site with research, projects, and experiments.",
    url: "https://github.com/tangison/tangison-labs",
    tags: ["Next.js", "Tailwind", "R&D"],
  },
];

export function OpenSourcePage() {
  return (
    <SiteShell>
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="accent-orb accent-orb-teal w-[300px] h-[300px] -top-20 -left-20 opacity-[0.04]" />
          <div className="absolute inset-0 pattern-dots opacity-20" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">Research / Open Source</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              Public <span className="text-[#C4562A]">repositories</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              Our code is public. Use it, learn from it, contribute back if it helps you. Every tool we build for our own workflow gets shared.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-5">
            {repos.map((repo) => (
              <motion.a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer" variants={staggerItem} className="content-card p-8 group flex items-start gap-5 block">
                <div className="w-10 h-10 bg-[#F0EDE8] flex items-center justify-center shrink-0 group-hover:bg-[#C4562A]/8 transition-colors duration-300">
                  <Github className="w-5 h-5 text-[#6B6860] group-hover:text-[#C4562A] transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-jetbrains text-sm text-[#1A1A1A] mb-1 group-hover:text-[#C4562A] transition-colors duration-300">
                    tangison/{repo.name}
                  </div>
                  <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed mb-3">{repo.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {repo.tags.map((tag) => (
                      <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#D0CDC8] group-hover:text-[#C4562A] transition-colors duration-300 shrink-0 mt-1" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#F0EDE8]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A1A1A] mb-4">
              See everything on GitHub
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.1} className="font-cabinet text-base text-[#6B6860] leading-relaxed max-w-[55ch] mx-auto mb-8">
              All repositories, all issues, all pull requests. Open source means open process.
            </motion.p>
            <motion.div variants={fadeUp} custom={0.2}>
              <a
                href="https://github.com/tangison"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1A1A1A] text-[#FAFAF8] px-6 py-3.5 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#333] transition-colors duration-300 group"
              >
                <Github className="w-4 h-4" />
                github.com/tangison
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
