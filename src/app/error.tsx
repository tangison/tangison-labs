"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-t-bg flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl text-t-fg tracking-tight mb-4">
          Something went wrong
        </h1>
        <p className="font-cabinet text-t-fg-muted text-base sm:text-lg leading-relaxed mb-10">
          Something went wrong on our end. Your information was not affected.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="bg-t-accent text-t-bg px-8 py-4 font-cabinet text-sm tracking-[0.02em] hover:bg-t-accent-hover transition-colors duration-300"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-t-border text-t-fg-muted px-8 py-4 font-cabinet text-sm tracking-[0.02em] hover:text-t-fg hover:border-t-fg/20 transition-colors duration-300"
          >
            Return home
          </Link>
        </div>
        {error.digest && process.env.NODE_ENV === "development" && (
          <div className="mt-12 font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-wider">
            Error ID: {error.digest}
          </div>
        )}
        <div className="mt-8">
          <a href="mailto:contact@tangison.com" className="font-cabinet text-[13px] text-t-fg-subtle hover:text-t-accent transition-colors duration-300">
            contact@tangison.com
          </a>
        </div>
      </div>
    </div>
  );
}
