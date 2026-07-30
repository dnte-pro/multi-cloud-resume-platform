import { useEffect, useState } from "react";
import { recordVisit } from "../api/api";

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    recordVisit().then(setVisitors).catch((error: unknown) => console.error(error));
  }, []);

  return (
    <section className="content-section">
      <div className="section-card visitor-card">
        <p className="section-kicker">Visitors</p>
        <h2 className="section-title">Live interest</h2>
        <p className="visitor-count">{visitors ?? "—"}</p>
      </div>
    </section>
  );
}
