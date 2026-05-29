import "./index.css"

function App() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav>
        <h1>Sarah Suliman</h1>

        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="resume-btn">Resume</button>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="intro">Hi, I’m</p>

          <h2>
            Sarah
            <br />
            Suliman
          </h2>

          <h3>Front-End Developer & UI/UX Designer</h3>

          <p className="description">
            Computer Science student transitioning from education into
            tech. I build clean, user-centered digital experiences that
            solve real problems.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              View Projects →
            </button>

            <button className="secondary-btn">
              ↓ Download Resume
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/profile.jpeg"
            alt="Sarah Suliman"
          />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about" id="about">
        <div className="about-left">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Bridging education
            <br />
            and technology.
          </h2>

          <p>
            My background in education taught me how to communicate
            clearly, analyze information, and design experiences around
            people. Now, I apply those same skills to create intuitive
            interfaces and impactful software.
          </p>

          <a href="#">Learn more about me →</a>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>Clear Communicator</h3>

            <p>
              I break down complex ideas and explain them in simple,
              meaningful ways.
            </p>
          </div>

          <div className="about-card">
            <h3>Collaborative</h3>

            <p>
              I thrive in team environments and enjoy building together
              using Agile workflows.
            </p>
          </div>

          <div className="about-card">
            <h3>Data Informed</h3>

            <p>
              I use data and feedback to make thoughtful,
              user-centered decisions.
            </p>
          </div>

          <div className="about-card">
            <h3>Empathetic Designer</h3>

            <p>
              I design with the user in mind to create experiences that
              are accessible and engaging.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="projects" id="projects">
        <div className="projects-header">
          <p className="section-label">PROJECTS</p>

          <h2>Things I’ve Built</h2>
        </div>

        <div className="projects-grid">

          {/* ===== PROJECT 1 ===== */}
          <div className="project-card">
            <img
              src="https://placehold.co/600x350"
              alt="Talent Trail"
            />

            <div className="project-content">
              <h3>Talent Trail</h3>

              <p>
                A skill-to-job matching platform that helps users
                explore careers based on their skills and interests.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>Python</span>
                <span>Flask</span>
                <span>HTML/CSS</span>
              </div>

              <div className="project-buttons">
                <button className="live-btn">
                  Live Demo ↗
                </button>

                <button className="github-btn">
                  GitHub
                </button>
              </div>
            </div>
          </div>

          {/* ===== PROJECT 2 ===== */}
          <div className="project-card">
            <img
              src="https://placehold.co/600x350"
              alt="Smart Makeup Search Engine"
            />

            <div className="project-content">
              <h3>Smart Makeup Search Engine</h3>

              <p>
                A Trie-based search engine that efficiently matches
                makeup products by name and category.
              </p>

              <div className="tech-stack">
                <span>Python</span>
                <span>Trie</span>
                <span>Data Structures</span>
              </div>

              <div className="project-buttons">
                <button className="github-btn">
                  GitHub
                </button>
              </div>
            </div>
          </div>

          {/* ===== PROJECT 3 ===== */}
          <div className="project-card">
            <img
              src="https://placehold.co/600x350"
              alt="RSA Encryption"
            />

            <div className="project-content">
              <h3>RSA Encryption</h3>

              <p>
                Implemented RSA encryption and decryption using modular
                arithmetic in a Jupyter Notebook.
              </p>

              <div className="tech-stack">
                <span>Python</span>
                <span>Jupyter</span>
                <span>Math</span>
              </div>

              <div className="project-buttons">
                <button className="github-btn">
                  GitHub
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default App