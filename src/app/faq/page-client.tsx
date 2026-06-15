"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";

interface FaqItem {
  question: string;
  answer: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function FaqPage({ items }: { items: FaqItem[] }) {
  return (
    <SiteShell>
      <PageHeader
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Common questions about AI deployment, self-hosted infrastructure, and working with TANGISON."
        backHref="/"
        backLabel="Home"
      />

      {/* FAQ Accordion */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="divide-y divide-black/[0.06]">
              {items.map((item, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group py-6"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none font-cabinet text-lg md:text-xl font-bold tracking-tight text-ink hover:text-rust-signal transition-colors duration-300 [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span className="ml-4 shrink-0 text-rust-signal font-jetbrains text-xs tracking-widest group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 font-satoshi text-ink-muted text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </div>
                </motion.details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="w-12 h-[2px] bg-rust-signal mx-auto mb-8" aria-hidden="true" />
          <h2 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-skeleton-bone mb-6">
            Have a question not listed here?
          </h2>
          <p className="font-satoshi text-fog-gray text-lg mb-10 max-w-lg mx-auto">
            Get in touch with our team. We are happy to discuss your specific needs and answer any questions about working with TANGISON.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-rust-signal text-warm-white px-8 py-4 font-jetbrains text-[11px] uppercase tracking-[0.15em] hover:bg-rust-light transition-colors duration-300 group"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
