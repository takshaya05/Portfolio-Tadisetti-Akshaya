import {
  FaCertificate,
  FaPython,
  FaHtml5,
  FaBrain,
  FaJava,
  FaDatabase,
  FaCode
} from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Essentials",
      issuer: "CISCO",
      icon: FaPython
    },
    {
      title: "HTML Essentials, JavaScript Essentials",
      issuer: "CISCO",
      icon: FaHtml5
    },
    {
      title: "AI/ML",
      issuer: "Google Skills & Infosys Springboard",
      icon: FaBrain
    },
    {
      title: "Java Programming",
      issuer: "NPTEL",
      icon: FaJava
    },
    {
      title: "Database Programming with SQL",
      issuer: "TASK",
      icon: FaDatabase
    },
    {
      title: "Smart Coder (Bronze)",
      issuer: "Smart Interviews",
      icon: FaCode
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="certifications-container">

        <div className="section-title">
          <h2>Certifications</h2>
          <span></span>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => {
            const CertificateIcon = certificate.icon;

            return (
              <div className="certificate-card" key={index}>

                <div className="certificate-icon">
                  <CertificateIcon size={22} />
                </div>

                <div className="certificate-content">
                  <h3>{certificate.title}</h3>

                  <p>
                    <FaCertificate size={13} />
                    <span>{certificate.issuer}</span>
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;