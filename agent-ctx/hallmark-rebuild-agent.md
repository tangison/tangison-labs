# Hallmark Rebuild Agent Work Record

## Task: Complete rewrite of Tangison Labs website following Hallmark anti-slop design rules

### Completed Work

1. **globals.css** — Removed all slop classes (pattern-dots, pattern-grid, pattern-cross, accent-orb, accent-orb-rust, accent-orb-teal, signal-line, content-card, tag-chip, accent-underline). Removed deprecated keyframes (breathe-glow [later restored for loading.tsx], float-subtle, pulse-accent). Added typing-cursor classes and blink-cursor keyframe. Kept color tokens, font classes, scrollbar, selection, and essential keyframes (fade-in-up, line-expand, signal-travel, breathe-glow-bg, text-cycle).

2. **TypeWriter component** — Created at `/src/components/tangison/type-writer.tsx`. Character-by-character animation at ~50ms speed, accent-colored blinking cursor that disappears after typing completes, respects prefers-reduced-motion.

3. **Home page** — Complete rewrite with editorial macrostructure:
   - Hero: Full-width desert-road-landscape image (60vh) with typing animation overlay on left, not centered. "We build what we research" types itself.
   - Focus areas: Left-right split (concrete-glass-architecture photo left, stacked typographic list right with numbered items and accent underlines)
   - Ecosystem: Horizontal band with 3 text blocks, Labs highlighted with accent border + corner marks
   - Research highlights: Dark background, magazine-style layout (large heading left, numbered list right 01/02/03)
   - Open source: Split layout (GitHub icon + repo names left, descriptions right)
   - CTA: Left-aligned text on rust background

4. **Research page** — Two-column index macrostructure:
   - Hero with typing animation "Current research"
   - Left column: desert-path-quiver-trees image
   - Right column: 3 numbered research areas with links
   - Methodology note as editorial aside
   - Sub-page links as inline text links (not card grid)

5. **Projects page** — Masonry-style list (not cards):
   - Hero with concrete-glass-architecture image
   - Vertical list with status indicators, hover-reveal detail
   - CTA section

6. **Publications page** — Timeline feel:
   - Hero with desk-books-lamp-sunlight image
   - Timeline-style layout with vertical line, dots, year + title + type badge
   - Sub-page links as inline text links

7. **Experiments page** — Split lab notebook:
   - Hero with desert-road-line image
   - Left: experiment list with stage indicators (hover-reveal detail)
   - Right: methodology section as editorial prose in corner-marked box

8. **Brand page** — Kept specimen structure but removed content-card and tag-chip styling. Used plain borders instead of content-card. Replaced eyebrow label pattern with editorial-divider.

9. **Legal pages** — Cleaned up pattern-grid/pattern-dots references, simplified animation to fadeIn instead of fadeUp.

10. **4 sub-routes** — Rewrote all:
    - /research/projects: Numbered list layout, breadcrumbs to /research
    - /research/open-source: Numbered repo list with GitHub CTA on dark background
    - /insights/articles: Numbered list with "Coming soon" state
    - /insights/reports: Corner-marked box with email signup CTA

11. **Sitemap** — Already includes all new routes (verified)
12. **Navigation** — No changes needed; sub-pages accessible via parent pages
13. **Footer** — Verified "Made by Tangison Studio" credit present

### Hallmark stamp added to every page-client.tsx
`/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */`

### Build verification
- `npm run build` — Succeeded, all 17 routes generated as static content
- `bun run lint` — Passed with no errors
- No TypeScript errors

### Design rules compliance
- Removed: floating orbs, pattern backgrounds, eyebrow labels on every section, universal fadeUp, 4-column card grids, card-in-card with tag-chip, same macrostructure across pages, transition-all, hover:scale-105, two-line clickable text, italic headers
- Kept: font stack, palette, zero border-radius, 8px spacing, varied Framer Motion animations
- Animation variety: slideInLeft, slideInRight, staggerList, staggerItemSlide, revealWidth, fadeIn, slideInDown, staggerItemExpand
- Each page has different macrostructure/rhythm as required
