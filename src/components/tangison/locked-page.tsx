"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface LockedPageProps {
  title: string;
  description: string;
}

export function LockedPage({ title, description }: LockedPageProps) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="max-w-lg w-full text-center"
      >
        {/* Accent border top */}
        <div className="border-t-2 border-[#c4562a] pt-8 mb-8">
          {/* Lock icon */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 border border-[#2a2520] flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#a89f91]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Page title */}
          <h1 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#f5f0e8] mb-4">
            {title}
          </h1>

          {/* Description */}
          <p className="font-cabinet text-base text-[#a89f91] leading-relaxed mb-3 max-w-md mx-auto">
            {description}
          </p>

          {/* Status message */}
          <p className="font-jetbrains text-xs text-[#a89f91]/60 uppercase tracking-[0.2em] mb-10">
            This page is not yet available
          </p>
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-[#a89f91] hover:text-[#c4562a] transition-colors duration-300"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to home
        </Link>
      </motion.div>
    </section>
  );
}
