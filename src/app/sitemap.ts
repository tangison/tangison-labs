import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tangison.com";

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/insights/articles/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Services
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/applied-ai`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/infrastructure`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/consulting`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Applied AI Specializations
    {
      url: `${baseUrl}/services/applied-ai/custom-ai-systems`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/applied-ai/enterprise-deployments`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/applied-ai/workflow-automation`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/applied-ai/data-analysis`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/applied-ai/ai-integrations`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/applied-ai/context-aware-ai`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Infrastructure Specializations
    {
      url: `${baseUrl}/services/infrastructure/agent-orchestration`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/infrastructure/automation-systems`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/infrastructure/deployment-infrastructure`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/infrastructure/workflow-architecture`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/infrastructure/operational-ai`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/infrastructure/integration-layer`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Consulting Specializations
    {
      url: `${baseUrl}/services/consulting/strategy-roadmaps`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/consulting/technology-evaluation`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/consulting/implementation-support`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/consulting/team-training`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Products
    {
      url: `${baseUrl}/products`,
      lastModified: new Date("2025-07-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/skillscamp`,
      lastModified: new Date("2025-07-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products/tangison-agent`,
      lastModified: new Date("2025-07-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products/smefrog-academy`,
      lastModified: new Date("2025-07-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products/feorm`,
      lastModified: new Date("2025-07-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Research
    {
      url: `${baseUrl}/research`,
      lastModified: new Date("2025-08-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/research/projects`,
      lastModified: new Date("2025-08-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/research/open-source`,
      lastModified: new Date("2025-08-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Insights
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date("2025-09-01"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights/articles`,
      lastModified: new Date("2025-09-15"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...articleEntries,
    {
      url: `${baseUrl}/insights/articles/self-hosted-vs-cloud-ai`,
      lastModified: new Date("2025-07-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/insights/case-studies`,
      lastModified: new Date("2025-09-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/insights/resources`,
      lastModified: new Date("2025-09-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Reports
    {
      url: `${baseUrl}/insights/reports/namibia-ai-report`,
      lastModified: new Date("2025-08-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Guides
    {
      url: `${baseUrl}/insights/guides/deployment`,
      lastModified: new Date("2025-08-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Tools
    {
      url: `${baseUrl}/tools/ai-readiness-calculator`,
      lastModified: new Date("2025-08-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // FAQ
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2025-08-01"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // About
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about/authors/tangison`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about/kapatashu`,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Contact
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // Brand
    {
      url: `${baseUrl}/brand`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    // Studio
    {
      url: `${baseUrl}/studio`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Legal
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/cookies`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
