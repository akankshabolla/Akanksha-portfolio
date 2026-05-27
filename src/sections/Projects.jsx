import { useState } from "react";
import "./Projects.css";
import projects from "../data/projectsData";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [zoomedPlanet, setZoomedPlanet] = useState(null);
  const [isEntering, setIsEntering] = useState(false);

  const handlePlanetClick = (project) => {
    setSelectedProject(project);
    setZoomedPlanet(project.id);
    setIsEntering(true);

    setTimeout(() => {
      setIsEntering(false);

      document.getElementById("selected-project-card")?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 900);

    setTimeout(() => {
      setZoomedPlanet(null);
    }, 1200);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <p className="projects-kicker">✦ EXPLORE MY WORK</p>

        <h2>
          PROJECTS <span>GALAXY</span>
        </h2>

        <p className="projects-desc">
          ✨ Click any planet to explore a project.
        </p>

        <p className="projects-desc small">
          ⚡ In a hurry? Scroll below for Quick Card View.
        </p>
      </div>

      <div className="galaxy-area">
        <div className="galaxy-core">
          <div className="spiral"></div>
          <div className="spiral spiral2"></div>

          <div className="galaxy-text">
            <h3>AKANKSHA'S</h3>
            <h2>PROJECT GALAXY</h2>
            <p>GENERATIVE AI • AI • ML • FULL STACK</p>
          </div>
        </div>

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>

        {(() => {
          // place planets evenly on a single circular orbit around center
          const centerX = 50; // percent
          const centerY = 52; // percent (matches .galaxy-core top)
          const radius = 36; // percent radius for the orbit
          const total = projects.length;

          return projects.map((project, i) => {
            const angleDeg = -90 + (i * 360) / total; // start at top and go clockwise
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = centerX + radius * Math.cos(angleRad);
            const y = centerY + radius * Math.sin(angleRad);

            return (
              <button
                key={project.id}
                className={`project-planet ${
                  selectedProject.id === project.id ? "selected" : ""
                } ${zoomedPlanet === project.id ? "zoomed" : ""}`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  animationDelay: `${project.id * 0.3}s`
                }}
                onClick={() => handlePlanetClick(project)}
              >
                <div className="planet-circle">
                  <span>{project.emoji}</span>
                </div>

                <div className="planet-label">
                  <strong>{project.name}</strong>
                  <small>{project.subtitle}</small>
                </div>
              </button>
            );
          });
        })()}
      </div>

      <div className="selected-project-card" id="selected-project-card">
        <div className="selected-card-visual">
          <span>{selectedProject.emoji}</span>
        </div>

        <div className="selected-card-content">
          <p className="selected-badge">SELECTED PROJECT</p>

          <h3>{selectedProject.name}</h3>
          <p className="card-subtitle">{selectedProject.subtitle}</p>

          <p className="card-description">{selectedProject.description}</p>

          <h4>Tech Stack</h4>

          <div className="tech-list">
            {selectedProject.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="card-actions">
            {selectedProject.demo && selectedProject.demo !== "#" && (
              <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}

            <a href={selectedProject.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="project-card-view">
        <div className="card-view-header">
          <h3>
            PROJECTS <span>QUICK VIEW</span>
          </h3>
          <p>Prefer a faster view? Browse all projects instantly.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="mini-project-card"
              onClick={() => handlePlanetClick(project)}
            >
              <div className="mini-image">
                <span>{project.emoji}</span>
              </div>

              <h4>{project.name}</h4>
              <p>{project.subtitle}</p>

              <div className="mini-tech">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="mini-actions">
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {isEntering && (
        <div className="planet-zoom-overlay">
          <div className="zoom-planet">
            <span>{selectedProject.emoji}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;