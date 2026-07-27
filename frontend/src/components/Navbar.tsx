export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <a className="site-brand" href="#top" aria-label="Go to top">
          <span className="site-brand__mark">KY</span>
          <span className="site-brand__text">Kiprono.dev</span>
        </a>

        <ul className="site-nav__links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}