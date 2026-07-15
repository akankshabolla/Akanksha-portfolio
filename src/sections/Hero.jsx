import hero from "../assets/hero.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-stars"></div>

      <div className="social-sidebar">
  <a href="https://github.com/akankshabolla" target="_blank" rel="noreferrer">
    <FaGithub size={22} />
  </a>

  <a href="https://www.linkedin.com/in/akanksha-bolla-1bab08232/" target="_blank" rel="noreferrer">
    <FaLinkedinIn size={22} />
  </a>

  <a href="mailto:akankshabolla7@gmail.com">
    <MdEmail size={24} />
  </a>
</div>

      <div className="hero-content">
        <p className="intro">Hi, I'm</p>

        <h1>
          Akanksha <br /> Bolla <span>✦</span>
        </h1>

        <h2 className="typing-text">AI Engineer | Full Stack Developer</h2>

        <p className="hero-desc">
          I build intelligent, interactive and impactful web applications with AI
          that solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>

          <a href="/akanksha_bolla.pdf" className="outline-btn" download>
            Download Resume ↓
          </a>
        </div>
      </div>

      <div className="hero-image-wrap">
        <img
          src={hero}
          alt="Akanksha coding in space"
          className="hero-character"
        />
      </div>

      <a href="#about" className="scroll-text">
  ⌄
  <br />
  Scroll to explore
</a>
    </section>
  );
}

export default Hero;