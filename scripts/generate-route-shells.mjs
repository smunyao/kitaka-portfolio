import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputDirectory = path.join(projectRoot, "dist");
const shell = await readFile(path.join(outputDirectory, "index.html"), "utf8");
const sitemap = await readFile(path.join(outputDirectory, "sitemap.xml"), "utf8");
const routeMetadata = JSON.parse(
  await readFile(
    path.join(projectRoot, "src", "content", "routeMetadata.json"),
    "utf8",
  ),
);

const baseUrl = "https://kitakamunyao.com";

const escapeAttribute = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const renderPublicMetadata = (publicPath) => {
  const metadata = routeMetadata[publicPath];

  if (!metadata) {
    throw new Error(`No metadata configured for public route: ${publicPath}`);
  }

  const canonicalUrl = `${baseUrl}${publicPath}`;
  const imageUrl = `${baseUrl}${metadata.image}`;

  return [
    `<meta name="description" content="${escapeAttribute(metadata.description)}" />`,
    '<meta name="author" content="Kitaka Munyao" />',
    `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
    `<meta property="og:type" content="${escapeAttribute(metadata.type)}" />`,
    '<meta property="og:site_name" content="Kitaka Munyao" />',
    `<meta property="og:title" content="${escapeAttribute(metadata.title)}" />`,
    `<meta property="og:description" content="${escapeAttribute(metadata.description)}" />`,
    `<meta property="og:url" content="${escapeAttribute(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeAttribute(imageUrl)}" />`,
    '<meta property="og:image:type" content="image/png" />',
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${escapeAttribute(metadata.imageAlt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeAttribute(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(metadata.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttribute(imageUrl)}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttribute(metadata.imageAlt)}" />`,
  ].join("\n    ");
};

const injectMetadata = (html, title, metadata) =>
  html
    .replace(/<title>.*?<\/title>/s, `<title>${escapeAttribute(title)}</title>`)
    .replace("  </head>", `    ${metadata}\n  </head>`);

const publicPaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  ([, location]) => new URL(location).pathname,
);

if (!publicPaths.includes("/")) {
  throw new Error("The sitemap must include the homepage route.");
}

if (new Set(publicPaths).size !== publicPaths.length) {
  throw new Error("The sitemap contains duplicate public routes.");
}

for (const publicPath of publicPaths) {
  const metadata = routeMetadata[publicPath];
  const routeShell = injectMetadata(
    shell,
    metadata?.title ?? "Kitaka Munyao",
    renderPublicMetadata(publicPath),
  );

  if (publicPath === "/") {
    await writeFile(path.join(outputDirectory, "index.html"), routeShell);
    continue;
  }

  const routeSegments = publicPath.split("/").filter(Boolean);

  if (routeSegments.some((segment) => segment === "." || segment === "..")) {
    throw new Error(`Unsafe public route in sitemap: ${publicPath}`);
  }

  const routeFile = path.join(
    outputDirectory,
    ...routeSegments.slice(0, -1),
    `${routeSegments.at(-1)}.html`,
  );

  await mkdir(path.dirname(routeFile), { recursive: true });
  await writeFile(routeFile, routeShell);
}

const notFoundShell = injectMetadata(
  shell,
  "Page not found | Kitaka",
  [
    '<meta name="description" content="The requested page could not be found." />',
    '<meta name="robots" content="noindex, follow" />',
  ].join("\n    "),
);

await writeFile(path.join(outputDirectory, "404.html"), notFoundShell);

console.log(
  `Generated ${publicPaths.length - 1} nested route shells and 404.html.`,
);
