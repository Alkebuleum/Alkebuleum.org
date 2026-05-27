# CLAUDE.md — Alkebuleum Media & Press Implementation

This file gives Claude Code the context needed to integrate the Alkebuleum media kit and press release system into the production site at `alkebuleum.org`.

---

## Mission

Deploy a complete press room at `/media` and `/media/press`, integrate it into the existing site, and set up the infrastructure for the foundation team to add new press releases with minimal friction.

---

## Files delivered

These files are ready to deploy. Do not regenerate or redesign them — they have been iterated on extensively and represent locked decisions.

```
media.html                              ← Media kit hub (logos, boilerplate, contact, latest release)
press-index.html                        ← Press release archive (auto-renders from JSON)
press-releases.json                     ← Single source of truth for all releases
press-template.html                     ← Reusable template for new releases
press-founding-announcement.html        ← First press release (example using the template)
PRESS-RELEASES-README.md                ← Human-facing instructions for adding releases
```

**Brand assets also available in this delivery:**
- `alkebuleum-logo-violet.png`
- `alkebuleum-logo-white.png`
- `alkebuleum-logo-black.png`

---

## URL structure to implement

Map these files to these production routes:

| File | Production URL |
|---|---|
| `media.html` | `https://alkebuleum.org/media` |
| `press-index.html` | `https://alkebuleum.org/media/press` |
| `press-founding-announcement.html` | `https://alkebuleum.org/media/press/founding-announcement` |
| `press-releases.json` | `https://alkebuleum.org/media/press-releases.json` |

**Important:** Use `/media` not `/assets` — many static hosting setups reserve `/assets` for compiled files and routing will conflict.

---

## Implementation steps

### 1. File placement

Place the files in the appropriate location for the production stack. The relative internal links assume a flat directory structure, so either:

**Option A — Flat directory (simplest):**
```
public/
  media.html
  press-index.html
  press-founding-announcement.html
  press-releases.json
  press-template.html  (keep this — not publicly linked but needed for new releases)
```

**Option B — Nested with rewrites (cleaner URLs):**
```
public/
  media/
    index.html          ← from media.html
    press-releases.json
    press/
      index.html        ← from press-index.html
      founding-announcement.html  ← from press-founding-announcement.html
```

If Option B, update all internal relative links inside the HTML files to match the new structure. Test that all cross-page navigation still works.

### 2. Fix internal cross-links

The HTML files reference each other using flat filenames (e.g., `href="media.html"`). When deployed at clean URLs, update these to match production paths.

Search and replace in all four delivered HTML files:

| Find | Replace with |
|---|---|
| `href="media.html"` | `href="/media"` |
| `href="press-index.html"` | `href="/media/press"` |
| `href="press-founding-announcement.html"` | `href="/media/press/founding-announcement"` |
| `fetch('press-releases.json')` | `fetch('/media/press-releases.json')` |

Also update the topbar logo link in the press files. Currently links back to the main site as a placeholder — wire to the actual homepage `/`.

### 3. Add /media link to the main site

The main site footer should include a link to the media kit. Find the existing footer Resources or Links section and add:

```html
<li><a href="/media">Media Kit</a></li>
```

**Important constraint from the spec:** Do NOT make this link more prominent than the main ecosystem pages (Council, AlkeLedger, AlkePay, AlkeID, AlkeCredit, AlkeCoin). It belongs in the footer or a secondary nav, not the main navigation.

### 4. Update sitemap.xml

Add three new entries to `sitemap.xml`:

```xml
<url>
  <loc>https://alkebuleum.org/media</loc>
  <changefreq>weekly</changefreq>
  <priority>0.6</priority>
</url>
<url>
  <loc>https://alkebuleum.org/media/press</loc>
  <changefreq>weekly</changefreq>
  <priority>0.5</priority>
</url>
<url>
  <loc>https://alkebuleum.org/media/press/founding-announcement</loc>
  <lastmod>2026-05-24</lastmod>
  <priority>0.5</priority>
</url>
```

For each new press release added going forward, append a new `<url>` entry to the sitemap with the release's slug and publish date.

### 5. Verify the JSON-driven index works

After deploy, visit `/media/press` and verify:

- The founding release appears in the list
- The release count shows "1 release"
- Clicking the release card opens the full release page
- The filter tabs (All / Foundation / Council / Partnership / Product) work
- The "Foundation" filter shows the founding release; others show empty state
- Browser console has no errors

The page uses `fetch()` to load `press-releases.json`. This requires the JSON to be served from the same origin. If you see CORS errors, check that the JSON is being served correctly by your host.

### 6. Test boilerplate copy buttons

On `/media` in the "Approved Descriptions" section, every boilerplate box has a copy button. Verify clipboard copy works on:
- Desktop Chrome, Safari, Firefox
- Mobile Safari (iOS)
- Mobile Chrome (Android)

The clipboard API requires HTTPS in production — works fine on `localhost` but needs SSL for live.

### 7. Wire the logo download buttons

In `/media` under "Logo Downloads," there are three logo cards. The download buttons (`.logo-dl`) are currently `<button>` placeholders with no functionality. Wire them to actually download the PNG files:

```html
<a href="/assets/alkebuleum-logo-violet.png" download class="logo-dl" aria-label="Download violet logo">
  <!-- existing SVG icon -->
</a>
```

Repeat for white and black variants. The PNG files were delivered alongside this implementation.

For SVG downloads (the page advertises both SVG and PNG), generate SVGs from the logo geometry — the source is in any of the existing HTML files as inline SVG with viewBox `0 0 100 110`.

