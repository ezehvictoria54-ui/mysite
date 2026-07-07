/**
 * Booking. Pine background, the conversion point. Loads Calendly's widget
 * script once and renders the official inline widget pointing at the real
 * scheduling link. A plain fallback button below opens the same URL in case
 * the embed is blocked. Calendly creates the Google Meet and invite on
 * Victoria's side, so nothing more is needed here.
 */
import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "../site.config";
import { Section, Eyebrow, Reveal, BrassButton } from "./ui";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

export default function Booking() {
  const loadedRef = useRef(false);

  useEffect(() => {
    // Load the Calendly widget script once. The inline widget div below is
    // initialised automatically once the script is present.
    if (loadedRef.current) return;
    loadedRef.current = true;

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Section id="booking" bg="bg-pine">
      <Reveal className="text-center">
        <Eyebrow>Book a call</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight text-bone sm:text-4xl md:text-5xl">
          Let us fill your calendar instead of your pile of lost leads.
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-sans text-base text-stone-soft">
          A free call, about 20 minutes, no obligation. We look at your leads and
          I show you exactly what I would build.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        {/* Official Calendly inline widget. */}
        <div
          className="calendly-inline-widget mx-auto mt-12 overflow-hidden rounded-sm bg-bone"
          data-url={siteConfig.calendlyUrl}
          style={{ minWidth: "320px", height: "720px" }}
        />

        {/* Fallback in case the embed is blocked. */}
        <div className="mt-8 text-center">
          <p className="font-sans text-sm text-stone-soft">
            Scheduler not loading?
          </p>
          <div className="mt-4">
            <BrassButton href={siteConfig.calendlyUrl} newTab>
              Open the booking page
              <ExternalLink size={16} aria-hidden="true" />
            </BrassButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
