import './App.css';

import { TypeAnimation } from 'react-type-animation';

function App() {
    return (
        <div>
            {/* NAVBAR */}

            <nav className="navbar">
                <h2 className="logo">MyPortfolio</h2>

                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#skills">Skills</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* HERO */}

            <header id="home" className="hero">
                <div className="hero-content">
                    <h1>Hi, I'm Maheshika Wijesinghe</h1>

                    <TypeAnimation
                        sequence={['Frontend Developer', 2000, 'React Developer', 2000, 'Web Designer', 2000]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="typing"
                    />

                    <p>B.Sc Honours in Computing and Information Systems</p>

                    <div className="hero-buttons">
                        <a href="/cv.pdf" download>
                            <button>Download CV</button>
                        </a>

                        <button className="contact-btn">Contact Me</button>
                    </div>
                </div>
            </header>

            {/* ABOUT */}

            <section id="about" className="section">
                <h2>About Me</h2>

                <p>
                    I am passionate about creating modern web applications and continuously improving my development
                    skills.
                </p>
            </section>

            {/* SKILLS */}

            <section id="skills" className="section">
                <h2>Skills</h2>

                <div className="skills-container">
                    <div className="skill-card">HTML</div>

                    <div className="skill-card">CSS</div>

                    <div className="skill-card">JavaScript</div>

                    <div className="skill-card">React</div>

                    <div className="skill-card">GitHub</div>

                    <div className="skill-card">Responsive Design</div>
                </div>
            </section>

            {/* PROJECTS */}

            <section id="projects" className="section">
                <h2>Projects</h2>

                <div className="project-container">
                    <div className="project-card">
                        <h3>Portfolio Website</h3>

                        <p>Responsive portfolio website using React.</p>
                    </div>

                    <div className="project-card">
                        <h3>Student Management System</h3>

                        <p>Full CRUD application with modern UI.</p>
                    </div>

                    <div className="project-card">
                        <h3>AI Research Assistant</h3>

                        <p>AI powered research helping platform.</p>
                    </div>

                    <div className="project-card">
                        <h3>Other</h3>

                        <p>Having more projects.</p>
                    </div>
                </div>
            </section>

            {/* CONTACT */}

            <section id="contact" className="section">
                <h2>Contact</h2>

                <p>Email: maheshikajeewanthi99@gmail.com</p>
            </section>

            {/* FOOTER */}

            <footer className="footer">
                <p>© 2026 Maheshika Wijesinghe | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default App;
