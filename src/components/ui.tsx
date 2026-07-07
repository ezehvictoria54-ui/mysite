/**
 * Small shared building blocks: buttons, section wrapper, scroll reveal and
 * the brass eyebrow label. Kept together so section files stay focused on copy.
 */
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

// Smoothly scroll to an in page section by id.
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/** Brass primary button. Renders as a link when href is given, else a button. */
export function BrassButton({
  children,
  href,
  onClick,
  newTab,
  className = "",
  ...rest
}: {
  children: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  newTab?: boolean;
  className?: string;
  [key: string]: unknown;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-cta bg-brass px-7 py-3.5 " +
    "font-sans text-sm font-medium uppercase tracking-[0.12em] text-bone " +
    "transition-colors duration-300 hover:bg-brass-bright focus-visible:bg-brass-bright " +
    className;

  if (href) {
    const external = newTab;
    return (
      <a
        href={href}
        onClick={onClick}
        className={base}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={base} {...rest}>
      {children}
    </button>
  );
}

/** Ghost (outline) button for secondary actions. */
export function GhostButton({
  children,
  href,
  onClick,
  newTab,
  tone = "light",
  className = "",
  ...rest
}: {
  children: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  newTab?: boolean;
  tone?: "light" | "dark";
  className?: string;
  [key: string]: unknown;
}) {
  const toneClasses =
    tone === "light"
      ? "border-bone/60 text-bone hover:bg-bone/10"
      : "border-ink/25 text-ink hover:bg-ink/5";
  const base =
    "inline-flex items-center justify-center gap-2 rounded-cta border px-7 py-3.5 " +
    "font-sans text-sm font-medium uppercase tracking-[0.12em] " +
    "transition-colors duration-300 " +
    toneClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={base}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={base} {...rest}>
      {children}
    </button>
  );
}

/** Uppercase brass label used above section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

/** Section wrapper with consistent vertical rhythm and an anchor id. */
export function Section({
  id,
  children,
  className = "",
  bg,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section
      id={id}
      className={`px-6 py-20 sm:py-24 md:py-28 ${bg ?? ""} ${className}`}
    >
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  );
}

/** Fade and rise on scroll into view. Skipped when reduced motion is set. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
