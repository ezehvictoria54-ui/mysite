/**
 * What you get. Bone background. Five outcome framed cards, each with an icon,
 * a short title, and one or two lines of body copy kept as separate text.
 */
import { Zap, Link2, Users, CalendarCheck, LayoutDashboard } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./ui";

const cards = [
  {
    icon: Zap,
    title: "Instant replies to every lead",
    body: "Buyers get answered in seconds, day or night, so you never lose one to a slow response.",
  },
  {
    icon: Link2,
    title: "Your listings send themselves",
    body: "One link instead of 25 photos. Every property lives on a page you share in a tap.",
  },
  {
    icon: Users,
    title: "Buyers matched automatically",
    body: "Add a property and every matching buyer is notified for you.",
  },
  {
    icon: CalendarCheck,
    title: "Viewings book themselves",
    body: "Clients pick a slot. No back and forth.",
  },
  {
    icon: LayoutDashboard,
    title: "Every lead in one place",
    body: "A simple dashboard instead of scattered chats.",
  },
];

export default function WhatYouGet() {
  return (
    <Section id="what-you-get" bg="bg-bone">
      <Reveal>
        <Eyebrow>The offer</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
          What I build for you.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 0.07}>
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
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
