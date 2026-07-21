import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: [
    ".space-z.ai",
  ],
  async redirects() {
    return [
      // Redirect old non-Labs routes to home
      { source: "/about", destination: "/", permanent: true },
      { source: "/about/:path*", destination: "/", permanent: true },
      { source: "/studio", destination: "/", permanent: true },
      { source: "/services/:path*", destination: "/", permanent: true },
      { source: "/products/:path*", destination: "/", permanent: true },
      { source: "/faq", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/tools/:path*", destination: "/", permanent: true },
      { source: "/insights/case-studies", destination: "/", permanent: true },
      { source: "/insights/resources", destination: "/", permanent: true },
      { source: "/insights/guides/:path*", destination: "/", permanent: true },
      // Short redirects for legal
      { source: "/privacy", destination: "/legal/privacy", permanent: true },
      { source: "/terms", destination: "/legal/terms", permanent: true },
      { source: "/cookies", destination: "/legal/cookies", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://api.fontshare.com https://fonts.googleapis.com; font-src 'self' https://api.fontshare.com https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
