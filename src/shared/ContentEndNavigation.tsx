import { Link } from "react-router-dom";

import "./ContentEndNavigation.css";

interface ContentEndNavigationProps {
  backTo: string;
  backLabel: string;
  nextTo: string;
  nextLabel: string;
  nextTitle: string;
  nextAccent?: string;
  ariaLabel: string;
}

function ContentEndNavigation({
  backTo,
  backLabel,
  nextTo,
  nextLabel,
  nextTitle,
  nextAccent,
  ariaLabel,
}: ContentEndNavigationProps) {
  return (
    <nav className="content-end-navigation" aria-label={ariaLabel}>
      <Link
        className="content-end-navigation-next"
        data-accent={nextAccent}
        to={nextTo}
      >
        <span className="content-end-navigation-label">{nextLabel}</span>
        <span className="content-end-navigation-title">
          {nextTitle}
          <span className="content-end-navigation-arrow" aria-hidden="true">
            {" "}
            →
          </span>
        </span>
      </Link>

      <Link className="content-end-navigation-back" to={backTo}>
        <span className="content-end-navigation-arrow" aria-hidden="true">
          ←
        </span>
        <span>{backLabel}</span>
      </Link>
    </nav>
  );
}

export default ContentEndNavigation;
