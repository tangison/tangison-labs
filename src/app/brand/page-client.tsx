"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { motion } from "framer-motion";
import Image from "next/image";

/* ─── Color Data ──────────────────────────────────────────────── */

const colors = [
  { name: "Warm White", hex: "#FAFAF8", token: "warm-white", usage: "Primary background", rgb: "rgb(250, 250, 248)" },
  { name: "Warm Gray", hex: "#F0EDE8", token: "warm-gray", usage: "Card surfaces", rgb: "rgb(240, 237, 232)" },
  { name: "Sand Gray", hex: "#E8E5DF", token: "sand-gray", usage: "Subtle backgrounds", rgb: "rgb(232, 229, 223)" },
  { name: "Atlantic Black", hex: "#111315", token: "atlantic-black", usage: "Dark sections, primary text", rgb: "rgb(17, 19, 21)" },
  { name: "Terminal Black", hex: "#0A0B0C", token: "terminal-black", usage: "Deepest surfaces", rgb: "rgb(10, 11, 12)" },
  { name: "Steel Shadow", hex: "#1C1E22", token: "steel-shadow", usage: "Dark cards", rgb: "rgb(28, 30, 34)" },
  { name: "Ink", hex: "#111315", token: "ink", usage: "Primary text", rgb: "rgb(17, 19, 21)" },
  { name: "Ink Muted", hex: "#6B6860", token: "ink-muted", usage: "Secondary text", rgb: "rgb(107, 104, 96)" },
  { name: "Rust Signal", hex: "#C56A4A", token: "rust-signal", usage: "Primary accent, CTAs", rgb: "rgb(197, 106, 74)" },
  { name: "Rust Light", hex: "#D4896F", token: "rust-light", usage: "Hover states", rgb: "rgb(212, 137, 111)" },
  { name: "Signal Teal", hex: "#2CB5B4", token: "signal-teal", usage: "Secondary accent, information states", rgb: "rgb(44, 181, 180)" },
  { name: "Signal Teal Light", hex: "#3DCCC8", token: "signal-teal-light", usage: "Teal hover states", rgb: "rgb(61, 204, 200)" },
  { name: "Deep Ocean", hex: "#16353D", token: "deep-ocean", usage: "Info states, dark accents", rgb: "rgb(22, 53, 61)" },
] as const;

const lightHexes = ["#FAFAF8", "#F0EDE8", "#E8E5DF", "#D4896F", "#3DCCC8"];

/* ─── Copy-all content ────────────────────────────────────────── */

