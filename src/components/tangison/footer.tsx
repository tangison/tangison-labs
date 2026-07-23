"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerNavLinks = [
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
  return (
    <footer className="bg-t-fg text-t-fg-inverse">
      {/* Single thin top accent rule — not gradient */}
      <div className="h-[3px] bg-t-accent" />

      {/* Main footer content */}
      <div className="px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Logo + tagline */}
          <div className="mb-8">
            <Image
              src="/images/logo-white.webp"
              alt="TANGISON"
              width={874}
              height={286}
              className="h-10 md:h-14 w-auto object-contain mb-4"
            />
            <p className="font-cabinet text-base text-t-fg-inverse/60 max-w-[40ch]">
              Research and development. Open source, applied AI, and experimental tools from Windhoek, Namibia.
            </p>
          </div>

          {/* Navigation links — single horizontal row, Cabinet Grotesk */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
            {footerNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-inverse/50 hover:text-t-fg-inverse transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* Divider */}
            <span className="w-[1px] h-3 bg-t-fg-inverse/15 hidden sm:block" aria-hidden="true" />

            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-inverse/30 hover:text-t-fg-inverse/70 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* Divider */}
            <span className="w-[1px] h-3 bg-t-fg-inverse/15 hidden sm:block" aria-hidden="true" />

            <a
              href="mailto:contact@tangison.com"
              className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-inverse/30 hover:text-t-fg-inverse/70 transition-colors duration-300"
            >
              contact@tangison.com
            </a>

            <a
              href="https://github.com/tangison"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cabinet text-[13px] tracking-[0.05em] text-t-fg-inverse/30 hover:text-t-fg-inverse/70 transition-colors duration-300 inline-flex items-center gap-1.5"
            >
              GitHub
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12L12 4M12 4H6M12 4V10" />
              </svg>
            </a>
          </div>

          {/* Thin divider */}
          <div className="h-[1px] bg-t-fg-inverse/8 mb-6" />

          {/* Bottom line: studio credit, copyright, location */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="font-cabinet text-xs text-t-fg-inverse/25">
              &copy; 2026 Tangison. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://studio.tangison.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-cabinet text-xs text-t-fg-inverse/25 hover:text-t-fg-inverse/50 transition-colors duration-300"
              >
                Made by Tangison Studio
              </a>
              <span className="font-cabinet text-xs text-t-fg-inverse/15">
                Windhoek, Namibia
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
