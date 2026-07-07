/**
 * About. No photo and no avatar. Short copy kept about the agent's outcome:
 * this is fully done for you, with a clear reassurance on the build.
 */
import { Section, Eyebrow, Reveal } from "./ui";

export default function About() {
  return (
    <Section id="about" bg="bg-stone">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>Fully done for you</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            You send your listings. I hand you a system that runs itself.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-7 space-y-5 font-sans text-lg leading-relaxed text-ink/80">
            <p>
              This is fully done for you. You send your listings and your
              branding, and I build the whole system so every buyer is answered,
              every lead is followed up, and every client is reminded, without
              you lifting a finger.
            </p>
            <p className="font-serif text-2xl italic text-pine">
              If you do not love the build, I will revise it until you do, or
              refund you.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
