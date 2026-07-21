import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#171412] flex flex-col items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="relative">
          <Image
            src="/images/logo-white.webp"
            alt="TANGISON logo"
            width={874}
            height={286}
            className="h-8 w-auto opacity-70 relative z-10"
            style={{
              animation: "breathe-glow 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
            }}
          />
          <div
            className="absolute inset-0 blur-xl bg-[#c4562a]/10"
            style={{
              animation: "breathe-glow-bg 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Signal line */}
        <div className="w-32 h-[1px] bg-[#2a2520] relative overflow-hidden">
          <div
            className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-[#c4562a]/80 to-transparent"
            style={{
              animation: "signal-travel 1.4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
            }}
          />
        </div>

        {/* Status text */}
        <div className="relative h-4 overflow-hidden">
          <span
            className="font-jetbrains text-[9px] text-[#a89f91]/40 uppercase tracking-[0.4em] absolute inset-0 flex items-center justify-center"
            style={{
              animation: "text-cycle 4.2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
            }}
          >
            Loading
          </span>
        </div>
      </div>
    </div>
  );
}
