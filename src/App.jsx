import { useEffect, useState } from "react"
import "./index.css"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]")

    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      if (
        window.scrollY >= sectionTop - 300 &&
        window.scrollY < sectionTop + sectionHeight - 300
      ) {
        current = section.id
      }
    })

    setActiveSection(current)
  }

  window.addEventListener("scroll", handleScroll)
  handleScroll()

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])

  return (
    <>
      {/* ===== NAVBAR ===== */}

<nav>
  <h1>Sarah Suliman</h1>

  <ul>
    <li className={activeSection === "home" ? "active" : ""}>
      <a href="#home">Home</a>
    </li>

    <li className={activeSection === "about" ? "active" : ""}>
      <a href="#about">About</a>
    </li>

    <li className={activeSection === "projects" ? "active" : ""}>
      <a href="#projects">Projects</a>
    </li>

    <li className={activeSection === "skills" ? "active" : ""}>
      <a href="#skills">Skills</a>
    </li>

    <li className={activeSection === "experience" ? "active" : ""}>
      <a href="#experience">Experience</a>
    </li>

    <li className={activeSection === "contact" ? "active" : ""}>
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

          <div className="about-decoration">
            <span className="line"></span>
            <span className="star">✦</span>
          </div>

          <p>
            My background in education taught me how to communicate clearly,
            analyze information, and design experiences around people. Now, I
            apply those same skills to create intuitive interfaces and impactful
            software.
          </p>

          <a href="#projects">Learn more about me →</a>
        </div>

        <div className="about-divider"></div>

        <div className="about-right">

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/chat.png" alt="Communication" />
            </div>

            <div>
              <h3>Clear Communicator</h3>
              <p>
                I break down complex ideas and explain them in simple,
                meaningful ways.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/collaboration.png" alt="Collaboration" />
            </div>

            <div>
              <h3>Collaborative</h3>
              <p>
                I thrive in team environments and enjoy building together
                using Agile workflows.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/data.png" alt="Data" />
            </div>

            <div>
              <h3>Data Informed</h3>
              <p>
                I use data and feedback to make thoughtful,
                user-centered decisions.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/heart.png" alt="Empathy" />
            </div>

            <div>
              <h3>Empathetic Designer</h3>
              <p>
                I design with the user in mind to create experiences that
                are accessible and engaging.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="projects" id="projects">
        <div className="projects-header">
          <p className="section-label">PROJECTS</p>
          <h2>Things I’ve Built</h2>
        </div>
      {/* ===== CURRENTLY WORKING ON ===== */}
            <section className="currently-working">
              <div className="working-icon">
                <img src="/icons/rocket.png" alt="Currently working icon" />
              </div>

              <div className="working-text">
                <p className="section-label">CURRENTLY WORKING ON</p>
                <p>
                  Building a data mining project that analyzes fitness and workout trends using real-world datasets. 
                  Applying data visualization, pattern discovery, and machine learning techniques to uncover meaningful insights.
                </p>
              </div>

              <div className="working-illustration">
                <img src="/icons/data-project.png" alt="Data project illustration" />
              </div>
            </section>


        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/project png/homepage.png" alt="Talent Trail homepage" />
            </div>

            <div className="project-content">
              <h3>Talent Trail</h3>
              <p>
                A skill-to-job matching platform that helps users explore careers
                based on their skills and interests.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Python</span>
                <span>Flask</span>
                <span>HTML/CSS</span>
              </div>

              <div className="project-links">
                <a href="https://youtu.be/zIh3MUsDnYw" target="_blank">
                  Video Demo ↗
                </a>
                <a href="https://github.com/sssuliman/Suliman_Talent_Trail" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/project png/Beauty.png" alt="Beauty Search terminal demo" />
            </div>

            <div className="project-content">
              <h3>Beauty Search</h3>
              <p>
                A Trie-based search engine that efficiently matches makeup products
                by category, skin type, and search prefix.
              </p>

              <div className="project-tags">
                <span>C++</span>
                <span>Trie</span>
                <span>Data Structures</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/sssuliman/Beauty_Search" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/project png/rsa-encryption-demo.png" alt="RSA encryption notebook demo" />
            </div>

            <div className="project-content">
              <h3>RSA Encryption</h3>
              <p>
                A Python notebook implementing RSA encryption, key generation,
                message encryption, and decryption.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>Jupyter</span>
                <span>Cryptography</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/sssuliman/RSA_Encryption_Tool" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="skills" id="skills">
        <div className="skills-header">
          <p className="section-label">SKILLS</p>
          <h2>Tools & Technologies</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <img src="/icons/frontend.png" alt="Frontend" />
            <h3>Frontend</h3>

            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="skill-card">
            <img src="/icons/backend.png" alt="Backend" />
            <h3>Backend</h3>

            <div className="skill-tags">
              <span>Python</span>
              <span>Flask</span>
              <span>SQL</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <img src="/icons/tools.png" alt="Tools" />
            <h3>Tools</h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Jupyter</span>
              <span>Figma</span>
            </div>
          </div>

          <div className="skill-card">
            <img src="/icons/concepts.png" alt="Concepts" />
            <h3>Concepts</h3>

            <div className="skill-tags">
              <span>Data Structures</span>
              <span>Algorithms</span>
              <span>OOP</span>
              <span>UI/UX</span>
              <span>Problem Solving</span>
            </div>
          </div>

        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
        <section className="experience" id="experience">
          <div className="experience-header">
            <p className="section-label">EXPERIENCE</p>
            <h2>Experience That Shapes My Work</h2>
          </div>

          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-icon">
                <img src="/icons/teaching.png" alt="Teaching Experience" />
              </div>

              <div className="experience-content">
                <div className="experience-title-row">
                  <h3>Middle School Math Teacher</h3>
                  <span>Mar 2023 - Jun 2026</span>
                </div>

                <p className="experience-place">
                  Omar D. Blair Charter School, Denver, CO
                </p>

                <ul>
                  <li>Taught 7th grade math, including algebraic reasoning, proportional relationships, and rational number operations.</li>
                  <li>Analyzed student performance data to identify learning gaps and adjust instruction.</li>
                  <li>Tracked academic progress across multiple assessment cycles.</li>
                  <li>Communicated complex concepts clearly and collaborated with interdisciplinary teams.</li>
                </ul>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-icon">
                <img src="/icons/internship.png" alt="Internship Experience" />
              </div>

              <div className="experience-content">
                <div className="experience-title-row">
                  <h3>Internship</h3>
                  <span>Jun 2022 - Oct 2022</span>
                </div>

                <p className="experience-place">
                  Dangers of the Mind, Washington DC
                </p>

                <ul>
                  <li>Assisted in organizing youth leadership workshops and educational programming.</li>
                  <li>Supported community outreach initiatives focused on student development.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

       {/* ===== CONTACT SECTION ===== */}
        <section className="contact" id="contact">
          <div className="contact-content">
            <p className="section-label">LET'S CONNECT</p>

            <h2>I’d love to hear from you!</h2>

            <p className="contact-subtitle">
              Open to front-end, UI/UX, and entry-level software engineering opportunities.
            </p>

            <div className="contact-links">
              <a href="mailto:sulimansarah00@gmail.com" className="contact-item">
                <img src="/icons/email.png" alt="Email icon" />
                <span>sulimansarah00@gmail.com</span>
              </a>

              <a href="tel:7207513599" className="contact-item">
                <img src="/icons/phone.png" alt="Phone icon" />
                <span>(720) 751-3599</span>
              </a>

              <a
                href="https://linkedin.com/in/sarahmsuliman"
                target="_blank"
                className="contact-item"
              >
                <img src="/icons/linkedin.png" alt="LinkedIn icon" />
                <span>linkedin.com/in/sarahmsuliman</span>
              </a>

              <a
                href="https://github.com/sssuliman"
                target="_blank"
                className="contact-item"
              >
                <img src="/icons/github.png" alt="GitHub icon" />
                <span>github.com/sssuliman</span>
              </a>
            </div>
          </div>
        </section>

    </>
  )
}

export default App