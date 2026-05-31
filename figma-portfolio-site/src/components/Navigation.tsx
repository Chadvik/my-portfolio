import { Link, useLocation } from "react-router-dom";

const GITHUB = "https://github.com/Chadvik";
const RESUME = `${import.meta.env.BASE_URL}resume/Satvik_Rao_SDE.pdf`;

export function Navigation() {
  const { pathname } = useLocation();
  const home = pathname === "/";

  return (
    <header className="nav-wrap">
      <nav className="nav-pill" aria-label="Primary">
        {home ? (
          <a href="#top">Satvik Rao</a>
        ) : (
          <Link to="/">Satvik Rao</Link>
        )}
        <Link
          to="/about"
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
        <Link
          to="/projects"
          aria-current={pathname.startsWith("/projects") ? "page" : undefined}
        >
          Projects
        </Link>
        <a href={RESUME} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href={GITHUB} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </header>
  );
}
