// Meldt alle URL's uit de live sitemap bij IndexNow (Bing, Yandex, Naver, Seznam).
// Bing voedt Copilot en is de index achter ChatGPT search; Google doet niet mee en leest de sitemap.
// Gebruik: `npm run indexnow` na een productie-deploy, of via .github/workflows/indexnow.yml.
import { readFileSync } from 'node:fs';

const SITE = 'https://thebunyaminn.nl';
const host = new URL(SITE).host;
const key = readFileSync(new URL('../public/indexnow-key.txt', import.meta.url), 'utf8').trim();
const keyLocation = `${SITE}/indexnow-key.txt`;

const sitemapXml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) {
  console.error('Geen URL\'s gevonden in de sitemap; niets ingediend.');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});

console.log(`IndexNow: ${res.status} ${res.statusText} voor ${urlList.length} URL's`);
urlList.forEach((u) => console.log(`  ${u}`));
if (res.status !== 200 && res.status !== 202) process.exit(1);
