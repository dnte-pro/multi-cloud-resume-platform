import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import VisitorCounter from "./components/VisitorCounter";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <VisitorCounter />
        <Contact />
      </main>
    </div>
  );
}

export default App;