# Nashville Sound Panels — An Archive

A single-page archive site for **Nashville Sound Panels**, an acoustic
treatment shop that built and installed custom sound panels around Nashville,
TN from **2015–2022**. The site is a retrospective of the rooms we worked on
and the people we worked with.

🔗 **Live:** [nashvillesoundpanels.com](https://nashvillesoundpanels.com)

## About

The page reads top to bottom as a numbered archive:

1. **Splash** — title card
2. **Letter** — a short note about the shop
3. **By the numbers** — stats
4. **Home studios** — selected work
5. **Commercial** — selected work
6. **Residential** — selected work
7. **Worship** — selected work
8. **In their words** — client & friend quotes
9. **Gratitude** — thank-you note
10. **Footer** — contact & social

## Tech

Hand-built and deliberately dependency-free:

- **Static HTML** — a single [`index.html`](index.html)
- **CSS** — [`styles.css`](styles.css), themed via `data-accent` / `data-display`
  / `data-layout` attributes on `<html>`
- **Vanilla JS** — [`behavior.js`](behavior.js) handles reveal-on-scroll,
  horizontal gallery scrolling, and the scroll cue. No framework, no build step.
- **Fonts** — Google Fonts (DM Sans, Instrument Serif, JetBrains Mono,
  Newsreader, Space Grotesk)

## Structure

```
index.html        # the whole page
styles.css        # all styles
behavior.js       # scroll/gallery interactions
CNAME             # custom domain for GitHub Pages
img/              # photography, grouped by section
```

## Running locally

No build step — just serve the folder statically. For example:

```bash
npx serve .
```

Then open the printed local URL.

## Deployment

Hosted on **GitHub Pages** from the `main` branch (root). Pushing to `main`
rebuilds and publishes the live site automatically. The `CNAME` file keeps the
custom domain (`nashvillesoundpanels.com`) attached.

To publish changes:

```bash
git add -A
git commit -m "your message"
git push
```

---

© Nashville Sound Panels · Made in Nashville, TN