### 8. "Download Full Kit (.zip)" — needs creation

Two buttons reference a full press kit ZIP. Create one containing:
- Logo PNGs (all three variants)
- Logo SVGs (all three variants)
- Founder bio (.txt or .pdf — pull copy from `/media`'s Founder section)
- Boilerplate copy (.txt — pull from `/media`'s Approved Descriptions section)
- The founding announcement press release (.pdf — print `/media/press/founding-announcement` to PDF)

Host at `/assets/alkebuleum-press-kit.zip` and wire both download buttons in `/media` to that URL.

---

## Adding new press releases — workflow for the team

Document this in your internal wiki or onboarding docs. The full guide is in `PRESS-RELEASES-README.md`. Short version:

1. Add a new object to the top of the `releases` array in `press-releases.json`
2. Copy `press-template.html` to `press-[slug].html` and fill in the bracketed placeholders
3. Optionally update `media.html`'s "Latest Release" preview card
4. Append the new URL to `sitemap.xml`

The press index page automatically picks up the new entry from JSON, sorts by date (newest first), and renders the list.

**Important:** The `slug` field in JSON must match the filename suffix exactly. JSON `"slug": "council-launch"` → file `press-council-launch.html`.

---

## Press release categories

Currently four categories drive the filter tabs:

- **Foundation** — Launches, milestones, organizational news
- **Council** — Council formation, member announcements, governance decisions
- **Partnership** — Validator agreements, implementation partner news
- **Product** — Protocol releases, feature launches, technical announcements

To add a new category:
1. Add a new `<button class="filter-tab" data-filter="NewCategory">` to `press-index.html`
2. Use the new category name in JSON for matching releases

---

## Brand & design constraints

These are locked decisions. Do not modify without explicit approval.

**Typography:**
- Headings: Playfair Display (serif, editorial weight)
- Body and labels: DM Sans
- Metadata and eyebrows: DM Mono

**Color tokens (CSS variables in each file):**
```css
--ink: #0c0b0a;          /* Primary text */
--ink-2: #2e2d2b;        /* Body text */
--ink-3: #6b6a66;        /* Secondary text */
--ink-4: #9a9994;        /* Tertiary / muted */
--bg: #faf8f4;           /* Page background (warm cream) */
--bg-2: #f4f0e8;         /* Secondary background */
--bg-dark: #0c0b0a;      /* Dark sidebar / footer */
--purple: #6b52e8;       /* Brand primary */
--purple-2: #4f3ac0;     /* Brand deep */
--accent: #c6b6ff;       /* Brand light */
--gold: #b08a2e;         /* Embargo / authority accent */
```

Do not introduce new colors. Do not switch to other fonts. The editorial press-room aesthetic is intentional and matches institutional press kit conventions (FT, Bloomberg, large foundations).

**Logo geometry:**
The Alkebuleum mark is embedded as an SVG symbol with id `#mark` in every file. ViewBox `0 0 100 110`. Do not modify the geometry.

---

## Meta tags & SEO

Every page has been built with proper meta tags. Do not strip or modify these:

- `<title>` — Page-specific
- `<meta name="description">` — Page-specific summary
- `<link rel="canonical">` — Production URL (update to actual domain when deploying)

Update canonical URLs from `https://alkebuleum.org/...` to the actual production domain if different.

Add to each page when deploying:
- Open Graph tags for social sharing
- Twitter Card tags
- Favicon

Suggested OG image: the Alkebuleum logo on dark background with the brand tagline.

---

## Accessibility notes

- All sections have proper landmark roles
- Heading hierarchy is correct (one h1 per page)
- Skip-link could be added at the top of `<body>` for keyboard users
- All interactive elements have hover and focus states
- The mobile sidebar collapse pattern in `media.html` should be tested with screen readers

---

## Performance notes

The pages are intentionally lightweight — no frameworks, no build step, no external scripts beyond Google Fonts. They should load in well under 1 second on a 4G connection.

If you migrate to a framework later (Next.js, Astro, etc.), the JSON-driven press index pattern translates cleanly:
- `press-releases.json` becomes a CMS or content collection
- `press-index.html` becomes a dynamic route that maps over releases
- Each release becomes a dynamic page generated from the data

---

## Future roadmap (not for this implementation)

These are tracked separately and should not be built unless explicitly requested:

- RSS feed for press releases (`/media/press/feed.xml`)
- Email subscription form for press updates
- Embargo email distribution system
- Translation of releases (French, Arabic, Swahili)
- CMS migration when release count exceeds ~30
- Member-only press portal (linked to Council Office credentials)

---

## Contact for clarification

If anything in the implementation is unclear or you encounter an edge case not covered here, the press office canonical email is `press@alkebuleum.org`. Do not change this — it's referenced throughout the system.

The Council Office email `council@alkebuleum.org` is for institutional partnership inquiries and appears in the contact cards on `/media`.

---

## Final checklist

Before marking this complete:

- [ ] All four HTML files placed at correct URLs
- [ ] All internal cross-links updated to production URLs
- [ ] `/media` linked from main site footer (not main nav)
- [ ] `sitemap.xml` updated with three new entries
- [ ] Press release index loads JSON correctly and renders the founding release
- [ ] Filter tabs work
- [ ] All boilerplate copy buttons work in production HTTPS
- [ ] Logo download buttons wired to real PNG/SVG files
- [ ] Full Press Kit ZIP created and linked
- [ ] OG and Twitter card meta tags added
- [ ] Mobile responsiveness verified on iOS and Android
- [ ] No console errors in any browser
