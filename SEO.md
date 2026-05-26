Paste this full prompt into Claude Code:

```txt
You are updating the Alkebuleum website to fix Google Search Console issues, improve SEO, remove broken Google search sitelinks, create the correct primary ecosystem pages, and guide Google toward showing the preferred sitelinks.

Current situation from Google Search Console:
- Only 4 pages are indexed.
- 10 pages are not indexed.
- Google shows 404 issues for:
  - /grants
  - /whitepaper
  - /terms
  - /privacy
  - /assets
  - /vision
- Google shows redirect examples for:
  - http://alkebuleum.org/
  - http://www.alkebuleum.org/
  - https://www.alkebuleum.org/
- Google shows “Crawled - currently not indexed” for:
  - https://www.alkebuleum.org/AlkebuleumWhitepaper.pdf
- Google Search Console currently shows 0 submitted sitemaps.
- When users Google “Alkebuleum,” Google currently shows sitelinks like “Alkecoin” and “Vision paper,” but some go to 404. This must be fixed.

Main goal:
When users search for “Alkebuleum,” we want Google to eventually show these primary sitelinks in this preferred order:

1. Alkebuleum Council
2. AlkeLedger
3. AlkePay
4. AlkeID
5. AlkeCredit
6. AlkeCoin

Important:
Google sitelinks are automated. We cannot force exact sitelinks or exact order, but we can strongly influence them by:
- Creating strong pages
- Fixing 404s
- Adding clean redirects
- Updating homepage navigation
- Improving internal linking
- Adding sitemap.xml
- Adding robots.txt
- Using canonical URLs
- Adding metadata
- Adding structured data
- Making these pages prominent on the homepage

Before editing:
Inspect the existing project first. Follow the current framework, routing structure, styling system, deployment setup, and existing brand design. Do not rewrite the entire website unless absolutely necessary.

====================================================
1. PRIMARY PAGES TO CREATE OR UPDATE
====================================================

Create or update these six official primary pages:

/council
/alkeledger
/alkepay
/alkeid
/alkecredit
/alkecoin

All six pages must return HTTP 200. No placeholder pages. Each page should have real content, proper metadata, canonical tags, and internal links.

Use this exact preferred order everywhere:

1. Alkebuleum Council
2. AlkeLedger
3. AlkePay
4. AlkeID
5. AlkeCredit
6. AlkeCoin

====================================================
2. PAGE TITLES AND META DESCRIPTIONS
====================================================

Use these SEO titles:

/council
<title>Alkebuleum Council | Reputable Authority for Africa’s Trust Layer</title>

/alkeledger
<title>AlkeLedger | Institutional Trust Ledger by Alkebuleum</title>

/alkepay
<title>AlkePay | Payments Anchored to the Alkebuleum Ledger</title>

/alkeid
<title>AlkeID | Identity Infrastructure for the Alkebuleum Trust Layer</title>

/alkecredit
<title>AlkeCredit | Reputation and Credit Infrastructure for Africa</title>

/alkecoin
<title>AlkeCoin (ALKE) | Native Coin of Alkebuleum</title>

Use these meta descriptions:

/council
The Alkebuleum Council brings together reputable institutions, leaders, and organizations to guide Africa’s trust layer for identity, records, payments, and digital sovereignty.

/alkeledger
AlkeLedger is Alkebuleum’s blockchain-anchored ledger for institutions, documents, records, accountability, and trusted organizational activity.

/alkepay
AlkePay helps organizations create payment requests, collect funds, manage disbursements, and automatically anchor transaction records to AlkeLedger.

/alkeid
AlkeID is Alkebuleum’s identity infrastructure for trusted people, institutions, records, credentials, and digital participation.

/alkecredit
AlkeCredit is Alkebuleum’s reputation and credit infrastructure for people, institutions, and organizations building trusted economic participation.

/alkecoin
AlkeCoin (ALKE) is the native coin of the Alkebuleum network, used to power transactions, network participation, and trust infrastructure.

====================================================
3. CONTENT DIRECTION FOR EACH PRIMARY PAGE
====================================================

/council should focus on:
- Alkebuleum Council
- Council of Reputable Authority
- Institutional participation
- Governance guidance
- Trust infrastructure
- Africa and diaspora institutions
- Public-sector, enterprise, academic, civic, nonprofit, and community participation
- How institutions can join or express interest
- Position it as a trust and governance council for digital infrastructure
- Avoid making it sound like a political organization

/alkeledger should focus on:
- Institutional ledgers
- Trusted records
- Documents
- Audit trails
- Accountability
- Blockchain-anchored organizational activity
- Public-sector and enterprise use
- Records that institutions can trust and verify

/alkepay should focus on:
- Payment request links
- Collections
- Disbursements
- Institutional payments
- Automatic ledger updates
- Connection to AlkeLedger
- Organizations being able to accept and disburse payments while keeping clean records

/alkeid should focus on:
- Identity infrastructure
- Trusted digital identity
- Credentials
- Institutional identity verification
- Identity-linked records
- Foundation for AlkeCredit and AlkeLedger
- People, organizations, and institutions
- Avoid making it sound like only a crypto wallet

/alkecredit should focus on:
- Reputation
- Creditworthiness
- Trust history
- Identity-linked financial participation
- Institutions, communities, and economic trust
- Credit and reputation infrastructure for underserved and emerging markets

/alkecoin should focus on:
- ALKE as the native coin
- Network participation
- Transaction fees
- Utility inside the Alkebuleum ecosystem
- Infrastructure role
- Avoid speculative investment language
- Do not make the page sound like a hype/token pump page

Overall tone:
- Professional
- Institutional
- Trust-focused
- Enterprise-ready
- Public-sector friendly
- Clear for non-technical visitors
- African trust infrastructure
- Digital sovereignty, but not too abstract

Avoid:
- Crypto hype
- Overly speculative language
- Too much jargon
- Making Alkebuleum look like only a token project

====================================================
4. HOMEPAGE NAVIGATION UPDATE
====================================================

Update the main homepage navigation to prioritize these links in this exact order:

Alkebuleum Council → /council
AlkeLedger → /alkeledger
AlkePay → /alkepay
AlkeID → /alkeid
AlkeCredit → /alkecredit
AlkeCoin → /alkecoin

Use the exact link text above.

Do not place “Vision Paper” or “Whitepaper” in the main product/navigation group. Those should be under Resources.

Do not use inconsistent names in main navigation, such as:
- Alkecoin
- AKE
- AKE Coin
- Alke coin
- Vision paper
- White paper

Use:
- Alkebuleum Council
- AlkeLedger
- AlkePay
- AlkeID
- AlkeCredit
- AlkeCoin

====================================================
5. HOMEPAGE ECOSYSTEM SECTION
====================================================

Add or update a prominent section near the top of the homepage.

Section heading:
The Alkebuleum Trust Infrastructure

Include six linked cards in this exact order:

1. Alkebuleum Council
A council of reputable authorities helping guide Africa’s trust layer for institutions, records, identity, payments, and digital sovereignty.
Link: /council

2. AlkeLedger
Blockchain-anchored ledger for institutions, records, documents, and accountability.
Link: /alkeledger

3. AlkePay
Payment request links, collections, disbursements, and automatic ledger updates.
Link: /alkepay

4. AlkeID
Identity infrastructure for trusted people, institutions, credentials, and digital participation.
Link: /alkeid

5. AlkeCredit
Reputation, trust, and creditworthiness infrastructure for people and organizations.
Link: /alkecredit

6. AlkeCoin
The native coin used to power transactions, network participation, and the Alkebuleum trust layer.
Link: /alkecoin

This section should be prominent enough for users and search engines to understand that these are Alkebuleum’s main ecosystem pages.

====================================================
6. FIX GOOGLE SEARCH CONSOLE 404 URLS
====================================================

Google Search Console currently shows these 404 URLs:

/grants
/whitepaper
/terms
/privacy
/assets
/vision

None of these should remain 404.

Fix them as follows:

/whitepaper
301 redirect permanently to:
/whitepaper.html

/vision
301 redirect permanently to:
/resources

/grants
Preferred: create a real page at /grants.
If not possible, redirect to /resources.

If creating /grants, use:

Title:
Grants & Funding | Alkebuleum

Meta description:
Explore Alkebuleum grant, funding, and support opportunities for digital trust infrastructure, education, records, and institutional transformation.

/terms
Create a real Terms page at /terms.
Do not redirect this to the homepage.

Title:
Terms of Use | Alkebuleum

/privacy
Create a real Privacy page at /privacy.
Do not redirect this to the homepage.

Title:
Privacy Policy | Alkebuleum

/assets
Important: do not break the website’s actual static assets directory if /assets is used for images, CSS, JS, fonts, or media.

Preferred option:
Create a real Brand Assets page at /assets only if it does not conflict with the static assets folder.

If /assets conflicts with the static assets directory, then:
- Create /brand-assets as the real page
- Redirect /assets to /brand-assets or /resources
- Make sure static files under /assets/... still work

If creating a brand assets page, use:

Title:
Brand Assets | Alkebuleum

Content can include:
- Official logos
- Brand colors
- Media resources
- Downloadable social graphics
- Brand usage guidance

====================================================
7. FIX OLD WHITEPAPER PDF URL
====================================================

Google Search Console shows this old URL under “Crawled - currently not indexed”:

https://www.alkebuleum.org/AlkebuleumWhitepaper.pdf

Clean this up by choosing one official whitepaper location.

Official SEO page:
https://alkebuleum.org/whitepaper.html

/whitepaper.html should return HTTP 200 and include a proper summary of the whitepaper.

Add these 301 redirects:

https://www.alkebuleum.org/AlkebuleumWhitepaper.pdf → https://alkebuleum.org/whitepaper.html
https://alkebuleum.org/AlkebuleumWhitepaper.pdf → https://alkebuleum.org/whitepaper.html
https://alkebuleum.org/whitepaper → https://alkebuleum.org/whitepaper.html
https://www.alkebuleum.org/whitepaper → https://alkebuleum.org/whitepaper.html

If the PDF still needs to be downloadable, place it behind a clear download link on /whitepaper.html.

Example:
Download PDF: /assets/alkebuleum-whitepaper.pdf

But the page Google should index should be:
/whitepaper.html

For /whitepaper.html, use:

<title>Alkebuleum Whitepaper | A Ledger of Trust, Built by Africa</title>
<meta name="description" content="Read the Alkebuleum whitepaper: Africa’s trust layer for identity, records, payments, institutions, and digital sovereignty." />
<link rel="canonical" href="https://alkebuleum.org/whitepaper.html" />

Make sure internal links point to /whitepaper.html, not directly to the old PDF.

====================================================
8. CREATE OR UPDATE /RESOURCES
====================================================

Create or update:

/resources

Purpose:
The Resources page should hold documents and support materials without making “Vision paper” a primary Google sitelink.

Resources can include:
- Whitepaper
- Vision paper, if still relevant
- Official documents
- Brand assets
- Grant/funding links
- Media resources
- Ecosystem explainers

Title:
Resources | Alkebuleum

Meta description:
Explore Alkebuleum resources including whitepapers, official documents, brand assets, and ecosystem information.

Important:
The Vision Paper should not be in the main homepage navigation anymore. It can be listed under Resources.

====================================================
9. CANONICAL DOMAIN REDIRECTS
====================================================

Google Search Console shows these as “Page with redirect”:

http://alkebuleum.org/
https://www.alkebuleum.org/
http://www.alkebuleum.org/

This is okay if they redirect to the canonical domain.

The canonical site version must be:

https://alkebuleum.org/

Ensure these 301 redirects exist:

http://alkebuleum.org/ → https://alkebuleum.org/
http://www.alkebuleum.org/ → https://alkebuleum.org/
https://www.alkebuleum.org/ → https://alkebuleum.org/

All canonical tags should use the non-www HTTPS version.

====================================================
10. CANONICAL URL TAGS
====================================================

Each important page should have a canonical tag.

Use these canonical URLs:

Homepage:
<link rel="canonical" href="https://alkebuleum.org/" />

Council:
<link rel="canonical" href="https://alkebuleum.org/council" />

AlkeLedger:
<link rel="canonical" href="https://alkebuleum.org/alkeledger" />

AlkePay:
<link rel="canonical" href="https://alkebuleum.org/alkepay" />

AlkeID:
<link rel="canonical" href="https://alkebuleum.org/alkeid" />

AlkeCredit:
<link rel="canonical" href="https://alkebuleum.org/alkecredit" />

AlkeCoin:
<link rel="canonical" href="https://alkebuleum.org/alkecoin" />

Resources:
<link rel="canonical" href="https://alkebuleum.org/resources" />

Whitepaper:
<link rel="canonical" href="https://alkebuleum.org/whitepaper.html" />

Grants:
<link rel="canonical" href="https://alkebuleum.org/grants" />

Terms:
<link rel="canonical" href="https://alkebuleum.org/terms" />

Privacy:
<link rel="canonical" href="https://alkebuleum.org/privacy" />

Assets:
If /assets is a real brand assets page:
<link rel="canonical" href="https://alkebuleum.org/assets" />

If using /brand-assets instead:
<link rel="canonical" href="https://alkebuleum.org/brand-assets" />

====================================================
11. OPEN GRAPH AND TWITTER METADATA
====================================================

For the homepage and each primary page, add:

- og:title
- og:description
- og:url
- og:type
- og:image
- twitter:card

Use the current official Alkebuleum brand/social image if available.

For og:url, use the canonical non-www HTTPS URL.

For /council:

<meta property="og:type" content="website" />
<meta property="og:url" content="https://alkebuleum.org/council" />
<meta property="og:title" content="Alkebuleum Council | Reputable Authority for Africa’s Trust Layer" />
<meta property="og:description" content="The Alkebuleum Council brings together reputable institutions, leaders, and organizations to guide Africa’s trust layer for identity, records, payments, and digital sovereignty." />
<meta property="og:image" content="https://alkebuleum.org/[official-social-image]" />
<meta name="twitter:card" content="summary_large_image" />

For /alkeledger:

<meta property="og:type" content="website" />
<meta property="og:url" content="https://alkebuleum.org/alkeledger" />
<meta property="og:title" content="AlkeLedger | Institutional Trust Ledger by Alkebuleum" />
<meta property="og:description" content="AlkeLedger is Alkebuleum’s blockchain-anchored ledger for institutions, documents, records, accountability, and trusted organizational activity." />
<meta property="og:image" content="https://alkebuleum.org/[official-social-image]" />
<meta name="twitter:card" content="summary_large_image" />

For /alkepay:

<meta property="og:type" content="website" />
<meta property="og:url" content="https://alkebuleum.org/alkepay" />
<meta property="og:title" content="AlkePay | Payments Anchored to the Alkebuleum Ledger" />
<meta property="og:description" content="AlkePay helps organizations create payment requests, collect funds, manage disbursements, and automatically anchor transaction records to AlkeLedger." />
<meta property="og:image" content="https://alkebuleum.org/[official-social-image]" />
<meta name="twitter:card" content="summary_large_image" />

For /alkeid:

<meta property="og:type" content="website" />
<meta property="og:url" content="https://alkebuleum.org/alkeid" />
<meta property="og:title" content="AlkeID | Identity Infrastructure for the Alkebuleum Trust Layer" />
<meta property="og:description" content="AlkeID is Alkebuleum’s identity infrastructure for trusted people, institutions, records, credentials, and digital participation." />
<meta property="og:image" content="https://alkebuleum.org/[official-social-image]" />
<meta name="twitter:card" content="summary_large_image" />

For /alkecredit:

<meta property="og:type" content="website" />
<meta property="og:url" content="https://alkebuleum.org/alkecredit" />
<meta property="og:title" content="AlkeCredit | Reputation and Credit Infrastructure for Africa" />
<meta property="og:description" content="AlkeCredit is Alkebuleum’s reputation and credit infrastructure for people, institutions, and organizations building trusted economic participation." />
<meta property="og:image" content="https://alkebuleum.org/[official-social-image]" />
<meta name="twitter:card" content="summary_large_image" />

For /alkecoin:

<meta property="og:type" content="website" />
<meta property="og:url" content="https://alkebuleum.org/alkecoin" />
<meta property="og:title" content="AlkeCoin (ALKE) | Native Coin of Alkebuleum" />
<meta property="og:description" content="AlkeCoin (ALKE) is the native coin of the Alkebuleum network, used to power transactions, network participation, and trust infrastructure." />
<meta property="og:image" content="https://alkebuleum.org/[official-social-image]" />
<meta name="twitter:card" content="summary_large_image" />

====================================================
12. STRUCTURED DATA
====================================================

Add clean JSON-LD structured data.

Homepage should include:
- Organization schema
- WebSite schema
- SiteNavigationElement schema

The SiteNavigationElement schema must use this order:

1. Alkebuleum Council — https://alkebuleum.org/council
2. AlkeLedger — https://alkebuleum.org/alkeledger
3. AlkePay — https://alkebuleum.org/alkepay
4. AlkeID — https://alkebuleum.org/alkeid
5. AlkeCredit — https://alkebuleum.org/alkecredit
6. AlkeCoin — https://alkebuleum.org/alkecoin

Keep schema simple, valid, and not spammy.

====================================================
13. SITEMAP.XML
====================================================

Google Search Console currently shows 0 submitted sitemaps. This is critical.

Create or update:

https://alkebuleum.org/sitemap.xml

It must:
- Return HTTP 200
- Be valid XML
- Include only canonical live URLs
- Not include 404 URLs
- Not include redirected URLs as canonical entries

Include these URLs:

https://alkebuleum.org/
https://alkebuleum.org/council
https://alkebuleum.org/alkeledger
https://alkebuleum.org/alkepay
https://alkebuleum.org/alkeid
https://alkebuleum.org/alkecredit
https://alkebuleum.org/alkecoin
https://alkebuleum.org/resources
https://alkebuleum.org/whitepaper.html
https://alkebuleum.org/grants
https://alkebuleum.org/terms
https://alkebuleum.org/privacy

Also include one of these depending on implementation:

If /assets is a real page:
https://alkebuleum.org/assets

If /brand-assets is used instead:
https://alkebuleum.org/brand-assets

Do not include broken or redirected URLs as canonical sitemap entries, such as:

https://alkebuleum.org/whitepaper
https://alkebuleum.org/vision
https://alkebuleum.org/AlkebuleumWhitepaper.pdf
https://www.alkebuleum.org/AlkebuleumWhitepaper.pdf

If sitemap priority fields are used, set the highest priority for:

/
 /council
 /alkeledger
 /alkepay
 /alkeid
 /alkecredit
 /alkecoin

Maintain the preferred order:
Council → Ledger → Pay → ID → Credit → Coin

====================================================
14. ROBOTS.TXT
====================================================

Create or update:

https://alkebuleum.org/robots.txt

It should:
- Return HTTP 200
- Allow crawling
- Reference sitemap.xml

Use:

User-agent: *
Allow: /

Sitemap: https://alkebuleum.org/sitemap.xml

====================================================
15. INTERNAL LINKING CLEANUP
====================================================

Search the full codebase for old, inconsistent, or broken links.

Look for:

Alkecoin
AlkeCoin
AKE
AKE Coin
Alke coin
Vision paper
vision-paper
visionpaper
whitepaper
white paper
AlkebuleumWhitepaper.pdf
/grants
/terms
/privacy
/assets
/vision
/whitepaper
/council
/alkeid

Update links so they point to the correct canonical destinations.

Use consistent naming:

Alkebuleum Council
AlkeLedger
AlkePay
AlkeID
AlkeCredit
AlkeCoin

Use this preferred order everywhere:

Council → Ledger → Pay → ID → Credit → Coin

This order should be used in:
- Homepage navigation
- Homepage ecosystem section
- Footer links if applicable
- Sitemap
- Structured data
- Any ecosystem/product overview section

Whitepaper and Vision Paper should be under Resources, not in the main ecosystem navigation.

====================================================
16. HTTP STATUS REQUIREMENTS
====================================================

After implementation, verify these return HTTP 200:

https://alkebuleum.org/
https://alkebuleum.org/council
https://alkebuleum.org/alkeledger
https://alkebuleum.org/alkepay
https://alkebuleum.org/alkeid
https://alkebuleum.org/alkecredit
https://alkebuleum.org/alkecoin
https://alkebuleum.org/resources
https://alkebuleum.org/whitepaper.html
https://alkebuleum.org/grants
https://alkebuleum.org/terms
https://alkebuleum.org/privacy
https://alkebuleum.org/sitemap.xml
https://alkebuleum.org/robots.txt

Also verify either:

https://alkebuleum.org/assets returns HTTP 200 as a brand assets page

OR

https://alkebuleum.org/assets redirects cleanly without breaking static asset files

These should return proper 301 redirects:

http://alkebuleum.org/
http://www.alkebuleum.org/
https://www.alkebuleum.org/
https://alkebuleum.org/whitepaper
https://www.alkebuleum.org/whitepaper
https://alkebuleum.org/vision
https://alkebuleum.org/AlkebuleumWhitepaper.pdf
https://www.alkebuleum.org/AlkebuleumWhitepaper.pdf

No important internal URL should return 404.

====================================================
17. TESTING CHECKLIST
====================================================

Before finalizing, test:

1. Homepage loads correctly on mobile and desktop.
2. Main navigation links work.
3. Homepage ecosystem section appears near the top.
4. Homepage ecosystem cards appear in this order:
   - Alkebuleum Council
   - AlkeLedger
   - AlkePay
   - AlkeID
   - AlkeCredit
   - AlkeCoin
5. /council loads with correct title/meta/canonical.
6. /alkeledger loads with correct title/meta/canonical.
7. /alkepay loads with correct title/meta/canonical.
8. /alkeid loads with correct title/meta/canonical.
9. /alkecredit loads with correct title/meta/canonical.
10. /alkecoin loads with correct title/meta/canonical.
11. /resources loads.
12. /whitepaper.html loads.
13. /grants loads or redirects properly.
14. /terms loads.
15. /privacy loads.
16. /assets loads or redirects properly without breaking static assets.
17. /whitepaper redirects to /whitepaper.html.
18. /vision redirects to /resources.
19. Old whitepaper PDF URL redirects correctly.
20. sitemap.xml loads and validates.
21. robots.txt loads and references sitemap.xml.
22. No main navigation links point to 404 pages.
23. No important internal links point to 404 pages.
24. Canonical tags are correct.
25. Open Graph metadata is correct.
26. Twitter metadata is correct.
27. Structured data validates.
28. Mobile layout remains clean.
29. Desktop layout remains clean.

====================================================
18. OPTIONAL CURL VERIFICATION
====================================================

Use curl or the equivalent to verify statuses.

Examples:

curl -I https://alkebuleum.org/
curl -I https://alkebuleum.org/council
curl -I https://alkebuleum.org/alkeledger
curl -I https://alkebuleum.org/alkepay
curl -I https://alkebuleum.org/alkeid
curl -I https://alkebuleum.org/alkecredit
curl -I https://alkebuleum.org/alkecoin
curl -I https://alkebuleum.org/resources
curl -I https://alkebuleum.org/whitepaper.html
curl -I https://alkebuleum.org/grants
curl -I https://alkebuleum.org/terms
curl -I https://alkebuleum.org/privacy
curl -I https://alkebuleum.org/sitemap.xml
curl -I https://alkebuleum.org/robots.txt

Redirect checks:

curl -I http://alkebuleum.org/
curl -I http://www.alkebuleum.org/
curl -I https://www.alkebuleum.org/
curl -I https://alkebuleum.org/whitepaper
curl -I https://alkebuleum.org/vision
curl -I https://alkebuleum.org/AlkebuleumWhitepaper.pdf
curl -I https://www.alkebuleum.org/AlkebuleumWhitepaper.pdf

Expected:
- Main pages should return 200.
- Old/broken URLs should return 301 to the correct canonical page.
- No important URL should return 404.

====================================================
19. FINAL OUTPUT REQUIRED
====================================================

When finished, provide a clear summary with:

- Files changed
- Pages created
- Pages updated
- Redirects added
- Sitemap changes
- Robots.txt changes
- Metadata/canonical updates
- Structured data updates
- Internal links fixed
- Any broken URLs found and fixed
- Any issues still remaining
- Exact manual steps I need to do in Google Search Console

====================================================
20. GOOGLE SEARCH CONSOLE MANUAL STEPS AFTER DEPLOYMENT
====================================================

After deployment, I will do this manually:

1. Go to Google Search Console.
2. Open the alkebuleum.org property.
3. Go to Sitemaps.
4. Submit:

sitemap.xml

5. Use URL Inspection and request indexing for:

https://alkebuleum.org/
https://alkebuleum.org/council
https://alkebuleum.org/alkeledger
https://alkebuleum.org/alkepay
https://alkebuleum.org/alkeid
https://alkebuleum.org/alkecredit
https://alkebuleum.org/alkecoin
https://alkebuleum.org/resources
https://alkebuleum.org/whitepaper.html

6. Inspect the old broken URLs and confirm they redirect:

https://alkebuleum.org/whitepaper
https://alkebuleum.org/vision
https://alkebuleum.org/grants
https://alkebuleum.org/terms
https://alkebuleum.org/privacy
https://alkebuleum.org/assets

7. After Google recrawls, validate fixes for:
- Not found (404)
- Page with redirect
- Crawled - currently not indexed

Do not remove the whitepaper or important public documents. Move them under Resources if needed, but the homepage and main navigation should prioritize:

1. Alkebuleum Council
2. AlkeLedger
3. AlkePay
4. AlkeID
5. AlkeCredit
6. AlkeCoin
```
