# Search discoverability and structured data

## Search audit

The portfolio has eight indexable routes: the homepage, How I Work, the Writing
index, two articles and three case studies. Every route has a unique title,
description and canonical URL and appears once in `sitemap.xml`.

The existing search snippets are accurate and defensible. Some case-study
titles are longer than a typical search-result title, but shortening them for an
arbitrary character limit would remove useful professional context. Search
engines may rewrite or truncate titles and descriptions according to the query.

`robots.txt` permits crawling of the public site and declares the production
sitemap. Invalid routes use a server-level `404`, omit canonical and structured
data, and declare `noindex, follow`.

Cloudflare Pages adds `X-Robots-Tag: noindex` to preview-deployment responses by
default. Confirm this header on the deployment under review rather than adding
preview-specific markup to the production application.

## Page relationships and internal links

The homepage links directly to every case study through Experience, the latest
article through Featured Writing, the Writing index, How I Work and each
inspectable engineering repository. The Writing index links to every article,
and article and case-study pages provide a route back to their parent content.

This is sufficient for the current content volume. Cross-linking articles or
adding related-content components without a genuine editorial relationship
would add navigation rather than meaning. Project repositories remain external
and do not justify project-detail routes or project structured data.

## Selected structured data

Structured data is JSON-LD and is generated from the same route metadata used
for titles, descriptions, canonical URLs and social previews.

### Homepage

The homepage uses a graph containing:

- `WebSite`, to identify the preferred site name;
- `ProfilePage`, because the visible page is a professional profile centred on
  one person;
- `Person`, containing the visible name, professional title and links to the
  same public LinkedIn and GitHub identities.

### Writing

Published articles use `BlogPosting` with the visible headline, description,
publication date, author, canonical page and social image.

The Writing index has no structured data. `CollectionPage` or `ItemList` would
be technically possible, but neither adds enough value for two articles to
justify maintaining more markup.

### Case studies

Case studies use `Article` with the visible headline, description, author,
canonical page and social image. They do not declare employers, ratings,
quantified outcomes or organisations as entities.

The case studies do not show publication or modification dates, so their JSON-LD
does not invent them. Google's Rich Results Test may report missing recommended
date properties. This is an acceptable warning: adding an unsupported date
would make the markup less accurate, not more complete.

### Deliberate exclusions

- No `Organization`: the portfolio represents a person, not a company.
- No `SearchAction`: the site has no search feature.
- No `BreadcrumbList`: the interface has directional navigation, not visible
  breadcrumb trails.
- No project schema: engineering work links to external repositories and has no
  project-detail route.
- No structured data on How I Work: it has no publication date and does not need
  to be represented as another article solely for schema coverage.
- No structured data on Not Found pages.

## Validation

Automated tests verify that JSON-LD is present in the initial HTML response,
contains the supported page type and relationships, survives hydration and is
removed from routes where it is not applicable.

After deployment, validate representative URLs with:

- Google Rich Results Test for the homepage, an article and a case study;
- Schema.org Validator for generic schema relationships and properties;
- `curl` or View Source to confirm JSON-LD exists before JavaScript runs;
- the Cloudflare preview response headers to confirm `X-Robots-Tag: noindex`.

Valid structured data makes content easier to understand but does not guarantee
a rich result or ranking improvement. Validation errors must be resolved;
warnings should be assessed against visible, supportable page content rather
than silenced by adding speculative values.