const BRAND_SPEC_MD = `# TANGISON Brand Specifications

## Brand Strategy
- Positioning: The applied AI laboratory that builds systems for African operating conditions
- Purpose: Make AI work where it has never worked before
- Personality: Restrained, precise, deliberate, architectural, warm
- Promise: AI that fits your context, not the other way around
- Audience: Organizations solving real problems in African markets

## Logo
TANGISON Logo (icon + wordmark)
Minimum size: 24px
Clear space: equal to mark height on all sides
Variants: logo.webp (light bg), logo-white.webp (dark bg)
Do not: rotate, skew, stretch, recolor, add effects, place on busy backgrounds without container

## Color System

### Primary Palette
- Warm White: #FAFAF8 (warm-white): Primary background
- Atlantic Black: #111315 (atlantic-black): Dark sections, primary text
- Rust Signal: #C56A4A (rust-signal): Primary accent, CTAs

### Secondary Palette
- Signal Teal: #2CB5B4 (signal-teal): Secondary accent, information states
- Deep Ocean: #16353D (deep-ocean): Dark accents

### Neutral Palette
- Warm Gray: #F0EDE8 (warm-gray): Card surfaces
- Sand Gray: #E8E5DF (sand-gray): Subtle backgrounds
- Ink Muted: #6B6860 (ink-muted): Secondary text

### Extended
- Terminal Black: #0A0B0C (terminal-black): Deepest surfaces
- Steel Shadow: #1C1E22 (steel-shadow): Dark cards
- Rust Light: #D4896F (rust-light): Hover states
- Signal Teal Light: #3DCCC8 (signal-teal-light): Teal hover states

## Typography
- Display: Cabinet Grotesk (400, 700, 900)
- Body: Satoshi (300, 400, 500, 700, 900)
- Technical: JetBrains Mono (100-800)

### Type Scale
- H1: clamp(2.2rem, 5vw, 4.5rem) / Cabinet Grotesk 900 / tracking -0.03em
- H2: text-3xl md:text-4xl / Cabinet Grotesk 700 / tracking tight
- H3: text-xl md:text-2xl / Cabinet Grotesk 700 / tracking tight
- Body: text-base md:text-lg / Satoshi 400 / leading relaxed
- Label: text-[10px] uppercase tracking-[0.2em] / JetBrains Mono 400
- CTA: text-[11px] uppercase tracking-[0.15em] / JetBrains Mono 400

### Fallbacks
- Display: system-ui, sans-serif
- Body: system-ui, sans-serif
- Mono: ui-monospace, monospace

## Voice and Tone
Clear before clever. Direct before diplomatic. Confident without arrogance. Warm without being casual. Practical without being boring.

### Messaging Hierarchy
1. Tagline: "Applied AI. Built in Africa."
2. Positioning: AI that fits your context, not the other way around
3. Key Messages: Practical systems, African context, Production reliability, Honest communication

Words to use: AI, systems, infrastructure, research, laboratory, build, deploy, engineering, practical, Africa, Namibia, applied
Words to avoid: Intelligence (as discipline), sovereign/sovereignty, intercept, signal (as metaphor), deploy (military context), execute/protocol, classified/operational, world-class, cutting-edge, revolutionary, synergy, leverage, empower, disruptive, game-changing, paradigm shift

## Motion Principles
- Entrance: Subtle vertical translation (y: 24 → 0) with fade
- Duration: 0.8s standard, 1s for hero elements
- Easing: cubic-bezier(0.16, 1, 0.3, 1) — fast start, gentle settle
- Stagger: 0.08s between grid items, 0.1s between process steps
- Reduced motion: All animations respect prefers-reduced-motion
- Personality: Deliberate, not flashy. Architectural, not theatrical.

## Imagery
- Photography: Documentary style with editorial warmth (cinematic-image filter: grayscale 30%, contrast 1.05)
- Hover: Reduce grayscale to 10%, increase contrast to 1.1
- Iconography: Lucide icon set, w-5 h-5, Rust Signal color
- Zero border-radius on all elements

## Design Principles (from world-class brand system)
- Pentagram: Every design decision traces back to a strategic principle
- Wolff Olins: The brand must behave differently, not just look different
- Landor: What does the audience feel when they encounter this brand?
- COLLINS: Does this design make something possible that was not possible before?
- Siegel+Gale: Have we removed everything that does not add meaning?`;

/* ─── Animation helpers ───────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

/* ─── ColorSwatch Component ───────────────────────────────────── */

function ColorSwatch({ color }: { color: typeof colors[number] }) {
  const isLight = lightHexes.includes(color.hex);

  return (
    <div className="border border-black/[0.06] bg-warm-gray">
      <div
        className="h-20 w-full"
        style={{ backgroundColor: color.hex }}
      />
      <div className="p-3">
        <p className="font-cabinet text-sm text-ink">{color.name}</p>
        <p className="font-jetbrains text-[11px] text-ink mt-0.5">{color.hex}</p>
        <p className="font-jetbrains text-[9px] text-ink-muted mt-0.5">{color.token}</p>
        <p className="font-satoshi text-[9px] text-ink-muted mt-1 leading-snug">{color.usage}</p>
      </div>
    </div>
  );
}

/* ─── Main Brand Page ─────────────────────────────────────────── */

