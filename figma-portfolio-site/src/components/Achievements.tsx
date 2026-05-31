const BASE_URL = import.meta.env.BASE_URL;
const SIH_2024_SRC =
  `${BASE_URL}achievements/` + encodeURIComponent("sih-1.jpg");
const SIH_2025_SRC = `${BASE_URL}achievements/SIH-2025.png`;

const ITEMS = [
  {
    src: SIH_2024_SRC,
    title: "SIH Hackathon Winner",
    subtitle: "Jal Sanchay — Smart India Hackathon 2024",
    caption:
      "Grand finale winner with team AKATSUKI — built an AI/ML-powered full-stack mobile app for precision agriculture with Flask REST backend and Firebase live sync.",
    alt: "Smart India Hackathon 2024 winner — Jal Sanchay team on stage at the grand finale.",
  },
  {
    src: SIH_2025_SRC,
    title: "SIH Hackathon Runner-up",
    subtitle: "Anantara — Smart India Hackathon",
    caption:
      "National-level Smart India Hackathon runner-up — engineered a full-stack EdTech platform with GenAI avatar, AR/VR visualization, and immersive learning experiences.",
    alt: "Smart India Hackathon — Anantara EdTech platform achievement.",
  },
] as const;

export function Achievements() {
  return (
    <section
      className="achievements"
      id="achievements"
      aria-labelledby="achievements-heading"
    >
      <div className="section-head">
        <h2 id="achievements-heading">
          <span className="sans">Awards / </span>
          <span className="serif">Achievements</span>
        </h2>
        <p>
          National hackathon wins at Smart India Hackathon — Jal Sanchay winner
          and Anantara runner-up.
        </p>
      </div>

      <div className="achievements__grid">
        {ITEMS.map((item) => (
          <figure key={item.src} className="achievements__card">
            <div className="achievements__frame">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
            <figcaption className="achievements__body">
              <p className="achievements__kicker">{item.title}</p>
              <h3 className="achievements__name">{item.subtitle}</h3>
              <p className="achievements__caption">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
