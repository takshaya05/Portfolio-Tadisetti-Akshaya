import profile from "../assets/Photo.jpeg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        <div className="hero-content">
          <h1>TADISETTI AKSHAYA</h1>

          <h2>Computer Science and Engineering Undergraduate</h2>

          <p>
            Computer Science and Engineering undergraduate with a strong interest
            in Artificial Intelligence, Machine Learning, and Full Stack Development,
            with a passion for building innovative and impactful technology solutions.
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

        <div className="hero-image">
          <img src={profile} alt="Tadisetti Akshaya" />
        </div>

      </div>

    </section>
  );
};

export default Hero;