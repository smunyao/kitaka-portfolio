import "./Contact.css";

import { contactContent } from "../content/contact";
import { site } from "../content/site";

function Contact() {
  const emailSubject = encodeURIComponent("[Portfolio] Let's connect");
  const resumeSubject = encodeURIComponent("[Portfolio] Résumé request");

  return (
    <section
      id="contact"
      className="home-section home-section--closing contact"
    >
      <p className="section-eyebrow">{contactContent.eyebrow}</p>

      <h2>{contactContent.heading}</h2>

      <p>{contactContent.intro}</p>

      <p className="contact-note">
        Drop me an{" "}
        <a href={`mailto:${site.contact.email}?subject=${emailSubject}`}>
          email
        </a>{" "}
        to continue the conversation, or{" "}
        <a href={`mailto:${site.contact.email}?subject=${resumeSubject}`}>
          request a copy of my résumé
        </a>
        .
      </p>

      <div className="contact-links" aria-label="Professional profiles">
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
          <span className="contact-link-arrow" aria-hidden="true">
            ↗
          </span>
        </a>

        <a href={site.social.github} target="_blank" rel="noopener noreferrer">
          <span>GitHub</span>
          <span className="contact-link-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
