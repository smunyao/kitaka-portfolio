import { Link } from "react-router-dom";

import { articles } from "../content/articles";
import { formatDate } from "../utils/formatDate";

import EditorialPageHeader from "../shared/EditorialPageHeader";
import Footer from "../shared/Footer";
import Seo from "../shared/Seo";

import "./WritingPage.css";

function WritingPage() {
  return (
    <>
      <Seo path="/writing" />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <EditorialPageHeader
        backTo="/"
        backLabel="Back to home"
        ariaLabel="Writing navigation"
      />

      <main id="main-content" tabIndex={-1}>
        <section className="writing">
          <header className="writing-header">
            <p className="section-eyebrow">Writing</p>

            <h1>Writing</h1>

            <p className="writing-summary">
              Thoughts on quality, software and the decisions behind building
              reliable products.
            </p>
          </header>

          <div className="writing-rule" aria-hidden="true" />

          <div className="writing-list">
            {articles.map((article) => (
              <article key={article.slug} className="writing-item">
                <div className="writing-item-meta">
                  <time dateTime={article.publishedAt}>
                    {formatDate(article.publishedAt)}
                  </time>

                  <span>{article.readingTime}</span>
                </div>

                <h2>
                  <Link to={`/writing/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="writing-item-description">
                  {article.description}
                </p>

                <Link className="writing-link" to={`/writing/${article.slug}`}>
                  <span>Read article</span>

                  <span className="writing-link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default WritingPage;
