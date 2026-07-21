"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export function TermsPage() {
  return (
    <SiteShell>
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.3em]">Legal</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4vw,3rem)] text-[#1A1A1A] mb-6">Terms of Service</motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-jetbrains text-xs text-[#9B968E] uppercase tracking-[0.15em]">Last updated: July 2026</motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
            {[
              { title: "Acceptance of terms", content: "By accessing and using labs.tangison.com, you accept and agree to be bound by these terms. If you do not agree, do not use this website." },
              { title: "Use of the website", content: "This website provides information about Tangison Labs research and development activities. You may browse, read, and share links to our content. You may not scrape, copy in bulk, or redistribute our content without written permission." },
              { title: "Intellectual property", content: "All content on this website, including text, design, code, and imagery, is the property of Tangison Technologies unless otherwise stated. Our open-source repositories are licensed under the terms specified in each repository." },
              { title: "Limitation of liability", content: "The information on this website is provided as-is. We make no warranties about its completeness or accuracy. Tangison Technologies shall not be liable for any damages arising from the use of this website." },
              { title: "External links", content: "This website may contain links to external sites, including our GitHub repositories and other Tangison properties. We are not responsible for the content or practices of external sites." },
              { title: "Governing law", content: "These terms are governed by the laws of the Republic of Namibia. Any disputes shall be resolved in the courts of Namibia." },
            ].map((section) => (
              <motion.div key={section.title} variants={fadeUp}>
                <h2 className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-3">{section.title}</h2>
                <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
