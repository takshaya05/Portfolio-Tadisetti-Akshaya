import { UserRound } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="about-container">
        <div className="section-title">
          <h2>
            <UserRound className="about-title-icon" />
            About Me
          </h2>
          <span></span>
        </div>

        <div className="about-card">
          <p className="about-text">
            I'm <strong>Tadisetti Akshaya</strong>, a Computer Science and Engineering undergraduate at
            <strong> B V Raju Institute of Technology</strong>, Narsapur, Telangana, pursuing my
            Bachelor of Technology from 2023 to 2027 with a CGPA of <strong>9.15</strong>.
          </p>

          <p className="about-text">
            I have a strong interest in <strong>Artificial Intelligence, Machine
            Learning, and Full Stack Development</strong>, with skills in
            <strong> Python, Java, AI/ML concepts, and software development</strong>.
            I am passionate about building scalable applications, solving
            real-world problems through innovative technology solutions, and
            continuously enhancing my technical skills through learning,
            collaboration, and practical experience.
          </p>

          <p className="about-text">
            Beyond technical skills, I possess strong <strong>leadership, adaptability,
            responsibility, communication, and presentation </strong>skills. I also serve
            as an <strong>NSS Coordinator</strong> at the NSS Unit, BVRIT,
            where I organize and participate in activities, contributing to community
            development initiatives while strengthening my leadership, teamwork, and organizational abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;