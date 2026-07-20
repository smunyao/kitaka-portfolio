import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-logo">
  Kitaka
</a>

      <ul className="navbar-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;