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
      desc: "Engineered a Generative AI workflow to automate test case generation from requirements and user stories and evaluated AI-driven workflows to improve testing efficiency and reduce manual effort.",
    },
    {
      side: "right",
      icon: "📘",
      year: "2024",
      title: "Teaching Assistant — Statistics",
      company: "Texas A&M University–Corpus Christi",
      date: "Sep 2024 – dec 2025",
      desc: "Assisted students in developing a strong understanding of statistical concepts through mentoring, grading, and one-on-one support. Worked closely with students on data analysis, probability, and problem-solving skills that underpin modern AI and machine learning.",
    },
    {
      side: "left",
      icon: "📊",
      year: "2023",
      title: "Data Analyst",
      company: "Secure Info Technologies - Remote",
      date: "May 2023 – Jun 2024",
      desc: "Worked with large business datasets to uncover trends, solve analytical problems, and support data-driven decision-making. Turned raw data into meaningful insights through data preparation, analysis, and visualization.",
    },
    {
      side: "right",
      icon: "💻",
      year: "2022",
      title: "Full Stack Development Intern",
      company: "Postulate Technologies — Bengaluru, Karnataka",
      date: "Apr 2022 – Aug 2022",
      desc: "Developed and launched a business website for a startup client, transforming design requirements into a responsive and user-friendly web experience. Worked across development, deployment, and hosting, gaining hands-on experience in delivering production-ready software.",
    },
    {
      side: "left",
      icon: "🚀",
      year: "2021",
      title: "Codex Club student coordinator",
      company: "GITAM University",
      date: "Mar 2021 – Aug 2022",
      desc: "Organized university hackathons and technical events while designing coding challenges and writing test cases to assess solution correctness and performance. Developed strong foundations in problem-solving, software quality, and technical leadership while fostering a collaborative developer community.",
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