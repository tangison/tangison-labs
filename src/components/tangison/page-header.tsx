"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
}

export function PageHeader({
  label,
  title,
  subtitle,
  backHref = "/",
  backLabel = "Home",
}: PageHeaderProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none pattern-grid opacity-30" />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-8"
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.25em] hover:text-[#C4562A] transition-colors duration-300 group"
          >
            <ArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" />
            {backLabel}
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 bg-[#C4562A]" aria-hidden="true" />
          <span className="font-jetbrains text-[10px] text-[#7A756C] uppercase tracking-[0.3em]">{label}</span>
        </motion.div>
        <h1
          ref={headingRef}
          className="font-satoshi font-bold text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[1.05] text-[#1A1A1A] max-w-5xl"
        >
          {title}
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="mt-6 text-[#6B6860] font-cabinet text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
    </section>
  );
}
