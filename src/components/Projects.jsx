import {
  FaGithub,
  FaRobot,
  FaShieldAlt,
  FaHospital,
  FaIdCard,
  FaGlobe,
  FaGamepad,
  FaExternalLinkAlt
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "TravizorHub",
      icon: FaGlobe,
      tagline: "Your Gateway to Smooth Journeys",
      description: [
        "Developed an AI-powered travel intelligence platform to simplify foreign country laws, visa rules, travel regulations, and legal restrictions.",
        "Implemented AI chatbot assistance, country selection, risk maps, travel advisories, and country comparison features.",
        "Built using React.js, Vite, Tailwind CSS, Node.js, and Ollama API."
      ],
      technologies: ["React.js", "Node.js", "Ollama API"],
      link: "https://github.com/takshaya05/TravizorHub"
    },
    {
      title: "Smart Tourist",
      icon: FaShieldAlt,
      tagline: "Every Step Secured, Every Trip Smarter",
      description: [
        "Developed a smart tourist safety platform for real-time safety monitoring and emergency incident response.",
        "Implemented AI risk detection, geo-fencing alerts, blockchain-secured digital IDs, SOS assistance, and tourist safety dashboards.",
        "Built using React.js, Tailwind CSS, Node.js, Firebase, Google Maps API."
      ],
      technologies: ["React.js", "Firebase", "Google Maps API"],
      link: "https://github.com/takshaya05/SmartTourist"
    },
    {
      title: "MediPlan",
      icon: FaHospital,
      tagline: "Intelligent Hospital Floor Planning System",
      description: [
        "Developed an intelligent hospital floor planning platform to optimize healthcare infrastructure, workflows, and space utilization.",
        "Implemented AI hospital layout generation, floor plan visualization, planning analytics, intelligent recommendations, and layout export.",
        "Built using React.js, Vite, Node.js, CNN, Graphormer, GAN."
      ],
      technologies: ["React.js", "Graphormer", "GAN"],
      link: "https://github.com/takshaya05/MediPlan"
    },
    {
      title: "CardVista",
      icon: FaIdCard,
      tagline: "Scan. View. Connect.",
      description: [
        "Developed an AR-enabled digital visiting card platform for creating, scanning, viewing, and interacting with futuristic 3D business cards.",
        "Implemented WebAR simulations, holographic cards, avatars, QR scanning, voice introductions, interactive contact actions, and customizable AR scenes.",
        "Built using React.js, Vite, Tailwind CSS, Node.js, and Three.js."
      ],
      technologies: ["React.js", "Three.js", "Node.js"],
      link: "https://github.com/takshaya05/CardVista"
    },
    {
      title: "AI Country Dashboard",
      icon: FaRobot,
      tagline: "Explore. Learn. Discover the World with AI.",
      description: [
        "Developed an AI-powered educational dashboard for interactive country exploration, global learning, and knowledge discovery.",
        "Implemented a 3D globe simulator, AI Chat Tutor, country learning modules, quizzes, flag-matching games, and interactive country data.",
        "Built using React.js, Vite, Tailwind CSS, Node.js, Ollama API and Three.js."
      ],
      technologies: ["React.js", "Ollama API", "Three.js"],
      link: "https://github.com/takshaya05/AiCountryDashboard"
    },
    {
      title: "Akinator",
      icon: FaGamepad,
      tagline: "The Mind Reading Game",
      description: [
        "Developed an interactive mind-reading game that guesses real or fictional characters based on user responses.",
        "Implemented intelligent question-based gameplay, Yes/No answer selection, character narrowing, and an engaging interactive game flow.",
        "Built using React.js, Vite, JavaScript, MongoDB, Express.js and Node.js."
      ],
      technologies: ["React.js", "Node.js", "MongoDB"],
      link: "https://github.com/takshaya05/Akinator"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="projects-container">

        <div className="section-title">
          <h2>Projects</h2>
          <span></span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <div className="project-card" key={index}>

                <div className="project-header">
                  <div className="project-icon">
                    <ProjectIcon size={22} />
                  </div>

                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-tagline">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <ul className="project-description">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="github-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={16} />
                  <span>View GitHub</span>
                  <FaExternalLinkAlt size={12} />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;