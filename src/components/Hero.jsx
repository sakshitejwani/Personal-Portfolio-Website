// =========================================
// Hero.jsx — Landing / Hero section
//
// The first thing visitors see:
// your name, role, description, CTA buttons,
// and 4 stat cards below.
// =========================================

import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">

      {/* Dark banner with background image */}
      <div className="hero-banner">
        <div className="container">

          {/* Your full name */}
          <h1 className="hero-name">Sakshi Tejwani</h1>

          {/* Your current role/title */}
          <p className="hero-title">
            MS Computer Science Student & Software Developer at California State University, Long Beach
          </p>

          {/* Short description — what you specialize in */}
          <p className="hero-desc">
            Backend engineer specializing in Java, Spring Boot, and microservices.
            Building scalable systems and exploring AI/ML. Open to full-time SWE opportunities.
          </p>

          {/* Call-to-action buttons */}
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">Learn More About Me</a>
            <a href="#projects" className="btn btn-outline">View My Work</a>
          </div>

        </div>
      </div>

      {/* Stats row — 4 cards below the banner */}
      <div className="hero-stats">
        <div className="stat-card">
          <span className="stat-value">MS</span>
          <p className="stat-label">Computer Science</p>
          <p className="stat-sub">CSULB 2025–2027</p>
        </div>
        <div className="stat-card">
          <span className="stat-value">2+</span>
          <p className="stat-label">Years Experience</p>
          <p className="stat-sub">HSBC & CSULB</p>
        </div>
        <div className="stat-card">
          <span className="stat-value">5+</span>
          <p className="stat-label">Projects Built</p>
          <p className="stat-sub">Full-stack & AI/ML</p>
        </div>
        <div className="stat-card">
          <span className="stat-value">Open</span>
          <p className="stat-label">to Opportunities</p>
          <p className="stat-sub">SWE & Backend</p>
        </div>
      </div>

    </section>
  );
}

export default Hero;
