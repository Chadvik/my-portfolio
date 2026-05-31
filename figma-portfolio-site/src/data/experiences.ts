/**
 * Left “card” visuals for Work / Experience: shared banner + image (hover swap).
 * Files live in public/work/ and public/atoconn/
 */
const BASE_URL = import.meta.env.BASE_URL;
export const WORK_CARD_IMAGE_A = `${BASE_URL}work/banner.png`;
export const WORK_CARD_IMAGE_B = `${BASE_URL}work/image.png`;

export type Experience = {
  id: string;
  slug: string;
  heading: string;
  company: string;
  period: string;
  overview: string;
  imageA: string;
  imageB: string;
  offset: "left" | "right";
  detail: {
    intro: string;
    bullets: string[];
    stack: string[];
    tools?: string[];
    /** Optional closing row for case-study style pages */
    impact?: string;
  };
};

const workCardVisual = {
  imageA: WORK_CARD_IMAGE_A,
  imageB: WORK_CARD_IMAGE_B,
} as const;

const atoconnCardVisual = {
  imageA: `${BASE_URL}atoconn/wowcare.png`,
  imageB: `${BASE_URL}atoconn/wowcare2.png`,
} as const;

export const experiences: Experience[] = [
  {
    id: "e1",
    slug: "antraweb",
    heading: "Growth Engineer",
    company: "Antraweb Technologies Pvt. Ltd, Mumbai",
    period: "Mar 2026 – Present",
    overview:
      "Architecting end-to-end SaaS integrations for 60+ enterprise clients — connecting Tally ERP with CRM, cloud platforms, and mobile apps via REST APIs. Building client dashboards with React.js and FastAPI.",
    ...workCardVisual,
    offset: "left",
    detail: {
      intro:
        "Full Stack Developer / Growth Engineer at Antraweb, delivering enterprise SaaS integration solutions that connect Tally ERP with CRM platforms, cloud services, and mobile applications for B2B clients.",
      bullets: [
        "Architected and deployed end-to-end SaaS integration solutions for 60+ enterprise clients, connecting Tally ERP with CRM, cloud platforms, and mobile apps via REST APIs and third-party integrations.",
        "Evaluated and implemented Tally add-ons and integrations, customizing workflows and automating manual data pipelines to reduce operational overhead for B2B clients.",
        "Built client-facing dashboards and automation tools using React.js frontend and FastAPI (Python) backend, replacing manual reporting workflows with real-time data interfaces.",
        "Collaborated cross-functionally to scope technical requirements, accelerating client onboarding and solution deployment cycles.",
      ],
      stack: [
        "React.js",
        "FastAPI",
        "Python",
        "REST APIs",
        "Tally",
        "SaaS Integrations",
        "CRM Platforms",
      ],
      tools: ["Jira", "ClickUp"],
    },
  },
  {
    id: "e2",
    slug: "atoconn",
    heading: "Software Developer Intern (Fullstack)",
    company: "Atoconn System Labs Pvt. Ltd, Mumbai",
    period: "Jul 2025 – Feb 2026",
    overview:
      "Shipped the Attendance Module in WowCare end-to-end with Flutter, built scalable Node.js/Express REST APIs, drove +35% user engagement (100+ users), and integrated payment gateways for Play & App Store releases.",
    ...workCardVisual,
    offset: "right",
    detail: {
      intro:
        "Software Developer Intern (Fullstack) at Atoconn, collaborating with US-based clients on scalable web and mobile products — from requirement analysis through production deployment.",
      bullets: [
        "Designed and shipped the Attendance Module in WowCare using Flutter end-to-end — covering sign-in/sign-out, transfers, and absence marking — from requirement analysis to production deployment; implemented state management and optimized Flutter widget trees for smooth cross-platform performance.",
        "Built scalable REST APIs and optimized backend services using Node.js and Express.js, improving response times and system reliability for US-based client operations.",
        "Delivered a net-new feature that drove a 35% increase in user engagement, growing the active user base to 100+ users post-launch.",
        "Integrated third-party payment gateways, implemented secure transaction flows, and contributed to successful Play Store and App Store deployments.",
      ],
      stack: [
        "Flutter",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
      ],
      tools: ["GitHub", "Docker", "Jira", "Figma"],
    },
  },
  {
    id: "e3",
    slug: "hcl",
    heading: "Full Stack Developer Intern",
    company: "HCL Technologies",
    period: "Mar 2025 – May 2025",
    overview:
      "Built a fleet management web application from scratch with React and Next.js on the client and Django + Python APIs on the server.",
    ...workCardVisual,
    offset: "left",
    detail: {
      intro:
        "Greenfield intern project: full-stack web app for fleet operations and visibility.",
      bullets: [
        "Implemented responsive UI with React and Next.js.",
        "Developed REST-style backend APIs using Django and Python.",
        "Collaborated via GitHub for reviews and integration.",
      ],
      stack: ["React", "Next.js", "Django", "Python"],
      tools: ["GitHub"],
      impact:
        "Shipped an end-to-end intern deliverable: usable fleet UI plus Django-backed APIs, reviewed and integrated through GitHub so the work stayed traceable and shippable.",
    },
  },
];

export function getExperienceBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return experiences.find((e) => e.slug === slug);
}

/** About page “Where I’ve Been” — same order as `experiences` (newest first). */
function formatAboutPeriod(period: string): string {
  return period.replace(/\s*[\u2013\u2014-]\s*/g, " — ").replace(/\s+/g, " ").trim();
}

function aboutWorkType(slug: string): string {
  if (slug === "atoconn" || slug === "hcl") return "Internship";
  return "Full time";
}

function companyInitials(company: string): string {
  const word = company.split(/[\s,.]+/).find(Boolean) ?? company;
  return word.slice(0, 2).toUpperCase();
}

export const aboutWorkEntries = experiences.map((e) => ({
  key: e.id,
  role: e.heading,
  company: e.company,
  type: aboutWorkType(e.slug),
  period: formatAboutPeriod(e.period),
  initials: companyInitials(e.company),
}));

export const educationEntries = [
  {
    key: "edu1",
    school: "MIT ID, Indore",
    degree: "BTech in Computer Science and Engineering (CGPA: 8.11)",
    period: "2022 — 2026",
  },
  {
    key: "edu2",
    school: "Christ Church Boys' Senior Secondary School",
    degree: "Class 12 Aggregate: 85%",
    period: "2021 — 2022",
  },
] as const;
