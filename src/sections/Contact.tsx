import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="contact-eyebrow">Contact</p>

      <h2>Let's continue the conversation.</h2>

      <p>
        Thanks for taking the time to explore my portfolio. If you'd like to get
        in touch, I'd love to hear from you.
      </p>

      <p className="contact-note">
        Email is usually the quickest way to reach me.
      </p>

      <div className="contact-links">
        <a href="mailto:sylv.munyao@gmail.com?subject=%5BPortfolio%5D%20Let's%20connect">
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/sylvester-munyao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/smunyao"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="/resume/sylvester-kitaka-munyao-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé (PDF)
        </a>
      </div>
    </section>
  );
}

export default Contact;
