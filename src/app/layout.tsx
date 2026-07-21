import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/tangison/json-ld";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: {
    default: "Tangison Labs — Research and Development",
    template: "%s — Tangison Labs",
  },
  description:
    "Open-source projects, applied AI research, and experimental tools from Tangison Labs in Windhoek, Namibia.",
  keywords: [
    "Tangison Labs",
    "research",
    "development",
    "open source",
    "applied AI",
    "Namibia",
    "Windhoek",
    "R&D",
  ],
  authors: [{ name: "Tangison" }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Tangison Labs — Research and Development",
    description: "Open-source projects, applied AI research, and experimental tools from Tangison Labs.",
    url: "https://labs.tangison.com",
    siteName: "Tangison Labs",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1344,
        height: 768,
        alt: "Tangison Labs — Research and Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tangison Labs — Research and Development",
    description: "Open-source projects, applied AI research, and experimental tools.",
    images: ["/images/og-image.png"],
  },
  metadataBase: new URL("https://labs.tangison.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-cabinet antialiased bg-[#FAFAF8] text-[#1A1A1A]" style={{ overflowX: "hidden", maxWidth: "100vw" }}>
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tangison Labs",
          url: "https://labs.tangison.com",
          logo: "https://labs.tangison.com/images/logo.png",
          description: "Open-source projects, applied AI research, and experimental tools from Tangison Labs in Windhoek, Namibia.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Windhoek",
            addressCountry: "NA",
          },
          sameAs: [
            "https://tangison.com",
            "https://studio.tangison.com",
            "https://agent.tangison.com",
            "https://github.com/tangison",
          ],
        }} />
        {children}
      </body>
    </html>
  );
}
