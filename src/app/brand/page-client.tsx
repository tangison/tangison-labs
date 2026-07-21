"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

/* Light theme palette */
const paletteColors = [
  { name: "Background", token: "--bg", hex: "#FAFAF8", usage: "Page background" },
  { name: "Elevated", token: "--bg-elevated", hex: "#F0EDE8", usage: "Card / surface" },
  { name: "Surface", token: "--surface", hex: "#E8E5DF", usage: "Neutral surface" },
  { name: "Foreground", token: "--fg", hex: "#1A1A1A", usage: "Primary text" },
  { name: "Muted", token: "--fg-muted", hex: "#6B6860", usage: "Secondary text" },
  { name: "Accent", token: "--accent", hex: "#C4562A", usage: "Rust-signal accent" },
  { name: "Teal", token: "--teal", hex: "#2CB5B4", usage: "Secondary accent" },
  { name: "Border", token: "--border", hex: "#E0DDD8", usage: "Dividers, card borders" },
];

const typeScale = [
  { element: "H1", font: "Satoshi 700", size: "clamp(2rem, 5vw, 4rem)", tracking: "-0.02em" },
  { element: "H2", font: "Satoshi 700", size: "clamp(1.5rem, 3vw, 2.5rem)", tracking: "-0.01em" },
  { element: "H3", font: "Satoshi 500", size: "1.125rem", tracking: "0" },
  { element: "Body", font: "Cabinet Grotesk 400", size: "1rem (16px)", tracking: "0" },
  { element: "Label", font: "JetBrains Mono 400", size: "0.625rem (10px)", tracking: "0.2em" },
  { element: "Code", font: "JetBrains Mono 400", size: "0.875rem (14px)", tracking: "0" },
];

