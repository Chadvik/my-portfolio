import { useState } from "react";
import { assets } from "../figmaAssets";

const POLAROIDS = [
  { src: assets.hireA, className: "hire__polaroid hp1" },
  { src: assets.hireB, className: "hire__polaroid hp2" },
  { src: assets.hireC, className: "hire__polaroid hp3" },
  { src: assets.hireD, className: "hire__polaroid hp4" },
] as const;

const VALUE_PROPS = [
  {
    title: (
      <>
        I take it from <em>API to production</em>
      </>
    ),
    body: (
      <>
        I architect <strong>end-to-end solutions</strong> — REST APIs, backend
        services, and production frontends — so the product in production
        matches the technical spec, without trading{" "}
        <strong>speed</strong> for <strong>reliability</strong>.
      </>
    ),
  },
  {
    title: (
      <>
        I build for <em>scale</em>, not demos
      </>
    ),
    body: (
      <>
        I optimize for <strong>performance</strong>, reliable{" "}
        <strong>integrations</strong>, and systems that behave well under real
        enterprise load — not just in local development.
      </>
    ),
  },
  {
    title: (
      <>
        I ask, listen, and <em>close gaps</em> fast
      </>
    ),
    body: (
      <>
        I collaborate with <strong>clients</strong> and{" "}
        <strong>cross-functional teams</strong>, scope technical requirements
        early, and fill <strong>knowledge gaps</strong> quickly so we ship
        with confidence.
      </>
    ),
  },
  {
    title: (
      <>
        I work across <em>mobile and web</em>
      </>
    ),
    body: (
      <>
        One rhythm across <strong>Flutter</strong>, <strong>React</strong>, and{" "}
        <strong>Node.js/FastAPI backends</strong> — with constraints on the
        table early and momentum through <strong>delivery</strong>, not just
        prototypes.
      </>
    ),
  },
];

export function HireMe() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="hire" id="hire" aria-labelledby="hire-heading">
      <div className="hire__pitch">
        <h2 id="hire-heading">
          Why <span className="italic">you should</span> Hire me!
        </h2>
        <p>
          Full-stack developer: SaaS integrations, mobile apps, and AI-powered
          products in one workflow.
        </p>
      </div>

      <div className="hire__cards">
        {VALUE_PROPS.map((c, i) => (
          <article key={i} className="hire__value">
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </article>
        ))}
      </div>

      <div className="hire__polaroids">
        {POLAROIDS.map((p, i) => (
          <div
            key={i}
            className={p.className}
            role="button"
            tabIndex={0}
            onClick={() => setLightbox(p.src)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightbox(p.src);
              }
            }}
          >
            <button
              type="button"
              className="expand"
              aria-label="Expand image"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(p.src);
              }}
            >
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
            <img src={p.src} alt="" />
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal
          aria-label="Image preview"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
        >
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="Expanded work sample"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
