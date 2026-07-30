type SkillsProps = { skills?: string[] };

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="content-section">
      <div className="section-card">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Tools I use to ship systems</h2>

        <ul className="skill-grid">
          {(skills ?? []).map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </section>
  );
}
