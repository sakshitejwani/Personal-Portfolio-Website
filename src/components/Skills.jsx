// =========================================
// Skills.jsx — Expertise / Skills section
//
// Renders a grid of skill category cards.
// Each card has an icon, a category name,
// and a list of technology tags.
//
// TO ADD/REMOVE SKILLS:
// Edit the `skillCategories` array below.
// =========================================

import './Skills.css';

// ---- Data — your skills organized by category ----
// Each object has: icon, category name, and list of skills
const skillCategories = [
  {
    icon: '💻',
    category: 'Languages',
    skills: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'C/C++', 'HTML/CSS'],
  },
  {
    icon: '⚙️',
    category: 'Backend & Frameworks',
    skills: ['Spring Boot', 'Django', 'RESTful APIs', 'Microservices', 'FastAPI'],
  },
  {
    icon: '🗄️',
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'NoSQL', 'SQL Server'],
  },
  {
    icon: '🐳',
    category: 'DevOps & Tools',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'GitHub', 'Postman', 'JUnit'],
  },
  {
    icon: '☁️',
    category: 'Cloud & Platforms',
    skills: ['AWS', 'Microsoft Azure', 'Azure PaaS'],
  },
  {
    icon: '🤖',
    category: 'AI / ML & Libraries',
    skills: ['Pandas', 'NumPy', 'OpenCV', 'MediaPipe', 'LLMs'],
  },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">

        {/* Section heading */}
        <h2 className="section-title">
          My <span>Expertise</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        {/* Grid of skill cards */}
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skill-card">

              {/* Icon + category name */}
              <div className="skill-card-header">
                <div className="skill-icon">{cat.icon}</div>
                <h3 className="skill-category">{cat.category}</h3>
              </div>

              {/* Tags */}
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
