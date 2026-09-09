import { User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <User size={18} strokeWidth={1.8} />
          </div>

          <div className="footer-info">
            <h3>Tadisetti Akshaya</h3>
            <p>Computer Science and Engineering Undergraduate</p>
          </div>
        </div>

        <div className="footer-right">
          <span>
            © {new Date().getFullYear()} Portfolio. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;