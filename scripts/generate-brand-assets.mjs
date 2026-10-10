import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const publicDirectory = path.join(projectRoot, "public");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="Kitaka favicon">
  <rect width="512" height="512" fill="#2f2b27" />
  <path d="M110 120h40v98l109-98h52L201 236l118 150h-49l-96-120-24 23v97h-40z" fill="#f8f6f2" />
  <circle cx="390" cy="361" r="25" fill="#7b3a4d" />
</svg>`;

await writeFile(path.join(publicDirectory, "favicon.svg"), svg);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

for (const [filename, size] of [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
  ["favicon-192x192.png", 192],
  ["favicon-512x512.png", 512],
]) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(
    `<style>*{box-sizing:border-box}html,body{width:${size}px;height:${size}px;margin:0;overflow:hidden}img{display:block;width:100%;height:100%}</style><img src="${svgDataUrl}" alt="">`,
    { waitUntil: "load" },
  );
  await page.locator("img").evaluate((image) => image.decode());
  await page.screenshot({
    path: path.join(publicDirectory, filename),
    type: "png",
  });
}

await browser.close();

console.log("Generated Kitaka favicon assets.");
