import metadata from "./routeMetadata.json";

export interface RouteMetadata {
  title: string;
  description: string;
  type: "website" | "article";
  image: string;
  imageAlt: string;
  imageLabel: string;
  imageTitle: string;
  imageAccent: string;
  structuredData?:
    | {
        kind: "profile";
      }
    | {
        kind: "article" | "blog-posting";
        headline: string;
        datePublished?: string;
      };
}

export const routeMetadata = metadata as Record<string, RouteMetadata>;

export function getRouteMetadata(path: string) {
  const route = routeMetadata[path];

  if (!route) {
    throw new Error(`No metadata configured for route: ${path}`);
  }

  return route;
}
