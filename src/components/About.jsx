import './About.css';

function About() {

  // Your role tags shown as pills below the heading
  const roles = [
    'Software Developer',
    'Backend Engineer',
    'Java & Spring Boot',
    'AI/ML Enthusiast',
  ];

  return (
    <section className="section about" id="about">
      <div className="container">

        {/* Section heading */}
        <h2 className="section-title">
          Hi, I'm <span>Sakshi Tejwani</span>
        </h2>
        <p className="section-subtitle">
          MS Computer Science student at CSULB, specializing in backend development
        </p>

        {/* Role pills row */}
        <div className="about-pills">
          {roles.map((role) => (
            <span key={role} className="pill">{role}</span>
          ))}
        </div>

        <div className="about-grid">

          {/* LEFT — Photo */}
          <div className="about-photo-wrap">

            <img
              src="/assets/passport_size_pic.jpg"
              alt="Sakshi Tejwani"
            />
          </div>

          {/* RIGHT — Bio + Education */}
          <div>
            <h3 className="about-heading">About <span>Me</span></h3>

            <p className="about-bio">
              I am a detail-oriented Computer Science engineer with 2+ years of experience
              building scalable, high-performance backend systems at HSBC Bank. I specialize
              in end-to-end development — from designing features and implementing RESTful APIs
              to optimizing production services for reliability and performance.
            </p>
            <p className="about-bio">
              My core stack includes Java, Spring Boot, SQL, microservices, Docker, and Kubernetes.
              Currently pursuing my MS at CSULB, I'm deepening my expertise in AI/ML and building
              a phishing detection system using Python, FastAPI, and Azure.
            </p>

            {/* Education cards */}
            <h4 className="education-title">Education</h4>
            <div className="edu-cards">

              <div className="edu-card">
                <div className="edu-card-header">
                  <span className="edu-degree">Master of Science (MS)</span>
                  <span className="edu-date">Aug 2025 – May 2027</span>
                </div>
                <p className="edu-school">California State University, Long Beach</p>
                <p className="edu-sub">Computer Science · Long Beach, CA · GPA: 3.5</p>
              </div>

              <div className="edu-card">
                <div className="edu-card-header">
                  <span className="edu-degree">Bachelor of Technology (B.Tech)</span>
                  <span className="edu-date">Aug 2019 – May 2023</span>
                </div>
                <p className="edu-school">MediCaps University</p>
                <p className="edu-sub">Computer Science and Engineering · India · GPA: 3.88</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
