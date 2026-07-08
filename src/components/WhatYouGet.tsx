/**
 * What you get. Bone background. The core sales section. Six outcome cards,
 * each with an icon, a title, a benefit line, and a stakes line naming what it
 * costs the agent to keep going without it. Closes with a loss framed push to
 * book the call. Titles, bodies and stakes are kept as separate text.
 */
import {
  Zap,
  LayoutDashboard,
  Repeat,
  BellRing,
  Link2,
  CalendarCheck,
} from "lucide-react";
import { Section, Eyebrow, Reveal, BrassButton, scrollToId } from "./ui";

const cards = [
  {
    icon: Zap,
    title: "Instant replies to every lead",
    body: "Every buyer is answered in seconds, day or night, with the right details and the next step already set up.",
    cost: "Without it, the buyer messages three agents and buys from whoever replied first.",
  },
  {
    icon: LayoutDashboard,
    title: "See everyone who is interested",
    body: "Every enquiry lands in one clean list, so you always know exactly who to call next.",
    cost: "Without it, your hottest buyers stay buried in your chats until they go quiet.",
  },
  {
    icon: Repeat,
    title: "Follow up that never stops",
    body: "The system follows up for days, on its own, until each lead replies or books.",
    cost: "Without it, the money sits in the follow up you keep meaning to do and never get to.",
  },
  {
    icon: BellRing,
    title: "Reminders sent for you",
    body: "Every client is reminded before their viewing, so your calendar turns into actual visits.",
    cost: "Without it, no shows waste your day and let the deal go cold.",
  },
  {
    icon: Link2,
    title: "Your listings send themselves",
    body: "One link carries every property, and matching buyers are notified the moment you add one.",
    cost: "Without it, you keep forwarding 25 photos and still lose the fast movers.",
  },
  {
    icon: CalendarCheck,
    title: "Viewings book themselves",
    body: "Clients pick a slot from your live calendar, confirmed on the spot, with no back and forth.",
    cost: "Without it, the slow scheduling dance loses you the buyer who has other options.",
  },
];

export default function WhatYouGet() {
  return (
    <Section id="what-you-get" bg="bg-bone">
      <Reveal>
        <Eyebrow>The offer</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
          One system that does the work you keep meaning to do.
        </h2>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink/75">
          Not software you have to learn. A complete lead machine I build and
          hand you, done for you in 3 days. Here is what it does, and what it
          stops costing you.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, body, cost }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <div className="flex h-full flex-col rounded-sm border border-line bg-white/50 p-7 transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine text-brass-bright">
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-pine">
                {title}
              </h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-ink/80">
                {body}
              </p>
              {/* Stakes line: what carrying on without it costs them. */}
              <p className="mt-auto border-t border-line pt-4 font-sans text-sm leading-relaxed text-brass">
                {cost}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Loss framed close that pushes straight to the call. */}
      <Reveal delay={0.1}>
        <div className="mt-14 rounded-sm bg-pine px-8 py-12 text-center sm:px-12">
          <p className="mx-auto max-w-2xl font-serif text-2xl font-medium leading-snug text-bone sm:text-3xl">
            Every week you wait, these leads do not wait with you. They go to the
            agent whose system answered first.
          </p>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-stone-soft">
            I build the whole thing in 3 days, fully done for you. The call is
            free, and skipping it costs you the one thing you cannot get back:
            the next deal.
          </p>
          <div className="mt-8">
            <BrassButton onClick={() => scrollToId("booking")}>
              Book your free call
            </BrassButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
