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
  if (publicPath === "/") {
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
  await writeFile(routeFile, shell);
}

await writeFile(path.join(outputDirectory, "404.html"), shell);

console.log(
  `Generated ${publicPaths.length - 1} nested route shells and 404.html.`,
);
