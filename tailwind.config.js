/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: "var(--pine)",
        "pine-deep": "var(--pine-deep)",
        stone: "var(--stone)",
        "stone-soft": "var(--stone-soft)",
        bone: "var(--bone)",
        brass: "var(--brass)",
        "brass-bright": "var(--brass-bright)",
        ink: "var(--ink)",
        sage: "var(--sage)",
        line: "var(--line)",
      },
      fontFamily: {
        // Cormorant Garamond for headings and italic accents.
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        // Jost for body, UI and uppercase brass labels.
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        cta: "2px",
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};
