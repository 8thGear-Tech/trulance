import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-signal text-ink hover:bg-[#ff7440]",
  secondary: "bg-ink text-white hover:bg-ink-800",
  ghost: "border border-ink/20 text-ink hover:border-ink hover:bg-white",
  light: "border border-white/25 text-white hover:border-white hover:bg-white/5",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors";

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button
      className={`${base} ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    />
  );
}

export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`} {...props} />;
}

export function Eyebrow({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  /** "light" = on paper/white backgrounds; "dark" = on navy backgrounds. */
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`font-mono text-sm font-medium uppercase tracking-wider ${tone === "dark" ? "text-signal" : "text-ember"} ${className}`}
    >
      {children}
    </p>
  );
}

/** Orange full stop used as a brand accent after headings. */
export function Dot() {
  return (
    <span aria-hidden="true" className="text-signal">
      .
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="py-16 sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-6xl">
          {title}
        </h1>
        {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">{intro}</p> : null}
      </Container>
    </section>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 ${className}`}
    >
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}
