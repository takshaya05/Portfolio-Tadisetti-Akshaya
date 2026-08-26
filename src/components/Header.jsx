import { useEffect, useState } from "react";
import { Menu, X, UserRound } from "lucide-react";

const sections = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "certifications",
  "achievements",
  "contact",
];

const Header = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActive(section);
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
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={
                active === item
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
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