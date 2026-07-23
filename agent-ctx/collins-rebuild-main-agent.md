# Collins-Agency Rebuild — Main Agent Work Record

## Task: Fix all Hallmark slop patterns + video integration + Anime.js choreography

## Summary of Changes

### Critical Fixes (all 3 completed)

1. **Token Discipline Sweep (Gate 48)** — ALL inline hex values replaced with named Tailwind tokens in every component file. New tokens added to globals.css: `--color-t-fg-inverse`, `--color-t-rust-light`, `--color-t-success`, `--color-t-error`, `--color-t-card-surface`, `--color-t-video-frame`. Zero `[#hex]` patterns in any component file. Brand page still shows hex in palette data arrays (by design — it's the brand specimen sheet).

2. **Kill Scroll Animation (Gate 14)** — Removed `whileInView` from ALL sections across ALL pages. Only hero entrance animations remain (framer-motion on research/projects/publications/experiments/brand pages, Anime.js on home page). Created `src/lib/animation-variants.ts` with only `heroFadeIn`, `heroSlideIn`, `heroSlideDown`. All pages import from this single file instead of defining inline variants.

3. **Vary Whitespace Rhythm (Gate 9)** — Removed Section wrapper that hard-coded identical spacing. Each section type now has distinct padding:
   - Hero sections: `pt-36 md:pt-48 pb-20 md:pb-28` (taller, dramatic)
   - Dense data sections: `py-16 md:py-20` (tighter)
   - Editorial prose sections: `py-24 md:py-28` (medium)
   - CTA sections: `py-28 md:py-36` (expansive, dramatic)
   - Footer: `pt-20 md:pt-28 pb-12`

### Major Fixes (all 4 completed)

4. **De-AI Navigation (Gate 42)** — Nav links now use `font-cabinet text-[13px] tracking-[0.05em]` (Cabinet Grotesk, normal case). JetBrains Mono kept ONLY for "Labs" suffix and status badges. Underline indicator reduced to 1px. Mobile links also Cabinet Grotesk, not uppercase.

5. **De-AI Footer (Gate 43)** — Minimal footer: dark bg, single 3px accent rule (not gradient), logo + tagline, navigation links in ONE horizontal row (Cabinet Grotesk 13px), "Made by Tangison Studio" linked, copyright, location. No 5-column grid, no gradient bar.

6. **Remove Invented Metrics (Gate 46)** — All numerical claims in experiments replaced with honest language. "87% routing accuracy" → "Testing routing accuracy with measured latency targets". Added note: "Specific metrics will be published with methodology documentation."

7. **More Structural Variety (Gate 8)** — Each page now has DISTINCT layout identity:
   - Home: Hero → Split → Ecosystem band → Research list → Open source → CTA
   - Research: Hero → Full-width image → Sidebar layout
   - Projects: Hero → Table-style (name | desc | status)
   - Publications: Hero → Timeline with year markers
   - Experiments: Hero → Split (names | prose, no card-in-card)
   - Brand: Specimen sheet (kept as-is)

### Video Integration
- Video accent on home page hero (right side, desktop only)
- Portrait 480x720 video with dark frame border
- `<video>` with both MP4/WebM sources, poster, autoplay muted loop playsInline
- `aria-hidden="true"` (decorative accent media)
- Hidden on mobile for performance

### Anime.js Hero Choreography
- Home page hero uses `createTimeline` from animejs v4
- Sequence: bg fade → video slide → heading fade → support text → CTA stagger
- `useSyncExternalStore` for reduced-motion check (no lint errors)
- Cleanup on unmount via timeline.pause()

### Additional Changes
- Removed `breathe-glow` keyframe, added `loading-pulse` replacement
- Simplified PageHeader: removed eyebrow (dot + monospace label), just back link + title + subtitle
- Back link uses Cabinet Grotesk (not monospace)
- accent-bar changed to single color (not gradient)
- TypeWriter uses `useSyncExternalStore` for reduced motion (lint-compliant)
- `transition-all` eliminated — all transitions specify exact properties

## Files Modified

1. `src/app/globals.css` — Token additions, removed breathe-glow, accent-bar simplified
2. `src/lib/animation-variants.ts` — NEW file, extracted hero variants only
3. `src/components/tangison/navigation.tsx` — Full rewrite (de-AI)
4. `src/components/tangison/footer.tsx` — Full rewrite (minimal)
5. `src/components/tangison/page-header.tsx` — Simplified (remove eyebrow)
6. `src/components/tangison/type-writer.tsx` — useSyncExternalStore for reduced motion
7. `src/components/tangison/site-shell.tsx` — Token sweep
8. `src/app/layout.tsx` — Token sweep
9. `src/app/page-client.tsx` — Full rewrite (video, Anime.js, varied spacing)
10. `src/app/research/page-client.tsx` — Full rewrite (sidebar layout)
11. `src/app/projects/page-client.tsx` — Full rewrite (table layout)
12. `src/app/publications/page-client.tsx` — Full rewrite (timeline)
13. `src/app/experiments/page-client.tsx` — Full rewrite (split, honest metrics)
14. `src/app/brand/page-client.tsx` — Token sweep, spacing variety
15. `src/app/legal/privacy/page-client.tsx` — Token sweep, static
16. `src/app/legal/terms/page-client.tsx` — Token sweep, static
17. `src/app/legal/cookies/page-client.tsx` — Token sweep, static
18. `src/app/not-found.tsx` — Token sweep
19. `src/app/error.tsx` — Token sweep
20. `src/app/loading.tsx` — Token sweep, loading-pulse keyframe
21. `src/app/insights/articles/page-client.tsx` — Token sweep, static
22. `src/app/insights/reports/page-client.tsx` — Token sweep, static
23. `src/app/research/projects/page-client.tsx` — Token sweep, static
24. `src/app/research/open-source/page-client.tsx` — Token sweep, static

## Verification Results

- `bun run lint`: ✅ No errors
- `npx tsc --noEmit`: ✅ No TypeScript errors
- Dev server: ✅ Running on port 3000, responding with 200
- whileInView count: 0 ✅
- transition-all count: 0 ✅
- Inline hex in components: 0 (only in brand palette data arrays by design) ✅
