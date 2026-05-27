import profile from "../assets/profile.jpg";
import {
  FaBrain,
  FaLaptopCode,
  FaRocket,
  FaLayerGroup
} from "react-icons/fa";


function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-glow"></div>

      <div className="about-left">
        <div className="profile-card">
          <img src={profile} alt="Akanksha Bolla" className="profile-image" />
        </div>
      </div>

      <div className="about-right">
        <p className="about-label">ABOUT ME</p>

        <h2 className="about-title">
          I’m <span>Akanksha Bolla</span>
        </h2>

        <div className="about-text-card">
          <p>
            A Computer Science graduate from Texas A&M University–Corpus
            Christi passionate about building intelligent systems that blend AI
            with impactful user experiences. I enjoy transforming ideas into real
            products — from emotion-aware chatbots and AI learning assistants to
            scalable full-stack applications.
          </p>

          <p>
            My work spans Artificial Intelligence, Machine Learning, Full-Stack
            Development, and Generative AI, where I focus on creating solutions
            that are not only technically strong but genuinely useful.
          </p>

          <p>
            Currently, I’m exploring AI agents, LLM-powered applications, and
            software systems that solve real-world problems.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card"><span className="highlight-inner"><FaBrain /> <span className="highlight-label">AI / ML</span></span></div>
          <div className="highlight-card"><span className="highlight-inner"><FaLaptopCode /> <span className="highlight-label">Full Stack</span></span></div>
          <div className="highlight-card"><span className="highlight-inner"><FaRocket /> <span className="highlight-label">Generative AI</span></span></div>
          <div className="highlight-card"><span className="highlight-inner"><FaLayerGroup /> <span className="highlight-label">10+ Projects</span></span></div>
        </div>

        <div className="stats">
          <div className="stat-box">
            <h3>10+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-box">
            <h3>2+</h3>
            <p>Years Building Real-world Applications</p>
          </div>

          <div className="stat-box">
            <h3>AI/ML</h3>
            <p>Focus</p>
          </div>

          <div className="stat-box">
            <h3>Full Stack</h3>
            <p>Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;