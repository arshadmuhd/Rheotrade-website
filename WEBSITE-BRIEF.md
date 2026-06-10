# Rheotrade — Marketing Website Build Brief (for Claude Code)

**Target launch: July 25.** Public marketing site + sign-up that creates a tenant in the main app and redirects into it.

-----

## 1. Purpose

A fast, polished public website that:

- Explains Rheotrade (complete accounting + trading platform for India & GCC)
- Sells the value: features, advantages, who it's for
- Shows pricing/plans (Starter / Growth / Enterprise)
- Lets a visitor **sign up → create a tenant → get redirected into the main app**

This is SEPARATE from the main Angular application. It's a marketing site, optimised for speed, SEO, and conversion.

## 2. Tech stack (DECIDED: Angular)

- **Angular 21 + TypeScript** (same ecosystem as the main app — one skill set, shared theme/components)
- **SCSS** with the Rheotrade design tokens (same as main app)
- Use **Angular SSR (Angular Universal / hydration)** for SEO + fast first paint (important for a marketing site)
- **Angular animations** (@angular/animations) + Intersection Observer for scroll-triggered reveals
- Deploy: any Node host / static + SSR (e.g. Firebase Hosting, Vercel, Netlify, or your own AWS)
- **RTL-aware** (English + Arabic) — CSS logical properties, dir attribute

## 2b. ANIMATION & "WOW" REQUIREMENTS (this site must impress)

The site must feel premium and alive — animation is a core requirement, not decoration:

- **Hero:** headline words rise/fade in staggered; a gradient-text accent ("in one flow"); floating dashboard cards that gently bob (CSS float animation, different speeds); soft blurred colour blobs behind.
- **Scroll reveals:** every section fades + rises into view as you scroll (Intersection Observer + Angular animations).
- **Feature cards:** hover lifts with soft glow shadow; icon tiles in pastel colours.
- **Numbers/stats:** count-up animation when they scroll into view (e.g. "7 countries", revenue figure).
- **Mini charts:** bars that grow up on reveal; a donut that draws itself.
- **Buttons:** hover lift + shadow; primary CTA stands out.
- **Dark "Why" section:** numbered cards with gradient numerals.
- **Final CTA:** gradient banner with floating blobs.
- Keep it smooth and tasteful (200–400ms ease-out) — premium, NOT flashy/jarring. Respect prefers-reduced-motion.
- See the provided landing-page mockup (Rheotrade-Landing-Mockup.pdf) for the exact look to match.

## 3. SIGN-UP BEHAVIOUR — TWO MODES

### MODE A — LAUNCH MODE (now → July 25) ← BUILD THIS FIRST

- The site is LIVE for marketing, but sign-up is NOT active yet.
- Every "Start Free" / "Create Account" / "Sign Up" button does NOT open a real form or create anything.
- Instead it shows a friendly **"Launching July 25"** message — a modal or inline panel:
  - Headline: "We're launching on 25 July 2026 🚀"
  - Sub: "Rheotrade is almost ready. Leave your email and we'll let you know the moment it's live."
  - Optional: a single email field + "Notify me" button → stores email (waitlist: simple table / form service / email) — NO tenant, NO app redirect.
  - Style it in the soft-blue theme, rounded, friendly.
- Control this with a config flag `SIGNUP_MODE = "coming_soon"` so it can be flipped to live without a rebuild.

### MODE B — LIVE MODE (flip on at launch, July 25) — build the wiring, keep it behind the flag

- When `SIGNUP_MODE = "live"`, the buttons open the real sign-up form.
- The website does NOT create tenants directly or touch any database.
- Sign-up form collects: full name, email, password, company name, country, base currency, plan.
- On submit, the website calls the **main app's public signup API** (`POST {APP_API}/api/v1/signup`) which creates User + Tenant + first Organisation (Owner), returns a token / redirect URL.
- Website then redirects to the main app (`{APP_REDIRECT_URL}?token=…`). Tenant is live instantly (self-service = shared DB).
- Website holds NO business data — it's the front door only.
- Env vars: `SIGNUP_MODE`, `APP_API_BASE_URL`, `APP_REDIRECT_URL`. Never hardcode.

