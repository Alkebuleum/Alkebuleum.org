# Adding a New Press Release — Quick Guide

The Alkebuleum press release system is JSON-driven. Adding a new release takes about 3 minutes.

## Files involved

```
media.html                              ← Press hub (shows latest release preview)
press-index.html                        ← Auto-renders list of all releases from JSON
press-releases.json                     ← Single source of truth (data file)
press-template.html                     ← Reusable template for new releases
press-founding-announcement.html        ← Example release
```

## To add a new release — 4 steps

### Step 1 — Add an entry to `press-releases.json`

Open `press-releases.json` and add a new object at the top of the `releases` array:

```json
{
  "slug": "council-launch",
  "title": "Alkebuleum Council Welcomes First Founding Members",
  "summary": "Five reputable institutions across West Africa join the Alkebuleum Founding Council as part of the network's first onboarding cohort.",
  "date": "2026-07-15",
  "date_display": "July 15, 2026",
  "category": "Council",
  "location": "Lagos, Nigeria",
  "embargo": null,
  "featured": true,
  "tags": ["council", "members", "west-africa"]
}
```

**Field reference:**
- `slug` — URL-safe identifier. The release file will be `press-[slug].html`. Use lowercase, hyphens only.
- `title` — Full release headline
- `summary` — 1-2 sentences shown on the index page
- `date` — ISO format `YYYY-MM-DD` (used for sorting)
- `date_display` — Human-readable date (not required, but useful)
- `category` — One of: `Foundation`, `Council`, `Partnership`, `Product`
- `location` — City, Country dateline
- `embargo` — Embargo date string, or `null` if not embargoed
- `featured` — Whether to highlight on the main media page
- `tags` — Array of hashtag-style topic tags

### Step 2 — Copy the template

```bash
cp press-template.html press-[slug].html
```

For example: `press-council-launch.html`

### Step 3 — Fill in the content

Open the new file and replace every `[BRACKETED]` placeholder:
- Update `<title>` and `<meta name="description">`
- Update canonical URL
- Replace meta row (date, location)
- Replace category badge
- Replace headline (use `<em>` for italicized portions)
- Replace dek/subtitle
- Replace breadcrumb final label
- Write the body
- Update the pull quote (or remove if no quote)
- Verify boilerplate is correct
- Verify contact block is correct

### Step 4 — Update `media.html` (optional)

If this new release should be the "Latest Release" featured on the media kit page:
- Update the preview card in the `#press-release` section
- Change the date, title, summary, and link to the new release file

That's it. The press index page automatically picks up the new entry from JSON, sorts by date (newest first), and renders the list.

## What happens automatically

- **The press index** (`press-index.html`) reads `press-releases.json` on every page load. The newest release appears first.
- **The category filter** on the index page (All / Foundation / Council / Partnership / Product) filters the list automatically based on the `category` field.
- **The release count** updates automatically.
- **The empty state** shows when filtering yields no results.

## Embargoed releases

For embargoed releases:
1. In `press-releases.json`, set `"embargo": "July 15, 2026 · 09:00 GMT"`
2. In the individual release file, uncomment the embargo banner block at the top of the article
3. Fill in the embargo time/date

The release will show with an EMBARGO badge on the index page.

## Categories

Current categories:
- **Foundation** — Foundation-level announcements (launches, milestones, organizational news)
- **Council** — Council formation, member announcements, governance decisions
- **Partnership** — Institutional partnerships, validator agreements, implementation partner news
- **Product** — Protocol releases, feature launches, technical announcements

To add a new category:
1. Add it to the filter bar in `press-index.html` (search for `data-filter`)
2. Use the new category name in the JSON for matching releases

## URLs to use in production

When deployed, these are the URLs:
- `https://alkebuleum.org/media` → media.html
- `https://alkebuleum.org/media/press` → press-index.html
- `https://alkebuleum.org/media/press/founding-announcement` → press-founding-announcement.html
- `https://alkebuleum.org/media/press-releases.json` → press-releases.json

Update internal links accordingly when configuring your hosting.
