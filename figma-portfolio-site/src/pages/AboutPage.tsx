import { SkillsPhysicsStage } from "../components/SkillsPhysicsStage";
import { aboutWorkEntries, educationEntries } from "../data/experiences";
import { figmaAbout as A } from "../figmaAboutPageAssets";
import "../styles/aboutFigmaPage.css";

const GITHUB = "https://github.com/Chadvik";
const CONTACT_EMAIL = "satvikrao9@gmail.com";
const LINKEDIN_HREF =
  "https://www.linkedin.com/in/satvik-rao-ab9a22311/";
const RESUME = "https://drive.google.com/drive/folders/1Ebw3Cr2PxJ1UjGVIJVylK54KLUyIAoqh";
const BASE_URL = import.meta.env.BASE_URL;

const DAILY_DRIVER_HUB = {
  src: `${BASE_URL}icons/vscode.png`,
  label: "Visual Studio Code",
} as const;

const DAILY_DRIVER_ORBIT = [
  {
    classSuffix: "a" as const,
    src: `${BASE_URL}icons/clickup.png`,
    label: "ClickUp",
  },
  {
    classSuffix: "b" as const,
    src: `${BASE_URL}icons/docker.png`,
    label: "Docker",
  },
  { classSuffix: "c" as const, src: `${BASE_URL}icons/figma.png`, label: "Figma" },
  { classSuffix: "d" as const, src: `${BASE_URL}icons/jira.png`, label: "Jira" },
] as const;

const SKILLS = [
  /* Languages */
  "Python",
  "JavaScript",
  "TypeScript",
  "Dart",
  "SQL",
  "Java",
  "C++",
  /* Frontend */
  "React.js",
  "Next.js",
  "Flutter",
  "React Native",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  /* Backend */
  "Node.js",
  "Express.js",
  "FastAPI",
  "REST APIs",
  "GraphQL",
  "Microservices",
  "WebSockets",
  /* AI / ML & GenAI */
  "LLM Integration",
  "RAG Pipelines",
  "Generative AI",
  "Machine Learning",
  "TensorFlow",
  /* Databases */
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "Redis",
  /* DevOps & Tools */
  "Git",
  "GitHub",
  "Docker",
  "CI/CD",
  "Jira",
  "Figma",
  "Power BI",
  "AWS",
] as const;

