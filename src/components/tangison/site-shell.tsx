"use client";

import React from "react";
import { Navigation } from "@/components/tangison/navigation";
import { Footer } from "@/components/tangison/footer";

export function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell relative flex flex-col bg-t-bg text-t-fg">
      {/* dvh + vh + absolute-floor fallback */}
      <style>{`
        .site-shell {
          min-height: 700px;
          min-height: 100vh;
          min-height: 100dvh;
          overflow-x: hidden;
          max-width: 100vw;
          box-sizing: border-box;
        }
      `}</style>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[9999] focus:bg-t-accent focus:text-t-bg focus:px-4 focus:py-2 focus:font-jetbrains focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
