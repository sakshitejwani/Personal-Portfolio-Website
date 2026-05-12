import './Experience.css';

// ---- Data — your work experiences ----
const experiences = [
  {
    title: 'Software Developer Student Assistant',
    company: 'California State University, Long Beach',
    location: 'Long Beach, CA',
    date: 'Feb 2026 – Present',
    type: 'Part-time',
    description:
      'Building a phishing email detection system using Python and FastAPI with a Human-in-the-Loop (HITL) workflow, deployed on Microsoft Azure.',
    achievements: [
      'AI-Powered Phishing Email Detection & Review System',
      'Built an end-to-end phishing email detection system using Python, FastAPI, LLM APIs, and Azure to classify suspicious emails.',
      'Designed REST APIs for email submission, classification results, reviewer feedback, and detection history.',
      'Implemented a Human-in-the-Loop workflow to route low-confidence predictions to manual review and improve reliability.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'HSBC Bank',
    location: 'India',
    date: 'Aug 2023 – Jul 2025',
    type: 'Full-time',
    description:
      'Developed and maintained Java/Spring Boot microservices with SQL-based data handling. Built secure banking REST APIs and migrated applications to AWS.',
    achievements: [
       'Designed, developed, tested, and maintained Java/Spring Boot microservices for secure banking applications using SQL-based data handling.',
        'Resolved complex technical issues related to API performance, data ingestion workflows, regression defects, and deployment reliability.',
        'Migrated applications to AWS and containerized services using Docker while supporting CI/CD pipelines for automated deployment.',
        'Collaborated with QA and engineering teams in Agile/Scrum ceremonies to deliver maintainable, reliable, and reusable software.'
    ],
  },
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">

        {/* Section heading */}
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey and the skills I've developed along the way.
        </p>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.title} className="timeline-item">

              {/* Blue dot on the line */}
              <div className="timeline-dot"></div>

              {/* Job card */}
              <div className="exp-card">

                {/* Title + Date */}
                <div className="exp-card-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <span className="exp-date">{exp.date}</span>
                </div>

                {/* Company + Job type */}
                <div className="exp-company-row">
                  <span className="exp-company">
                    {exp.company} · {exp.location}
                  </span>
                  <span className="exp-type">{exp.type}</span>
                </div>

                {/* Short description */}
                <p className="exp-desc">{exp.description}</p>

                {/* Bullet points */}
                <p className="exp-achievements-title">Key Achievements:</p>
                <ul className="exp-achievements">
                  {exp.achievements.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
