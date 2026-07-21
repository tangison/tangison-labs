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

export function CookiesPage() {
  return (
    <SiteShell>
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.3em]">Legal</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4vw,3rem)] text-[#1A1A1A] mb-6">Cookie Policy</motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-jetbrains text-xs text-[#9B968E] uppercase tracking-[0.15em]">Last updated: July 2026</motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
            <motion.div variants={fadeUp}>
              <h2 className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-3">We do not use cookies</h2>
              <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                Tangison Labs does not use cookies for tracking, analytics, or advertising. We do not set any cookies in your browser when you visit this website. This is a deliberate choice: we believe you should be able to read our research without being tracked.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h2 className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-3">Third-party resources</h2>
              <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                This website loads fonts from Fontshare and Google Fonts. These services may set their own cookies according to their own policies. We load these resources with the "anonymous" cross-origin attribute to minimize data sharing. We do not control and are not responsible for the cookie practices of these third-party services.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h2 className="font-satoshi font-medium text-lg text-[#1A1A1A] mb-3">Changes to this policy</h2>
              <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">
                If we ever introduce cookies, we will update this policy and provide clear notice on the website. Our commitment is to never use cookies for advertising or cross-site tracking, regardless of future changes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
