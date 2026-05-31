const GITHUB = "https://github.com/Chadvik";
const MAIL = "mailto:satvikrao9@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/satvik-rao-ab9a22311/";
const RESUME =
  "https://drive.google.com/file/d/1pMGEYH1WVakT4l6IA9TIjMo9HZOVqZjJ/view?usp=sharing";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__cta">
        <p>Currently seeking full-time opportunities</p>
        <h2>
          <span className="bold">Don&apos;t Shy</span>
          <span className="hi">, Say Hi!</span>
        </h2>
        <div className="footer__actions">
          <a className="footer__btn" href={MAIL}>
            Let&apos;s Talk
          </a>
          <a
            className="footer__btn footer__btn--secondary"
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
        <p className="footer__contact-line">
          <a href={MAIL}>satvikrao9@gmail.com</a>
          <span className="footer__contact-sep" aria-hidden>
            ·
          </span>
          <span>+91 8962997797</span>
          <span className="footer__contact-sep" aria-hidden>
            ·
          </span>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="footer__contact-sep" aria-hidden>
            ·
          </span>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="footer__contact-sep" aria-hidden>
            ·
          </span>
          <a href={RESUME} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </p>
      </div>
      <div className="footer__bar">
        <p className="footer__copy">
          <span className="muted">©️ </span>
          <span>2026 Satvik Rao</span>
        </p>
        <div className="footer__links">
          <a href={RESUME} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="footer__aside">
          <p>
            Made With <em>love &amp; metal music</em>
          </p>
          <p>
            because <em>coffee</em> doesn&apos;t work <em>anymore</em>
          </p>
        </div>
      </div>
    </footer>
  );
}
