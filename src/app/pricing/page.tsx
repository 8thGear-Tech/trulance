import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { ButtonLink, CheckIcon, Container, Dot, Eyebrow, PageHeader } from "@/components/ui";
import { faqs, freelancerPlan, plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for hiring vetted freelance tech talent through Trulance.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Clear pricing, no surprises
            <Dot />
          </>
        }
        intro="Choose the model that fits your work. Every engagement starts with a free consultation and a written quote."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <ul className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <li
                key={p.name}
                className={`flex flex-col rounded-3xl p-8 sm:p-10 ${p.featured ? "bg-ink text-white" : "border border-line bg-paper"}`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-extrabold tracking-tightest">{p.name}</h2>
                  {p.featured ? (
                    <span className="rounded-full bg-signal px-3 py-1 font-mono text-xs font-medium uppercase text-ink">Popular</span>
                  ) : null}
                </div>
                <p className={`mt-3 ${p.featured ? "text-mist" : "text-slate"}`}>{p.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold tracking-tightest">{p.price}</span>{" "}
                  <span className={p.featured ? "text-mist" : "text-slate"}>{p.cadence}</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckIcon className={p.featured ? "text-signal" : "text-ember"} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href={p.cta.href} variant={p.featured ? "primary" : "secondary"} className="mt-10">
                  {p.cta.label}
                </ButtonLink>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-8 rounded-3xl bg-signal p-8 sm:p-10 lg:grid-cols-[1fr_1.4fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-wider">For freelancers</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tightest">{freelancerPlan.name}</h2>
              <p className="mt-2">
                <span className="text-3xl font-extrabold">{freelancerPlan.price}</span> {freelancerPlan.cadence}
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {freelancerPlan.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <CheckIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact?topic=join" variant="secondary">
              Apply to join
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tightest sm:text-4xl">Questions, answered</h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl text-ember transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Not sure which plan fits" body="Tell us about your project and we'll recommend the right model with a written quote." />
    </>
  );
}
