# Phase 1 SEO Remediation - Work Record

## Task ID: phase1-seo-remediation
## Agent: Main Agent
## Date: 2026-03-04

## Summary
Completed all 8 tasks of the Phase 1 SEO remediation on the TANGISON Next.js 16 project. Build compiles successfully with all 53 pages generated.

## Files Modified

### Task 1: Fix metadataBase in root layout
- **`src/app/layout.tsx`**
  - Changed `metadataBase` from `new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tangison.com")` to `new URL("https://tangison.com")`
  - Changed `openGraph.url` from env var fallback to `"https://tangison.com"`
  - Twitter and OG images already used static relative paths — no change needed

### Task 2: Add www redirect and trailing slash config
- **`next.config.ts`**
  - Added `trailingSlash: false` after `reactStrictMode: true`
  - Added www redirect as first entry in `redirects()` using `has: [{ type: "host", value: "www.tangison.com" }]`

### Task 3: Fix duplicate brand in title tags
- **36 page.tsx files** — Removed ` | TANGISON` from all title strings
  - Services: Services, Applied AI, AI Infrastructure, AI Consulting
  - Service sub-specializations (6 applied-ai, 6 infrastructure, 4 consulting)
  - Products: Products, SkillsCamp, Tangison Agent, SMEFrog Academy, Feorm
  - Research: Research, Research Projects, Open Source
  - Insights: Insights, Articles, Case Studies, AI Guides & Frameworks
  - Brand: Brand Guidelines
  - Legal: Privacy Policy, Terms of Service, Cookie Policy
  - About and Contact pages use em-dash format — left unchanged
  - Studio page title "Tangison Technologies" has no pipe — left unchanged

### Task 4: Verify H1 on /products page
- **`src/app/products/page-client.tsx`** — Confirmed `<motion.h1>` with "Built by TANGISON" exists at line 86. No change needed.

### Task 5: Update robots.txt
- **`public/robots.txt`** — Added `Disallow: /api/` and `Disallow: /_next/` directives

### Task 6: Fix sitemap.ts
- **`src/app/sitemap.ts`** — Complete rewrite:
  - Replaced all `new Date()` with static dates per specification
  - Added `/studio` route entry with `lastModified: new Date("2025-10-01")`
  - Reordered About/Contact before Brand (as in original)

### Task 7a: Create articles data layer
- **`src/lib/articles.ts`** (NEW FILE)
  - Created `Article` and `ArticleSection` TypeScript interfaces
  - 6 articles with professional, jargon-free content:
    1. "What is an Applied AI Laboratory?" (slug: what-is-an-applied-ai-laboratory)
    2. "Why AI in Africa Starts with Practical Problems" (slug: ai-in-africa-starts-with-practical-problems)
    3. "How We Built Our AI Assistant" (slug: how-we-built-our-ai-assistant)
    4. "Self-Hosted AI: Why Your Infrastructure Should Stay on Your Servers" (slug: self-hosted-ai-infrastructure)
    5. "Offline-First AI: Building Systems That Work Without Internet" (slug: offline-first-ai-systems)
    6. "AI Maturity in African Organizations: Where to Start" (slug: ai-maturity-african-organizations)
  - Each article has: id, title, slug, pillar, readTime, metaDescription, lede, sections (3-4 with heading+body), pullQuote, tags, publishedDate
  - Helper functions: `getArticleBySlug()`, `getAllArticleSlugs()`

### Task 7b: Create [slug] route server component
- **`src/app/insights/articles/[slug]/page.tsx`** (NEW FILE)
  - `generateStaticParams()` returning all slugs
  - `generateMetadata()` with dynamic title, description, canonical, OG tags
  - Renders `ArticlePageClient` or calls `notFound()`

### Task 7c: Create [slug] route client component
- **`src/app/insights/articles/[slug]/page-client.tsx`** (NEW FILE)
  - Uses SiteShell component
  - Back link to /insights/articles
  - Category label (font-jetbrains, uppercase, small)
  - H1 with article title
  - Meta row (readTime + publishedDate with icons)
  - Lede with left border accent
  - Sections with H2 headings + body paragraphs
  - Pull quote with top/bottom borders
  - Tags section
  - Internal links section (contextual based on pillar)
  - CTA to /contact (dark bg)
  - Framer Motion fadeUp animations throughout

### Task 7d: Update articles listing page
- **`src/app/insights/articles/page-client.tsx`** — Complete rewrite:
  - Imports articles from `@/lib/articles` instead of inline data
  - Removed `comingSoon` field and "Coming Soon" badges
  - Article cards are now clickable `<Link>` elements pointing to `/insights/articles/${article.slug}`
  - Added "Read" label with arrow in card footer
  - Removed "More articles coming soon" bottom statement

### Task 8: Update insights featured articles
- **`src/app/insights/page-client.tsx`** — Complete rewrite:
  - Imports articles from `@/lib/articles`
  - `featuredArticles` is now `articles.slice(0, 3)` from the data layer
  - Removed inline `featuredArticles` array with `comingSoon: true`
  - Featured article cards now link to `/insights/articles/${article.slug}`
  - Added category label, read time, and "Read" link in card footer
  - Removed "Coming Soon" badges

### Bonus: Fix env var in about page
- **`src/app/about/page.tsx`** — Removed `const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || ...` and hardcoded `"https://tangison.com/about"` in openGraph url

## Build Verification
- `npx next build` completed successfully
- 53 static pages generated (including 6 article slug pages)
- All TypeScript checks passed
- No errors or warnings related to our changes
