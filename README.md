# Tangison Labs

The research and development division of Tangison. Open-source projects, applied AI research, and experimental tools from Windhoek, Namibia.

## Site

**URL**: [labs.tangison.com](https://labs.tangison.com)

## What this site contains

- **Home page**: Showcase of what Tangison Labs builds, researches, and releases
- **Brand guidelines** (`/brand`): Public expression of the Tangison identity system
- **Locked pages**: Research, Projects, Publications, Experiments, Articles, Reports, and Legal pages are in demo mode and display a locked preview state

## Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Satoshi, Cabinet Grotesk (Fontshare), JetBrains Mono (Google Fonts)

## Design system

- Zero border-radius on all elements (Tangison design signature)
- Dark background (#171412) with light text (#f5f0e8)
- Rust-signal accent (#c4562a) for CTAs and active states
- No purple gradients, glass panels, card grids, pills, or decorative blobs
- Full brand guidelines at `/brand`

## Demo mode

This site is currently in demo mode:

- Only `/` and `/brand` are unlocked
- All other routes show a locked preview state
- `robots.txt` disallows all crawling
- `X-Robots-Tag: noindex` header is set
- No analytics are active

## Running locally

```bash
bun install
bun run dev
```

The site runs on port 3000.

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Home page (server component)
│   ├── page-client.tsx       # Home page (client component)
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles and design tokens
│   ├── brand/                # Brand guidelines (unlocked)
│   ├── research/             # Research index (locked)
│   │   ├── projects/         # R&D projects (locked)
│   │   └── open-source/      # Open source (locked)
│   ├── insights/
│   │   ├── articles/         # Technical articles (locked)
│   │   └── reports/          # Research reports (locked)
│   ├── projects/             # Open-source projects (locked)
│   ├── publications/         # Publications (locked)
│   ├── experiments/          # Experiments (locked)
│   ├── legal/                # Privacy, Terms, Cookies (locked)
│   ├── not-found.tsx         # 404 page
│   ├── error.tsx             # 500 page
│   ├── loading.tsx           # Loading state
│   ├── robots.ts             # Robots.txt generation
│   └── sitemap.ts            # Sitemap generation
├── components/
│   └── tangison/
│       ├── navigation.tsx    # Labs navigation
│       ├── footer.tsx        # Labs footer
│       ├── site-shell.tsx    # Layout shell
│       ├── locked-page.tsx   # Locked demo state
│       ├── page-header.tsx   # Page header component
│       └── json-ld.tsx       # JSON-LD structured data
└── lib/
    └── (empty)
```

## Deployment

- **Platform**: Vercel
- **Repository**: tangison/tangison-labs
- **Domain**: labs.tangison.com (CNAME in Cloudflare)
- **Demo**: noindex, preview branch
- **Production**: exact audited commit, indexing enabled

## Ecosystem

- [tangison.com](https://tangison.com) — Gateway
- [studio.tangison.com](https://studio.tangison.com) — Creative and infrastructure services
- [agent.tangison.com](https://agent.tangison.com) — AI agent products

## Licence

All rights reserved. Code and content are property of Tangison.
