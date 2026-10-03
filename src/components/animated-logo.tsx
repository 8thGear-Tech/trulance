/**
 * Animated Trulance logo for the navy footer.
 * The GIF's edges are pre-blended into the footer navy (#101828), so only use it on that background.
 * Visitors who prefer reduced motion get the static reversed wordmark instead.
 */
export function AnimatedFooterLogo({ className = "h-auto w-56" }: { className?: string }) {
  return (
    <picture>
      <source media="(prefers-reduced-motion: reduce)" srcSet="/brand/trulance-logo-reversed.svg" />
      {/* Plain <img>: an animated GIF must not be optimised into a still frame. */}
      <img
        src="/brand/trulance-logo-animated-footer.gif"
        alt="Trulance"
        width={560}
        height={209}
        loading="lazy"
        className={className}
      />
    </picture>
  );
}
