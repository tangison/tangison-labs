# Task 5 — Tangison Labs Phase 3 (Creation)

## Agent: Main Agent
## Date: 2026-03-05

## Summary

Stripped the full tangison.com site down to an R&D-only Labs site in demo mode. All non-Labs routes removed, new Labs routes created, home page and /brand page fully rebuilt, all other routes locked with a designed preview state.

## Changes Made

### Step 1: Removed non-Labs routes
- Deleted: `/about/`, `/studio/`, `/services/`, `/products/`, `/faq/`, `/contact/`, `/tools/`, `/insights/case-studies/`, `/insights/resources/`, `/insights/guides/`
- Deleted API routes: `/api/chat/`, `/api/contact/`, `/api/asr/`, `/api/tts/`
- Removed entire `/api/` directory (no API routes needed for Labs demo)

### Step 2: Added new route directories
- Created: `/projects/`, `/publications/`, `/experiments/` — all with locked state pages

### Step 3: Built global shell
- **Navigation** (`navigation.tsx`): Labs-focused with Home, Research, Projects, Publications, Experiments. Cross-links to tangison.com, studio.tangison.com, agent.tangison.com. Mobile hamburger with slide-in panel. Accent underline (#c4562a) for active states. Locked pages get a subtle dot indicator.
- **Footer** (`footer.tsx`): "© 2026 Tangison", "Made by Tangison Studio" linked to studio.tangison.com, links to all Tangison properties, contact@tangison.com, GitHub.
- **Site Shell** (`site-shell.tsx`): Removed AI widget, dark theme (#171412 background).

### Step 4: Built home page
- Hero: "We build what we research" with CTA to /projects
- Ecosystem section: Three properties (Studio, Agent, Labs highlighted)
- Research highlights: "Current research" with CTA to /research (locked)
- Open source: Link to github.com/tangison
- All sections use fade-up reveals with reduced-motion fallback

### Step 5: Built /brand page
- Identity idea (structured precision)
- Logo usage with actual logo images (dark/light variants)
- Colour palette with swatches, hex/OKLCH values, copy buttons
- Typography specimens (Satoshi, Cabinet Grotesk, JetBrains Mono)
- Type scale table
- Grid and spacing system
- Shape rules with zero-radius demonstration (correct vs incorrect)
- Motion principles
- Component examples (buttons, navigation, forms)
- Correct vs incorrect usage with check/cross indicators
- Sources and licensing

### Step 6: Built locked demo component
- `LockedPage` component: Shows page title, description, "not yet available" message, accent border top, lock icon, back-to-home link
- Applied to all locked routes: /research, /research/projects, /research/open-source, /insights/articles, /insights/reports, /projects, /publications, /experiments, /legal/privacy, /legal/terms, /legal/cookies

### Step 7: Built system pages
- **404**: "This page does not exist" with return home link
- **500**: "Something went wrong on our end" with try again, return home, and contact link
- **Loading**: Skeleton with logo, signal line animation, "Loading" text

### Step 8: Updated metadata and system files
- **layout.tsx**: Title "Tangison Labs", metadata for labs.tangison.com, noindex meta, dark theme body class, fonts preconnect
- **robots.ts**: Disallow all (demo mode)
- **sitemap.ts**: Only home and /brand
- **robots.txt**: User-agent: * Disallow: /
- **next.config.ts**: Redirects for old routes, X-Robots-Tag: noindex header, security headers (CSP, HSTS, X-Frame-Options, etc.)

### Step 9: Updated globals.css
- CSS custom properties for all Tangison Labs colour tokens
- Dark theme as default (--background: #171412, --foreground: #f5f0e8)
- Accent colour #c4562a (from BRAND.md)
- Zero border-radius globally
- Animation definitions with reduced-motion fallbacks
- Typography scale classes
- Dark scrollbar styling

### Step 10: Cleaned up unused files
- Removed: ai-widget.tsx, articles.ts, authors.ts, breadcrumb.ts
- Removed: gallery images, PDF documents, kapatashu/tangi profile images
- Kept: logo files (logo.webp, logo.png, logo-white.webp, logo-white.png, logo.svg), favicon, OG image
- Removed GSAP dependency from page-header.tsx (replaced with Framer Motion only)

### Step 11: Updated README.md
- Describes Tangison Labs as R&D division
- Stack details, project structure, demo mode explanation
- Ecosystem links, deployment info

## Verification Results

- **TypeScript**: `npx tsc --noEmit` — Passed (0 errors)
- **ESLint**: `npx eslint .` — Passed (0 warnings/errors)
- **Production Build**: `npm run build` — Successful (17 static pages generated)
  - All expected routes present: /, /brand, /research/*, /insights/*, /projects, /publications, /experiments, /legal/*, /robots.txt, /sitemap.xml

## Design Constraints Verified

- ✅ Zero border-radius on all elements (global CSS rule + `!important`)
- ✅ No purple gradients, glass panels, card grids, pills, or decorative blobs
- ✅ Exact colours from BRAND.md (#171412, #f5f0e8, #c4562a, #a89f91, #2a2520, etc.)
- ✅ Exact fonts from BRAND.md (Satoshi headings, Cabinet Grotesk body, JetBrains Mono code)
- ✅ "Made by Tangison Studio" footer credit linked to studio.tangison.com
- ✅ Mobile-first responsive design
- ✅ WCAG 2.2 AA accessible (focus-visible styles, skip-to-content, semantic HTML, contrast ratios)

## Route Matrix (Final)

| Route | Status | Type |
|-------|--------|------|
| `/` | Unlocked | Home page |
| `/brand` | Unlocked | Brand guidelines |
| `/research` | Locked | Preview only |
| `/research/projects` | Locked | Preview only |
| `/research/open-source` | Locked | Preview only |
| `/insights/articles` | Locked | Preview only |
| `/insights/reports` | Locked | Preview only |
| `/projects` | Locked | Preview only |
| `/publications` | Locked | Preview only |
| `/experiments` | Locked | Preview only |
| `/legal/privacy` | Locked | Preview only |
| `/legal/terms` | Locked | Preview only |
| `/legal/cookies` | Locked | Preview only |
| 404 | System | Not found page |
| 500 | System | Error page |
