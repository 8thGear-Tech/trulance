import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Container, Dot, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Get in touch with Trulance by form, email or phone.",
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { topic } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title={
          <>
            Let&apos;s talk
            <Dot />
          </>
        }
        intro="Questions about a tech project, joining as a freelancer or partnering with us? Send a message and the team will get back to you."
      />

      <section className="bg-paper pb-24 pt-12 sm:pt-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="font-mono text-sm uppercase tracking-wider text-ember">Email</h2>
              <a href={`mailto:${site.email}`} className="mt-2 block text-xl font-bold hover:text-ember">
                {site.email}
              </a>
            </div>
            <div>
              <h2 className="font-mono text-sm uppercase tracking-wider text-ember">Phone</h2>
              <a href={site.phoneHref} className="mt-2 block text-xl font-bold hover:text-ember">
                {site.phone}
              </a>
            </div>
            <div>
              <h2 className="font-mono text-sm uppercase tracking-wider text-ember">Office</h2>
              <address className="mt-2 text-xl font-bold not-italic">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.country}
              </address>
            </div>
            <div className="rounded-2xl bg-ink p-6 text-white">
              <p className="font-bold">Have a project in mind?</p>
              <p className="mt-2 text-mist">Use the quote form for a faster, more detailed response.</p>
              <Link href="/quote" className="mt-4 inline-block font-semibold text-signal hover:underline">
                Request a quote →
              </Link>
            </div>
          </aside>

          <ContactForm defaultTopic={typeof topic === "string" ? topic : undefined} />
        </Container>
      </section>
    </>
  );
}
