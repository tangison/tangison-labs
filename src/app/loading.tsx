import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#FAFAF8] flex flex-col items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <Image
            src="/images/logo.png"
            alt="TANGISON logo"
            width={874}
            height={286}
            className="h-8 w-auto opacity-70 relative z-10"
            style={{ animation: "breathe-glow 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite" }}
          />
          <div
            className="absolute inset-0 blur-xl bg-[#C4562A]/10"
            style={{ animation: "breathe-glow-bg 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite" }}
            aria-hidden="true"
          />
        </div>
        <div className="w-32 h-[1px] bg-[#E0DDD8] relative overflow-hidden signal-line">
          <div
            className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-[#C4562A]/60 to-transparent"
            style={{ animation: "signal-travel 1.4s cubic-bezier(0.16, 1, 0.3, 1) infinite" }}
          />
        </div>
        <div className="relative h-4 overflow-hidden">
          <span
            className="font-jetbrains text-[9px] text-[#9B968E] uppercase tracking-[0.4em] absolute inset-0 flex items-center justify-center"
            style={{ animation: "text-cycle 4.2s cubic-bezier(0.16, 1, 0.3, 1) infinite" }}
          >
            Loading
          </span>
        </div>
      </div>
    </div>
  );
}
