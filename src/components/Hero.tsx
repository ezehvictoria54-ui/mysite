/**
 * Hero. Pine background, eyebrow label, big Cormorant headline, a supporting
 * line, and two calls to action: book a free call (scrolls to booking) and
 * see live demo (smooth scrolls to the walkthrough video on this page).
 */
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BrassButton, GhostButton, Eyebrow, scrollToId } from "./ui";

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-pine px-6 pt-24 pb-24 sm:pt-28 sm:pb-28"
    >
      {/* Soft brass glow, purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brass-bright), transparent 70%)" }}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-content"
      >
        <motion.div variants={item}>
          <Eyebrow>Lead system for real estate agents</Eyebrow>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] text-bone sm:text-5xl md:text-6xl"
        >
          You are losing deals to slow replies. I built the system that fixes it
          in 3 days.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl font-sans text-lg leading-relaxed text-stone-soft"
        >
          And to the leads you never followed up, the enquiries buried in your
          chats, and the viewings clients forget. I build one system that answers
          buyers instantly, shows you everyone who is interested, follows up for
          you, and reminds clients about their appointments.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <BrassButton onClick={() => scrollToId("booking")}>
            Book a free call
          </BrassButton>

          <GhostButton tone="light" onClick={() => scrollToId("walkthrough")}>
            See live demo
          </GhostButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
