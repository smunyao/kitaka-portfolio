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
      <h2>{contactContent.heading}</h2>

      <p className="contact-copy">
        {contactContent.intro}{" "}
        <a href={`mailto:${site.contact.email}?subject=${emailSubject}`}>
          Send me an email
        </a>
        {", or "}
        <a href={`mailto:${site.contact.email}?subject=${resumeSubject}`}>
          request a copy of my résumé
        </a>
        .
      </p>
    </section>
  );
}

export default Contact;
