import { useEffect, useState } from "react";
import {
  Menu,
  X,
  UserRound,
  House,
  User,
  GraduationCap,
  Wrench,
  FolderKanban,
  Award,
  Trophy,
  Mail,
} from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: House },
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "contact", label: "Contact", icon: Mail },
];

const Header = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          <UserRound size={20} strokeWidth={1.8} />
          <span>Tadisetti Akshaya</span>
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {sections.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={
                  active === item.id
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <Icon size={17} strokeWidth={1.8} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;