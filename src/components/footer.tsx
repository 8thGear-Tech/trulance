import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./logo";
import { Container } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variant="reversed" className="h-7 w-auto" />
          <p className="mt-5 max-w-sm text-mist">{site.tagline}</p>
        </div>

        <div>
          <h2 className="font-mono text-sm uppercase tracking-wider text-mist">Explore</h2>
          <ul className="mt-4 space-y-3">
            {[...nav, { label: "Request a quote", href: "/quote" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-signal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-sm uppercase tracking-wider text-mist">Contact</h2>
          <address className="mt-4 space-y-3 not-italic">
            <p>
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.country}
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-signal">
                {site.email}
              </a>
            </p>
            <p>
              <a href={site.phoneHref} className="hover:text-signal">
                {site.phone}
              </a>
            </p>
          </address>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Trulance. All rights reserved.</p>
        <ul className="flex gap-5">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="hover:text-signal">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
