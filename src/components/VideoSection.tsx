/**
 * Walkthrough video. Pine section with a centered responsive portrait (9:16)
 * player that embeds the YouTube video inline. It uses the privacy friendly
 * nocookie domain with rel=0, modestbranding=1 and playsinline=1 so branding
 * and related videos stay minimal and the video plays here rather than sending
 * anyone off to YouTube. The frame is portrait to match a vertical phone video,
 * so there are no black bars. Until VIDEO_ID is set it shows an elegant
 * placeholder frame with a brass play icon, never a broken iframe.
 */
import { Play } from "lucide-react";
import { VIDEO_ID } from "../site.config";
import { Section, Eyebrow, Reveal } from "./ui";

export default function VideoSection() {
  const hasVideo = VIDEO_ID.trim() !== "";
  // Build the inline embed url. rel=0 limits related videos to this channel,
  // modestbranding=1 minimises YouTube branding, playsinline=1 keeps it in the
  // page on mobile instead of going full screen.
  const embedSrc = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1`;

  return (
    <Section id="walkthrough" bg="bg-pine">
      <Reveal className="text-center">
        <Eyebrow>Watch</Eyebrow>
        <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-bone sm:text-4xl md:text-5xl">
          See exactly how it works.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 w-full max-w-[360px]">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-sm border border-bone/15 bg-pine-deep shadow-2xl">
            {hasVideo ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={embedSrc}
                title="Walkthrough of the lead system Victoria Ezeh builds"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              // Tasteful placeholder while the real embed is being added.
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-pine to-pine-deep">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-brass/50 bg-brass/10 text-brass">
                  <Play size={34} strokeWidth={1.5} className="ml-1" aria-hidden="true" />
                </span>
                <span className="eyebrow">Walkthrough coming</span>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-7 text-center font-sans text-base text-stone-soft">
          A 90 second look at the system I will build for you.
        </p>
      </Reveal>
    </Section>
  );
}
