import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-satoshi font-bold text-[8rem] sm:text-[10rem] md:text-[14rem] text-[#C4562A]/[0.06] leading-none tracking-tighter">
          404
        </h1>
        <div className="-mt-8 mb-10">
          <p className="font-cabinet text-[#6B6860] text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            This page does not exist. It may have been moved or removed.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[#C4562A] text-[#FAFAF8] px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-[#A84420] transition-colors duration-300 group"
        >
          Return home
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 12L12 4M12 4H6M12 4V10" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
