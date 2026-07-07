/**
 * Victoria Ezeh · Pitch site configuration.
 *
 * Every editable string and link lives here so the whole page can be
 * updated from one file. Edit the constant below when you have it:
 *
 *   VIDEO_ID : paste your YouTube video ID (the part after v= in a normal
 *              YouTube link, for example "dQw4w9WgXcQ"). The player embeds it
 *              inline on this page using the privacy friendly nocookie domain,
 *              so buyers stay here and never get sent to YouTube. While it is
 *              "" the player shows an elegant placeholder frame, never a
 *              broken iframe.
 *
 * Note: URLs and email addresses are not display copy, so the no dash
 * rule from the build brief does not apply to the values below.
 */

// Paste your YouTube video ID here (just the id, not the full url).
// Example: for https://www.youtube.com/watch?v=dQw4w9WgXcQ use "dQw4w9WgXcQ".
// Leave as "" until you have it.
export const VIDEO_ID: string = "N5EgpAJT81s";

export const siteConfig = {
  owner: {
    name: "Victoria Ezeh",
    email: "ezehvictoria54@gmail.com",
    whatsapp: "https://wa.me/2347026633526",
    whatsappLabel: "+2347026633526",
  },

  // Real Calendly scheduling link. Embedded inline in the booking section.
  calendlyUrl: "https://calendly.com/ezehvictoria54/book-a-consultation",
} as const;

export type SiteConfig = typeof siteConfig;
