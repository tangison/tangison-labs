"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { motion } from "framer-motion";
import { heroSlideIn, heroFadeIn } from "@/lib/animation-variants";
import Image from "next/image";
import { Check, X } from "lucide-react";

/* Light theme palette */
const paletteColors = [
  { name: "Background", token: "--t-bg", hex: "#FAFAF8", usage: "Page background", tw: "bg-t-bg" },
  { name: "Elevated", token: "--t-bg-elevated", hex: "#F0EDE8", usage: "Card / surface", tw: "bg-t-bg-elevated" },
  { name: "Surface", token: "--t-bg-surface", hex: "#E8E5DF", usage: "Neutral surface", tw: "bg-t-bg-surface" },
  { name: "Foreground", token: "--t-fg", hex: "#1A1A1A", usage: "Primary text", tw: "text-t-fg" },
  { name: "Muted", token: "--t-fg-muted", hex: "#6B6860", usage: "Secondary text", tw: "text-t-fg-muted" },
  { name: "Accent", token: "--t-accent", hex: "#C4562A", usage: "Rust-signal accent", tw: "bg-t-accent" },
  { name: "Teal", token: "--t-teal", hex: "#2CB5B4", usage: "Secondary accent", tw: "bg-t-teal" },
  { name: "Border", token: "--t-border", hex: "#E0DDD8", usage: "Dividers, card borders", tw: "border-t-border" },
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
    <button onClick={handleCopy} className="font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-[0.15em] hover:text-t-accent transition-colors duration-200" aria-label={`Copy ${value}`}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function Section({ id, title, children, bg = "bg-transparent" }: {
  id: string; title: string; children: React.ReactNode; bg?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-20 px-6 md:px-12 lg:px-20 ${bg} border-t border-t-border`}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-t-fg mb-3">
          {title}
        </h2>
        <div className="editorial-divider mb-10" />
        {children}
      </div>
    </section>
  );
}

export function BrandPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-t-bg-elevated/30" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible">
            <motion.h1 variants={heroSlideIn} custom={0} className="font-satoshi font-bold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.02em] text-t-fg mb-6">
              Tangison Labs brand
            </motion.h1>
            <motion.p variants={heroSlideIn} custom={0.1} className="font-cabinet text-base md:text-lg text-t-fg-muted leading-relaxed max-w-[65ch]">
              The visual and verbal identity of our research division. Every design decision is documented here so we stay consistent.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 accent-bar" />
      </section>

      {/* Purpose */}
      <Section id="purpose" title="Why we exist">
        <div className="max-w-[65ch]">
          <p className="font-cabinet text-base text-t-fg-muted leading-relaxed mb-4">
            Tangison Labs researches, prototypes, and validates technology before it ships.
            We are the division that tests ideas against real constraints before they reach users.
          </p>
          <p className="font-cabinet text-base text-t-fg-muted leading-relaxed">
            Our audience is researchers and engineers first, business leaders second. Everything we publish must be
            technically sound and honestly described. We never inflate results or claim capabilities we have not measured.
          </p>
        </div>
      </Section>

      {/* Personality */}
      <Section id="personality" title="How we sound" bg="bg-t-bg-elevated">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-satoshi font-medium text-sm text-t-success uppercase tracking-[0.2em] mb-4">We are</h3>
            <ul className="space-y-3">
              {["Precise but not stiff", "Technical but not jargon-heavy", "Confident but not arrogant", "Open but not careless", "African but not stereotyped"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-t-success shrink-0 mt-0.5" />
                  <span className="font-cabinet text-sm text-t-fg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-satoshi font-medium text-sm text-t-error uppercase tracking-[0.2em] mb-4">We are not</h3>
            <ul className="space-y-3">
              {["Hype-driven or buzzword-heavy", "Vague or non-committal", "Generic AI slop language", "Academic to the point of unusability", "Performative or trend-chasing"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-t-error shrink-0 mt-0.5" />
                  <span className="font-cabinet text-sm text-t-fg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Colours */}
      <Section id="colours" title="Palette">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {paletteColors.map((color) => (
            <div key={color.name} className="border border-t-border overflow-hidden">
              <div className="h-20" style={{ backgroundColor: color.hex }} />
              <div className="p-4">
                <p className="font-satoshi font-medium text-sm text-t-fg mb-1">{color.name}</p>
                <div className="flex items-center justify-between">
                  <code className="font-jetbrains text-[11px] text-t-fg-muted">{color.hex}</code>
                  <CopyButton value={color.hex} />
                </div>
                <p className="font-cabinet text-xs text-t-fg-subtle mt-1">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section id="typography" title="Type scale" bg="bg-t-bg-elevated">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="border border-t-border bg-t-card-surface p-6">
            <p className="font-satoshi font-bold text-3xl text-t-fg mb-2">Satoshi</p>
            <p className="font-jetbrains text-[10px] text-t-fg-subtle uppercase tracking-[0.15em] mb-3">Headings</p>
            <p className="font-satoshi font-bold text-lg text-t-fg">Bold 700</p>
            <p className="font-satoshi font-medium text-lg text-t-fg">Medium 500</p>
            <p className="font-satoshi font-light text-lg text-t-fg">Light 300</p>
          </div>
          <div className="border border-t-border bg-t-card-surface p-6">
            <p className="font-cabinet font-bold text-3xl text-t-fg mb-2">Cabinet Grotesk</p>
            <p className="font-jetbrains text-[10px] text-t-fg-subtle uppercase tracking-[0.15em] mb-3">Body text</p>
            <p className="font-cabinet text-base text-t-fg">Regular 400</p>
            <p className="font-cabinet font-medium text-base text-t-fg">Medium 500</p>
            <p className="font-cabinet font-bold text-base text-t-fg">Bold 700</p>
          </div>
          <div className="border border-t-border bg-t-card-surface p-6">
            <p className="font-jetbrains text-xl text-t-fg mb-2">JetBrains Mono</p>
            <p className="font-jetbrains text-[10px] text-t-fg-subtle uppercase tracking-[0.15em] mb-3">Code / Labels</p>
            <p className="font-jetbrains text-xs text-t-fg">LABEL STYLE</p>
            <p className="font-jetbrains text-sm text-t-fg">Code style</p>
            <p className="font-jetbrains text-base text-t-fg">Body mono</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-t-border">
                <th className="font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-[0.2em] pb-3 pr-4">Element</th>
                <th className="font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-[0.2em] pb-3 pr-4">Font</th>
                <th className="font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-[0.2em] pb-3 pr-4">Size</th>
                <th className="font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-[0.2em] pb-3">Tracking</th>
              </tr>
            </thead>
            <tbody>
              {typeScale.map((row) => (
                <tr key={row.element} className="border-b border-t-border/50">
                  <td className="font-satoshi font-medium text-sm text-t-fg py-3 pr-4">{row.element}</td>
                  <td className="font-cabinet text-sm text-t-fg-muted py-3 pr-4">{row.font}</td>
                  <td className="font-jetbrains text-xs text-t-fg-muted py-3 pr-4">{row.size}</td>
                  <td className="font-jetbrains text-xs text-t-fg-subtle py-3">{row.tracking}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Spacing */}
      <Section id="spacing" title="Spacing scale">
        <div className="flex flex-wrap gap-4 items-end">
          {spacingScale.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <div className="w-8 bg-t-accent/20 border border-t-accent/30" style={{ height: `${s}px` }} />
              <span className="font-jetbrains text-[9px] text-t-fg-subtle">{s}px</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Rules */}
      <Section id="rules" title="Design rules" bg="bg-t-bg-elevated">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { rule: "Zero border-radius", desc: "No rounded corners anywhere. This is the single most distinctive visual rule. Never override it." },
            { rule: "Rust-signal accent only", desc: "Use #C4562A as the primary accent. Teal (#2CB5B4) is secondary. Never introduce new accent colours." },
            { rule: "No em dashes", desc: "Use en dashes with spaces, or restructure the sentence. Em dashes are banned from all Tangison copy." },
            { rule: "No generic AI language", desc: "No 'leverage', 'synergy', 'cutting-edge', 'innovative', or similar filler. Say what it does." },
            { rule: "No invented metrics", desc: "No fake testimonials, partner logos, or statistics. Only real, verifiable claims." },
            { rule: "Font roles are fixed", desc: "Satoshi for headings, Cabinet Grotesk for body, JetBrains Mono for code and labels. Never mix roles." },
          ].map((item) => (
            <div key={item.rule} className="border border-t-border bg-t-card-surface p-6">
              <h3 className="font-satoshi font-medium text-base text-t-fg mb-2">{item.rule}</h3>
              <p className="font-cabinet text-sm text-t-fg-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Logo */}
      <Section id="logo" title="Logo usage">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-t-border p-8 flex flex-col items-center justify-center min-h-[200px] bg-t-fg">
            <Image src="/images/logo-white.webp" alt="TANGISON logo on dark" width={874} height={286} className="h-12 w-auto object-contain" />
            <p className="font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-[0.2em] mt-4">On dark backgrounds</p>
          </div>
          <div className="border border-t-border p-8 flex flex-col items-center justify-center min-h-[200px]">
            <Image src="/images/logo.png" alt="TANGISON logo on light" width={874} height={286} className="h-12 w-auto object-contain" />
            <p className="font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-[0.2em] mt-4">On light backgrounds</p>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
