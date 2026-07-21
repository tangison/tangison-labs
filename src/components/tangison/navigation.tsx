"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ─── Navigation Data ─────────────────────────────────────────── */

interface NavItem {
  label: string;
  href: string;
  locked?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research", locked: true },
  { label: "Projects", href: "/projects", locked: true },
  { label: "Publications", href: "/publications", locked: true },
  { label: "Experiments", href: "/experiments", locked: true },
];

const crossLinks = [
  { label: "Tangison", href: "https://tangison.com" },
  { label: "Studio", href: "https://studio.tangison.com" },
  { label: "Agent", href: "https://agent.tangison.com" },
];

/* ─── Hamburger Icon (two-line → X) ───────────────────────────── */

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-5 h-5 flex flex-col justify-center gap-[5px] relative">
      <span
        className={`block w-full h-[1.5px] bg-[#f5f0e8] transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[3.25px]" : ""
        }`}
      />
      <span
        className={`block w-full h-[1.5px] bg-[#f5f0e8] transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
        }`}
      />
    </div>
  );
}

/* ─── Main Navigation Component ───────────────────────────────── */

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMobileOpen(false);
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname]
  );

  return (
    <>
      {/* ─── Desktop / Shared Nav Bar ─── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-5 sm:px-6 md:px-12 py-4 md:py-5 flex justify-between items-center ${
          isScrolled
            ? "bg-[#171412]/95 border-b border-[#2a2520] py-3 md:py-4"
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
          transition:
            "backdrop-filter 0.7s cubic-bezier(0.16, 1, 0.3, 1), -webkit-backdrop-filter 0.7s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.7s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* TANGISON LABS Logo */}
        <Link
          href="/"
          className="relative h-10 md:h-12 flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          aria-label="Tangison Labs home"
        >
          <Image
            src="/images/logo-white.webp"
            alt="TANGISON"
            width={874}
            height={286}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
          <span className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-[#c4562a] hidden sm:inline">
            Labs
          </span>
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-jetbrains text-[10px] uppercase tracking-[0.2em] relative group inline-flex items-center transition-colors duration-300 ${
                isActive(item.href)
                  ? "text-[#f5f0e8]"
                  : "text-[#a89f91] hover:text-[#f5f0e8]"
              }`}
            >
              {item.label}
              {item.locked && (
                <span className="ml-1.5 w-1.5 h-1.5 bg-[#c4562a]/40 inline-block" />
              )}
              {/* Underline indicator */}
              <span
                className={`absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300 ease-out ${
                  isActive(item.href)
                    ? "w-full bg-[#c4562a]"
                    : "w-0 group-hover:w-full bg-[#c4562a]/60"
                }`}
              />
            </Link>
          ))}

          {/* Divider */}
          <div className="w-[1px] h-3 bg-[#2a2520]" aria-hidden="true" />

          {/* Cross-links to other Tangison properties */}
          {crossLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jetbrains text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-1 text-[#a89f91]/40 hover:text-[#a89f91] transition-colors duration-300"
            >
              {link.label}
              <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2 text-[#f5f0e8]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          <HamburgerIcon isOpen={isMobileOpen} />
        </button>
      </motion.nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#171412] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Spacer for nav bar height */}
            <div className="h-16 md:h-20 shrink-0" />

            {/* Centered nav links */}
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-5 sm:gap-6 w-full max-w-sm">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.99 }}
                    transition={{
                      delay: i * 0.06 + 0.1,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full text-center"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`font-cabinet text-xl sm:text-2xl tracking-[0.15em] uppercase transition-colors duration-300 inline-flex items-center gap-3 ${
                        isActive(item.href)
                          ? "text-[#f5f0e8]"
                          : "text-[#a89f91] hover:text-[#f5f0e8]"
                      }`}
                    >
                      {item.label}
                      {item.locked && (
                        <span className="w-1.5 h-1.5 bg-[#c4562a]/40 inline-block" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Cross-links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="w-full text-center pt-6 border-t border-[#2a2520]"
                >
                  <div className="flex items-center justify-center gap-6">
                    {crossLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-cabinet text-sm tracking-[0.15em] uppercase text-[#a89f91]/40 hover:text-[#a89f91] transition-colors duration-300 inline-flex items-center gap-1.5"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </nav>
            </div>

            {/* Bottom location tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pb-8 text-center shrink-0"
            >
              <span className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.3em]">
                Windhoek, Namibia
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
