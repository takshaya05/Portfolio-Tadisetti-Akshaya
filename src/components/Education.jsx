import {
  GraduationCap,
  Building2,
  CalendarDays,
  Award,
} from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="education-container">

        <div className="section-title">
          <h2>Education</h2>
          <span></span>
        </div>

        <div className="education-wrapper">

          <div className="education-card">
            <div className="education-icon">
              <Building2 size={28} strokeWidth={1.8} />
            </div>

            <div className="education-content">
              <h3>
                B V Raju Institute of Technology, Narsapur, Telangana
              </h3>

              <h4>
                <GraduationCap size={18} strokeWidth={1.8} />
                <span>
                  Bachelor of Technology (B.Tech) - Computer Science and
                  Engineering
                </span>
              </h4>
            </div>

            <div className="education-details">
              <span>
                <CalendarDays size={17} strokeWidth={1.8} />
                <span>2023 – 2027</span>
              </span>

              <span>
                <Award size={17} strokeWidth={1.8} />
                <span>CGPA: 9.15</span>
              </span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-icon">
              <Building2 size={28} strokeWidth={1.8} />
            </div>

            <div className="education-content">
              <h3>
                Sri Chaitanya Jr Kalasala, Kukatpally, Telangana
              </h3>

              <h4>
                <GraduationCap size={18} strokeWidth={1.8} />
                <span>
                  Telangana State Board of Intermediate Education (XI & XII)
                </span>
              </h4>
            </div>

            <div className="education-details">
              <span>
                <CalendarDays size={17} strokeWidth={1.8} />
                <span>2021 – 2023</span>
              </span>

              <span>
                <Award size={17} strokeWidth={1.8} />
                <span>Percentage: 96.4</span>
              </span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-icon">
              <Building2 size={28} strokeWidth={1.8} />
            </div>

            <div className="education-content">
              <h3>
                Genesis International School, Miyapur, Telangana
              </h3>

              <h4>
                <GraduationCap size={18} strokeWidth={1.8} />
                <span>Central Board of Secondary Education (X)</span>
              </h4>
            </div>

            <div className="education-details">
              <span>
                <CalendarDays size={17} strokeWidth={1.8} />
                <span>2020 – 2021</span>
              </span>

              <span>
                <Award size={17} strokeWidth={1.8} />
                <span>Percentage: 90.4</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;