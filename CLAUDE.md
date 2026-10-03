@AGENTS.md

# Trulance website — guide for Claude Code

Marketing site for **Trulance**, the community for freelance techies (designers, software engineers, data analysts, technical writers, digital marketers). Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and TypeScript. Deployed on Vercel.

Read `docs/BUILD_BRIEF.md` for the product brief and `docs/BRAND.md` for brand rules before changing UI.

## Commands

- `npm run dev` — local dev server at http://localhost:3000
- `npm run build` — production build (run before committing; it must pass)
- `npm run lint` — ESLint (must pass)

## Structure

- `src/app/` — routes: `/` (landing), `/about`, `/services` (What we do), `/pricing`, `/contact`, `/quote` (Request a quote), `not-found.tsx`
- `src/app/actions.ts` — Server Actions for the contact and quote forms (zod validation + Resend email + honeypot)
- `src/lib/site.ts` — **single source of truth** for contact details, nav, disciplines, engagement models, pricing plans and FAQs. Edit copy/prices here, not in page files.
- `src/components/` — `header`, `footer`, `logo`, `cta-band`, `ui` (Button, ButtonLink, Container, Eyebrow, PageHeader, Dot, icons), `form-fields`, `contact-form`, `quote-form`
- `src/app/globals.css` — Tailwind v4 `@theme` brand tokens (colors, fonts)
- `src/fonts/` — self-hosted variable fonts loaded with `next/font/local`
- `public/brand/` — outlined logo SVGs. `src/app/icon.svg`, `apple-icon.png`, `favicon.ico` are the site icons.

## Conventions

- Server Components by default; add `"use client"` only for interactivity (header menu, forms).
- Style with Tailwind utilities using brand tokens (`bg-ink`, `text-signal`, `text-ember`, `bg-paper`, `text-slate`, `border-line`, `font-mono`). Don't introduce new hex colors; extend `@theme` if truly needed.
- Headings: `font-extrabold tracking-tightest`; end key headings with `<Dot />` (the orange full stop).
- Never retype the logo as text; use `<Logo />` or files in `public/brand/`.
- Accessibility: real `<button>`/`<a>`, labels on every input, `aria-invalid` + error text on fields, 44px min touch targets, visible focus. Use `text-ember` (not `text-signal`) for orange text on light backgrounds; `text-signal` only on navy.
- Placeholders to fill are written in `[SQUARE BRACKETS]` — search for `\[` to find them.

## Forms / email

Env vars (see `.env.example`): `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (default info@trulance.io), `CONTACT_FROM_EMAIL` (must be on a domain verified in Resend). Without `RESEND_API_KEY` submissions are logged to the server console instead of emailed.
