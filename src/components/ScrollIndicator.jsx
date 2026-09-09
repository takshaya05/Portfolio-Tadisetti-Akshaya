import { useEffect, useState } from "react";
import {
  House,
  User,
  GraduationCap,
  Wrench,
  FolderKanban,
  Award,
  Trophy,
  Mail
} from "lucide-react";

const sections = [
  {
    id: "home",
    label: "Home",
    color: "#F5EFE6",
    icon: House
  },
  {
    id: "about",
    label: "About",
    color: "#F5EFE6",
    icon: User
  },
  {
    id: "education",
    label: "Education",
    color: "#F5EFE6",
    icon: GraduationCap
  },
  {
    id: "skills",
    label: "Skills",
    color: "#F5EFE6",
    icon: Wrench
  },
  {
    id: "projects",
    label: "Projects",
    color: "#F5EFE6",
    icon: FolderKanban
  },
  {
    id: "certifications",
    label: "Certifications",
    color: "#F5EFE6",
    icon: Award
  },
  {
    id: "achievements",
    label: "Achievements",
    color: "#F5EFE6",
    icon: Trophy
  },
  {
    id: "contact",
    label: "Contact",
    color: "#F5EFE6",
    icon: Mail
  }
];

function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element && scrollPosition >= element.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeColor =
    sections.find(
      (section) => section.id === activeSection
    )?.color || "#F5EFE6";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div
      className="scroll-indicator"
      style={{
        "--active-color": activeColor
      }}
    >
      <div className="scroll-track">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              className={`scroll-dot ${
                activeSection === section.id ? "active" : ""
              }`}
              style={{
                "--dot-color": section.color
              }}
              onClick={() => scrollToSection(section.id)}
              aria-label={`Go to ${section.label}`}
            >
              <span className="scroll-label">
                <Icon size={14} strokeWidth={1.8} />
                <span>{section.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollIndicator;