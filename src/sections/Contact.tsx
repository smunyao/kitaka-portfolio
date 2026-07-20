import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="contact-eyebrow">Contact</p>

      <h2>Let's build reliable software together.</h2>

      <p>
        I'm open to remote Quality Engineering opportunities and conversations
        about building better products through thoughtful testing and
        collaboration.
      </p>

      <div className="contact-links">
        <a href="mailto:sylv.munyao@gmail.com">Email</a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href="/resume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
