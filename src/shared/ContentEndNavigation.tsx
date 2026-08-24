import { Link } from "react-router-dom";

import "./ContentEndNavigation.css";

interface ContentEndNavigationProps {
  backTo: string;
  backLabel: string;
  nextTo: string;
  nextLabel: string;
  nextTitle: string;
  ariaLabel: string;
}

function ContentEndNavigation({
  backTo,
  backLabel,
  nextTo,
  nextLabel,
  nextTitle,
  ariaLabel,
}: ContentEndNavigationProps) {
  return (
    <nav className="content-end-navigation" aria-label={ariaLabel}>
      <Link className="content-end-navigation-back" to={backTo}>
        <span aria-hidden="true">←</span>
        <span>{backLabel}</span>
      </Link>

      <Link className="content-end-navigation-next" to={nextTo}>
        <span className="content-end-navigation-label">{nextLabel}</span>
        <span className="content-end-navigation-title">
          {nextTitle}
          <span aria-hidden="true"> →</span>
        </span>
      </Link>
    </nav>
  );
}

export default ContentEndNavigation;
