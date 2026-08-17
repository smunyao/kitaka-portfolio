import { Link, useParams } from "react-router-dom";

import { getArticleBySlug } from "../content/articles";
import { formatDate } from "../utils/formatDate";

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

  return (
    <>
      <Seo
        title={article.seo.title}
        description={article.seo.description}
        canonical={`/writing/${article.slug}`}
        type="article"
      />

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

            <footer className="article-footer">
              <Link className="article-back-link" to="/writing">
                <span className="article-back-link-arrow" aria-hidden="true">
                  ←
                </span>

                <span>Back to writing</span>
              </Link>
            </footer>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default ArticlePage;
