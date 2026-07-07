/**
 * Hero. Pine background, eyebrow label, big Cormorant headline, a supporting
 * line, and two calls to action: book a free call (scrolls to booking) and
 * view the live demo (opens DEMO_URL in a new tab, graceful when unset).
 */
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { DEMO_URL } from "../site.config";
import { BrassButton, GhostButton, Eyebrow, scrollToId } from "./ui";

export default function Hero() {
  const reduce = useReducedMotion();
  const demoReady = DEMO_URL !== "#" && DEMO_URL.trim() !== "";

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
      className="relative overflow-hidden bg-pine px-6 pt-32 pb-24 sm:pt-40 sm:pb-28"
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
          <Eyebrow>Lead systems for estate agents</Eyebrow>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] text-bone sm:text-5xl md:text-6xl"
        >
          Estate agents are losing deals to slow replies. I build the system that
          fixes it in 7 days.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl font-sans text-lg leading-relaxed text-stone-soft"
        >
          Never lose another lead to a late reply or a missed message. I set up
          the system that answers every buyer for you, day and night.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <BrassButton onClick={() => scrollToId("booking")}>
            Book a free call
          </BrassButton>

          {demoReady ? (
            <GhostButton href={DEMO_URL} newTab tone="light">
              View the live demo
            </GhostButton>
          ) : (
            <GhostButton
              tone="light"
              className="cursor-default opacity-70"
              aria-disabled="true"
              title="The live demo link is being added"
            >
              Live demo coming soon
            </GhostButton>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
