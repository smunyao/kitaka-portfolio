import { useParams } from "react-router-dom";

import { articles, getArticleBySlug } from "../content/articles";
import { formatDate } from "../utils/formatDate";

import ContentEndNavigation from "../shared/ContentEndNavigation";
import EditorialPageHeader from "../shared/EditorialPageHeader";
import Footer from "../shared/Footer";
import NotFound from "./NotFound";
import Seo from "../shared/Seo";

import "./ArticlePage.css";

function ArticlePage() {
  const { slug } = useParams();

  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFound variant="article" />;
  }

  const articleIndex = articles.findIndex((item) => item.slug === article.slug);
  const nextArticle = articles[(articleIndex + 1) % articles.length];

  return (
    <>
      <Seo path={`/writing/${article.slug}`} />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <EditorialPageHeader
        backTo="/writing"
        backLabel="Back to writing"
        ariaLabel="Article navigation"
      />

      <main id="main-content" tabIndex={-1}>
        <article className="article">
          <header className="article-header">
            <p className="section-eyebrow">Writing</p>

            <h1>{article.title}</h1>

            <p className="article-description">{article.description}</p>

            <div className="article-meta">
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>

              <span>{article.readingTime}</span>
            </div>
          </header>

          <div className="article-content">
            {article.sections.map((section, index) => {
              const key = `${section.type}-${index}`;

              if (section.type === "paragraphs") {
                return (
                  <section key={key} className="article-section">
                    {section.heading && <h2>{section.heading}</h2>}

                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${key}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </section>
                );
              }

              if (section.type === "list") {
                return (
                  <section key={key} className="article-section">
                    {section.heading && <h2>{section.heading}</h2>}

                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                );
              }

              if (section.type === "quote") {
                return (
                  <blockquote key={key} className="article-quote">
                    <p>{section.quote}</p>

                    {section.attribution && <cite>{section.attribution}</cite>}
                  </blockquote>
                );
              }

              if (section.type === "links") {
                return (
                  <section key={key} className="article-section">
                    {section.heading && <h2>{section.heading}</h2>}

                    <ul className="article-source-list">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                            <span className="article-source-new-tab">
                              {" "}
                              (opens in a new tab)
                            </span>
                          </a>

                          {link.description && <p>{link.description}</p>}
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              }

              return (
                <section key={key} className="article-section">
                  {section.heading && <h2>{section.heading}</h2>}

                  <pre>
                    <code
                      className={
                        section.language
                          ? `language-${section.language}`
                          : undefined
                      }
                    >
                      {section.code}
                    </code>
                  </pre>
                </section>
              );
            })}

            <footer>
              <ContentEndNavigation
                backTo="/writing"
                backLabel="All writing"
                nextTo={`/writing/${nextArticle.slug}`}
                nextLabel="More writing"
                nextTitle={nextArticle.title}
                ariaLabel="Continue exploring writing"
              />
            </footer>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default ArticlePage;
