# manticwise.com

The public website of Manticwise: a small static site built with [Astro](https://astro.build).
No JavaScript in the browser, no cookies, no trackers, no requests to other sites.

## Run it

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # type-check, then build the static site into dist/
```

Pushing to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).

## Add an article

Add a Markdown file to `src/content/articles/`. The file name is the address:
`first-steps.md` becomes `/articles/first-steps/`. Don't rename a published file.

```md
---
title: Article title
description: One sentence, at most 155 characters.
date: 2027-01-15
cover: ./first-steps-cover.webp   # optional, a file next to the article
slides: https://example.com/deck  # optional link to slides
draft: true                       # optional; drafts show in `npm run dev` only
---

Text in Markdown.
```

Articles also appear in `/rss.xml` and the sitemap.

## Settings

`src/site.config.ts`:

| Setting | Effect |
|---|---|
| `url` | Public address. Keep it the same as `site` in `astro.config.mjs`. |
| `launched` | `false`: every page is `noindex` and `robots.txt` blocks all crawlers. `true`: pages can be indexed and the sitemap is linked. |
| `buttondownUsername` | Empty: the sign-up form is shown switched off. Set: the form posts to Buttondown. |
| `contactEmail` | Shown in the footer and the privacy statement once set. |
| `controllerName` | Name of the data controller in the privacy statement once set. |

## Styles and images

- `src/styles/tokens.css` is generated elsewhere. Do not edit it here.
- `src/styles/global.css` uses the `--mw-*` tokens for every colour.
- Fonts (Inter, Source Serif 4, JetBrains Mono) are self-hosted from Fontsource, latin subset.
- The background art is AI-generated (Higgsfield) and credited in the footer.
- `public/og.jpg` is the link-preview image. Its source is `scripts/og-card.html`; to render it again,
  run `NODE_PATH=$(npm root -g) npm run og` on a machine with Playwright installed globally.
