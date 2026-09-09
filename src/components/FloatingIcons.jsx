import {
  Monitor,
  Laptop,
  Settings,
  Puzzle,
  Database,
  Link,
  Brain,
  Globe,
  Cloud,
  Lock,
  House,
  User,
  GraduationCap,
  Wrench,
  FolderKanban,
  Award,
  Trophy,
  Mail
} from "lucide-react";

const icons = [
  { Icon: Monitor, className: "float-icon-1" },
  { Icon: Laptop, className: "float-icon-2" },
  { Icon: Settings, className: "float-icon-3" },
  { Icon: Puzzle, className: "float-icon-4" },
  { Icon: Database, className: "float-icon-5" },
  { Icon: Link, className: "float-icon-6" },
  { Icon: Brain, className: "float-icon-7" },
  { Icon: Globe, className: "float-icon-8" },
  { Icon: Cloud, className: "float-icon-9" },
  { Icon: Lock, className: "float-icon-10" },
  { Icon: House, className: "float-icon-11" },
  { Icon: User, className: "float-icon-12" },
  { Icon: GraduationCap, className: "float-icon-13" },
  { Icon: Wrench, className: "float-icon-14" },
  { Icon: FolderKanban, className: "float-icon-15" },
  { Icon: Award, className: "float-icon-16" },
  { Icon: Trophy, className: "float-icon-17" },
  { Icon: Mail, className: "float-icon-18" }
];

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      {icons.map(({ Icon, className }, index) => (
        <Icon
          key={index}
          className={`floating-icon ${className}`}
          strokeWidth={1.6}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;