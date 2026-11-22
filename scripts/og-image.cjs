// Renders scripts/og-card.html to public/og.jpg (1200×630) with Playwright.
// Playwright is not a dependency of the site: run this where it is installed globally,
// e.g. `NODE_PATH=$(npm root -g) npm run og`.
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(path.join(__dirname, 'og-card.html')).href);
  await page.evaluate(() => document.fonts.ready);
  const out = path.join(__dirname, '..', 'public', 'og.jpg');
  await page.screenshot({ path: out, type: 'jpeg', quality: 82 });
  await browser.close();
  console.log(`Wrote ${out}`);
})();
