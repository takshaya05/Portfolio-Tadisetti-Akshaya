import {
  FaGithub,
  FaShieldAlt,
  FaHospital,
  FaIdCard,
  FaGlobe,
  FaGamepad,
  FaExternalLinkAlt,
  FaCar
} from "react-icons/fa";
import { FolderKanban } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TravizorHub",
      icon: FaGlobe,
      tagline: "Your Gateway to Smooth Journeys",
      description: [
        "Developed an AI-powered travel intelligence platform that simplifies foreign laws, visa rules, travel regulations, and legal restrictions for travellers.",
        "Implemented traveller profiles, country selection, risk maps, travel advisories, country comparison, and an AI chatbot for instant travel and legal assistance.",
        "Built using React.js, Vite, JavaScript, Tailwind CSS, Node.js, and Ollama API."
      ],
      github: "https://github.com/takshaya05/TravizorHub",
      website: "https://travizor-hub.vercel.app/"
    },
    {
      title: "VisionPlate",
      icon: FaCar,
      tagline: "Smart Plate Recognition",
      description: [
        "Developed an AI-powered Automatic Number Plate Recognition application that detects vehicle number plates from images using YOLO.",
        "Implemented character recognition with EasyOCR, confidence score display, multiple plate detection, and an interactive dashboard for recognition results.",
        "Built using Python, Streamlit, YOLO, EasyOCR, and OpenCV."
      ],
      github: "https://github.com/takshaya05/VisionPlate",
      website: "https://visionplate.streamlit.app/"
    },
    {
      title: "Smart Tourist",
      icon: FaShieldAlt,
      tagline: "Every Step Secured, Every Trip Smarter",
      description: [
        "Developed an integrated tourist safety platform to address risks such as theft, scams, accidents, and emergencies during travel.",
        "Implemented AI risk detection, geo-fencing alerts, blockchain-based digital ID, SOS emergency response, and a tourist safety dashboard.",
        "Built using React.js, Tailwind CSS, Node.js, Firebase, Google Maps API, and OpenWeatherMap API."
      ],
      github: "https://github.com/takshaya05/SmartTourist",
      website: "https://smart-tourist-virid.vercel.app/"
    },
    {
      title: "MediPlan",
      icon: FaHospital,
      tagline: "Intelligent Hospital Floor Planning System",
      description: [
        "Developed an AI-powered hospital floor planning platform for smart space planning.",
        "Implemented hospital layout generation, floor plan visualization, planning analytics, AI recommendations, and layout export.",
        "Built using React.js, Vite, JavaScript, Tailwind CSS, Node.js, Recharts, and Framer Motion."
      ],
      github: "https://github.com/takshaya05/MediPlan",
      website: "https://medi-plan-rho.vercel.app/"
    },
    {
      title: "CardVista",
      icon: FaIdCard,
      tagline: "Scan. View. Connect.",
      description: [
        "Developed an AR-enabled digital visiting card platform for creating, uploading, viewing, managing, scanning, and sharing digital business cards.",
        "Implemented WebAR and 3D visualization, QR code scanning, holographic cards, avatars, interactive contact actions, and customizable AR scenes.",
        "Built using React.js, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, and Three.js."
      ],
      github: "https://github.com/takshaya05/CardVista",
      website: "https://card-vista.vercel.app/"
    },
    {
      title: "Akinator",
      icon: FaGamepad,
      tagline: "The Mind Reading Game",
      description: [
        "Developed an AI-powered guessing game that identifies real or fictional characters based on the player's answers to a series of questions.",
        "Implemented a smart question system, intelligent character narrowing, candidate tracking, character database, and interactive result celebration.",
        "Built using React.js, Vite, Node.js, Express.js, and MongoDB."
      ],
      github: "https://github.com/takshaya05/Akinator",
      website: "https://akinator-frontend.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="projects-container">

        <div className="section-title">
          <h2>
            <FolderKanban className="projects-title-icon" />
            Projects
          </h2>
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

                <div className="project-actions">
                  <a
                    href={project.github}
                    className="github-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={16} />
                    <span>GitHub</span>
                    <FaExternalLinkAlt size={12} />
                  </a>

                  <a
                    href={project.website}
                    className="website-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe size={16} />
                    <span>Website</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;