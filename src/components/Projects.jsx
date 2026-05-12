// =========================================
// Projects.jsx — Projects section
//
// Shows a featured project at the top,
// then a grid of regular project cards.
//
// TO ADD A PROJECT: Add an object to the
// `projects` array below.
// =========================================

import './Projects.css';

// ---- Data — your projects ----
const projects = [
  {
    emoji: '🖱️',
    title: 'Virtual Mouse Using Fingertips',
    description:
      'A computer vision system that captures hand landmarks and gestures for hands-free cursor control. Mapped finger gestures to mouse actions including click, drag, and zoom.',
    tech: ['Python', 'MediaPipe', 'OpenCV', 'PyAutoGUI'],
    github: 'https://github.com/sakshitejwani',
    demo: null,
  },
  {
    emoji: '👩🏻‍💻',
    title: 'Personal Portfolio Website',
    description:
      'A fully responsive personal portfolio website built from scratch using React. Designed to showcase my skills, experience, and projects to potential employers and collaborators.',
    tech: ['React.js', 'CSS3', 'HTML5', 'Vite', 'EmailJS'],
    github: 'https://github.com/sakshitejwani/Personal-Portfolio',
    demo: null,
  },
  {
    emoji: '☁️',
    title: 'Weather Forecasting Application',
    description:
      'Fetches and displays weather data with a responsive design.Enter a city name to get the current weather.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    github: 'https://github.com/sakshitejwani/WeatherForecast',
    demo: null,
  },
  {
    emoji: '🛒',
    title: 'Supermarket Management System',
    description:
      'Full-stack web app with search autocomplete, category filtering, and a user-friendly interface. Designed core entities and integrated REST APIs.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/sakshitejwani',
    demo: null,
  },
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">

        {/* Section heading */}
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          A collection of projects showcasing my technical skills and problem-solving abilities.
        </p>

        {/* ---- Featured Publication (full width) ---- */}
        <p className="featured-label">⭐ Featured Work</p>
        <div className="featured-project">

          {/* Banner area */}
          <div className="featured-img">
            <span className="project-badge">Publication</span>
            {/* You can replace this with an <img> tag for a real screenshot */}
            <span style={{ fontSize: '4rem' }}>📄</span>
          </div>

          <div className="featured-body">
            <h3 className="featured-title">
              SharPy: Hands-Free Digital Drawing with Air Writing and Gesture Recognition
            </h3>
            <p className="featured-desc">
              Published in Springer (2025). A hands-free digital drawing system using air writing
              and gesture recognition. Built using Python, MediaPipe, and OpenCV to enable
              drawing with finger gestures without touching any device.
            </p>

            {/* Tech tags */}
            <div className="project-tech">
              {['Python', 'MediaPipe', 'OpenCV', 'Gesture Recognition', 'Springer'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            {/* Links */}
            <div className="project-links">
              <a
                href="https://doi.org/10.1063/5.0286191"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                → View Publication
              </a>
            </div>
          </div>

        </div>

        {/* ---- Regular Projects Grid ---- */}
        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.title} className="project-card">

              {/* Colored image area with emoji */}
              <div className="project-card-img">
                <span>{proj.emoji}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-desc">{proj.description}</p>

                {/* Tech tags */}
                <div className="project-tech">
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      → GitHub
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      → Live Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
