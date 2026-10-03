# Trulance website — build brief

## Product

Trulance is a Lagos-based community for freelance techies: designers, software engineers, technical writers and digital marketers. It serves two audiences:

1. **Businesses** that need vetted, reliable freelance tech talent (primary conversion: *Request a quote*).
2. **Freelancers** who want quality client work and a peer community (conversion: *Join* via the contact form with `?topic=join`).

Brand personality: **trustworthy & professional, bold & energetic.**

## Pages

| Route | Purpose | Key sections |
|---|---|---|
| `/` | Landing | Hero + dual CTA, four disciplines, how it works (3 steps), businesses vs freelancers, CTA band |
| `/about` | About us | Story, mission & vision, values |
| `/services` | What we do | Four disciplines with skills, engagement models (project, dedicated, squad) |
| `/pricing` | Service pricing | 3 client plans (Starter, Growth, Squad), freelancer membership, FAQs |
| `/contact` | Contact us | Email/phone/address, contact form with topic (`?topic=hire|join|partnership`) |
| `/quote` | Request a quote | Detailed quote form (services, plan, budget, timeline, details); plan prefill via `?plan=starter|growth|squad` |

## Contact details

- Email: info@trulance.io
- Phone: +234 809 550 9979
- Address: 41 CMD Road, Secretariat/Magodo, Lagos, Nigeria
- Domain: trulance.io

## Forms

Both forms are Server Actions (`src/app/actions.ts`) validated with zod, protected by a hidden honeypot field, and emailed to `CONTACT_TO_EMAIL` via Resend with `replyTo` set to the submitter.

## Content still to provide (search for `[`)

- Prices for Starter, Growth and freelancer membership; revision rounds
- Budget ranges in the quote form (`src/components/quote-form.tsx`)
- About page story, mission, vision
- FAQ answers (vetting, matching time, payments, replacement policy)
- Response time in form success messages (`[N] working days`)
- Social media URLs (`src/lib/site.ts`)

## Possible next steps

- Freelancer application page with portfolio upload
- Case studies / testimonials (real ones only)
- Blog or resources section (MDX)
- Analytics (Vercel Analytics) and a cookie notice if trackers are added
- Open Graph image (`src/app/opengraph-image.tsx`)