> Build BOTH modes now; ship with `SIGNUP_MODE=coming_soon`. Flipping to `live` on July 25 requires only the env flag (and the main app's signup API being ready).

## 3b. (reference) original tenant-creation detail — applies to MODE B

- The website **does NOT create tenants directly or touch any database.**
- The signup form collects: full name, email, password, company name, country, base currency, plan.
- On submit, the website calls the **main application's public signup API** (e.g. `POST {APP_API}/api/v1/signup`) which:
1. creates the User (Identity module)
1. creates the Tenant (Tenant module, isolation = shared for self-service / plan tier)
1. creates the first Organisation + makes the user its Owner
1. returns an auth token or a one-time redirect URL
- The website then **redirects the user to the main app** (e.g. `https://app.rheotrade.com/welcome?token=…` or the app login) — tenant is now live (shared = instant).
- Website holds NO business data. It's a front door. (This matches the provisioning flow already designed: self-service → shared tenant → instant.)
- Use an environment variable `APP_API_BASE_URL` and `APP_REDIRECT_URL`; never hardcode.

## 4. Pages / sections

**Home (landing)** — hero (headline + sub + "Start Free" CTA + product visual), trust strip, feature highlights, "who it's for", how-it-works (3 steps), testimonial placeholder, pricing teaser, final CTA.
**Features** — detailed: Accounts, Sales, Purchase, Inventory (batch/expiry), Tax (India GST + GCC VAT), Settlement, Workflow, Multi-company, Multi-currency, Arabic/RTL. Each = icon + title + benefit copy.
**Pricing** — 3 plan cards (Starter / Growth / Enterprise): price, user limit, feature list, CTA. Monthly/annual toggle. "Contact us" for Enterprise.
**Solutions / Who it's for** — trading businesses, retail, distribution, pharma/food (batch), multi-branch groups.
**About** — short brand story (Rheotrade = trade that flows), India + GCC focus.
**Contact / Demo** — form (name, email, company, message) → email or CRM.
**Sign Up** — the tenant-creation form (section 3).
**Login** — link/redirect to the main app login.
**Legal** — Privacy, Terms (placeholders).

## 5. Sign-up form fields (the conversion moment)

- Full name, Work email, Password
- Company / Organisation name
- Country (dropdown: India, UAE, Saudi, Bahrain, Oman, Kuwait, Qatar)
- Base currency (auto-suggest from country, editable)
- Plan (pre-selected from pricing page, changeable)
- Accept terms checkbox
- Submit → call signup API → redirect to app
- Show "Setting up your workspace…" state; on success redirect; on error show message.
- Email verification can be post-signup (don't block).

## 6. Theme (MATCH the main app — soft-blue Rheotrade)

Use these exact tokens (Tailwind config / CSS vars):

- bg #f0f4fa · surface #fff · primary #3b82f6 · primary-deep #2563eb · navy #102a4c
- pastels: mint #d8f3e3/#1f9d63 · peach #ffe9dc/#e8763a · lilac #ece8fd/#7c5cdb · sky #dcecfe/#2f7fe0 · rose #ffe2ec/#e0567e
- text #26334d / #6b7891 / #a4afc4 · border #e9eef7
- Font: **Plus Jakarta Sans** (Google Fonts). Headings 700–800, tight letter-spacing.
- Radius: 20px cards, pill buttons. Shadow soft (0 4px 18px rgba(59,130,246,.06)).
- Subtle motion only: fade/rise on scroll, hover lift on cards/buttons. No flashy.
- Logo: R monogram (navy badge, blue R) + "Rheo"(blue)+"trade"(dark) wordmark. (Asset files provided separately.)

## 7. Marketing copy (starting point — refine later)

- **Hero headline:** "Run your entire business in one place."
- **Hero sub:** "Sales, purchase, inventory and accounts — connected, compliant, and accurate. Built for India & the GCC."
- **CTA:** "Start Free" / "Create your account"
- **Value pillars:** One source of truth · GST & VAT built in · Accurate & auditable · Grows with you
- (Pull more from the brochure — same messaging.)

## 8. Must-haves for launch (July 25)

- Responsive (mobile-first) + RTL
- SEO: meta tags, OpenGraph, sitemap, fast load (Lighthouse 90+)
- **"Launching July 25" message on all account/sign-up buttons (MODE A)** + optional email waitlist capture
- Sign-up→app-redirect wiring built but behind the SIGNUP_MODE flag (MODE B), ready to flip on
- Pricing page
- Contact/demo form
- Analytics hook (Google Analytics / Plausible)
- Cookie/privacy notice

## 9. Nice-to-have (post-launch)

- Blog / resources, live chat, customer logos, demo video embed (the trailer), multi-language content beyond EN/AR.

## 10. Build order (to hit July 25)

1. Project setup (Next.js + Tailwind + tokens + fonts + RTL)
1. Shared layout (header nav, footer, logo)
1. Home page (hero + sections)
1. Features + Pricing pages
1. **"Launching July 25" modal + waitlist capture (MODE A — ship this)** AND build the real sign-up form + API call behind SIGNUP_MODE flag (MODE B — dormant until launch)
1. Contact, About, Legal
1. SEO, analytics, responsive/RTL polish, deploy
