/**
 * How it works. Bone background. Three numbered steps, reassuring and simple.
 */
import { Section, Eyebrow, Reveal } from "./ui";

const steps = [
  {
    n: "1",
    title: "Book a free call",
    body: "We talk through your business, no pressure.",
  },
  {
    n: "2",
    title: "I build it in 7 days",
    body: "Fully done for you. You just send your listings and branding.",
  },
  {
    n: "3",
    title: "You stop losing leads",
    body: "The system runs itself.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" bg="bg-bone">
      <Reveal>
        <Eyebrow>Simple from here</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
          How it works.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {steps.map(({ n, title, body }, i) => (
          <Reveal key={n} delay={i * 0.1}>
            <div className="flex h-full flex-col">
              <span className="font-serif text-6xl font-semibold text-brass/70">
                {n}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-pine">
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
