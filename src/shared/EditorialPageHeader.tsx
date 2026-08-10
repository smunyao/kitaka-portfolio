import { Link } from "react-router-dom";

import "./EditorialPageHeader.css";

interface EditorialPageHeaderProps {
  backTo: string;
  backLabel: string;
  ariaLabel: string;
}

function EditorialPageHeader({
  backTo,
  backLabel,
  ariaLabel,
}: EditorialPageHeaderProps) {
  return (
    <header className="editorial-page-header">
      <div className="editorial-page-nav">
        <nav className="editorial-page-header-content" aria-label={ariaLabel}>
          <Link
            className="editorial-page-home-link"
            to="/"
            aria-label="Kitaka Munyao home"
          >
            Kitaka
          </Link>

          <Link className="editorial-page-back-link" to={backTo}>
            ← {backLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default EditorialPageHeader;
