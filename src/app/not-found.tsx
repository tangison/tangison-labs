import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-t-bg flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-satoshi font-bold text-[8rem] sm:text-[10rem] md:text-[14rem] text-t-accent/[0.06] leading-none tracking-tighter">
          404
        </h1>
        <div className="-mt-8 mb-10">
          <p className="font-cabinet text-t-fg-muted text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            This page does not exist. It may have been moved or removed.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-t-accent text-t-bg px-8 py-4 font-cabinet text-sm tracking-[0.02em] hover:bg-t-accent-hover transition-colors duration-300 group"
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
