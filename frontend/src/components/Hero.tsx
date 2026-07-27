export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-section__content">
        <p className="eyebrow">Cloud infrastructure • automation • platform engineering</p>

        <h1 className="hero-title">
          Kiprono Daniel Yegon
        </h1>

        <h2 className="hero-subtitle">
          Cloud & DevOps Engineer
        </h2>

        <p className="hero-copy">
          Building automated cloud deployments with AWS, Azure, Docker,
          Kubernetes, Terraform, and GitHub Actions.
        </p>

        <div className="hero-actions">
          <a className="button button--primary" href="#projects">
            View Projects
          </a>

          <a className="button button--secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}