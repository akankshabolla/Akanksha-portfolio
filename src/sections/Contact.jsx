import "./Contact.css";

import {
  Mail,
  Download,
  Send,
  ExternalLink
} from "lucide-react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            Let’s <span>Connect</span>
          </h2>

          <p className="contact-subtitle">
            I’m open to Generative AI, AI/ML, Full-Stack, and Software Engineering opportunities.
            Feel free to connect with me.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={22} />
              </div>

              <div>
                <h4>Email</h4>
                <a href="mailto:akankshabolla7@gmail.com">akankshabolla7@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon text-icon">in</div>

              <div>
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/akanksha-bolla-1bab08232"
                  target="_blank"
                  rel="noreferrer"
                >
                linkedin.com/in/akanksha-bolla-1bab08232
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon text-icon">GH</div>

              <div>
                <h4>GitHub</h4>
                <a
                  href="https://github.com/akankshabolla"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/akankshabolla
                </a>
              </div>
            </div>

            
          </div>

          <div className="contact-action-card">
            <div className="action-content">
              <h3>Interested in working together?</h3>

              <p>
                Whether it’s AI, Machine Learning, Full-Stack Development,
                or exciting software projects — I’d love to connect.
              </p>
            </div>

            <div className="contact-buttons">
              <a href="mailto:akankshabolla7@gmail.com" className="primary-contact-btn">
                <Send size={18} />
                Email Me
              </a>

              <a
                href="/akanksha_bolla.pdf"
                download="akanksha_bolla.pdf"
                className="outline-contact-btn"
              >
                <Download size={18} />
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/akanksha-bolla-1bab08232"
                target="_blank"
                rel="noreferrer"
                className="outline-contact-btn"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;