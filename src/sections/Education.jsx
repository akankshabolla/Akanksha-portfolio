function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-stars"></div>

      <h2 className="education-title">
        🎓 Education & Certifications
      </h2>

      <div className="education-grid">

        <div className="edu-card">
          <h3>Master of Science in Computer Science</h3>
          <h4>Texas A&M University–Corpus Christi</h4>

          <p>Graduated: May 2026</p>

          <ul>
            <li>Teaching Assistant</li>
            <li>AI / Machine Learning Focus</li>
            <li>Research + Full Stack Projects</li>
          </ul>
        </div>

        <div className="edu-card">
          <h3>Bachelor of Technology</h3>
          <h4>Computer Science</h4>

          <p>Your University Name</p>

          <ul>
            <li>Computer Science Foundations</li>
            <li>Software Development</li>
          </ul>
        </div>

        <div className="edu-card cert-card">
          <h3>Certifications</h3>

          <ul>
            <li>AI / ML Certifications</li>
            <li>Generative AI</li>
            <li>Hugging Face</li>
            <li>Machine Learning</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Education;