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
        "Published a research paper titled “Innovative Hospital Floor Planning using Graphormers” in the 2025 International Conference on Computing Technologies (ICOCT), focusing on AI-driven hospital layout optimization. (DOI: 10.1109/ICOCT64433.2025.11118892)",
      icon: FaBookOpen
    },
    {
      title: "Hackathons, Contests & Technical Workshops",
      description:
        "Participated in hackathons, contests, and technical workshops to enhance practical exposure, teamwork, and collaborative problem-solving skills.",
      icon: FaUsers
    },
    {
      title: "NSS Coordinator & Volunteer",
      description:
        "Serving as an NSS Coordinator and Volunteer at the NSS Unit, BVRIT, organizing and participating in social service and awareness activities supporting community development initiatives.",
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