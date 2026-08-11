import { Code2 } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      items: "Python, Java, C, JavaScript"
    },
    {
      title: "Web Technologies",
      items: "HTML, CSS, React.js, Node.js"
    },
    {
      title: "Artificial Intelligence / Machine Learning",
      items: "AI/ML Fundamentals"
    },
    {
      title: "Database Technologies",
      items: "MySQL, Firebase, MongoDB"
    },
    {
      title: "Developer Tools",
      items: "GitHub, VS Code, Google Colab"
    },
    {
      title: "Core CS Concepts",
      items: "Data Structures & Algorithms, OOPs, DBMS, Operating Systems, Computer Networks"
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="skills-container">

        <div className="section-title">
          <h2>Skills</h2>
          <span></span>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                <Code2 size={28} strokeWidth={1.8} />
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.items}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;