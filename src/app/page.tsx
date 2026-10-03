import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { ArrowIcon, ButtonLink, Container, Dot, Eyebrow } from "@/components/ui";
import { disciplines } from "@/lib/site";

const steps = [
  { n: "01", title: "Share your brief", body: "Tell us what you're building, your timeline and budget. A short call or the quote form is enough." },
  { n: "02", title: "Get matched", body: "We shortlist vetted freelancers from the Trulance community whose skills fit the work." },
  { n: "03", title: "Ship together", body: "Work directly with your talent, with Trulance on hand for milestones, support and payments." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Eyebrow>Designers · Engineers · Analysts · Writers · Marketers</Eyebrow>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-tightest sm:text-7xl">
              Vetted tech talent, ready when you are
              <Dot />
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
              Trulance is the community for freelance techies. We match businesses with skilled, reliable freelancers and give
              freelancers the network to do their best work.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/quote">Hire talent</ButtonLink>
              <ButtonLink href="/contact?topic=join" variant="ghost">
                Join as a freelancer
              </ButtonLink>
            </div>
          </div>

          <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src="/brand/trulance-icon-navy.svg"
              alt=""
              width={1000}
              height={1000}
              priority
              className="h-full w-full"
            />
            <div className="absolute bottom-10 left-0 sm:-left-6 rounded-2xl bg-white px-5 py-4 shadow-lg shadow-ink/10">
              <p className="font-mono text-xs uppercase tracking-wider text-slate">Matched</p>
              <p className="mt-1 text-lg font-bold">Product designer</p>
            </div>
            <div className="absolute right-0 top-10 sm:-right-4 rounded-2xl bg-white px-5 py-4 shadow-lg shadow-ink/10">
              <p className="font-mono text-xs uppercase tracking-wider text-slate">Available</p>
              <p className="mt-1 text-lg font-bold">Backend engineer</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Disciplines */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tightest sm:text-5xl">
                Five disciplines, one trusted community
                <Dot />
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-ember hover:text-ink">
              Explore services <ArrowIcon />
            </Link>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {disciplines.map((d, i) => (
              <li key={d.slug} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
                <span className="font-mono text-sm text-ember">0{i + 1}</span>
                <h3 className="mt-6 text-xl font-bold">{d.title}</h3>
                <p className="mt-3 flex-1 text-slate">{d.summary}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <Eyebrow tone="dark">How it works</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tightest sm:text-5xl">
            From brief to shipped work in three steps
            <Dot />
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="border-t border-white/15 pt-6">
                <span className="font-mono text-sm text-signal">{s.n}</span>
                <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-mist">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Two audiences */}
      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 sm:p-12">
            <Eyebrow>For businesses</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tightest">Hire with confidence</h2>
            <p className="mt-4 text-slate">
              Every freelancer is vetted before they join. Get clear pricing, defined milestones and a team that stands behind the
              work.
            </p>
            <ButtonLink href="/pricing" variant="secondary" className="mt-8">
              See pricing
            </ButtonLink>
          </div>
          <div className="rounded-3xl bg-signal p-8 sm:p-12">
            <p className="font-mono text-sm font-medium uppercase tracking-wider text-ink">For freelancers</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tightest">Grow with your people</h2>
            <p className="mt-4 text-ink-800">
              Find quality client work, learn from peers and build a reputation in a community made for freelance techies.
            </p>
            <ButtonLink href="/contact?topic=join" variant="secondary" className="mt-8">
              Join the community
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
