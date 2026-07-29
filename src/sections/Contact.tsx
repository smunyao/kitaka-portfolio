import "./Contact.css";

import { contactContent } from "../content/contact";
import { site } from "../content/site";

function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="contact-eyebrow">{contactContent.eyebrow}</p>

      <h2>{contactContent.heading}</h2>

      <p>{contactContent.intro}</p>

      <p className="contact-note">{site.contact.preferredMethod}</p>

      <div className="contact-links">
        <a
          href={`mailto:${site.contact.email}?subject=%5BPortfolio%5D%20Let's%20connect`}
        >
          Email
        </a>

        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href={site.social.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href={site.resume.url} target="_blank" rel="noopener noreferrer">
          Résumé (PDF)
        </a>
      </div>
    </section>
  );
}

export default Contact;
