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

          <h2>FRONT-END DEVELOPER | SOFTWARE Engineer</h2>

          <p className="description">
            Computer Science graduate from the University of Colorado Boulder with experience building responsive web applications using React, JavaScript, HTML, CSS, Python, and Flask. Developed projects including a skill-to-job matching platform, a Trie-based search engine, and interactive applications. Brings strong problem-solving, communication, and analytical skills from a professional background in education. Focused on front-end development and building intuitive, user-centered digital experiences.
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
            My path into technology started in education, where I learned how much I enjoy solving problems, breaking down complex ideas, and creating experiences that work for different people. That same mindset led me to computer science and, ultimately, front-end development.   
          </p>
          <p>
            I’m drawn to the space where technology and design meet. I love taking an idea and turning it into something people can actually see, use, and enjoy. With a background in education and a degree in Computer Science from the University of Colorado Boulder, I bring both technical problem-solving and a strong understanding of the people I’m building for.
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
              <p>I turn complex ideas into clear, accessible experiences for users and teammates.</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/collaboration.png" alt="Collaboration" />
            </div>
            <div>
              <h3>Collaborative</h3>
              <p>I enjoy collaborating with others, sharing ideas, and building products through Agile workflows.</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/data.png" alt="Data" />
            </div>
            <div>
              <h3>Data Informed</h3>
              <p>I approach challenges analytically, test solutions, and use feedback to improve what I build.</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <img src="/icons/heart.png" alt="Empathy" />
            </div>
            <div>
              <h3>Empathetic Designer</h3>
              <p>I design with the user in mind, creating experiences that are intuitive, accessible, and engaging.</p>
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
            <h3>Fitness Analytics Dashboard</h3>
            <p>
              A user-friendly web application that transforms fitness data and machine learning results into interactive, easy-to-understand insights. The project presents trends, model results, and visualizations through a responsive front-end experience.
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
              <p>Career exploration and skill-matching platform that helps users connect their interests and skills with potential career paths. Built responsive user interfaces for career selection, questionnaires, and personalized results while collaborating in an Agile development environment.</p>

              <p className="tech-label">Tech Stack</p>
              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
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
              <p>A Trie-based search application that enables fast prefix matching, category filtering, and search suggestions for makeup products using custom data structures.</p>

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
              <p>A command-line application that demonstrates RSA key generation, encryption, and decryption using modular arithmetic and C++.</p>

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
              <p> React · JavaScript · HTML · CSS · Responsive Design</p>
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
              <p>Git · GitHub · VS Code · Figma · Jupyter Notebook</p>
            </div>
          </div>

          <div className="skill-row">
            <img src="/icons/concepts.png" alt="Concepts icon" />
            <div>
              <h3>Concepts</h3>
              <p>Data Structures & Algorithms · OOP · Agile · UI/UX · Problem Solving</p>
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
              <p>Analyzed student performance data to identify patterns, address learning gaps, and make data-informed decisions for more than 70 students. Managed progress and assessment data across multiple systems while communicating complex concepts clearly and collaborating with interdisciplinary teams.</p>
            </div>
          </div>

          <div className="experience-row">
            <img src="/icons/internship.png" alt="Internship experience" />
            <div>
              <h3>Internship</h3>
              <h4>Dangers of the Mind</h4>
              <span>Jun 2022 - Oct 2022</span>
              <p>Supported leadership workshops, educational programming, and community outreach initiatives focused on student development. Collaborated with team members to coordinate programs, communicate with participants, and support organizational goals.</p>
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
            I’m always open to connecting about front-end development, software engineering opportunities, and projects focused on creating thoughtful user experiences. </p>

          <div className="contact-links">
            <div className="contact-item">
              <img src="/icons/email.png" alt="Email" />
              <a href="mailto:sarah.suliman.dev@gmail.com">sarah.suliman.dev@gmail.com</a>
            </div>

            <div className="contact-item">
              <img src="/icons/phone.png" alt="Phone" />
              <span>(720) 772-1670</span>
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