const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(value); } catch { /* fallback */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.15em] hover:text-[#C4562A] transition-colors duration-200" aria-label={`Copy ${value}`}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function Section({ id, label, title, children, bg = "bg-transparent" }: {
  id: string; label: string; title: string; children: React.ReactNode; bg?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-12 lg:px-20 ${bg} border-t border-[#E0DDD8]`}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 bg-[#C4562A]" />
            <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.3em]">{label}</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={0.05} className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#1A1A1A] mb-10">
            {title}
          </motion.h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function BrandPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="accent-orb accent-orb-rust w-[500px] h-[500px] -top-40 -right-40 opacity-[0.05]" />
          <div className="absolute inset-0 pattern-grid opacity-40" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#C4562A]" />
              <span className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.3em]">Brand</span>
              <div className="flex-1 h-[1px] bg-[#E0DDD8] max-w-[80px]" />
            </motion.div>
            <motion.h1 variants={fadeUp} custom={0.1} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-[#1A1A1A] mb-6">
              Tangison Labs <span className="text-[#C4562A]">brand</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.2} className="font-cabinet text-base md:text-lg text-[#6B6860] leading-relaxed max-w-[65ch]">
              The visual and verbal identity of our research division. This page documents every design decision so we stay consistent across every surface.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><div className="accent-bar" /></div>
      </section>

      {/* Purpose */}
      <Section id="purpose" label="Purpose" title="Why we exist">
        <motion.div variants={fadeUp} custom={0.1} className="max-w-[65ch]">
          <p className="font-cabinet text-base text-[#6B6860] leading-relaxed mb-4">
            Tangison Labs exists to research, prototype, and validate new technology before it becomes a product.
            We are the experimental wing of Tangison: the place where ideas are tested rigorously before they reach users.
          </p>
          <p className="font-cabinet text-base text-[#6B6860] leading-relaxed">
            Our audience is researchers and engineers first, business leaders second. Everything we publish must be
            technically sound and honestly presented. We never inflate results or claim capabilities we have not verified.
          </p>
        </motion.div>
      </Section>

      {/* Personality */}
      <Section id="personality" label="Personality" title="How we sound" bg="bg-[#F0EDE8]">
        <motion.div variants={fadeUp} custom={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-jetbrains text-[10px] text-[#3D7A5F] uppercase tracking-[0.2em] mb-4">We are</h3>
            <ul className="space-y-3">
              {["Precise but not stiff", "Technical but not jargon-heavy", "Confident but not arrogant", "Open but not careless", "African but not stereotyped"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#3D7A5F] shrink-0 mt-0.5" />
                  <span className="font-cabinet text-sm text-[#1A1A1A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-jetbrains text-[10px] text-[#C54444] uppercase tracking-[0.2em] mb-4">We are not</h3>
            <ul className="space-y-3">
              {["Hype-driven or buzzword-heavy", "Vague or non-committal", "Generic AI slop language", "Academic to the point of unusability", "Performative or trend-chasing"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#C54444] shrink-0 mt-0.5" />
                  <span className="font-cabinet text-sm text-[#1A1A1A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* Colours */}
      <Section id="colours" label="Colours" title="Palette">
        <motion.div variants={fadeUp} custom={0.1} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {paletteColors.map((color) => (
            <div key={color.name} className="content-card overflow-hidden">
              <div className="h-20" style={{ backgroundColor: color.hex }} />
              <div className="p-4">
                <p className="font-satoshi font-medium text-sm text-[#1A1A1A] mb-1">{color.name}</p>
                <div className="flex items-center justify-between">
                  <code className="font-jetbrains text-[11px] text-[#6B6860]">{color.hex}</code>
                  <CopyButton value={color.hex} />
                </div>
                <p className="font-cabinet text-xs text-[#9B968E] mt-1">{color.usage}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* Typography */}
      <Section id="typography" label="Typography" title="Type scale" bg="bg-[#F0EDE8]">
        <motion.div variants={fadeUp} custom={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="content-card p-6">
              <p className="font-satoshi font-bold text-3xl text-[#1A1A1A] mb-2">Satoshi</p>
              <p className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.15em] mb-3">Headings</p>
              <p className="font-satoshi font-bold text-lg text-[#1A1A1A]">Bold 700</p>
              <p className="font-satoshi font-medium text-lg text-[#1A1A1A]">Medium 500</p>
              <p className="font-satoshi font-light text-lg text-[#1A1A1A]">Light 300</p>
            </div>
            <div className="content-card p-6">
              <p className="font-cabinet font-bold text-3xl text-[#1A1A1A] mb-2">Cabinet Grotesk</p>
              <p className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.15em] mb-3">Body text</p>
              <p className="font-cabinet text-base text-[#1A1A1A]">Regular 400</p>
              <p className="font-cabinet font-medium text-base text-[#1A1A1A]">Medium 500</p>
              <p className="font-cabinet font-bold text-base text-[#1A1A1A]">Bold 700</p>
            </div>
            <div className="content-card p-6">
              <p className="font-jetbrains text-xl text-[#1A1A1A] mb-2">JetBrains Mono</p>
              <p className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.15em] mb-3">Code / Labels</p>
              <p className="font-jetbrains text-xs text-[#1A1A1A]">LABEL STYLE</p>
              <p className="font-jetbrains text-sm text-[#1A1A1A]">Code style</p>
              <p className="font-jetbrains text-base text-[#1A1A1A]">Body mono</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#E0DDD8]">
                  <th className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.2em] pb-3 pr-4">Element</th>
                  <th className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.2em] pb-3 pr-4">Font</th>
                  <th className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.2em] pb-3 pr-4">Size</th>
                  <th className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.2em] pb-3">Tracking</th>
                </tr>
              </thead>
              <tbody>
                {typeScale.map((row) => (
                  <tr key={row.element} className="border-b border-[#E0DDD8]/50">
                    <td className="font-satoshi font-medium text-sm text-[#1A1A1A] py-3 pr-4">{row.element}</td>
                    <td className="font-cabinet text-sm text-[#6B6860] py-3 pr-4">{row.font}</td>
                    <td className="font-jetbrains text-xs text-[#6B6860] py-3 pr-4">{row.size}</td>
                    <td className="font-jetbrains text-xs text-[#9B968E] py-3">{row.tracking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Section>

      {/* Spacing */}
      <Section id="spacing" label="Spacing" title="Spacing scale">
        <motion.div variants={fadeUp} custom={0.1} className="flex flex-wrap gap-4 items-end">
          {spacingScale.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <div className="w-8 bg-[#C4562A]/20 border border-[#C4562A]/30" style={{ height: `${s}px` }} />
              <span className="font-jetbrains text-[9px] text-[#9B968E]">{s}px</span>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* Rules */}
      <Section id="rules" label="Rules" title="Design rules" bg="bg-[#F0EDE8]">
        <motion.div variants={fadeUp} custom={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { rule: "Zero border-radius", desc: "No rounded corners anywhere. This is the single most distinctive visual rule. Never override it." },
            { rule: "Rust-signal accent only", desc: "Use #C4562A as the primary accent. Teal (#2CB5B4) is secondary. Never introduce new accent colours." },
            { rule: "No em dashes", desc: "Use en dashes with spaces, or restructure the sentence. Em dashes are banned from all Tangison copy." },
            { rule: "No generic AI language", desc: "No 'leverage', 'synergy', 'cutting-edge', 'innovative', or similar filler. Say what it does." },
            { rule: "No invented metrics", desc: "No fake testimonials, partner logos, or statistics. Only real, verifiable claims." },
            { rule: "Satoshi for headings, Cabinet for body, JetBrains for code", desc: "Never mix roles. Headings are always Satoshi, body is always Cabinet Grotesk, labels and code are always JetBrains Mono." },
          ].map((item) => (
            <div key={item.rule} className="content-card p-6">
              <h3 className="font-satoshi font-medium text-base text-[#1A1A1A] mb-2">{item.rule}</h3>
              <p className="font-cabinet text-sm text-[#6B6860] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* Logo */}
      <Section id="logo" label="Logo" title="Logo usage">
        <motion.div variants={fadeUp} custom={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="content-card p-8 flex flex-col items-center justify-center min-h-[200px] bg-[#1A1A1A]">
            <Image src="/images/logo-white.webp" alt="TANGISON logo on dark" width={874} height={286} className="h-12 w-auto object-contain" />
            <p className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.2em] mt-4">On dark backgrounds</p>
          </div>
          <div className="content-card p-8 flex flex-col items-center justify-center min-h-[200px]">
            <Image src="/images/logo.png" alt="TANGISON logo on light" width={874} height={286} className="h-12 w-auto object-contain" />
            <p className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.2em] mt-4">On light backgrounds</p>
          </div>
        </motion.div>
      </Section>
    </SiteShell>
  );
}
