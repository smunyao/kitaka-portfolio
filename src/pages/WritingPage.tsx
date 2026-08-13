import { Link } from "react-router-dom";

import { articles } from "../content/articles";
import EditorialPageHeader from "../shared/EditorialPageHeader";
import Footer from "../shared/Footer";
import Seo from "../shared/Seo";

import "./WritingPage.css";

function WritingPage() {
  return (
    <>
      <Seo
        title="Writing | Kitaka"
        description="Thoughts on quality engineering, testing, product understanding and engineering practice."
        canonical="/writing"
      />

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

            <h1>Technical writing</h1>

            <p className="writing-summary">
              Articles about quality engineering, testing, product understanding
              and lessons learned from building software.
            </p>
          </header>

          <div className="writing-list">
            {articles.map((article) => (
              <article key={article.slug} className="writing-item">
                <div className="writing-item-meta">
                  <time dateTime={article.publishedAt}>
                    {article.publishedAt}
                  </time>

                  <span>{article.readingTime}</span>
                </div>

                <h2>{article.title}</h2>

                <p>{article.description}</p>

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
