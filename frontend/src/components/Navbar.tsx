export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="font-bold text-xl">
          Kiprono.dev
        </h1>

        <ul className="flex gap-8">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}