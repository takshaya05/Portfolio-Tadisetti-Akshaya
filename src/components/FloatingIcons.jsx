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
  Lock
} from "lucide-react";

const icons = [
  { Icon: Monitor, color: "#f5efe6", className: "float-icon-1" },
  { Icon: Laptop, color: "#f5efe6", className: "float-icon-2" },
  { Icon: Settings, color: "#f5efe6", className: "float-icon-3" },
  { Icon: Puzzle, color: "#f5efe6", className: "float-icon-4" },
  { Icon: Database, color: "#f5efe6", className: "float-icon-5" },
  { Icon: Link, color: "#f5efe6", className: "float-icon-6" },
  { Icon: Brain, color: "#f5efe6", className: "float-icon-7" },
  { Icon: Globe, color: "#f5efe6", className: "float-icon-8" },
  { Icon: Cloud, color: "#f5efe6", className: "float-icon-9" },
  { Icon: Lock, color: "#f5efe6", className: "float-icon-10" }
];

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      {icons.map(({ Icon, color, className }, index) => (
        <Icon
          key={index}
          className={`floating-icon ${className}`}
          style={{ "--icon-color": color }}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;