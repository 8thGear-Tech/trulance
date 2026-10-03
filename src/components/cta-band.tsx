import { ButtonLink, Container, Dot } from "./ui";

export function CtaBand({
  title = "Ready to get your tech project delivered",
  body = "Tell us what you need and we'll come back with a clear scope, a quote and a delivery plan, quality-checked at every step.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-paper py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-white sm:px-14">
          <div aria-hidden="true" className="absolute -bottom-24 -right-16 hidden h-72 w-72 sm:block rounded-full bg-signal" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tightest sm:text-5xl">
              {title}
              <Dot />
            </h2>
            <p className="mt-5 text-lg text-mist">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/quote">Request a quote</ButtonLink>
              <ButtonLink href="/contact" variant="light">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
