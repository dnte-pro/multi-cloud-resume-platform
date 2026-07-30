import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import VisitorCounter from "./components/VisitorCounter";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { getResume, type Resume } from "./api/api";

function App() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getResume().then(setResume).catch((loadError: unknown) => {
      console.error(loadError);
      setError(loadError instanceof Error ? loadError.message : "The portfolio data is temporarily unavailable.");
    });
  }, []);

  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Hero resume={resume} error={error} />
        <About summary={resume?.summary} />
        <Skills skills={resume?.skills} />
        <Projects projects={resume?.projects} />
        <VisitorCounter />
        <Contact />
      </main>
    </div>
  );
}

export default App;
