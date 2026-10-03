import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { CheckIcon, Container, Dot, Eyebrow, PageHeader } from "@/components/ui";
import { disciplines, engagementModels } from "@/lib/site";

export const metadata: Metadata = {
  title: "What we do",
  description: "Design, software engineering, data analytics, technical writing and digital marketing talent, delivered the way you need it.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title={
          <>
            The tech skills your business needs
            <Dot />
          </>
        }
        intro="Whether it's a one-off project or an ongoing team, Trulance matches you with vetted freelancers across five core disciplines."
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="space-y-6">
          {disciplines.map((d, i) => (
            <article
              key={d.slug}
              id={d.slug}
              className="grid scroll-mt-24 gap-8 rounded-3xl border border-line p-8 sm:p-12 lg:grid-cols-[auto_1fr_1fr]"
            >
              <span className="font-mono text-sm text-ember">0{i + 1}</span>
              <div>
                <h2 className="text-2xl font-extrabold tracking-tightest sm:text-3xl">{d.title}</h2>
                <p className="mt-3 text-lg text-slate">{d.summary}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {d.skills.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <CheckIcon className="text-ember" />
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <Eyebrow tone="dark">Ways to work with us</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tightest sm:text-5xl">
            Flexible engagement models
            <Dot />
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementModels.map((m) => (
              <li key={m.title} className="rounded-2xl bg-ink-800 p-8">
                <h3 className="text-xl font-bold">{m.title}</h3>
                <p className="mt-3 text-mist">{m.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
