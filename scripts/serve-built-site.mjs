import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputDirectory = path.join(projectRoot, "dist");

const getArgument = (name, fallback) => {
  const index = process.argv.indexOf(name);

  return index === -1 ? fallback : process.argv[index + 1];
};

const hostname = getArgument("--host", "127.0.0.1");
const port = Number(getArgument("--port", "4173"));

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

const findFile = async (pathname) => {
  const decodedPath = decodeURIComponent(pathname);
  const relativePath = decodedPath.replace(/^\/+/, "");
  const candidates = relativePath
    ? [relativePath, path.join(relativePath, "index.html")]
    : ["index.html"];

  for (const candidate of candidates) {
    const absolutePath = path.resolve(outputDirectory, candidate);

    if (!absolutePath.startsWith(`${outputDirectory}${path.sep}`)) {
      continue;
    }

    try {
      if ((await stat(absolutePath)).isFile()) {
        return { absolutePath, status: 200 };
      }
    } catch {
      // Try the next clean-URL candidate before returning the 404 shell.
    }
  }

  return {
    absolutePath: path.join(outputDirectory, "404.html"),
    status: 404,
  };
};

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
    const { absolutePath, status } = await findFile(url.pathname);
    const contentType =
      contentTypes.get(path.extname(absolutePath)) ??
      "application/octet-stream";

    response.writeHead(status, {
      "Cache-Control": "no-store",
      "Content-Type": contentType,
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    createReadStream(absolutePath).pipe(response);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error instanceof Error ? error.message : "Internal error");
  }
});

server.listen(port, hostname, () => {
  console.log(`Static preview available at http://${hostname}:${port}`);
});
