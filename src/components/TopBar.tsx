/**
 * Sticky top bar. Transparent over the hero, then solidifies to pine on
 * scroll. Shows the wordmark on the left and a book a call button on the
 * right that smooth scrolls to the booking section.
 */
import { useEffect, useState } from "react";
import { siteConfig } from "../site.config";
import { scrollToId } from "./ui";

export default function TopBar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
        (solid ? "bg-pine shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "bg-transparent")
      }
    >
      <div className="mx-auto flex h-[68px] max-w-content items-center justify-between px-6">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-xl font-semibold tracking-wide text-bone"
        >
          {siteConfig.owner.name}
        </button>

        <button
          type="button"
          onClick={() => scrollToId("booking")}
          className="rounded-cta bg-brass px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.14em] text-bone transition-colors duration-300 hover:bg-brass-bright focus-visible:bg-brass-bright"
        >
          Book a call
        </button>
      </div>
    </header>
  );
}
