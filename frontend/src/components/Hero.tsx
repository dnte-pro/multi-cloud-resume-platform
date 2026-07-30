import type { Resume } from "../api/api";

type HeroProps = {
  resume: Resume | null;
  error: string | null;
};

export default function Hero({ resume, error }: HeroProps) {
  if (!resume) {
    return (
      <section id="top" className="hero-section">
        <div className="hero-section__content">
          <p className="hero-copy">{error ?? "Loading portfolio data..."}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="top" className="hero-section">
      <div className="hero-section__content">
        <p className="eyebrow">{resume.location}</p>
        <h1 className="hero-title">{resume.name}</h1>
        <p className="hero-subtitle">{resume.title}</p>
        <p className="hero-copy">{resume.summary}</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#projects">
            View projects
          </a>
          <a className="button button--secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
