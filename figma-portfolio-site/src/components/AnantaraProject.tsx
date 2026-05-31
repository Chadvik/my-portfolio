import { PROJECT_VIDEOS } from "../config/projectMedia";
import { usePortraitVideoFullscreen } from "../hooks/usePortraitVideoFullscreen";

function AnantaraPreviewVideos() {
  const mobileVideoRef = usePortraitVideoFullscreen();

  return (
    <div
      className="fp-project__shots fp-project__shots--anantara"
      aria-label="ANantara product previews"
    >
      <figure className="fp-shot fp-shot--video fp-shot--anantara-web">
        <div className="fp-shot__media fp-shot__media--web">
          <video
            src={PROJECT_VIDEOS.anantaraWeb}
            className="fp-shot__video"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            aria-label="ANantara web platform screen recording"
          />
        </div>
        <figcaption>Web platform preview</figcaption>
      </figure>
      <figure className="fp-shot fp-shot--video fp-shot--anantara-mobile">
        <div className="fp-shot__media fp-shot__media--phone">
          <video
            ref={mobileVideoRef}
            src={PROJECT_VIDEOS.anantaraMobile}
            className="fp-shot__video anantara-mobile-video"
            controls
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            aria-label="ANantara mobile app screen recording"
          />
        </div>
        <figcaption>Mobile preview</figcaption>
      </figure>
    </div>
  );
}

/** List card for /projects — same layout as the Featured projects cards. */
export function AnantaraProjectCard() {
  return (
    <article className="fp-project fp-project--anantara" id="anantara">
      <div className="fp-project__meta">
        <span className="fp-project__badge">EdTech · GenAI · AR/VR · SIH Runner-up</span>
        <h2 className="fp-project__title">
          <span className="fp-project__name">Anantara</span>
          <span className="fp-project__tagline">
            Full-stack EdTech platform with GenAI and immersive learning
          </span>
        </h2>
        <p className="fp-project__lead">
          Engineered a full-stack EdTech platform with Node.js/Express.js
          backend, MongoDB Atlas, and React.js + Flutter frontend, supporting
          real-time multi-user interactions. Integrated Generative AI avatar,
          AR/VR visualization, and 2D/3D editors using WebGL and GenAI APIs.
        </p>
        <ul className="fp-project__list">
          <li>
            Full-stack platform with real-time multi-user interactions across
            web and mobile.
          </li>
          <li>
            GenAI avatar, AR/VR visualization, and 2D/3D editors for immersive
            learning experiences.
          </li>
          <li>
            Stack spans Node/Express/MongoDB, React.js, Flutter, and GenAI
            APIs.
          </li>
        </ul>
        <span className="fp-project-card__hint">View PDF →</span>
      </div>
      <AnantaraPreviewVideos />
    </article>
  );
}