function HeroQuote({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 474 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 42 C80 8 120 72 200 42 S320 12 400 42 S440 58 472 42"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function AboutPage() {
  return (
    <article className="vf-page stack-fade-sections">
      <p className="vf-kicker">Happy to see you here :)</p>
      <p className="vf-page__tagline">
        Full-stack developer — SaaS integrations, mobile apps, and AI-powered
        products from APIs to production.
      </p>

      <div className="vf-hero-row">
        <HeroQuote className="vf-hero-quote vf-hero-quote--flip" />
        <div className="vf-portrait">
          <img
            src={A.heroPortrait}
            alt="Satvik Rao"
            width={380}
            height={522}
            loading="eager"
            decoding="async"
          />
        </div>
        <HeroQuote className="vf-hero-quote" />
      </div>

      <div className="vf-intro vf-container">
        <p>
          Hi, I&apos;m Satvik, a full-stack developer based in Mumbai. I build
          end-to-end SaaS integration solutions, mobile applications, and
          AI-powered platforms — from REST APIs and backend services to
          production-ready frontends. I&apos;m at{" "}
          <span className="vf-accent-inline">Antraweb Technologies</span> now,
          architecting Tally ERP integrations for 60+ enterprise clients; before
          that I shipped the Attendance Module in WowCare and built scalable
          APIs at{" "}
          <span className="vf-accent-inline">Atoconn</span> in Mumbai.
        </p>
        <p>
          My computer science background at MIT ID keeps me close to how things
          actually work under the hood. I like building products that solve real
          problems — whether it&apos;s precision agriculture with ML, EdTech with
          GenAI, or enterprise SaaS integrations that replace manual workflows.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m usually exploring new tech, contributing
          to hackathon projects, or working on side builds. I love clean
          architecture, fast APIs, and products that make people think,{" "}
          <span className="vf-accent-inline">&quot;this just works.&quot;</span>
        </p>
      </div>

      <div className="vf-polaroids" aria-hidden>
        <div className="vf-polaroid vf-polaroid--r1">
          <div className="vf-polaroid__inner">
            <img src={A.polaroid1} alt="" width={180} height={180} />
          </div>
        </div>
        <div className="vf-polaroid vf-polaroid--r2">
          <div className="vf-polaroid__inner">
            <img src={A.polaroid2} alt="" width={180} height={180} />
          </div>
        </div>
        <div className="vf-polaroid vf-polaroid--r3">
          <div className="vf-polaroid__inner">
            <img src={A.polaroid3} alt="" width={180} height={180} />
          </div>
        </div>
        <div className="vf-polaroid vf-polaroid--r4">
          <div className="vf-polaroid__inner">
            <img src={A.polaroid4} alt="" width={180} height={180} />
          </div>
        </div>
      </div>

      <section className="vf-work" aria-labelledby="vf-education">
        <h2 id="vf-education" className="vf-work__title">
          <em>Education</em>
        </h2>
        <div className="vf-job-list">
          {educationEntries.map((edu) => (
            <article key={edu.key} className="vf-job">
              <div className="vf-job__logo" aria-hidden>
                <span className="vf-job__logo-initials">
                  {edu.school.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="vf-job__mid">
                <div>
                  <p className="vf-job__role">{edu.school}</p>
                  <p className="vf-job__sub">
                    <span>{edu.degree}</span>
                  </p>
                </div>
                <p className="vf-job__date">{edu.period}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vf-work" aria-labelledby="vf-been">
        <h2 id="vf-been" className="vf-work__title">
          Where I&apos;ve <em>Been</em>
        </h2>
        <div className="vf-job-list">
          {aboutWorkEntries.map((j) => (
            <article key={j.key} className="vf-job">
              <div className="vf-job__logo" aria-hidden>
                <span className="vf-job__logo-initials">{j.initials}</span>
              </div>
              <div className="vf-job__mid">
                <div>
                  <p className="vf-job__role">{j.role}</p>
                  <p className="vf-job__sub">
                    <span>{j.company}</span>
                    <span className="vf-job__dot" aria-hidden />
                    <span>{j.type}</span>
                  </p>
                </div>
                <p className="vf-job__date">{j.period}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <header className="vf-skills-head vf-skills-head--compact vf-container">
        <h2>
          Stuff I do really <em>well</em>
        </h2>
        <p>
          Languages, frameworks, AI/ML, databases, and tools I ship with.
        </p>
      </header>

      <SkillsPhysicsStage skills={SKILLS} />

      <section className="vf-orbit-section" aria-labelledby="vf-drivers">
        <h2 id="vf-drivers">
          My Daily <em>Drivers</em>
        </h2>
        <p>Tools I use every single day.</p>

        <div className="vf-orbit">
          <div className="vf-orbit__ring vf-orbit__ring--o" aria-hidden />
          <div className="vf-orbit__ring vf-orbit__ring--m" aria-hidden />
          <div className="vf-orbit__ring vf-orbit__ring--i" aria-hidden />
          <div className="vf-orbit__hub">
            <img
              src={DAILY_DRIVER_HUB.src}
              alt={DAILY_DRIVER_HUB.label}
              width={85}
              height={86}
            />
          </div>
          {DAILY_DRIVER_ORBIT.map((t) => (
            <div
              key={t.classSuffix}
              className={`vf-orbit__sat vf-orbit__sat--${t.classSuffix}`}
            >
              <div className="vf-orbit__sat-inner">
                <img src={t.src} alt={t.label} width={56} height={56} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="vf-footer">
        <div className="vf-footer__cta">
          <p>Currently seeking full-time opportunities</p>
          <h2>
            <span className="sans">Let&apos;s </span>
            <span className="hi">Chat!</span>
          </h2>
          <div className="vf-footer__actions">
            <a
              className="vf-footer__btn"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              Say hello
            </a>
            <a
              className="vf-footer__btn vf-footer__btn--secondary"
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
          <p className="vf-footer__chat-sub">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span className="vf-footer__chat-dot" aria-hidden />
            <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="vf-footer__chat-dot" aria-hidden />
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span className="vf-footer__chat-dot" aria-hidden />
            <a href={RESUME} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </p>
        </div>
        <div className="vf-footer__bar">
          <p className="vf-footer__copy">
            © Satvik Rao <span className="dim">2026</span>
          </p>
          <div className="vf-footer__links">
            <a href={RESUME} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="vf-footer__aside">
            Designed with <em>love</em>
          </p>
        </div>
      </footer>
    </article>
  );
}
