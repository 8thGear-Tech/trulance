import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Container, Dot, Eyebrow, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "About us",
  description: "Why Trulance exists and the values behind the community for freelance techies.",
};

const values = [
  { title: "Trust first", body: "We vet every member and stand behind the work. Reliability is the product." },
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
            A home for freelance techies
            <Dot />
          </>
        }
        intro="Trulance brings together designers, software engineers, technical writers and digital marketers who freelance, and connects them with businesses that need dependable talent."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tightest sm:text-4xl">Why we started Trulance</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-slate">
            <p>[Write two or three sentences on the problem Trulance saw: e.g. businesses struggling to find reliable tech talent, and talented freelancers working in isolation.]</p>
            <p>[Describe how Trulance answers it: a vetted community, fair engagement models, and support on both sides.]</p>
            <p>[Optional: founding year, who&apos;s behind it, and any partners or backers.]</p>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-ink p-8 text-white sm:p-12">
            <p className="font-mono text-sm uppercase tracking-wider text-signal">Mission</p>
            <p className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">[One-sentence mission statement.]</p>
          </div>
          <div className="rounded-3xl bg-white p-8 sm:p-12">
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">[One-sentence vision statement.]</p>
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
