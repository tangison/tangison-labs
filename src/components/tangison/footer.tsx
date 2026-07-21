"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const ecosystemLinks = [
  { label: "Tangison", href: "https://tangison.com", description: "Gateway" },
  { label: "Studio", href: "https://studio.tangison.com", description: "Creative and infrastructure services" },
  { label: "Agent", href: "https://agent.tangison.com", description: "AI agent products" },
];

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Experiments", href: "/experiments" },
  { label: "Brand", href: "/brand" },
];

const legalLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Cookies", href: "/legal/cookies" },
];

export function Footer() {
  const footerRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer
      ref={footerRef}
      className="bg-[#171412] border-t border-[#2a2520]"
    >
      {/* Top section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-12 md:pb-16"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo-white.webp"
              alt="TANGISON"
              width={874}
              height={286}
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Tagline + location */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12 mb-12 md:mb-16">
            <p className="font-satoshi text-2xl md:text-3xl font-bold text-[#f5f0e8] tracking-tight leading-tight max-w-lg">
              We build what we research.
            </p>
            <div className="flex flex-col gap-1 pb-1">
              <span className="font-jetbrains text-[10px] text-[#a89f91]/40 uppercase tracking-[0.3em]">Location</span>
              <span className="font-jetbrains text-[11px] text-[#a89f91]/60 uppercase tracking-[0.15em]">Windhoek, Namibia</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#2a2520] mb-12 md:mb-16" />
        </div>
      </motion.div>

      {/* Link columns */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 md:px-12 lg:px-20 pb-12 md:pb-16"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
            {/* Navigation column */}
            <div>
              <h3 className="font-jetbrains text-[9px] text-[#a89f91]/30 uppercase tracking-[0.3em] mb-5">
                Navigation
              </h3>
              <div className="flex flex-col gap-3">
                {footerNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-jetbrains text-[10px] text-[#a89f91]/50 uppercase tracking-[0.2em] hover:text-[#f5f0e8] transition-colors duration-300 relative group/link inline-block w-fit"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#c4562a]/50 group-hover/link:w-full transition-all duration-500" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Ecosystem column */}
            <div>
              <h3 className="font-jetbrains text-[9px] text-[#a89f91]/30 uppercase tracking-[0.3em] mb-5">
                Ecosystem
              </h3>
              <div className="flex flex-col gap-3">
                {ecosystemLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jetbrains text-[10px] text-[#a89f91]/50 uppercase tracking-[0.2em] hover:text-[#f5f0e8] transition-colors duration-300 relative group/link inline-flex items-center gap-1.5 w-fit"
                  >
                    {link.label}
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover/link:opacity-60 transition-opacity" />
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#c4562a]/50 group-hover/link:w-full transition-all duration-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Legal column */}
            <div>
              <h3 className="font-jetbrains text-[9px] text-[#a89f91]/30 uppercase tracking-[0.3em] mb-5">
                Legal
              </h3>
              <div className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-jetbrains text-[10px] text-[#a89f91]/50 uppercase tracking-[0.2em] hover:text-[#f5f0e8] transition-colors duration-300 relative group/link inline-block w-fit"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#c4562a]/50 group-hover/link:w-full transition-all duration-500" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="font-jetbrains text-[9px] text-[#a89f91]/30 uppercase tracking-[0.3em] mb-5">
                Contact
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:contact@tangison.com"
                  className="font-jetbrains text-[10px] text-[#a89f91]/50 uppercase tracking-[0.2em] hover:text-[#f5f0e8] transition-colors duration-300 relative group/link inline-flex items-center gap-1.5 w-fit"
                >
                  contact@tangison.com
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#c4562a]/50 group-hover/link:w-full transition-all duration-500" />
                </a>
                <a
                  href="https://github.com/tangison"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jetbrains text-[10px] text-[#a89f91]/50 uppercase tracking-[0.2em] hover:text-[#f5f0e8] transition-colors duration-300 relative group/link inline-flex items-center gap-1.5 w-fit"
                >
                  GitHub
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover/link:opacity-60 transition-opacity" />
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#c4562a]/50 group-hover/link:w-full transition-all duration-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-[#2a2520]"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-jetbrains text-[9px] text-[#a89f91]/25 uppercase tracking-[0.3em]">
            &copy; 2026 Tangison. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jetbrains text-[9px] text-[#a89f91]/25 uppercase tracking-[0.2em] hover:text-[#a89f91]/60 transition-colors duration-300"
            >
              Made by Tangison Studio
            </a>
            <span className="font-jetbrains text-[9px] text-[#a89f91]/15 uppercase tracking-[0.2em]">
              Windhoek, Namibia
            </span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
