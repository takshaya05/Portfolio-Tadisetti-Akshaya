import {
  FaBookOpen,
  FaUsers,
  FaHandsHelping
} from "react-icons/fa";
import { Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Research Paper Publication",
      description:
        "Published a research paper titled “Innovative Hospital Floor Planning Using Graphormers” at the 2025 International Conference on Computing Technologies, focusing on AI-driven hospital layout optimization. (DOI: 10.1109/ICOCT64433.2025.11118892)",
      icon: FaBookOpen
    },
    {
      title: "Hackathons & Technical Events",
      description:
        "Participated in Hackfiniti and Vyoma Hackathon, enhancing teamwork, practical problem-solving, and collaboration skills.",
      icon: FaUsers
    },
    {
      title: "NSS Coordinator",
      description:
        "Served as an NSS Coordinator at BVRIT, organizing and participating in social service and awareness activities.",
      icon: FaHandsHelping
    }
  ];

  return (
    <section id="achievements" className="achievements section">
      <div className="achievements-container">

        <div className="section-title">
          <h2>
            <Trophy className="achievements-title-icon" />
            Achievements & Extracurricular Activities
          </h2>
          <span></span>
        </div>

        <div className="achievements-list">
          {achievements.map((achievement, index) => {
            const AchievementIcon = achievement.icon;

            return (
              <div className="achievement-card" key={index}>

                <div className="achievement-icon">
                  <AchievementIcon size={22} />
                </div>

                <div className="achievement-content">
                  <h3>{achievement.title}</h3>

                  <p>{achievement.description}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;