"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

const sections = [
  {
    heading: "The Cloud Default",
    body: "Cloud AI services dominate the global market, and for good reason. They offer immediate access to powerful models, managed infrastructure, and pay-as-you-go pricing that eliminates upfront capital expenditure. For organizations in well-connected markets with reliable internet and predictable workloads, the cloud model works well.\n\nBut the cloud default assumes conditions that many African organizations do not have. Constant high-bandwidth connectivity. Data residency in jurisdictions with permissive data transfer agreements. Budgets that can absorb variable monthly costs. Technical teams experienced in managing cloud-native architectures. When these assumptions break down, the convenience of cloud AI becomes a liability.",
  },
  {
    heading: "When Self-Hosted Makes Sense",
    body: "Self-hosted AI becomes the better option when three conditions align: your data is sensitive or regulated, your connectivity is unreliable, or your usage is high enough that cloud costs become unpredictable.\n\nFor organizations handling personal data, financial records, or government information, keeping AI processing on your own infrastructure simplifies compliance with Namibia's data protection framework and similar regulations across the continent. You know exactly where your data is processed and who has access to it.\n\nFor organizations operating in areas with intermittent connectivity, self-hosted systems continue to work when the internet does not. An AI system that goes offline every time the connection drops is not a reliable business tool - it is a liability.\n\nFor organizations processing large volumes of data, the per-request pricing of cloud AI can escalate quickly. A self-hosted system has higher upfront costs but more predictable long-term costs, especially at scale.",
  },
  {
    heading: "When Cloud AI Is the Right Choice",
    body: "Cloud AI is the better option when you are experimenting, when your usage is low and unpredictable, or when you need capabilities that require models too large to run on your own hardware.\n\nThe early stages of AI adoption benefit from the speed and flexibility of cloud services. You can prototype quickly, test different approaches, and validate use cases without committing to infrastructure. This experimentation phase is valuable, and the cloud is well-suited for it.\n\nCloud AI also provides access to the largest, most capable models. If your use case genuinely requires a model with hundreds of billions of parameters, self-hosting is not practical for most organizations. The cloud gives you access to these capabilities without the hardware investment.\n\nThe key is recognizing when you have moved past the experimentation phase. Many organizations stay on cloud AI longer than they should because the switching costs are high and the alternatives seem complex. But the longer you stay, the more entrenched you become.",
  },
  {
    heading: "Making the Decision",
    body: "The decision between self-hosted and cloud AI is not binary. Most organizations end up with a hybrid approach: cloud services for experimentation and burst capacity, self-hosted infrastructure for production workloads and sensitive data.\n\nThe practical decision framework is straightforward. Start with cloud AI for experimentation and validation. Move to self-hosted infrastructure when your usage becomes predictable and significant, when your data has regulatory requirements, or when your connectivity cannot guarantee cloud availability. Use both when your workloads have different profiles.\n\nWhat matters is making the decision deliberately, based on your actual conditions and requirements, rather than defaulting to whichever model the vendor you spoke to first happens to offer. Your infrastructure decisions shape what your AI systems can do, how much they cost, and who controls the data they process. These are not decisions to make by default.",
  },
];

const tags = ["Infrastructure", "Self-Hosted", "Cloud AI", "AI Strategy", "Africa"];

export function SelfHostedVsCloudAiPage() {
  return (
    <SiteShell>
      {/* Article Header */}
      <section
        className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 lg:px-20"
        aria-label="Article header"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <Link
              href="/insights/articles"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-ink-muted hover:text-rust-signal transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Articles
            </Link>

            {/* Category label */}
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-rust-signal block mb-6">
              Infrastructure
            </span>

            {/* H1 */}
            <h1 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-6">
              Self-Hosted vs. Cloud AI for African Organizations
            </h1>

            {/* Meta row */}
            <div className="flex items-center gap-6 text-ink-muted">
              <span className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </span>
              <span className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                July 15, 2025
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section
        className="pb-20 md:pb-28 px-6 md:px-12 lg:px-20"
        aria-label="Article content"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            {/* Lede */}
            <p className="font-satoshi text-lg md:text-xl text-ink leading-relaxed mb-12 border-l-2 border-rust-signal/30 pl-6">
              The choice between self-hosted and cloud AI is not a question of which technology is better. It is a question of which model fits the conditions under which your organization actually operates - and for many African organizations, those conditions favor infrastructure you control.
            </p>

            {/* Sections */}
            {sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-12"
              >
                <h2 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6">
                  {section.heading}
                </h2>
                {section.body.split("\n\n").map((paragraph, pi) => (
                  <p
                    key={pi}
                    className="font-satoshi text-base md:text-lg text-ink-muted leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            ))}

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 pt-8 border-t border-black/[0.06]"
            >
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-ink-muted block mb-4">
                Tags
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-jetbrains text-[10px] uppercase tracking-wider text-ink-muted bg-warm-gray px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 pt-8 border-t border-black/[0.06]"
            >
              <div className="bg-atlantic-black p-8 md:p-12 text-center">
                <h3 className="font-cabinet text-2xl md:text-3xl font-bold tracking-tight text-skeleton-bone mb-4">
                  Want to discuss this topic?
                </h3>
                <p className="font-satoshi text-skeleton-bone/60 text-base mb-8 max-w-md mx-auto">
                  Talk to our team about which deployment model fits your organization.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
                >
                  Get in Touch
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
