import { Trophy } from "lucide-react";

const Achievements = () => {

  const achievements = [
    {
      title: "Research Paper Publication",
      description:
        "Published a research paper titled “Innovative Hospital Floor Planning using Graphormers” in the 2025 International Conference on Computing Technologies (ICOCT), focusing on AI-driven hospital layout optimization.",
      detail:
        "DOI: 10.1109/ICOCT64433.2025.11118892"
    },

    {
      title: "Technical Certifications",
      description:
        "Earned certifications through NPTEL, Infosys Springboard, Cisco, Google Skills, and TASK to strengthen technical and industry-relevant skills.",
      detail:
        "Focused on programming, AI/ML, cloud computing, and database technologies."
    },

    {
      title: "Hackathons & Technical Activities",
      description:
        "Participated in hackathons, volunteering activities, and technical workshops to enhance practical exposure, teamwork, and collaborative problem-solving skills.",
      detail:
        "Developed real-world solutions through innovation and teamwork."
    },

    {
      title: "NSS Volunteer",
      description:
        "Organized and participated in social service and awareness activities supporting community development initiatives.",
      detail:
        "Contributed to community engagement, teamwork, and social responsibility activities."
    }
  ];

  return (
    <section id="achievements" className="achievements section">

      <div className="achievements-container">

        <div className="section-title">
          <h2>Achievements</h2>
          <span></span>
        </div>

        <div className="achievements-list">

          {achievements.map((achievement, index) => (

            <div className="achievement-card" key={index}>

              <div className="achievement-icon">
                <Trophy size={28} strokeWidth={1.8} />
              </div>

              <div className="achievement-content">

                <h3>
                  {achievement.title}
                </h3>

                <p>
                  {achievement.description}
                </p>

                <span>
                  {achievement.detail}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Achievements;