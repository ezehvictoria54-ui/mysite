/**
 * The problem. Bone background. A heading, four punchy pain points each with
 * a light icon, then the closing line about leaking leads.
 */
import { Moon, UserX, HelpCircle, CalendarX, Timer, Shuffle } from "lucide-react";
import { Section, Eyebrow, Reveal } from "./ui";

const pains = [
  {
    icon: Moon,
    text: "Leads message at 11pm and go cold by morning.",
  },
  {
    icon: UserX,
    text: "You mean to follow up, then the day runs away and the lead is gone.",
  },
  {
    icon: HelpCircle,
    text: "You cannot even tell who was interested, so good buyers slip through.",
  },
  {
    icon: CalendarX,
    text: "Clients forget a booked viewing and simply do not show up.",
  },
  {
    icon: Timer,
    text: "The agent who replies fastest wins the deal, not the best one.",
  },
  {
    icon: Shuffle,
    text: "Your leads are scattered across WhatsApp, Instagram and calls with no record.",
  },
];

export default function Problem() {
  return (
    <Section id="problem" bg="bg-bone">
      <Reveal>
        <Eyebrow>The reality</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
          If you sell property, you know this feeling.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {pains.map(({ icon: Icon, text }, i) => (
          <Reveal key={text} delay={i * 0.08}>
            <div className="flex h-full items-start gap-4 rounded-sm border border-line bg-stone/40 p-6">
              <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-pine/5 text-brass">
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <p className="font-sans text-base leading-relaxed text-ink/85">
                {text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-12 font-serif text-2xl italic text-pine sm:text-3xl">
          You are not short on leads. You are leaking them.
        </p>
      </Reveal>
    </Section>
  );
}
