/**
 * Footer. Pine deep background. Wordmark line, a contact row with a WhatsApp
 * button and an email link, and a small copyright line. The middot is fine.
 */
import { MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "../site.config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pine-deep px-6 py-16">
      <div className="mx-auto max-w-content">
        <p className="font-serif text-2xl font-semibold text-bone">
          {siteConfig.owner.name}
          <span className="mx-2 text-brass">·</span>
          <span className="text-stone-soft">Lead systems for estate agents</span>
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={siteConfig.owner.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-cta bg-brass px-6 py-3 font-sans text-sm font-medium uppercase tracking-[0.12em] text-bone transition-colors duration-300 hover:bg-brass-bright focus-visible:bg-brass-bright"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={`mailto:${siteConfig.owner.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-cta border border-bone/30 px-6 py-3 font-sans text-sm font-medium uppercase tracking-[0.12em] text-bone transition-colors duration-300 hover:bg-bone/10"
          >
            <Mail size={18} aria-hidden="true" />
            {siteConfig.owner.email}
          </a>
        </div>

        <p className="mt-10 font-sans text-xs uppercase tracking-[0.16em] text-stone-soft/60">
          Copyright {year} {siteConfig.owner.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
