import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Container, Dot, Eyebrow, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "About us",
  description: "Why Trulance exists and how we deliver tech projects with vetted freelancers and built-in quality assurance.",
};

const values = [
  { title: "Trust first", body: "We vet every freelancer and quality-check every deliverable. Reliability is the product." },
  { title: "Community over marketplace", body: "Freelancers grow faster together: shared knowledge, mentorship and referrals." },
  { title: "Clear and fair", body: "Transparent pricing for clients and fair pay for freelancers. No surprises." },
  { title: "Built for Africa, ready for the world", body: "Lagos-based, serving clients and talent across the continent and beyond." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            Tech delivery you can trust
            <Dot />
          </>
        }
        intro="Trulance delivers tech and IT projects for businesses, powered by a vetted community of freelance designers, software engineers, data analysts, technical writers and digital marketers."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tightest sm:text-4xl">Why we started Trulance</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-slate">
            <p>
              Businesses need tech projects done well, but finding a reliable freelancer and managing the work is slow and risky.
              Meanwhile, skilled freelancers often work alone, chasing gigs with no one to learn from or vouch for them.
            </p>
            <p>
              Trulance closes that gap. We build a vetted community of freelance techies, assign them to client projects, and
              quality-check every deliverable before it goes back to the client.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-ink p-8 text-white sm:p-12">
            <p className="font-mono text-sm uppercase tracking-wider text-signal">Mission</p>
            <p className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">To deliver tech projects businesses can trust, and help every freelancer in our community do their best work.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 sm:p-12">
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">A world where any business can get great tech work done with confidence, starting from Lagos.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Eyebrow>What we value</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tightest sm:text-5xl">
            How we work
            <Dot />
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v.title} className="rounded-2xl border border-line p-8">
                <span aria-hidden="true" className="block h-3 w-3 rounded-full bg-signal" />
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-slate">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Let's build something together" />
    </>
  );
}
