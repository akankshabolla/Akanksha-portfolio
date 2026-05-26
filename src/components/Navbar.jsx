import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        AK ✦
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education & Certifications</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <a href="/resume_akanksha.pdf" className="resume-btn" download>
          Resume ↓
        </a>
      </div>

      <button className="theme-toggle" onClick={toggleTheme}>
        {lightMode ? <FaSun /> : <FaMoon />}
      </button>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </nav>
  );
}

export default Navbar;