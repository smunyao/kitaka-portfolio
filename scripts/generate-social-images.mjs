import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const metadata = JSON.parse(
  await readFile(
    path.join(projectRoot, "src", "content", "routeMetadata.json"),
    "utf8",
  ),
);
const font = await readFile(
  path.join(
    projectRoot,
    "node_modules",
    "@fontsource-variable",
    "geist",
    "files",
    "geist-latin-wght-normal.woff2",
  ),
);
const outputDirectory = path.join(projectRoot, "public", "social");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const imageDefinitions = new Map();

for (const route of Object.values(metadata)) {
  const existing = imageDefinitions.get(route.image);
  const definition = {
    label: route.imageLabel,
    title: route.imageTitle,
    accent: route.imageAccent,
  };

  if (existing && JSON.stringify(existing) !== JSON.stringify(definition)) {
    throw new Error(`Conflicting treatments configured for ${route.image}`);
  }

  imageDefinitions.set(route.image, definition);
}

await mkdir(outputDirectory, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

for (const [imagePath, definition] of imageDefinitions) {
  const html = `<!doctype html>
    <html lang="en">
      <head>
        <style>
          @font-face {
            font-family: "Geist";
            src: url(data:font/woff2;base64,${font.toString("base64")}) format("woff2");
            font-style: normal;
            font-weight: 100 900;
          }

          * { box-sizing: border-box; }

          html, body {
            width: 1200px;
            height: 630px;
            margin: 0;
          }

          body {
            position: relative;
            overflow: hidden;
            background:
              radial-gradient(circle at 22% 58%, color-mix(in srgb, ${definition.accent} 7%, transparent) 0, transparent 35%),
              #171616;
            color: #f3f0ed;
            font-family: "Geist", sans-serif;
          }

          main {
            display: flex;
            min-height: 100%;
            flex-direction: column;
            justify-content: space-between;
            padding: 76px 88px 68px;
          }

          .topline {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .label {
            margin: 0;
            color: #b4ada6;
            font-size: 23px;
            font-weight: 560;
            letter-spacing: 0.09em;
            text-transform: uppercase;
          }

          .mark {
            margin: 0;
            color: #f3f0ed;
            font-size: 36px;
            font-weight: 620;
            letter-spacing: -0.04em;
          }

          .mark span { color: ${definition.accent}; }

          .content {
            display: grid;
            max-width: 1030px;
            grid-template-columns: 3px 1fr;
            column-gap: 30px;
            align-items: stretch;
          }

          .signal { background: ${definition.accent}; }

          h1 {
            max-width: 980px;
            margin: -7px 0 0;
            font-size: 67px;
            font-weight: 480;
            letter-spacing: -0.045em;
            line-height: 1.04;
          }

          footer {
            display: flex;
            align-items: center;
            gap: 20px;
            color: #b4ada6;
            font-size: 24px;
          }

          footer::before {
            width: 46px;
            height: 1px;
            background: #514b48;
            content: "";
          }
        </style>
      </head>
      <body>
        <main>
          <div class="topline">
            <p class="label">${escapeHtml(definition.label)}</p>
            <p class="mark">K<span>.</span></p>
          </div>

          <div class="content">
            <div class="signal" aria-hidden="true"></div>
            <h1>${escapeHtml(definition.title)}</h1>
          </div>

          <footer>Kitaka Munyao</footer>
        </main>
      </body>
    </html>`;

  await page.setContent(html, { waitUntil: "load" });
  await page.screenshot({
    path: path.join(projectRoot, "public", imagePath),
    type: "png",
  });
}

await browser.close();

console.log(`Generated ${imageDefinitions.size} social preview images.`);
