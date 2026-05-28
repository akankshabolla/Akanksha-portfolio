import "../App.css";

function Experience() {
  const experiences = [
    {
      side: "left",
      icon: "🤖",
      year: "2025",
      title: "Research Assistant — Generative AI",
      company: "Texas A&M University–Corpus Christi",
      date: "Jan 2026 – May 2026",
      desc: "Engineered a Generative AI workflow to automate test case generation from requirements and user stories, reducing manual effort by 40%.",
    },
    {
      side: "right",
      icon: "📘",
      year: "2024",
      title: "Teaching Assistant — Statistics",
      company: "Texas A&M University–Corpus Christi",
      date: "Sep 2024 – dec 2025",
      desc: "Guided students through statistical concepts, assignments, grading, office hours, and individualized academic support.",
    },
    {
      side: "left",
      icon: "🍽️",
      year: "2023",
      title: "Full Stack Development Intern",
      company: "Postulate Technologies — Bengaluru, Karnataka",
      date: "May 2023 – Aug 2023",
      desc: "Developed The Foodie Spot, a full-stack restaurant ordering system using Java Servlets and MySQL, supporting 500+ menu items and end-to-end order management.",
    },
    {
      side: "right",
      icon: "💻",
      year: "2022",
      title: "Web Development Intern",
      company: "Rayaak Technologies — Bengaluru, Karnataka",
      date: "Apr 2022 – Aug 2022",
      desc: "Developed and deployed a full-stack web application for a startup client using frontend-backend integration and cPanel hosting.",
    },
    {
      side: "left",
      icon: "🚀",
      year: "2021",
      title: "Codex Club Leadership Member",
      company: "GITAM University",
      date: "Mar 2021 – Aug 2022",
      desc: "Organized university-wide hackathons, coding competitions, and technical events while fostering a collaborative developer community.",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <p className="experience-label">EXPERIENCE</p>
        <h2>
          My <span>Experience</span>
        </h2>
        <p className="experience-subtitle">
          A journey of building, teaching, researching, and leading impactful technical initiatives.
        </p>
      </div>

      <div className="experience-orbit">
        <div className="timeline-beam"></div>
        <div className="timeline-base"></div>

        {experiences.map((exp, index) => (
          <div className={`experience-row ${exp.side}`} key={index}>
            <div className="exp-card">
              <div className="exp-icon">{exp.icon}</div>

              <div className="exp-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="exp-date">{exp.date}</p>
                <p className="exp-desc">{exp.desc}</p>
              </div>
            </div>

            <div className="timeline-dot"></div>
            <div className="year-pill">{exp.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;