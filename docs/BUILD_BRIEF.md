# Trulance website — build brief

## Product

Trulance is a Lagos-based company that **executes tech and IT projects** for businesses. The work is done by a vetted community of freelance techies (designers, software engineers, data analysts, technical writers and digital marketers), and Trulance provides quality assurance on every deliverable before it goes back to the client.

**Trulance does not help people hire talent** — no recruitment, placement or "dedicated talent" offers. That is a separate company's business.

It serves two audiences:

1. **Businesses** with tech/IT projects to get done (primary conversion: *Request a quote* / *Start a project*).
2. **Freelancers** who want quality client project work and a peer community (conversion: *Join* via the contact form with `?topic=join`).

Brand personality: **trustworthy & professional, bold & energetic.**

## Pages

| Route | Purpose | Key sections |
|---|---|---|
| `/` | Landing | Hero + dual CTA, five disciplines, how it works (3 steps), businesses vs freelancers, CTA band |
| `/about` | About us | Story, mission & vision, values |
| `/services` | What we do | Five disciplines with skills, engagement models (project, monthly retainer, managed squad) |
| `/pricing` | Service pricing | 4 plans (Go Digital ₦150k, Web Only ₦200k–250k, Business Pro from ₦500k, Custom Platform from ₦1m), paid freelancer membership (price TBA), FAQs |
| `/contact` | Contact us | Email/phone/address, contact form with topic (`?topic=project|join|partnership`) |
| `/quote` | Request a quote | Detailed quote form (services, plan, budget, timeline, details); plan prefill via `?plan=go-digital|web-only|business-pro|custom-platform` |

## Contact details

- Email: info@trulance.io
- Phone: +234 809 550 9979
- Address: 41 CMD Road, Secretariat/Magodo, Lagos, Nigeria
- Domain: trulance.io

## Forms

Both forms are Server Actions (`src/app/actions.ts`) validated with zod, protected by a hidden honeypot field, and emailed to `CONTACT_TO_EMAIL` via Resend with `replyTo` set to the submitter.

## Content still to provide (search for `[`)

- Freelancer membership price (TBA)
- Response time in form success messages (`[N] working days`)
- Social media URLs (`src/lib/site.ts`)

## Possible next steps

- Freelancer application page with portfolio upload
- Case studies / testimonials (real ones only)
- Blog or resources section (MDX)
- Analytics (Vercel Analytics) and a cookie notice if trackers are added
- Open Graph image (`src/app/opengraph-image.tsx`)
