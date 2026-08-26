import { useEffect, useState } from "react";

const sections = [
  {
    id: "home",
    label: "Home",
    color: "#F5EFE6",
  },
  {
    id: "about",
    label: "About",
    color: "#F5EFE6",
  },
  {
    id: "education",
    label: "Education",
    color: "#F5EFE6",
  },
  {
    id: "skills",
    label: "Skills",
    color: "#f5efe6",
  },
  {
    id: "projects",
    label: "Projects",
    color: "#F5EFE6",
  },
  {
    id: "certifications",
    label: "Certifications",
    color: "#F5EFE6",
  },
  {
    id: "achievements",
    label: "Achievements",
    color: "#F5EFE6",
  },
  {
    id: "contact",
    label: "Contact",
    color: "#F5EFE6",
  },
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
        block: "start",
      });
    }
  };

  return (
    <div
      className="scroll-indicator"
      style={{
        "--active-color": activeColor,
      }}
    >
      <div className="scroll-track">

        {sections.map((section) => (
          <button
            key={section.id}
            className={`scroll-dot ${
              activeSection === section.id ? "active" : ""
            }`}
            style={{
              "--dot-color": section.color,
            }}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Go to ${section.label}`}
          >
            <span className="scroll-label">
              {section.label}
            </span>
          </button>
        ))}

      </div>
    </div>
  );
}

export default ScrollIndicator;