import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://labs.tangison.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/brand`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
