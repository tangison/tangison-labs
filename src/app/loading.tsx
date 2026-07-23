import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-t-bg flex flex-col items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <Image
            src="/images/logo.png"
            alt="TANGISON logo"
            width={874}
            height={286}
            className="h-8 w-auto opacity-70 relative z-10"
            style={{ animation: "loading-pulse 2s ease-in-out infinite" }}
          />
          <div
            className="absolute inset-0 blur-xl bg-t-accent/10"
            style={{ animation: "breathe-glow-bg 2s ease-in-out infinite" }}
            aria-hidden="true"
          />
        </div>
        <div className="w-32 h-[1px] bg-t-border relative overflow-hidden signal-line">
          <div
            className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-t-accent/60 to-transparent"
            style={{ animation: "signal-travel 1.4s cubic-bezier(0.16, 1, 0.3, 1) infinite" }}
          />
        </div>
        <div className="relative h-4 overflow-hidden">
          <span
            className="font-jetbrains text-[9px] text-t-fg-subtle uppercase tracking-[0.4em] absolute inset-0 flex items-center justify-center"
            style={{ animation: "text-cycle 4.2s cubic-bezier(0.16, 1, 0.3, 1) infinite" }}
          >
            Loading
          </span>
        </div>
      </div>
    </div>
  );
}
