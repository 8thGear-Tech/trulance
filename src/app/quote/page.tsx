import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { CheckIcon, Container, Dot, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Request a quote",
  description: "Tell us about your project and get a matched freelancer or team with a written quote.",
};

const next = [
  "We review your brief and may ask a few follow-up questions.",
  "We shortlist vetted freelancers who fit the work.",
  "You receive a written quote and proposed match.",
];

export default async function QuotePage({ searchParams }: PageProps<"/quote">) {
  const { plan } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Request a quote"
        title={
          <>
            Tell us what you&apos;re building
            <Dot />
          </>
        }
        intro="A few details help us match the right talent and give you an accurate quote. It takes about three minutes."
      />

      <section className="bg-paper pb-24 pt-12 sm:pt-16">
        <Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <QuoteForm defaultPlan={typeof plan === "string" ? plan : undefined} />
          <aside className="h-fit rounded-3xl bg-ink p-8 text-white lg:sticky lg:top-24">
            <h2 className="text-2xl font-extrabold tracking-tightest">What happens next</h2>
            <ol className="mt-6 space-y-4">
              {next.map((n) => (
                <li key={n} className="flex gap-3 text-mist">
                  <CheckIcon className="mt-0.5 text-signal" />
                  {n}
                </li>
              ))}
            </ol>
          </aside>
        </Container>
      </section>
    </>
  );
}
