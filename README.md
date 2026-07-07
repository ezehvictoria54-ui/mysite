# Victoria Ezeh · Pitch Site

A fast, mobile first, single page pitch site for Victoria Ezeh, a freelancer
who builds lead generation and automation systems for estate agents. A cold
agent opens it from a DM, understands the offer, watches a short walkthrough,
clicks through to the live demo, and books a free call through Calendly.

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

### Paste in your live demo link (DEMO_URL)

At the top of `src/site.config.ts`:

```ts
export const DEMO_URL: string = "#";
```

Replace `"#"` with your deployed demo URL, for example
`"https://your-demo.vercel.app"`. While it stays `"#"`, the demo buttons show a
calm "Live demo coming soon" state and never open a dead link. Once set, the
buttons open your demo in a new tab.

### Paste in your walkthrough video (VIDEO_URL)

Also at the top of `src/site.config.ts`:

```ts
export const VIDEO_URL: string = "";
```

Paste the EMBED url of your YouTube or Loom video:

- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Loom: `https://www.loom.com/embed/VIDEO_ID`

While it stays empty, the player shows an elegant "Walkthrough coming"
placeholder frame, never a broken iframe.

### Swap in your portrait photo

Drop a photo named `victoria.jpg` into `public/images/` so it lives at
`/images/victoria.jpg`. It appears in the About section. A ratio close to
4 by 5 (portrait) looks best. Until a photo is added, the site shows a tasteful
"VE" monogram avatar.

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
