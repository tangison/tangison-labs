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
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight mb-4">
          Something went wrong
        </h1>
        <p className="font-cabinet text-[#6B6860] text-base sm:text-lg leading-relaxed mb-10">
          Something went wrong on our end. Your information was not affected.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="bg-[#C4562A] text-[#FAFAF8] px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-[#A84420] transition-colors duration-300"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-[#E0DDD8] text-[#6B6860] px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:text-[#1A1A1A] hover:border-[#1A1A1A]/20 transition-colors duration-300"
          >
            Return home
          </Link>
        </div>
        {error.digest && process.env.NODE_ENV === "development" && (
          <div className="mt-12 font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-wider">
            Error ID: {error.digest}
          </div>
        )}
        <div className="mt-8">
          <a href="mailto:contact@tangison.com" className="font-jetbrains text-[10px] text-[#9B968E] uppercase tracking-[0.2em] hover:text-[#C4562A] transition-colors duration-300">
            contact@tangison.com
          </a>
        </div>
      </div>
    </div>
  );
}
