"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, X } from "lucide-react";

/* ─── Animation Variants ──────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

/* ─── Color Data (from BRAND.md) ──────────────────────────────── */

const paletteColors = [
  { name: "Background", token: "--bg", hex: "#171412", oklch: "oklch(0.13 0.02 60)", usage: "Page background" },
  { name: "Elevated", token: "--bg-elevated", hex: "#1e1a16", oklch: "oklch(0.16 0.02 60)", usage: "Card / surface" },
  { name: "Foreground", token: "--fg", hex: "#f5f0e8", oklch: "oklch(0.95 0.02 80)", usage: "Primary text" },
  { name: "Muted", token: "--fg-muted", hex: "#a89f91", oklch: "oklch(0.70 0.02 60)", usage: "Secondary text" },
  { name: "Accent", token: "--accent", hex: "#c4562a", oklch: "oklch(0.50 0.14 30)", usage: "Rust-signal accent" },
  { name: "Accent Soft", token: "--accent-soft", hex: "#c4562a20", oklch: "oklch(0.50 0.14 30 / 0.12)", usage: "Subtle accent backgrounds" },
  { name: "Border", token: "--border", hex: "#2a2520", oklch: "oklch(0.20 0.01 60)", usage: "Dividers, card borders" },
  { name: "Surface", token: "--surface", hex: "#231f1b", oklch: "oklch(0.18 0.02 60)", usage: "Neutral surface" },
];

/* ─── Typography Data ─────────────────────────────────────────── */

const typeScale = [
  { element: "H1", font: "Satoshi 700", size: "clamp(2rem, 5vw, 4rem)", tracking: "-0.02em" },
  { element: "H2", font: "Satoshi 700", size: "clamp(1.5rem, 3vw, 2.5rem)", tracking: "-0.01em" },
  { element: "H3", font: "Satoshi 500", size: "clamp(1.125rem, 2vw, 1.5rem)", tracking: "0" },
  { element: "Body", font: "Cabinet Grotesk 400", size: "1rem (16px)", tracking: "0" },
  { element: "Small", font: "Cabinet Grotesk 400", size: "0.875rem (14px)", tracking: "0" },
  { element: "Code", font: "JetBrains Mono 400", size: "0.875rem (14px)", tracking: "0" },
];

/* ─── Spacing Data ────────────────────────────────────────────── */

const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

