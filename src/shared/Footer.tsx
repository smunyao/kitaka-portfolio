import "./Footer.css";

import { site } from "../content/site";

interface FooterProps {
  showProfessionalLinks?: boolean;
}

function Footer({ showProfessionalLinks = true }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Kitaka Munyao</p>

        {showProfessionalLinks && (
          <nav aria-label="Contact and professional profiles">
            <a href={`mailto:${site.contact.email}`}>Email</a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        )}
      </div>
    </footer>
  );
}

export default Footer;
