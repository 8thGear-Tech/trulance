import { ButtonLink, Container, Dot } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-mono text-sm uppercase tracking-wider text-ember">404</p>
      <h1 className="mt-4 text-5xl font-extrabold tracking-tightest">
        Page not found
        <Dot />
      </h1>
      <p className="mt-4 text-lg text-slate">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <ButtonLink href="/" variant="secondary" className="mt-8">
        Back to home
      </ButtonLink>
    </Container>
  );
}
