/**
 * About Victoria. Stone split section with space for a portrait. Until a photo
 * is added at /public/images/victoria.jpg a tasteful VE monogram avatar shows.
 * Confident, honest, first person copy with a reassurance line. No testimonials.
 */
import { useState } from "react";
import { siteConfig } from "../site.config";
import { Section, Eyebrow, Reveal } from "./ui";

export default function About() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <Section id="about" bg="bg-stone">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
        <Reveal>
          <div className="mx-auto w-full max-w-[320px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-line bg-pine">
              {imgOk ? (
                <img
                  src={siteConfig.portrait}
                  alt="Portrait of Victoria Ezeh"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={() => setImgOk(false)}
                />
              ) : (
                // Monogram fallback while the portrait is not yet added.
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pine to-pine-deep">
                  <span className="font-serif text-7xl font-semibold tracking-wide text-brass-bright">
                    VE
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <Eyebrow>About Victoria</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              I build the quiet system behind a busy agent.
            </h2>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink/80">
              <p>
                I am {siteConfig.owner.name}, and I build lead generation and
                automation systems for estate agents. My work is simple to
                describe: I make sure every buyer who reaches out gets answered,
                every listing is a link you can send in a tap, and every viewing
                books itself while you get on with your day.
              </p>
              <p>
                This is fully done for you. You send me your listings and your
                branding, and I hand you a system that runs on its own.
              </p>
              <p className="font-serif text-xl italic text-pine">
                If you do not love the build, I will revise it until you do, or
                refund you.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
