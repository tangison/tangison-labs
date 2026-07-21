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
    <div className="min-h-screen bg-[#171412] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-satoshi font-bold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-tight mb-4">
          Something went wrong
        </h1>
        <p className="font-cabinet text-[#a89f91] text-base sm:text-lg leading-relaxed mb-10">
          Something went wrong on our end. Your information was not affected.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="bg-[#c4562a] text-[#f5f0e8] px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-[#c4562a]/90 transition-colors duration-300"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-[#2a2520] text-[#a89f91] px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:text-[#f5f0e8] hover:border-[#a89f91]/40 transition-colors duration-300"
          >
            Return home
          </Link>
        </div>

        {error.digest && process.env.NODE_ENV === "development" && (
          <div className="mt-12 font-jetbrains text-[9px] text-[#a89f91]/30 uppercase tracking-wider">
            Error ID: {error.digest}
          </div>
        )}

        <div className="mt-8">
          <a
            href="mailto:contact@tangison.com"
            className="font-jetbrains text-[10px] text-[#a89f91]/40 uppercase tracking-[0.2em] hover:text-[#c4562a] transition-colors duration-300"
          >
            contact@tangison.com
          </a>
        </div>
      </div>
    </div>
  );
}
