import './App.css';

function App() {
    return (
        <div className="container">
            <header className="hero">
                <h1>Hi, I'm Maheshika Wijesinghe</h1>

                <p>B.Sc Honours in Computing and Information Systems</p>

                <button>Download CV</button>
            </header>

            <section className="about">
                <h2>About Me</h2>

                <p>I am passionate about web development and modern technologies.</p>
            </section>

            <section className="skills">
                <h2>Skills</h2>

                <div className="skill-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                </div>
            </section>

            <section className="projects">
                <h2>Projects</h2>

                <div className="project-card">
                    <h3>Portfolio Website</h3>

                    <p>Personal portfolio website built using React.</p>
                </div>
            </section>

            <section className="contact">
                <h2>Contact</h2>

                <p>Email: example@gmail.com</p>
            </section>
        </div>
    );
}

export default App;
