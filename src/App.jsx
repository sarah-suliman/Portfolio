import { useEffect, useState } from "react"
import "./index.css"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10

if (isBottom) {
  setActiveSection("contact")
  return
}

      let current = "home"

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          current = section.id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-star">✦</span>
          Sarah Suliman
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          </li>

          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>

          <li className={activeSection === "projects" ? "active" : ""}>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>

          <li className={activeSection === "skills" ? "active" : ""}>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          </li>

          <li className={activeSection === "experience" ? "active" : ""}>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          </li>

          <li className={activeSection === "contact" ? "active" : ""}>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>

          <li>
            <a
              href="/Sarah_Suliman_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              onClick={() => setMenuOpen(false)}
            >
              Resume ↓
            </a>
          </li>
        </ul>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="intro">Hi, I’m</p>

          <h1>
            Sarah
            <br />
            Suliman
          </h1>

          <h2>Front-End Developer | UI/UX Designer</h2>

          <p className="description">
            Computer Science student at the University of Colorado Boulder with experience developing web applications using React, Python, Flask, JavaScript, HTML, and CSS. Built projects including a skill-to-job matching platform, a Trie-based search engine, and data-driven software applications. Combines strong problem-solving, communication, and analytical skills with a passion for creating intuitive user experiences. Seeking front-end, software development, and entry-level engineering opportunities
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects →
            </a>

            <a
              href="/Sarah_Suliman_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              ↓ Download Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/profile.jpeg" alt="Sarah Suliman" />
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
            Computer Science student at the University of Colorado Boulder with experience in Python, C++, web development, and data structures. I enjoy creating software solutions that solve real-world problems, from search engines and data-driven applications to collaborative web platforms. My interests lie in front-end development and UI/UX design, where I can combine technical problem-solving with thoughtful user experiences. </p>

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
              <p>I break down complex ideas and explain them in simple, meaningful ways.</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/collaboration.png" alt="Collaboration" />
            </div>
            <div>
              <h3>Collaborative</h3>
              <p>I thrive in team environments and enjoy building together using Agile workflows.</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/data.png" alt="Data" />
            </div>
            <div>
              <h3>Data Informed</h3>
              <p>I use data and feedback to make thoughtful, user-centered decisions.</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/heart.png" alt="Empathy" />
            </div>
            <div>
              <h3>Empathetic Designer</h3>
              <p>I design with the user in mind to create experiences that are accessible and engaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="projects" id="projects">
        <div className="currently-working">
          <div className="working-icon">
            <img src="/icons/rocket.png" alt="Currently working icon" />
          </div>

          <div className="working-text">
            <p className="section-label">CURRENTLY WORKING ON</p>
            <p>
              Building a data mining project that analyzes fitness and workout trends using real-world datasets. Applying data visualization, pattern discovery, and machine learning techniques to uncover meaningful insights.
            </p>
          </div>

          <div className="working-illustration">
            <img src="/icons/data-project.png" alt="Data project illustration" />
          </div>
        </div>

        <div className="projects-header">
          <p className="section-label">PROJECTS</p>
          <h2>Things I’ve Built</h2>
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-image">
              <img src="/project png/homepage.png" alt="Talent Trail homepage" />
            </div>

            <div className="project-content">
              <h3>Talent Trail</h3>
              <p>A skill-to-job matching platform that helps users explore careers based on their skills and interests.</p>

              <p className="tech-label">Tech Stack</p>
              <div className="project-tags">
                <span>React</span>
                <span>Python</span>
                <span>Flask</span>
                <span>HTML/CSS</span>
              </div>

              <div className="project-links">
                <a href="https://youtu.be/zIh3MUsDnYw" target="_blank" rel="noopener noreferrer">Video Demo ↗</a>
                <a href="https://github.com/sarah-suliman/Suliman_Talent_Trail" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img src="/project png/Beauty.png" alt="Beauty Search terminal demo" />
            </div>

            <div className="project-content">
              <h3>Beauty Search</h3>
              <p>A Trie-based search engine that efficiently matches makeup products by category, skin type, and search prefix.</p>

              <p className="tech-label">Tech Stack</p>
              <div className="project-tags">
                <span>C++</span>
                <span>Trie</span>
                <span>Data Structures</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/sarah-suliman/Beauty_Search" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image">
              <img src="/project png/rsa-encryption-demo.png" alt="RSA encryption notebook demo" />
            </div>

            <div className="project-content">
              <h3>RSA Encryption</h3>
              <p>A Python notebook implementing RSA encryption, key generation, message encryption, and decryption.</p>

              <p className="tech-label">Tech Stack</p>
              <div className="project-tags">
                <span>Python</span>
                <span>Jupyter</span>
                <span>Cryptography</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/sarah-suliman/RSA_Encryption_Tool" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/sarah-suliman"
            target="_blank"
            rel="noopener noreferrer"
            className="github-projects-btn"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="skills" id="skills">
        <div className="skills-left">
          <p className="section-label">SKILLS</p>

          <h2>
            Skills That
            <br />
            Support My Work
          </h2>

          <div className="about-decoration">
            <span className="line"></span>
            <span className="star">✦</span>
          </div>

          <p>
            I combine front-end development, UI/UX design, and software engineering fundamentals to build clean, user-centered digital experiences.
          </p>
        </div>

        <div className="skills-divider"></div>

        <div className="skills-right">
          <div className="skill-row">
            <img src="/icons/frontend.png" alt="Frontend icon" />
            <div>
              <h3>Frontend</h3>
              <p>HTML · CSS · JavaScript · React · Responsive Design</p>
            </div>
          </div>

          <div className="skill-row">
            <img src="/icons/backend.png" alt="Backend icon" />
            <div>
              <h3>Backend</h3>
              <p>Python · Flask · SQL · REST APIs · Scala</p>
            </div>
          </div>

          <div className="skill-row">
            <img src="/icons/tools.png" alt="Tools icon" />
            <div>
              <h3>Tools</h3>
              <p>Git · GitHub · VS Code · Jupyter Notebook · Figma</p>
            </div>
          </div>

          <div className="skill-row">
            <img src="/icons/concepts.png" alt="Concepts icon" />
            <div>
              <h3>Concepts</h3>
              <p>Data Structures · Algorithms · OOP · UI/UX · Problem Solving</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section className="experience" id="experience">
        <div className="experience-left">
          <p className="section-label">EXPERIENCE</p>

          <h2>
            Experience That
            <br />
            Shapes My Work
          </h2>

          <div className="experience-accent">
            <span className="accent-line"></span>
            <span className="accent-star">✦</span>
          </div>

          <p>
            My background in education and leadership strengthened my communication, collaboration, and problem-solving skills, which now support my transition into technology.
          </p>
        </div>

        <div className="experience-divider"></div>

        <div className="experience-right">
          <div className="experience-row">
            <img src="/icons/teaching.png" alt="Teaching experience" />
            <div>
              <h3>Middle School Math Teacher</h3>
              <h4>Omar D. Blair Charter School</h4>
              <span>Mar 2023 - Jun 2026</span>
              <p>Analyzed performance data to identify trends and drive instructional decisions, communicated complex concepts to diverse audiences, collaborated with cross-functional teams, and managed multiple priorities in a fast-paced environment.</p>
            </div>
          </div>

          <div className="experience-row">
            <img src="/icons/internship.png" alt="Internship experience" />
            <div>
              <h3>Internship</h3>
              <h4>Dangers of the Mind</h4>
              <span>Jun 2022 - Oct 2022</span>
              <p>Coordinated educational programs, facilitated group activities, supported community engagement initiatives, and strengthened leadership, communication, and organizational skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact" id="contact">
        <div className="contact-content">
          <p className="contact-label">LET'S CONNECT</p>

          <h2>I’d love to hear from you!</h2>

          <p className="contact-subtitle">
            Seeking opportunities in front-end development, software engineering, and user-centered product development.          </p>

          <div className="contact-links">
            <div className="contact-item">
              <img src="/icons/email.png" alt="Email" />
              <a href="mailto:sarah.suliman.dev@gmail.com">sarah.suliman.dev@gmail.com</a>
            </div>

            <div className="contact-item">
              <img src="/icons/phone.png" alt="Phone" />
              <span>(720) 751-3599</span>
            </div>

            <div className="contact-item">
              <img src="/icons/linkedin.png" alt="LinkedIn" />
              <a href="https://linkedin.com/in/sarahmsuliman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <div className="contact-item">
              <img src="/icons/github.png" alt="GitHub" />
              <a href="https://github.com/sarah-suliman" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
