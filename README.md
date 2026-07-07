# Victoria Ezeh · Pitch Site

A fast, mobile first, single page pitch site for Victoria Ezeh, a freelancer
who builds lead generation and automation systems for estate agents. A cold
agent opens it from a DM, understands the offer, watches a short walkthrough
video inline, and books a free call through Calendly.

Built with Vite, React, TypeScript, Tailwind CSS, framer motion and
lucide-react. Fonts are self hosted. No backend, no database.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type check and static production build into dist
npm run preview  # preview the production build
```

## Edit your details in one place

Every editable string and link lives in `src/site.config.ts`. Open that file
to change the email, WhatsApp number, or Calendly link.

### Paste in your walkthrough video (VIDEO_ID)

At the top of `src/site.config.ts`:

```ts
export const VIDEO_ID: string = "";
```

Upload your walkthrough to YouTube, then paste just the video ID here. The ID
is the part after `v=` in a normal YouTube link. For example, for
`https://www.youtube.com/watch?v=dQw4w9WgXcQ` you would use `"dQw4w9WgXcQ"`.

The video plays inline on your page using the privacy friendly
`youtube-nocookie.com` domain with `rel=0`, `modestbranding=1` and
`playsinline=1`, so YouTube branding and related videos stay minimal and buyers
are never sent off to YouTube. While the ID stays empty, the player shows an
elegant "Walkthrough coming" placeholder frame, never a broken iframe.

The hero "See live demo" button smooth scrolls straight to this video.

## Calendly

The booking section embeds your real Calendly scheduler inline using Calendly's
official widget, pointing at
`https://calendly.com/ezehvictoria54/book-a-consultation`. A plain fallback
button sits below the embed in case the widget is blocked. Calendly creates the
Google Meet and the calendar invite automatically, so the page needs nothing
more than the embed.

## Deploy to Vercel

This is a static site and deploys as is.

1. Push this repository to GitHub.
2. In Vercel, import the repository.
3. Vercel detects Vite automatically. If asked, use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Your live URL is ready to attach to DMs.

You can also deploy from the command line:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## Notes

- Mobile first and responsive from 360px to desktop.
- Keyboard accessible with visible focus states and semantic HTML.
- `prefers-reduced-motion` is respected.
- Every button either scrolls to a real section or opens a real URL, so there
  are no dead links.
