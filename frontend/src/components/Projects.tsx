import type { Project } from "../api/api";

type ProjectsProps = { projects?: Project[] };

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="content-section">
      <div className="section-card">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Selected work</h2>

        <ul className="project-grid">
          {(projects ?? []).map((project) => (
            <li key={project.name}>
              <strong>{project.name}</strong>
              <span>{project.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
