/**
 * Victoria Ezeh · Pitch site configuration.
 *
 * Every editable string and link lives here so the whole page can be
 * updated from one file. Edit the two constants below when you have them:
 *
 *   DEMO_URL  : paste your deployed Vercel demo URL. While it is "#" the
 *               live demo buttons show a calm "coming soon" state and never
 *               open a dead link.
 *   VIDEO_URL : paste your YouTube or Loom embed URL. While it is "" the
 *               player shows an elegant placeholder frame, never a broken
 *               iframe.
 *
 * Note: URLs and email addresses are not display copy, so the no dash
 * rule from the build brief does not apply to the values below.
 */

// Paste your deployed live demo URL here (for example a Vercel link).
// Leave as "#" until you have it.
export const DEMO_URL: string = "#";

// Paste your YouTube or Loom EMBED url here. Examples:
//   YouTube : https://www.youtube.com/embed/VIDEO_ID
//   Loom    : https://www.loom.com/embed/VIDEO_ID
// Leave as "" until you have it.
export const VIDEO_URL: string = "";

export const siteConfig = {
  owner: {
    name: "Victoria Ezeh",
    email: "ezehvictoria54@gmail.com",
    whatsapp: "https://wa.me/2347026633526",
    whatsappLabel: "+2347026633526",
  },

  // Real Calendly scheduling link. Embedded inline in the booking section.
  calendlyUrl: "https://calendly.com/ezehvictoria54/book-a-consultation",

  // Optional portrait. Drop a file at /public/images/victoria.jpg to use it.
  // Until then a tasteful monogram avatar is shown.
  portrait: "/images/victoria.jpg",
} as const;

export type SiteConfig = typeof siteConfig;
