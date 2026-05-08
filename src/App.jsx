import './App.css';

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

            {/* HERO SECTION */}

            <header id="home" className="hero">
                <div className="hero-content">
                    <h1>Hi, I'm Maheshika Wijesinghe</h1>

                    <p>B.Sc Honours in Computing and Information Systems</p>

                    <button>Hire Me</button>
                </div>
            </header>

            {/* ABOUT */}

            <section id="about" className="section">
                <h2>About Me</h2>

                <p>
                    I am passionate about web development and modern technologies. I enjoy creating responsive and
                    user-friendly applications.
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
                </div>
            </section>

            {/* PROJECTS */}

            <section id="projects" className="section">
                <h2>Projects</h2>

                <div className="project-container">
                    <div className="project-card">
                        <h3>Portfolio Website</h3>

                        <p>Responsive portfolio website built using React.</p>
                    </div>

                    <div className="project-card">
                        <h3>Student Management System</h3>

                        <p>Modern CRUD application for student data handling.</p>
                    </div>

                    <div className="project-card">
                        <h3>AI Research Assistant</h3>

                        <p>AI-based research helping application.</p>
                    </div>
                </div>
            </section>

            {/* CONTACT */}

            <section id="contact" className="section">
                <h2>Contact</h2>

                <p>Email: maheshikajeewanthi99@gmail.com</p>
            </section>
        </div>
    );
}

export default App;
