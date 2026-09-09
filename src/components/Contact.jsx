import {
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { Mail } from "lucide-react";

const Contact = () => {

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "tadisettiakshaya@gmail.com",
      link: "mailto:tadisettiakshaya@gmail.com"
    },
    {
      icon: <FaEnvelope />,
      title: "Academic Email",
      value: "23211a05v2@bvrit.ac.in",
      link: "mailto:23211a05v2@bvrit.ac.in"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "tadisettiakshaya",
      link: "https://www.linkedin.com/in/tadisettiakshaya/"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "takshaya05",
      link: "https://github.com/takshaya05"
    }
  ];

  return (
    <section id="contact" className="contact section">

      <div className="contact-container">

        <div className="section-title">
          <h2>
            <Mail className="contact-title-icon" />
            Contact
          </h2>
          <span></span>
        </div>

        <div className="contact-grid">

          {contactDetails.map((item, index) => (
            <div className="contact-card" key={index}>

              <div className="contact-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.value}
                </a>
              </div>

            </div>
          ))}

        </div>

        <div className="contact-form">

          <h3>Quick Message</h3>

          <form action="https://formsubmit.co/tadisettiakshaya@gmail.com" method="POST">

            <input
              type="hidden"
              name="_subject"
              value="New Message from Portfolio"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <div className="form-row">

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;