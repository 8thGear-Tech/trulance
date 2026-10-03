# Trulance website

Marketing site for Trulance — the community for freelance techies. Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript.

## Run locally

```bash
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Edit content

Most copy, contact details, pricing and FAQs live in `src/lib/site.ts`. Placeholders are in `[SQUARE BRACKETS]`.

## Email for the forms (Resend)

1. Create a free account at resend.com and add/verify the `trulance.io` domain (DNS records).
2. Create an API key and put it in `.env.local` as `RESEND_API_KEY`.
3. Set `CONTACT_FROM_EMAIL` to an address on the verified domain.

Without a key, submissions are printed to the terminal so you can test locally.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project**, import the repo (framework auto-detected as Next.js).
3. Add the three environment variables from `.env.example` under **Settings → Environment Variables**.
4. Deploy, then add `trulance.io` under **Settings → Domains** and update DNS as Vercel instructs.

## Working with Claude Code

`CLAUDE.md` and `docs/` describe the structure, brand rules and brief. Open the folder in VS Code and run Claude Code from it.
