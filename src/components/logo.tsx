import Image from "next/image";

/** Trulance wordmark. Uses the outlined SVGs in /public/brand — never retype the logo. */
export function Logo({ variant = "primary", className = "h-7 w-auto" }: { variant?: "primary" | "reversed"; className?: string }) {
  return (
    <Image
      src={`/brand/trulance-logo-${variant}.svg`}
      alt="Trulance"
      width={3780}
      height={714}
      priority
      className={className}
    />
  );
}
