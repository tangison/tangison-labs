"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { heroSlideIn } from "@/lib/animation-variants";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
}

export function PageHeader({
  title,
  subtitle,
  backHref = "/",
  backLabel = "Home",
}: PageHeaderProps) {
  return (
    <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-t-bg-elevated/30" />
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Back link — Cabinet Grotesk, not monospace */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroSlideIn}
          custom={0}
          className="mb-8"
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 font-cabinet text-[13px] tracking-[0.05em] text-t-fg-subtle hover:text-t-accent transition-colors duration-300 group"
          >
            <ArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" />
            {backLabel}
          </Link>
        </motion.div>

        {/* Title — no eyebrow label, just clean editorial heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroSlideIn}
          custom={0.1}
          className="font-satoshi font-bold text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[1.05] text-t-fg max-w-5xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={heroSlideIn}
            custom={0.2}
            className="mt-6 text-t-fg-muted font-cabinet text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
    </section>
  );
}
