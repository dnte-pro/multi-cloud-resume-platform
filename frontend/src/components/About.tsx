type AboutProps = { summary?: string };

export default function About({ summary }: AboutProps) {
  return (
    <section
    id="about"
     className="content-section"
    >
      <div className="section-card">
        <p className="section-kicker">About</p>

        <h2 className="section-title">Infrastructure with intent</h2>

        <p className="section-copy">
          {summary ?? "Loading professional summary..."}
        </p>
      </div>
    </section>
  );
}
