import { Link } from "react-router-dom";
import type { Experience } from "../data/experiences";
import {
  CaseStudyProject,
  type CaseStudyRow,
  type CaseStudyTaped,
} from "./caseStudy/CaseStudyBlocks";

const BASE_URL = import.meta.env.BASE_URL;

const INTEGRATIONS_TAPED: CaseStudyTaped[] = [
  {
    title: "Tally ↔ CRM",
    body: "REST API bridges connecting Tally ERP with CRM platforms, cloud services, and mobile apps for 60+ enterprise clients.",
    foot: "Antraweb",
  },
  {
    title: "200+ add-ons",
    body: "Evaluated and implemented Tally add-ons and integrations — customizing workflows and automating manual data pipelines.",
    foot: "Integrations",
  },
  {
    title: "Faster onboarding",
    body: "Cross-functional scoping of technical requirements to accelerate client onboarding and solution deployment cycles.",
    foot: "Growth",
  },
];

const DASHBOARDS_TAPED: CaseStudyTaped[] = [
  {
    title: "React dashboards",
    body: "Client-facing dashboards replacing manual reporting workflows with real-time data interfaces.",
    foot: "Frontend",
  },
  {
    title: "FastAPI backend",
    body: "Python/FastAPI services powering automation tools and live data sync for B2B clients.",
    foot: "Backend",
  },
  {
    title: "Ops automation",
    body: "Automation tools that reduce operational overhead and give clients self-serve visibility into integrations.",
    foot: "Antraweb",
  },
];

const ATOCONN_TOOLS = ["Jira", "ClickUp"] as const;

const INTEGRATIONS_ROWS: CaseStudyRow[] = [
  {
    label: "Objective",
    content:
      "Deliver end-to-end SaaS integration solutions for enterprise B2B clients — connecting Tally ERP with CRM platforms, cloud services, and mobile applications at scale.",
  },
  {
    label: "What I built",
    layout: "full",
    content: (
      <ul className="case-study__list case-study__list--built-wide">
        <li>
          Architected and deployed <strong>end-to-end SaaS integration
          solutions</strong> for <strong>60+ enterprise clients</strong>,
          connecting Tally ERP with CRM, cloud platforms, and mobile apps via{" "}
          <strong>REST APIs</strong> and third-party integrations.
        </li>
        <li>
          Evaluated and implemented <strong>200+ Tally add-ons and
          integrations</strong>, customizing workflows and automating manual
          data pipelines to reduce operational overhead for B2B clients.
        </li>
        <li>
          Collaborated cross-functionally to scope technical requirements,
          accelerating <strong>client onboarding and solution deployment</strong>{" "}
          cycles.
        </li>
      </ul>
    ),
  },
  {
    label: "Impact",
    content:
      "Reduced manual data handling for enterprise clients by replacing ad-hoc pipelines with standardized, API-driven integrations — enabling faster onboarding and repeatable deployment across 60+ accounts.",
  },
];

const DASHBOARDS_ROWS: CaseStudyRow[] = [
  {
    label: "Objective",
    content:
      "Replace manual reporting and ops workflows with real-time client-facing dashboards and automation tools — React.js on the frontend, FastAPI on the backend.",
  },
  {
    label: "What I built",
    layout: "full",
    content: (
      <ul className="case-study__list case-study__list--built-wide">
        <li>
          Built <strong>client-facing dashboards</strong> and automation tools
          using <strong>React.js</strong> frontend and{" "}
          <strong>FastAPI (Python)</strong> backend.
        </li>
        <li>
          Replaced manual reporting workflows with <strong>real-time data
          interfaces</strong> so clients could monitor integrations and ops
          without spreadsheet handoffs.
        </li>
        <li>
          Scoped and shipped features in sync with integration rollouts — keeping
          dashboard data aligned with live Tally and CRM sync pipelines.
        </li>
      </ul>
    ),
  },
  {
    label: "Impact",
    content:
      "Gave B2B clients self-serve visibility into integration health and reporting — cutting manual ops work and improving time-to-value after onboarding.",
  },
];

type Props = {
  exp: Experience;
};

export function AntrawebCaseStudy({ exp }: Props) {
  return (
    <article className="case-study">
      <div className="case-study__inner">
        <Link to="/#work" className="case-study__back">
          ← Work / Experience
        </Link>

        <header className="case-study__hero case-study__hero--page case-study__intro-card">
          <p className="case-study__pill">Case study</p>
          <p className="case-study__meta">
            {exp.period} · {exp.company}
          </p>
          <h1 className="case-study__page-title">
            Full Stack Developer / Growth Engineer · Enterprise SaaS Integrations
          </h1>
          <p className="case-study__lede">
            I work as <strong>Full Stack Developer / Growth Engineer</strong> at
            Antraweb, architecting <strong>end-to-end SaaS integration
            solutions</strong> for <strong>60+ enterprise clients</strong> —
            connecting Tally ERP with CRM, cloud platforms, and mobile apps. I
            build client dashboards with <strong>React.js</strong> and{" "}
            <strong>FastAPI</strong>, and evaluate <strong>200+ Tally add-ons</strong>{" "}
            to automate B2B data pipelines.
          </p>
          <p className="case-study__intro-tech">
            <strong>Tech:</strong> React.js, FastAPI, Python, REST APIs, Tally,
            SaaS Integrations, CRM Platforms — <strong>Tools:</strong> Jira,
            ClickUp
          </p>
        </header>

        <CaseStudyProject
          num="1."
          title="Enterprise SaaS Integrations"
          subtitle="Tally ERP ↔ CRM, cloud & mobile — 60+ clients, 200+ add-ons, REST APIs."
          rows={INTEGRATIONS_ROWS}
          primaryImg={`${BASE_URL}work/banner.png`}
          primaryAlt="Antraweb enterprise SaaS integration dashboard overview"
          primaryLabel="Integration overview"
          primaryUrl="Antraweb · integrations"
          secondaryImg={`${BASE_URL}work/image.png`}
          secondaryAlt="Antraweb client integration workflow and data pipeline view"
          secondaryLabel="Data pipelines"
          secondaryUrl="Antraweb · Tally sync"
          taped={INTEGRATIONS_TAPED}
          tapedHeadingId="antraweb-int-dh"
          tapedTitle="Integrations · highlights"
          stack={[
            "React.js",
            "FastAPI",
            "Python",
            "REST APIs",
            "Tally",
            "SaaS Integrations",
            "CRM Platforms",
          ]}
          tools={[...ATOCONN_TOOLS]}
        />

        <CaseStudyProject
          num="2."
          title="Client Dashboards & Automation"
          subtitle="React.js + FastAPI — real-time reporting, automation tools, ops visibility."
          rows={DASHBOARDS_ROWS}
          taped={DASHBOARDS_TAPED}
          tapedHeadingId="antraweb-dash-dh"
          tapedTitle="Dashboards · highlights"
          stack={["React.js", "FastAPI", "Python", "REST APIs"]}
          tools={[...ATOCONN_TOOLS]}
        />
      </div>
    </article>
  );
}
