import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaBrain,
  FaLaptopCode,
  FaNetworkWired,
  FaCode,
  FaCodeBranch,
  FaLayerGroup,
  FaGlobe,
  FaTools,
  FaMicrochip
} from "react-icons/fa";
import { Wrench } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Languages",
      icon: FaLayerGroup,
      items: [
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava },
        { name: "C", icon: FaCode },
        { name: "JavaScript", icon: FaJsSquare }
      ]
    },
    {
      title: "Web Technologies",
      icon: FaGlobe,
      items: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "React.js", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs }
      ]
    },
    {
      title: "Database & Developer Tools",
      icon: FaTools,
      items: [
        { name: "MySQL", icon: FaDatabase },
        { name: "MongoDB", icon: FaDatabase },
        { name: "Firebase", icon: FaDatabase },
        { name: "GitHub", icon: FaGithub },
        { name: "VS Code", icon: FaCode }
      ]
    },
    {
      title: "Core CS Concepts",
      icon: FaMicrochip,
      items: [
        { name: "Data Structures & Algorithms", icon: FaCodeBranch },
        { name: "OOPs", icon: FaLaptopCode },
        { name: "DBMS", icon: FaDatabase },
        { name: "AI/ML Fundamentals", icon: FaBrain },
        { name: "Operating Systems", icon: FaLaptopCode },
        { name: "Computer Networks", icon: FaNetworkWired }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="skills-container">
        <div className="section-title">
          <h2>
            <Wrench className="skills-title-icon" />
            Skills
          </h2>
          <span></span>
        </div>

        <div className="skills-grid">
          {skills.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <div className="skill-card" key={index}>
                <h3>
                  <CategoryIcon size={20} />
                  <span>{category.title}</span>
                </h3>

                <div className="skill-items">
                  {category.items.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <div className="skill-item" key={skillIndex}>
                        <div className="skill-icon">
                          <Icon size={24} />
                        </div>

                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;