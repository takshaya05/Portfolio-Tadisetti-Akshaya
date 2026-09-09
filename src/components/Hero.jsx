import profile from "../assets/Photo.jpeg";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaUser,
  FaGraduationCap,
  FaLightbulb,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-card">
          <div className="hero-content">
            <h1>
              <FaUser />
              <span>TADISETTI AKSHAYA</span>
            </h1>

            <h2>
              <FaGraduationCap />
              <span>Computer Science and Engineering Undergraduate</span>
            </h2>

            <p>
              <FaLightbulb />
              <span>
                Computer Science and Engineering undergraduate with a strong
                interest in Artificial Intelligence, Machine Learning, and Full
                Stack Development, with a passion for building innovative and
                impactful technology solutions.
              </span>
            </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/tadisettiakshaya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/takshaya05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:tadisettiakshaya@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Tadisetti Akshaya" />
        </div>
      </div>
    </section>
  );
};

export default Hero;