export default function BrandPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(BRAND_SPEC_MD);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = BRAND_SPEC_MD;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SiteShell>
      {/* ─── Section 1: Page Header ─── */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warm-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <div className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-6">
              BRAND
            </div>
            <h1 className="font-cabinet text-5xl md:text-8xl text-ink tracking-tight mb-6">
              Brand Guidelines
            </h1>
            <p className="font-satoshi text-lg text-ink-muted font-light leading-relaxed max-w-2xl">
              The TANGISON brand system for partners, designers, and collaborators. Built on principles from Pentagram, Wolff Olins, Landor, COLLINS, and Siegel+Gale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 2: Brand Strategy Foundation ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Brand strategy">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-4">Brand Strategy</h2>
            <p className="font-jetbrains text-[11px] text-ink-muted uppercase tracking-[0.15em] mb-16">
              Foundation before design
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  label: "Positioning",
                  content: "The applied AI laboratory that builds systems for African operating conditions. Not a consulting firm. Not a SaaS platform. A laboratory that designs, builds, and operates AI where it has never worked before.",
                },
                {
                  label: "Purpose",
                  content: "Make AI work where it has never worked before. The African continent presents conditions that generic AI systems cannot handle. We exist to close that gap with precision engineering and local understanding.",
                },
                {
                  label: "Personality",
                  content: "Restrained, precise, deliberate, architectural, warm. We are confident without arrogance. Direct without being harsh. Professional without being stiff. We show warmth through competence, not performance.",
                },
                {
                  label: "Promise",
                  content: "AI that fits your context, not the other way around. Every system we build is shaped by the environment it runs in. Every recommendation is honest. Every outcome is measurable.",
                },
                {
                  label: "Audience",
                  content: "Organizations solving real problems in African markets. Not early adopters chasing trends. Leaders who need AI to work reliably under conditions that break generic solutions.",
                },
                {
                  label: "Transformation",
                  content: "From AI as an experiment to AI as infrastructure. From imported solutions that do not fit to systems built for the conditions they operate in. From vague AI strategy to clear, executable roadmaps.",
                },
              ].map((item) => (
                <div key={item.label} className="border-b border-black/[0.06] pb-6">
                  <h3 className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] mb-3">
                    {item.label}
                  </h3>
                  <p className="font-satoshi text-sm text-ink-muted leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 3: Brand Overview ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Brand overview">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <p className="font-satoshi text-lg md:text-xl text-ink font-light leading-relaxed max-w-3xl mb-12">
              TANGISON is a Namibian applied AI laboratory. The brand communicates precision, restraint, and deliberate craftsmanship. Every visual and verbal expression should reinforce these qualities.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Restrained", "Precise", "Deliberate", "Architectural", "Warm"].map((attr) => (
                <span
                  key={attr}
                  className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-ink-muted border border-black/[0.06] bg-warm-gray px-4 py-2"
                >
                  {attr}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 4: Logo System ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Logo system">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-4">Logo</h2>
            <p className="font-jetbrains text-[11px] text-ink-muted uppercase tracking-[0.15em] mb-16">
              Logo System
            </p>

            {/* Logo display — large, centered */}
            <div className="flex justify-center mb-16">
              <div className="border border-black/[0.06] bg-warm-gray p-12 md:p-20">
                <Image
                  src="/images/logo.png"
                  alt="TANGISON Logo"
                  width={874}
                  height={286}
                  className="h-24 md:h-40 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Usage guidelines */}
            <div className="max-w-3xl mx-auto mb-16">
              <h3 className="font-cabinet text-lg text-ink mb-6">Usage Guidelines</h3>
              <ul className="space-y-3 font-satoshi text-sm text-ink-muted leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-rust-signal shrink-0 mt-0.5">&#8226;</span>
                  <span>Minimum size: 24px height for the wordmark. The mark must always be legible.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rust-signal shrink-0 mt-0.5">&#8226;</span>
                  <span>Clear space: equal to the height of the mark on all sides. No text, images, or other elements may intrude into this zone.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rust-signal shrink-0 mt-0.5">&#8226;</span>
                  <span>Scalability: the logo must be legible from 16px favicon to billboard scale. Test at all sizes before production.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rust-signal shrink-0 mt-0.5">&#8226;</span>
                  <span>Color variations: use logo.webp on light backgrounds, logo-white.webp on dark backgrounds. Single-color versions for print and embroidery.</span>
                </li>
              </ul>
            </div>

            {/* Logo on dark + light background */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-atlantic-black border border-black/[0.06] p-10 flex items-center justify-center w-full">
                  <Image
                    src="/images/logo-white.webp"
                    alt="Logo on dark background"
                    width={874}
                    height={286}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.2em]">Dark background</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-warm-white border border-black/[0.06] p-10 flex items-center justify-center w-full">
                  <Image
                    src="/images/logo.png"
                    alt="Logo on light background"
                    width={874}
                    height={286}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.2em]">Light background</span>
              </div>
            </div>

            {/* Misuse examples */}
            <div className="max-w-3xl mx-auto">
              <h3 className="font-cabinet text-lg text-ink mb-6">Logo Misuse</h3>
              <p className="font-satoshi text-sm text-ink-muted leading-relaxed mb-6">
                These misuses degrade brand recognition and must be avoided in all contexts. The logo is a system element, not a design ingredient to be modified.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Do not stretch", desc: "Maintain aspect ratio at all times" },
                  { label: "Do not rotate", desc: "Logo always faces horizontal" },
                  { label: "Do not recolor", desc: "Use only approved color variants" },
                  { label: "Do not add effects", desc: "No shadows, outlines, or glows" },
                ].map((misuse) => (
                  <div key={misuse.label} className="border border-error/30 bg-error/5 p-4 text-center">
                    <span className="font-jetbrains text-[9px] text-error uppercase tracking-[0.15em] block mb-2">
                      {misuse.label}
                    </span>
                    <span className="font-satoshi text-[9px] text-ink-muted leading-snug block">
                      {misuse.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 5: Colors ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Colors">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-4">Colors</h2>
            <p className="font-satoshi text-base text-ink-muted font-light leading-relaxed max-w-2xl mb-16">
              The light-first color palette. Every token is designed for clarity and warmth, with restrained accents. Rust Signal is the primary accent. Signal Teal is the secondary accent for information states and data contexts.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {colors.map((color) => (
                <ColorSwatch key={color.token} color={color} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 6: Color Psychology ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Color psychology">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-16">Color Psychology</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  color: "Rust Signal",
                  hex: "#C56A4A",
                  meaning: "Warmth, craft, grounded ambition, deliberate action",
                  context: "CTAs, accent elements, editorial dividers. Not for large surface areas. Used sparingly to draw attention and create hierarchy.",
                  css: "bg-rust-signal",
                },
                {
                  color: "Signal Teal",
                  hex: "#2CB5B4",
                  meaning: "Intelligence, clarity, technological precision",
                  context: "Information states, data visualization, secondary accents. Signals that something is analytical or computational. Complements Rust Signal without competing.",
                  css: "bg-signal-teal",
                },
                {
                  color: "Atlantic Black",
                  hex: "#111315",
                  meaning: "Authority, depth, deliberate seriousness",
                  context: "Dark sections, hero backgrounds, primary text. The foundation of the editorial aesthetic. Not pure black — softer and more architectural.",
                  css: "bg-atlantic-black",
                },
                {
                  color: "Warm White",
                  hex: "#FAFAF8",
                  meaning: "Clarity, breathing room, restraint",
                  context: "Primary background. The negative space that gives the brand its editorial quality. Never clinical white (#FFF). Always warm.",
                  css: "bg-warm-white",
                },
                {
                  color: "Deep Ocean",
                  hex: "#16353D",
                  meaning: "Depth, information, analytical focus",
                  context: "Subtle dark accents, information overlays, gradient origins. Darker and cooler than Atlantic Black. Used for depth without harshness.",
                  css: "bg-deep-ocean",
                },
                {
                  color: "Ink Muted",
                  hex: "#6B6860",
                  meaning: "Secondary thought, supporting context",
                  context: "Secondary text, descriptions, metadata. The color of things that should be read after the primary message. Warm gray, not cold gray.",
                  css: "bg-ink-muted",
                },
              ].map((item) => (
                <div key={item.color} className="border border-black/[0.06] bg-warm-gray p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-6 h-6 ${item.css}`} />
                    <div>
                      <p className="font-cabinet text-sm text-ink">{item.color}</p>
                      <p className="font-jetbrains text-[9px] text-ink-muted">{item.hex}</p>
                    </div>
                  </div>
                  <p className="font-satoshi text-sm text-ink leading-relaxed mb-3">
                    {item.meaning}
                  </p>
                  <p className="font-satoshi text-xs text-ink-muted leading-relaxed">
                    {item.context}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 7: Typography ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Typography">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-16">Typography</h2>

            <div className="space-y-16">
              {/* Cabinet Grotesk */}
              <div className="border border-black/[0.06] bg-warm-gray p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="font-cabinet text-2xl text-ink mb-2">Cabinet Grotesk</h3>
                    <span className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.15em]">Display &amp; Headings</span>
                  </div>
                  <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.1em]">Fallback: system-ui, sans-serif</span>
                </div>
                <p className="font-satoshi text-sm text-ink-muted leading-relaxed max-w-2xl mb-10">
                  The primary display typeface. Used for headlines, section titles, and the wordmark. Geometric, modern, and authoritative. Its clean geometry aligns with the architectural quality of the brand. Weight 900 for hero headings, 700 for section titles, 400 for sub-sections.
                </p>
                <div className="space-y-6">
                  <div>
                    <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Weight 400</span>
                    <p className="font-cabinet text-3xl md:text-4xl text-ink">Aa Bb Cc 0123</p>
                  </div>
                  <div>
                    <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Weight 700</span>
                    <p className="font-cabinet text-3xl md:text-4xl text-ink font-bold">Aa Bb Cc 0123</p>
                  </div>
                  <div>
                    <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Weight 900</span>
                    <p className="font-cabinet text-3xl md:text-4xl text-ink font-black">Aa Bb Cc 0123</p>
                  </div>
                </div>
              </div>

              {/* Satoshi */}
              <div className="border border-black/[0.06] bg-warm-gray p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="font-cabinet text-2xl text-ink mb-2">Satoshi</h3>
                    <span className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.15em]">Body Text</span>
                  </div>
                  <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.1em]">Fallback: system-ui, sans-serif</span>
                </div>
                <p className="font-satoshi text-sm text-ink-muted leading-relaxed max-w-2xl mb-10">
                  The primary body typeface. Used for paragraphs, descriptions, and interface text. Clean, readable, and warm. Its humanist quality balances the geometric precision of Cabinet Grotesk. Weight 400 for body, 500 for emphasis, 700 for strong emphasis.
                </p>
                <div className="space-y-6">
                  <div>
                    <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Weight 400</span>
                    <p className="font-satoshi text-3xl md:text-4xl text-ink">Aa Bb Cc 0123</p>
                  </div>
                  <div>
                    <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Weight 500</span>
                    <p className="font-satoshi text-3xl md:text-4xl text-ink font-medium">Aa Bb Cc 0123</p>
                  </div>
                  <div>
                    <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Weight 700</span>
                    <p className="font-satoshi text-3xl md:text-4xl text-ink font-bold">Aa Bb Cc 0123</p>
                  </div>
                </div>
              </div>

              {/* JetBrains Mono */}
              <div className="border border-black/[0.06] bg-warm-gray p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="font-cabinet text-2xl text-ink mb-2">JetBrains Mono</h3>
                    <span className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.15em]">Technical &amp; Labels</span>
                  </div>
                  <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.1em]">Fallback: ui-monospace, monospace</span>
                </div>
                <p className="font-satoshi text-sm text-ink-muted leading-relaxed max-w-2xl mb-10">
                  The monospace typeface. Used for metadata, labels, tags, navigation items, section markers, and code. Precise and functional. Its mechanical quality signals technical specificity. Always uppercase in labels and navigation. Mixed case in code.
                </p>
                <div className="space-y-6">
                  <div>
                    <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em] block mb-2">Weight 400</span>
                    <p className="font-jetbrains text-3xl md:text-4xl text-ink">Aa Bb Cc 0123</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 8: Type Scale ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Type scale">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-16">Type Scale</h2>

            <div className="space-y-0 border border-black/[0.06]">
              {[
                { element: "H1", spec: "clamp(2.2rem, 5vw, 4.5rem)", font: "Cabinet Grotesk 900", tracking: "-0.03em", sample: "AI Built for Your Context" },
                { element: "H2", spec: "text-3xl md:text-4xl", font: "Cabinet Grotesk 700", tracking: "tight", sample: "Explore Specializations" },
                { element: "H3", spec: "text-xl md:text-2xl", font: "Cabinet Grotesk 700", tracking: "tight", sample: "What We Build" },
                { element: "Body", spec: "text-base md:text-lg", font: "Satoshi 400", tracking: "normal", sample: "We design and build AI systems for your specific needs." },
                { element: "Label", spec: "text-[10px] uppercase", font: "JetBrains Mono 400", tracking: "0.2em", sample: "APPLIED AI" },
                { element: "CTA", spec: "text-[11px] uppercase", font: "JetBrains Mono 400", tracking: "0.15em", sample: "DISCUSS YOUR PROJECT" },
              ].map((item, i) => (
                <div
                  key={item.element}
                  className={`grid grid-cols-12 gap-4 items-center p-4 md:p-6 ${
                    i % 2 === 0 ? "bg-warm-white" : "bg-warm-gray"
                  }`}
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.15em]">
                      {item.element}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-3">
                    <span className="font-jetbrains text-[9px] text-ink-muted">{item.spec}</span>
                  </div>
                  <div className="col-span-6 md:col-span-2 hidden md:block">
                    <span className="font-jetbrains text-[9px] text-ink-muted">{item.font}</span>
                  </div>
                  <div className="col-span-6 md:col-span-1 hidden md:block">
                    <span className="font-jetbrains text-[9px] text-ink-muted">{item.tracking}</span>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <span className="font-satoshi text-sm text-ink-muted truncate block">{item.sample}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 9: Imagery & Photography ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Imagery and photography">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-16">Imagery &amp; Photography</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h3 className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] mb-3">Photography Style</h3>
                  <p className="font-satoshi text-sm text-ink-muted leading-relaxed">
                    Documentary with editorial warmth. Images should feel observed, not staged. Natural lighting preferred. The cinematic-image filter applies grayscale at 30% with slight contrast elevation, creating an editorial quality that separates TANGISON from the saturated, tech-bro aesthetic common in AI branding. On hover, grayscale reduces to 10%, revealing more warmth. This interaction mirrors the brand personality: restrained at rest, warm on engagement.
                  </p>
                </div>
                <div>
                  <h3 className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] mb-3">Iconography</h3>
                  <p className="font-satoshi text-sm text-ink-muted leading-relaxed">
                    Lucide icon set. Consistent line weight, 5x5 sizing (w-5 h-5), Rust Signal color. Icons serve as section identifiers and capability markers. Never decorative. Each icon maps to a specific capability or concept. Zero border-radius maintained even on icon containers.
                  </p>
                </div>
                <div>
                  <h3 className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] mb-3">Zero Border-Radius</h3>
                  <p className="font-satoshi text-sm text-ink-muted leading-relaxed">
                    All elements use 0px border-radius. This is a foundational design decision, not a style preference. Sharp corners communicate precision and architectural intent. The rule applies universally: buttons, cards, images, containers, inputs, badges. No exceptions.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="border border-black/[0.06] bg-warm-gray p-6">
                  <h3 className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] mb-3">Cinematic Filter</h3>
                  <div className="space-y-2 font-jetbrains text-[10px] text-ink-muted">
                    <p>Default: grayscale(30%) contrast(1.05) brightness(0.95)</p>
                    <p>Hover: grayscale(10%) contrast(1.1) brightness(1)</p>
                    <p>Transition: filter 1.2s ease</p>
                  </div>
                </div>
                <div className="border border-black/[0.06] bg-warm-gray p-6">
                  <h3 className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] mb-3">Image Rules</h3>
                  <ul className="space-y-2 font-satoshi text-sm text-ink-muted leading-relaxed">
                    <li className="flex gap-2"><span className="text-rust-signal shrink-0">&#8226;</span>Always include width and height attributes</li>
                    <li className="flex gap-2"><span className="text-rust-signal shrink-0">&#8226;</span>Use lazy loading except for above-the-fold</li>
                    <li className="flex gap-2"><span className="text-rust-signal shrink-0">&#8226;</span>WebP format preferred, PNG for logos</li>
                    <li className="flex gap-2"><span className="text-rust-signal shrink-0">&#8226;</span>Never use stock photos with generic tech imagery</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 10: Motion Principles ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Motion principles">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-4">Motion</h2>
            <p className="font-jetbrains text-[11px] text-ink-muted uppercase tracking-[0.15em] mb-16">
              Deliberate, not flashy. Architectural, not theatrical.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  label: "Entrance",
                  spec: "y: 24 → 0, opacity: 0 → 1",
                  desc: "Elements enter from below with a subtle vertical translation. Never from the side. Never with rotation or scale tricks. The motion should feel like the element is settling into place.",
                },
                {
                  label: "Duration",
                  spec: "0.8s standard / 1s hero",
                  desc: "Standard animations run 0.8 seconds. Hero and page-level transitions run 1 second. Nothing faster than 0.2 seconds (dropdowns). Nothing slower than 1.2 seconds. Consistency builds trust.",
                },
                {
                  label: "Easing",
                  spec: "cubic-bezier(0.16, 1, 0.3, 1)",
                  desc: "The custom easing curve creates a fast start with a gentle settle. This gives motion a confident, decisive quality — the element arrives quickly and then comes to rest precisely. No bounce, no overshoot.",
                },
                {
                  label: "Stagger",
                  spec: "0.08s grid / 0.1s process",
                  desc: "Grid items stagger at 80ms intervals. Process steps at 100ms. Stagger creates rhythm without making the user wait. The last item in a 6-item grid appears within 480ms of the first.",
                },
                {
                  label: "Page Transitions",
                  spec: "0.6s fade-in on <main>",
                  desc: "Page-level transitions use a simple fade with the page-enter keyframe. No complex layout shifts. The content appears confidently, as if it was always there.",
                },
                {
                  label: "Reduced Motion",
                  spec: "prefers-reduced-motion",
                  desc: "All animations respect the user's reduced-motion preference. When active, animations complete instantly (0.01ms). The experience remains complete without motion. Accessibility is not optional.",
                },
              ].map((item) => (
                <div key={item.label} className="border border-black/[0.06] bg-warm-gray p-6">
                  <h3 className="font-cabinet text-lg text-ink mb-1">{item.label}</h3>
                  <p className="font-jetbrains text-[9px] text-rust-signal uppercase tracking-[0.15em] mb-4">{item.spec}</p>
                  <p className="font-satoshi text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 11: Voice and Tone ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Voice and Tone">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-16">Voice and Tone</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              {/* Writing guidelines */}
              <div className="lg:col-span-7 space-y-8">
                {[
                  {
                    title: "Clear before clever",
                    desc: "Every sentence should be understood on first reading. No exceptions. If a reader has to re-read a sentence, the writing has failed. Complexity belongs in the work, not in the description of the work.",
                  },
                  {
                    title: "Direct before diplomatic",
                    desc: "Say what it is. Not what it could be interpreted as. Hedging signals uncertainty. If we are uncertain, we say so directly. Otherwise, we state our position clearly and let the reader decide.",
                  },
                  {
                    title: "Confident without arrogance",
                    desc: "\"We build AI that works\" not \"We are the future.\" Claims need proof. Superlatives without evidence erode trust. We earn confidence through specificity — describing what we do in enough detail that the reader can verify it.",
                  },
                  {
                    title: "Warm without being casual",
                    desc: "Professional but human. Not stiff. Warmth comes from addressing the reader's actual concerns, not from informality. We are warm by being helpful, not by being chatty.",
                  },
                  {
                    title: "Practical without being boring",
                    desc: "Show the outcome. Not the process. The reader cares about what changes for them, not about our methodology. Every description should answer: what does this mean for the person reading it?",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-b border-black/[0.06] pb-6">
                    <h3 className="font-cabinet text-lg text-ink mb-1">{item.title}</h3>
                    <p className="font-satoshi text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Words to use / avoid + Messaging Hierarchy */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h3 className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] mb-4">Words to use</h3>
                  <p className="font-satoshi text-sm text-ink leading-relaxed">
                    AI, systems, infrastructure, research, laboratory, build, deploy, engineering, practical, Africa, Namibia, applied
                  </p>
                </div>
                <div>
                  <h3 className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-[0.2em] mb-4">Words to avoid</h3>
                  <p className="font-satoshi text-sm text-ink-muted leading-relaxed">
                    Intelligence (as discipline), sovereign/sovereignty, intercept, signal (as metaphor), deploy (military context), execute/protocol, classified/operational, world-class, cutting-edge, revolutionary, synergy, leverage, empower, disruptive, game-changing, paradigm shift
                  </p>
                </div>
                <div className="border-t border-black/[0.06] pt-8">
                  <h3 className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.2em] mb-4">Messaging Hierarchy</h3>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-jetbrains text-[11px] text-rust-signal shrink-0">01</span>
                      <div>
                        <span className="font-cabinet text-sm text-ink block">Tagline</span>
                        <span className="font-satoshi text-xs text-ink-muted">Applied AI. Built in Africa.</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-jetbrains text-[11px] text-rust-signal shrink-0">02</span>
                      <div>
                        <span className="font-cabinet text-sm text-ink block">Positioning Statement</span>
                        <span className="font-satoshi text-xs text-ink-muted">AI that fits your context, not the other way around.</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-jetbrains text-[11px] text-rust-signal shrink-0">03</span>
                      <div>
                        <span className="font-cabinet text-sm text-ink block">Key Messages</span>
                        <span className="font-satoshi text-xs text-ink-muted">Practical systems / African context / Production reliability / Honest communication</span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 12: Design Principles ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Design principles">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-4">Design Principles</h2>
            <p className="font-jetbrains text-[11px] text-ink-muted uppercase tracking-[0.15em] mb-16">
              From world-class brand system methodology
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  agency: "Pentagram",
                  test: "Does every design decision trace back to a strategic principle?",
                  principle: "Strategy without execution is toothless. Every visual choice must connect to a strategic reason. If it looks good but serves no purpose, remove it.",
                },
                {
                  agency: "Wolff Olins",
                  test: "Does this brand behave differently, or just look different?",
                  principle: "Brand is behavior. The Tangison experience — how the site loads, how content is structured, how CTAs are written — must embody the brand values, not just display them.",
                },
                {
                  agency: "Landor",
                  test: "What does the audience feel when they encounter this brand?",
                  principle: "Products are made in factories. Brands are created in the mind. The audience should feel confidence, clarity, and warmth. Never confusion, hype, or coldness.",
                },
                {
                  agency: "COLLINS",
                  test: "Does this design make something possible that was not possible before?",
                  principle: "Design serves story. Story serves people. Every page on tangison.com should make it possible for a potential client to understand exactly what we do and whether we are the right partner for them.",
                },
                {
                  agency: "Siegel+Gale",
                  test: "Have we removed everything that does not add meaning?",
                  principle: "Simplicity is the ultimate sophistication. The site is deliberately restrained — no decorative elements, no filler content, no ambiguous language. Every element earns its place.",
                },
                {
                  agency: "DesignStudio",
                  test: "Have we lived inside this brand before designing for it?",
                  principle: "Immersion before design. The team builds AI systems for African markets. The brand must reflect that lived reality, not an aspirational version of it.",
                },
              ].map((item) => (
                <div key={item.agency} className="border border-black/[0.06] bg-warm-gray p-6 md:p-8">
                  <span className="font-jetbrains text-[10px] text-signal-teal uppercase tracking-[0.2em] block mb-3">
                    {item.agency}
                  </span>
                  <p className="font-cabinet text-lg text-ink mb-3 leading-snug">
                    &ldquo;{item.test}&rdquo;
                  </p>
                  <p className="font-satoshi text-sm text-ink-muted leading-relaxed">
                    {item.principle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 13: Brand Board ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Brand board">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-cabinet text-3xl md:text-4xl text-ink mb-16">Brand Board</h2>

            <div className="relative border border-black/[0.06] overflow-hidden bg-warm-gray p-12 md:p-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Logo on light */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-warm-white border border-black/[0.06] p-8 flex items-center justify-center w-full">
                    <Image
                      src="/images/logo.png"
                      alt="TANGISON Logo on light"
                      width={874}
                      height={286}
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em]">Logo: Light</span>
                </div>
                {/* Logo on dark */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-atlantic-black border border-black/[0.06] p-8 flex items-center justify-center w-full">
                    <Image
                      src="/images/logo-white.webp"
                      alt="TANGISON Logo on dark"
                      width={874}
                      height={286}
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <span className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em]">Logo: Dark</span>
                </div>
              </div>
              {/* Color palette strip */}
              <div className="flex mt-8 h-12">
                {colors.slice(0, 7).map((color) => (
                  <div
                    key={color.token}
                    className="flex-1"
                    style={{ backgroundColor: color.hex }}
                    title={`${color.name}: ${color.hex}`}
                  />
                ))}
              </div>
              <div className="flex mt-1 h-12">
                {colors.slice(7).map((color) => (
                  <div
                    key={color.token}
                    className="flex-1"
                    style={{ backgroundColor: color.hex }}
                    title={`${color.name}: ${color.hex}`}
                  />
                ))}
              </div>
            </div>
            <p className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.15em] mt-4">
              The complete TANGISON identity. Logo, palette, and visual direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 14: Copy All Button ─── */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Copy specifications">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <button
              onClick={handleCopyAll}
              className="w-full bg-ink text-warm-white p-4 font-jetbrains uppercase tracking-[0.15em] text-sm hover:bg-ink-light transition-colors duration-300"
              aria-label="Copy brand specifications to clipboard"
            >
              {copied ? (
                <span className="text-rust-signal">COPIED</span>
              ) : (
                "Copy Brand Specifications"
              )}
            </button>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
