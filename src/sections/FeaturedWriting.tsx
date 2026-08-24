import { Link } from "react-router-dom";

import { articles } from "../content/articles";
import { formatDate } from "../utils/formatDate";

import "./FeaturedWriting.css";

function FeaturedWriting() {
  const featuredArticle = articles[0];

  if (!featuredArticle) {
    return null;
  }

  return (
    <section
      id="writing"
      className="home-section home-section--feature featured-writing"
    >
      <h2>Writing on testing, quality and engineering work.</h2>

      <article className="featured-writing-article">
        <p className="featured-writing-meta">
          <time dateTime={featuredArticle.publishedAt}>
            {formatDate(featuredArticle.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{featuredArticle.readingTime}</span>
        </p>

        <h3>
          <Link to={`/writing/${featuredArticle.slug}`}>
            {featuredArticle.title}
          </Link>
        </h3>

        <p className="featured-writing-description">
          {featuredArticle.description}
        </p>

        <div className="featured-writing-links">
          <Link to={`/writing/${featuredArticle.slug}`}>
            <span>Read article</span>
            <span className="featured-writing-link-arrow" aria-hidden="true">
              →
            </span>
          </Link>

          <Link to="/writing">
            <span>View all writing</span>
            <span className="featured-writing-link-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default FeaturedWriting;