/* ─── Copy Button ─────────────────────────────────────────────── */

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.15em] hover:text-[#c4562a] transition-colors duration-200"
      aria-label={`Copy ${value}`}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

/* ─── Section Wrapper ─────────────────────────────────────────── */

function Section({
  id,
  label,
  title,
  children,
  border = true,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 md:px-12 lg:px-20 ${border ? "border-t border-[#2a2520]" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-2 h-2 bg-[#c4562a]" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-[#a89f91] uppercase tracking-[0.3em]">
              {label}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-satoshi font-bold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em] text-[#f5f0e8] mb-12"
          >
            {title}
          </motion.h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Brand Page ──────────────────────────────────────────────── */

export default function BrandPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 bg-[#c4562a]" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-[#a89f91] uppercase tracking-[0.3em]">
                Guidelines
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-satoshi font-bold text-[clamp(2rem,5vw,4rem)] tracking-[-0.02em] leading-[1.05] text-[#f5f0e8] mb-6"
            >
              Brand
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="font-cabinet text-base md:text-lg text-[#a89f91] leading-relaxed max-w-[65ch]"
            >
              The visual identity, typography, colour system, and design
              principles of Tangison Labs. One idea: structured precision.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#2a2520]" aria-hidden="true" />
      </section>

      {/* Identity Idea */}
      <Section id="identity" label="Identity" title="Structured precision">
        <motion.div variants={fadeUp} custom={0.2} className="max-w-[65ch]">
          <p className="font-cabinet text-base text-[#a89f91] leading-relaxed mb-6">
            The Tangison brand borrows from architectural blueprints and research
            papers, not SaaS dashboards. Every visual decision reinforces
            clarity, restraint, and competence.
          </p>
          <p className="font-cabinet text-base text-[#a89f91] leading-relaxed">
            Precise, understated, rigorous, quietly confident. Never
            promotional. Never vague.
          </p>
        </motion.div>
      </Section>

      {/* Logo */}
      <Section id="logo" label="Logo" title="Logo usage">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* On dark */}
          <motion.div variants={fadeUp} custom={0.2} className="border border-[#2a2520] p-8 flex flex-col items-center justify-center min-h-[200px]">
            <span className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.3em] mb-4 self-start">
              On dark background
            </span>
            <Image
              src="/images/logo-white.webp"
              alt="TANGISON logo on dark background"
              width={874}
              height={286}
              className="h-12 w-auto object-contain"
            />
          </motion.div>
          {/* On light */}
          <motion.div variants={fadeUp} custom={0.3} className="border border-[#2a2520] p-8 flex flex-col items-center justify-center min-h-[200px] bg-[#f5f0e8]">
            <span className="font-jetbrains text-[9px] text-[#171412]/40 uppercase tracking-[0.3em] mb-4 self-start">
              On light background
            </span>
            <Image
              src="/images/logo.webp"
              alt="TANGISON logo on light background"
              width={874}
              height={286}
              className="h-12 w-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Rules */}
        <motion.div variants={fadeUp} custom={0.4} className="mt-8">
          <h3 className="font-satoshi font-medium text-lg text-[#f5f0e8] mb-4">Rules</h3>
          <ul className="font-cabinet text-sm text-[#a89f91] space-y-2 max-w-[65ch]">
            <li>Minimum clear space equals the height of the &quot;T&quot; in TANGISON on all sides</li>
            <li>Wordmark minimum size: 120px wide on screen</li>
            <li>Icon mark minimum size: 24px</li>
            <li>Never rotate, skew, or apply effects to the logo</li>
            <li>Never place on backgrounds with insufficient contrast</li>
            <li>Do not recreate the logo in CSS or HTML text</li>
          </ul>
        </motion.div>
      </Section>

      {/* Colour Palette */}
      <Section id="colour" label="Colour" title="Colour palette">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {paletteColors.map((color, i) => (
            <motion.div
              key={color.token}
              variants={fadeUp}
              custom={0.2 + i * 0.05}
              className="border border-[#2a2520] overflow-hidden"
            >
              {/* Swatch */}
              <div
                className="h-20 md:h-24"
                style={{ backgroundColor: color.hex }}
                aria-label={`${color.name} colour swatch`}
              />
              {/* Info */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-jetbrains text-[9px] text-[#f5f0e8] uppercase tracking-[0.2em]">
                    {color.name}
                  </span>
                  <CopyButton value={color.hex} />
                </div>
                <p className="font-jetbrains text-[10px] text-[#c4562a] mb-1">{color.hex}</p>
                <p className="font-jetbrains text-[9px] text-[#a89f91]/50">{color.oklch}</p>
                <p className="font-cabinet text-[11px] text-[#a89f91]/60 mt-2">{color.usage}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accessible pairings */}
        <motion.div variants={fadeUp} custom={0.6} className="mt-10">
          <h3 className="font-satoshi font-medium text-lg text-[#f5f0e8] mb-4">Accessible pairings</h3>
          <div className="space-y-2 font-cabinet text-sm text-[#a89f91] max-w-[65ch]">
            <p><span className="text-[#f5f0e8]">--fg on --bg</span>: contrast ratio &gt; 15:1 (WCAG AAA)</p>
            <p><span className="text-[#f5f0e8]">--fg-muted on --bg</span>: contrast ratio &gt; 5:1 (WCAG AA)</p>
            <p><span className="text-[#f5f0e8]">--accent on --bg</span>: contrast ratio &gt; 4.5:1 (WCAG AA)</p>
            <p><span className="text-[#f5f0e8]">--fg on --accent</span>: contrast ratio &gt; 4.5:1 (WCAG AA)</p>
          </div>
        </motion.div>
      </Section>

      {/* Typography */}
      <Section id="typography" label="Typography" title="Typography">
        {/* Specimens */}
        <div className="space-y-8 mb-12">
          <div>
            <span className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.3em]">
              Heading font
            </span>
            <p className="font-satoshi font-bold text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] text-[#f5f0e8] mt-2">
              Satoshi
            </p>
            <p className="font-jetbrains text-[10px] text-[#a89f91]/50 mt-1">
              Indian Type Foundry / Fontshare — Weights: 700, 500
            </p>
          </div>
          <div>
            <span className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.3em]">
              Body font
            </span>
            <p className="font-cabinet text-[clamp(1.5rem,3vw,2rem)] text-[#f5f0e8] mt-2">
              Cabinet Grotesk
            </p>
            <p className="font-jetbrains text-[10px] text-[#a89f91]/50 mt-1">
              Indian Type Foundry / Fontshare — Weights: 400, 500, 600
            </p>
          </div>
          <div>
            <span className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.3em]">
              Code font
            </span>
            <p className="font-jetbrains text-[clamp(1.5rem,3vw,2rem)] text-[#f5f0e8] mt-2">
              JetBrains Mono
            </p>
            <p className="font-jetbrains text-[10px] text-[#a89f91]/50 mt-1">
              JetBrains — OFL — Weight: 400
            </p>
          </div>
        </div>

        {/* Type scale table */}
        <motion.div variants={fadeUp} custom={0.3}>
          <h3 className="font-satoshi font-medium text-lg text-[#f5f0e8] mb-4">Type scale</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#2a2520]">
                  <th className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.2em] pb-3 pr-4">Element</th>
                  <th className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.2em] pb-3 pr-4">Font</th>
                  <th className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.2em] pb-3 pr-4">Size</th>
                  <th className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.2em] pb-3">Tracking</th>
                </tr>
              </thead>
              <tbody>
                {typeScale.map((row) => (
                  <tr key={row.element} className="border-b border-[#2a2520]/50">
                    <td className="font-jetbrains text-[11px] text-[#f5f0e8] py-3 pr-4">{row.element}</td>
                    <td className="font-cabinet text-[11px] text-[#a89f91] py-3 pr-4">{row.font}</td>
                    <td className="font-jetbrains text-[11px] text-[#a89f91] py-3 pr-4">{row.size}</td>
                    <td className="font-jetbrains text-[11px] text-[#a89f91] py-3">{row.tracking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Section>

      {/* Grid & Spacing */}
      <Section id="grid" label="Grid" title="Grid and spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div variants={fadeUp} custom={0.2}>
            <h3 className="font-satoshi font-medium text-lg text-[#f5f0e8] mb-4">Grid</h3>
            <ul className="font-cabinet text-sm text-[#a89f91] space-y-2">
              <li>Max content width: <span className="text-[#f5f0e8]">1200px</span></li>
              <li>Page margin: <span className="text-[#f5f0e8]">24px / 48px / 64px</span> (mobile / tablet / desktop)</li>
              <li>Column count: <span className="text-[#f5f0e8]">4 / 8 / 12</span> (mobile / tablet / desktop)</li>
              <li>Column gap: <span className="text-[#f5f0e8]">24px</span></li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} custom={0.3}>
            <h3 className="font-satoshi font-medium text-lg text-[#f5f0e8] mb-4">Spacing scale</h3>
            <p className="font-cabinet text-sm text-[#a89f91] mb-4">
              Base unit: <span className="text-[#f5f0e8]">8px</span>
            </p>
            <div className="flex flex-wrap gap-3">
              {spacingScale.map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className="bg-[#c4562a]/30"
                    style={{ width: Math.min(s, 64), height: 8 }}
                  />
                  <span className="font-jetbrains text-[9px] text-[#a89f91]/50">{s}px</span>
                </div>
              ))}
            </div>
            <p className="font-cabinet text-sm text-[#a89f91] mt-4">
              Section padding: <span className="text-[#f5f0e8]">96px</span> vertical (desktop), <span className="text-[#f5f0e8]">64px</span> (mobile)
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Shape Rules */}
      <Section id="shapes" label="Shapes" title="Zero border-radius">
        <motion.div variants={fadeUp} custom={0.2}>
          <p className="font-cabinet text-base text-[#a89f91] leading-relaxed max-w-[65ch] mb-8">
            Zero border-radius is a Tangison design signature. All buttons,
            cards, inputs, and containers use sharp corners. No rounded elements
            unless specifically approved.
          </p>

          {/* Demonstration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-[#2a2520] p-6">
              <span className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.2em] block mb-4">
                Correct
              </span>
              <div className="flex items-center gap-3">
                <button className="bg-[#c4562a] text-[#f5f0e8] px-4 py-2.5 font-jetbrains text-[10px] uppercase tracking-[0.15em]">
                  Button
                </button>
                <div className="border border-[#2a2520] px-3 py-2 font-jetbrains text-[10px] text-[#a89f91]">
                  Card
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Input field"
                  className="w-full bg-transparent border-b border-[#2a2520] py-2 font-cabinet text-sm text-[#f5f0e8] placeholder:text-[#a89f91]/40 outline-none focus:border-[#c4562a] transition-colors"
                  readOnly
                />
              </div>
            </div>
            <div className="border border-[#c4562a]/30 bg-[#c4562a]/5 p-6">
              <span className="font-jetbrains text-[9px] text-[#c4562a]/60 uppercase tracking-[0.2em] block mb-4">
                Incorrect (examples only)
              </span>
              <div className="flex items-center gap-3 opacity-50">
                <button className="bg-[#c4562a] text-[#f5f0e8] px-4 py-2.5 font-jetbrains text-[10px] uppercase tracking-[0.15em]" style={{ borderRadius: 8 }}>
                  Button
                </button>
                <div className="border border-[#2a2520] px-3 py-2 font-jetbrains text-[10px] text-[#a89f91]" style={{ borderRadius: 12 }}>
                  Card
                </div>
              </div>
              <div className="mt-4 opacity-50">
                <input
                  type="text"
                  placeholder="Input field"
                  className="w-full bg-transparent border border-[#2a2520] py-2 px-3 font-cabinet text-sm text-[#f5f0e8] placeholder:text-[#a89f91]/40 outline-none"
                  style={{ borderRadius: 6 }}
                  readOnly
                />
              </div>
              <div className="flex items-center gap-2 mt-4">
                <X className="w-3 h-3 text-[#c4562a]" />
                <span className="font-jetbrains text-[9px] text-[#c4562a]/60 uppercase tracking-[0.15em]">
                  Never use border-radius
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Motion */}
      <Section id="motion" label="Motion" title="Motion principles">
        <motion.div variants={fadeUp} custom={0.2} className="max-w-[65ch]">
          <ul className="font-cabinet text-sm text-[#a89f91] space-y-3">
            <li><span className="text-[#f5f0e8]">Intensity:</span> Low to moderate</li>
            <li><span className="text-[#f5f0e8]">Easing:</span> ease-out-quart for reveals, ease-in-out for transitions</li>
            <li><span className="text-[#f5f0e8]">Duration:</span> 300ms micro, 500ms reveals, 800ms page transitions</li>
            <li><span className="text-[#f5f0e8]">Reduced motion:</span> Crossfade or instant transition as fallback</li>
            <li><span className="text-[#f5f0e8]">No:</span> bounce, elastic, or decorative animations</li>
            <li><span className="text-[#f5f0e8]">Principle:</span> Purposeful reveals only; content must be visible without animation</li>
          </ul>
        </motion.div>
      </Section>

      {/* Components */}
      <Section id="components" label="Components" title="Component examples">
        <motion.div variants={fadeUp} custom={0.2} className="space-y-10">
          {/* Buttons */}
          <div>
            <h3 className="font-satoshi font-medium text-lg text-[#f5f0e8] mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              {/* Primary */}
              <div className="space-y-2">
                <button className="bg-[#c4562a] text-[#f5f0e8] px-6 py-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#c4562a]/90 transition-colors">
                  Primary
                </button>
                <p className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.15em]">
                  Accent bg, white text
                </p>
              </div>
              {/* Secondary */}
              <div className="space-y-2">
                <button className="border border-[#c4562a] text-[#c4562a] px-6 py-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-[#c4562a]/10 transition-colors">
                  Secondary
                </button>
                <p className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.15em]">
                  Accent border, accent text
                </p>
              </div>
              {/* Ghost */}
              <div className="space-y-2">
                <button className="text-[#a89f91] px-6 py-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:text-[#c4562a] transition-colors">
                  Ghost
                </button>
                <p className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.15em]">
                  Muted text, accent on hover
                </p>
              </div>
            </div>
          </div>

          {/* Navigation example */}
          <div>
            <h3 className="font-satoshi font-medium text-lg text-[#f5f0e8] mb-4">Navigation pattern</h3>
            <div className="border border-[#2a2520] p-6">
              <div className="flex items-center justify-between">
                <span className="font-satoshi font-bold text-sm text-[#f5f0e8]">TANGISON</span>
                <div className="flex items-center gap-4">
                  {["Home", "Research", "Projects"].map((item, i) => (
                    <span
                      key={item}
                      className={`font-jetbrains text-[9px] uppercase tracking-[0.2em] relative ${
                        i === 0 ? "text-[#f5f0e8]" : "text-[#a89f91]/50"
                      }`}
                    >
                      {item}
                      {i === 0 && (
                        <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#c4562a]" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form example */}
          <div>
            <h3 className="font-satoshi font-medium text-lg text-[#f5f0e8] mb-4">Form pattern</h3>
            <div className="border border-[#2a2520] p-6 max-w-md">
              <div className="space-y-4">
                <div>
                  <label className="block font-jetbrains text-[9px] text-[#a89f91] uppercase tracking-[0.2em] mb-2">
                    Label
                  </label>
                  <input
                    type="text"
                    placeholder="Full-width input with bottom border"
                    className="w-full bg-transparent border-b border-[#2a2520] py-2 font-cabinet text-sm text-[#f5f0e8] placeholder:text-[#a89f91]/40 outline-none focus:border-[#c4562a] transition-colors"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block font-jetbrains text-[9px] text-[#a89f91] uppercase tracking-[0.2em] mb-2">
                    With error
                  </label>
                  <input
                    type="text"
                    defaultValue="Invalid input"
                    className="w-full bg-transparent border-b border-[#c4562a] py-2 font-cabinet text-sm text-[#f5f0e8] outline-none"
                    readOnly
                  />
                  <p className="font-jetbrains text-[9px] text-[#c4562a] uppercase tracking-[0.15em] mt-1">
                    Inline error message
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Correct vs Incorrect */}
      <Section id="usage" label="Usage" title="Correct vs incorrect usage">
        <motion.div variants={fadeUp} custom={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Correct */}
          <div className="border border-[#2a2520] p-6">
            <div className="flex items-center gap-2 mb-6">
              <Check className="w-4 h-4 text-green-600" />
              <span className="font-jetbrains text-[10px] text-[#f5f0e8] uppercase tracking-[0.2em]">
                Correct
              </span>
            </div>
            <ul className="font-cabinet text-sm text-[#a89f91] space-y-3">
              <li>Typographic hierarchy with zero-radius elements on dark background</li>
              <li>Rust-signal accent used sparingly for CTAs and active states</li>
              <li>Code blocks in JetBrains Mono</li>
              <li>Grid-based layout with consistent 8px spacing</li>
            </ul>
          </div>
          {/* Incorrect */}
          <div className="border border-[#c4562a]/30 bg-[#c4562a]/5 p-6">
            <div className="flex items-center gap-2 mb-6">
              <X className="w-4 h-4 text-[#c4562a]" />
              <span className="font-jetbrains text-[10px] text-[#c4562a]/80 uppercase tracking-[0.2em]">
                Incorrect
              </span>
            </div>
            <ul className="font-cabinet text-sm text-[#a89f91]/70 space-y-3">
              <li>Rounded corners on any element</li>
              <li>Purple or blue gradient backgrounds</li>
              <li>Glassmorphism or blur effects on content cards</li>
              <li>Decorative dashboard charts with fake metrics</li>
              <li>Card grids of equal size with icon + heading + text repeated</li>
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* Sources */}
      <Section id="sources" label="Sources" title="Sources and licensing">
        <motion.div variants={fadeUp} custom={0.2} className="max-w-[65ch]">
          <ul className="font-cabinet text-sm text-[#a89f91] space-y-2">
            <li>Logo files: supplied by Tangison</li>
            <li>Fonts: Fontshare (Satoshi, Cabinet Grotesk) — free licence, commercial use permitted with attribution</li>
            <li>Code font: JetBrains Mono — SIL Open Font Licence</li>
            <li>Colour palette: derived from Namibian landscape and Tangison existing brand</li>
            <li>Design language: established in gateway site (tangison.com)</li>
          </ul>
        </motion.div>
      </Section>
    </SiteShell>
  );
}
