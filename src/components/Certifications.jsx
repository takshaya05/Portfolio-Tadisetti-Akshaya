import { Award } from "lucide-react";

const Certifications = () => {

  const certifications = [
    {
      title: "Python Essentials, HTML Essentials, JavaScript Essentials",
      issuer: "CISCO"
    },
    {
      title: "Java Programming",
      issuer: "NPTEL"
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      issuer: "Google Skills & Infosys Springboard"
    },
    {
      title: "Database Programming with SQL",
      issuer: "TASK"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS"
    },
    {
      title: "Smart Coder (Bronze)",
      issuer: "Smart Interviews"
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

          {certifications.map((certificate, index) => (

            <div className="certificate-card" key={index}>

              <div className="certificate-icon">
                <Award size={28} strokeWidth={1.8} />
              </div>

              <h3>
                {certificate.title}
              </h3>

              <p>
                {certificate.issuer}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Certifications;