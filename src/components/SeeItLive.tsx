/**
 * See it live. A narrow pine band with one strong line and a brass button that
 * opens DEMO_URL in a new tab. Degrades to a calm coming state when unset.
 */
import { ArrowUpRight } from "lucide-react";
import { DEMO_URL } from "../site.config";
import { BrassButton } from "./ui";

export default function SeeItLive() {
  const demoReady = DEMO_URL !== "#" && DEMO_URL.trim() !== "";

  return (
    <section id="see-it-live" className="bg-pine px-6 py-16">
      <div className="mx-auto flex max-w-content flex-col items-center gap-7 text-center md:flex-row md:justify-between md:text-left">
        <p className="max-w-2xl font-serif text-2xl font-medium italic text-bone sm:text-3xl">
          Do not take my word for it. Click through the real thing.
        </p>
        {demoReady ? (
          <BrassButton href={DEMO_URL} newTab className="flex-none">
            View the live demo
            <ArrowUpRight size={18} aria-hidden="true" />
          </BrassButton>
        ) : (
          <span
            className="inline-flex flex-none cursor-default items-center justify-center gap-2 rounded-cta border border-bone/40 px-7 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.12em] text-bone/70"
            aria-disabled="true"
            title="The live demo link is being added"
          >
            Live demo coming soon
          </span>
        )}
      </div>
    </section>
  );
}
